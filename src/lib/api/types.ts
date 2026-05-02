export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  success: boolean;
  message?: string;
}

export interface ApiErrorResponse {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T = unknown> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface RequestOptions {
  headers?: Record<string, string>;
  timeout?: number;
  signal?: AbortSignal;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
}

export interface NextFetchRequestConfig {
  revalidate?: number | false;
  tags?: string[];
}

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export class ApiError extends Error {
  public readonly status: number;
  public readonly errors?: Record<string, string[]>;
  public readonly isNetworkError: boolean;
  public readonly isTimeoutError: boolean;

  constructor(
    message: string,
    status: number,
    options?: {
      errors?: Record<string, string[]>;
      isNetworkError?: boolean;
      isTimeoutError?: boolean;
    }
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = options?.errors;
    this.isNetworkError = options?.isNetworkError ?? false;
    this.isTimeoutError = options?.isTimeoutError ?? false;
  }
}
