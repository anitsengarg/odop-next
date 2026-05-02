import { API_CONFIG, HTTP_STATUS } from "./config";
import { ApiError, ApiResponse, RequestOptions, HttpMethod } from "./types";

function getStatusMessage(status: number): string {
  const messages: Record<number, string> = {
    [HTTP_STATUS.BAD_REQUEST]: "Bad request. Please check your input.",
    [HTTP_STATUS.UNAUTHORIZED]: "Authentication required. Please log in.",
    [HTTP_STATUS.FORBIDDEN]: "You do not have permission to access this resource.",
    [HTTP_STATUS.NOT_FOUND]: "The requested resource was not found.",
    [HTTP_STATUS.UNPROCESSABLE_ENTITY]: "Validation failed. Please check the submitted data.",
    [HTTP_STATUS.INTERNAL_SERVER_ERROR]: "An internal server error occurred. Please try again later.",
    [HTTP_STATUS.BAD_GATEWAY]: "Bad gateway. The server received an invalid response.",
    [HTTP_STATUS.SERVICE_UNAVAILABLE]: "Service is temporarily unavailable. Please try again later.",
    [HTTP_STATUS.GATEWAY_TIMEOUT]: "Gateway timeout. The server took too long to respond.",
  };
  return messages[status] || `Request failed with status ${status}`;
}

async function parseResponseBody(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
}

async function handleErrorResponse(response: Response): Promise<never> {
  let errorData: Record<string, unknown> = {};
  try {
    const body = await parseResponseBody(response);
    if (typeof body === "object" && body !== null) {
      errorData = body as Record<string, unknown>;
    }
  } catch {
    // Response body could not be parsed
  }

  const message =
    (errorData.message as string) || getStatusMessage(response.status);
  const errors = errorData.errors as Record<string, string[]> | undefined;

  throw new ApiError(message, response.status, { errors });
}

function createAbortController(timeout: number): {
  controller: AbortController;
  timeoutId: ReturnType<typeof setTimeout>;
} {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  return { controller, timeoutId };
}

async function request<T>(
  method: HttpMethod,
  url: string,
  body?: unknown,
  options?: RequestOptions
): Promise<ApiResponse<T>> {
  const timeout = options?.timeout ?? API_CONFIG.TIMEOUT;
  const { controller, timeoutId } = createAbortController(timeout);

  const headers: Record<string, string> = {
    Accept: "application/json",
    ...options?.headers,
  };

  if (body && !(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const fetchOptions: RequestInit & { next?: { revalidate?: number | false; tags?: string[] } } = {
    method,
    headers,
    signal: options?.signal ?? controller.signal,
  };

  if (body) {
    fetchOptions.body =
      body instanceof FormData ? body : JSON.stringify(body);
  }

  if (options?.cache) {
    fetchOptions.cache = options.cache;
  }

  if (options?.next) {
    fetchOptions.next = options.next;
  }

  try {
    const response = await fetch(url, fetchOptions);
    clearTimeout(timeoutId);

    if (!response.ok) {
      await handleErrorResponse(response);
    }

    const data = (await parseResponseBody(response)) as T;

    return {
      data,
      status: response.status,
      success: true,
    };
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof ApiError) {
      throw error;
    }

    if (error instanceof DOMException && error.name === "AbortError") {
      throw new ApiError(
        "Request timed out. Please check your connection and try again.",
        0,
        { isTimeoutError: true }
      );
    }

    if (error instanceof TypeError) {
      throw new ApiError(
        "Network error. Please check your internet connection.",
        0,
        { isNetworkError: true }
      );
    }

    throw new ApiError(
      error instanceof Error ? error.message : "An unexpected error occurred.",
      0
    );
  }
}

async function requestWithRetry<T>(
  method: HttpMethod,
  url: string,
  body?: unknown,
  options?: RequestOptions,
  retries: number = API_CONFIG.RETRY_ATTEMPTS
): Promise<ApiResponse<T>> {
  try {
    return await request<T>(method, url, body, options);
  } catch (error) {
    if (error instanceof ApiError) {
      const isRetryable =
        error.isNetworkError ||
        error.isTimeoutError ||
        error.status >= HTTP_STATUS.INTERNAL_SERVER_ERROR;

      if (isRetryable && retries > 0) {
        await new Promise((resolve) =>
          setTimeout(resolve, API_CONFIG.RETRY_DELAY)
        );
        return requestWithRetry<T>(method, url, body, options, retries - 1);
      }
    }
    throw error;
  }
}

export const httpClient = {
  get<T>(url: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return requestWithRetry<T>("GET", url, undefined, options);
  },

  post<T>(
    url: string,
    body?: unknown,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    return requestWithRetry<T>("POST", url, body, options);
  },

  put<T>(
    url: string,
    body?: unknown,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    return requestWithRetry<T>("PUT", url, body, options);
  },

  patch<T>(
    url: string,
    body?: unknown,
    options?: RequestOptions
  ): Promise<ApiResponse<T>> {
    return requestWithRetry<T>("PATCH", url, body, options);
  },

  delete<T>(url: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return requestWithRetry<T>("DELETE", url, undefined, options);
  },
};
