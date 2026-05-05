import { httpClient, ENDPOINTS, type RequestOptions } from "@/lib/api";

export async function login(data: Record<string, unknown>, options?: RequestOptions) {
  return httpClient.post(ENDPOINTS.auth.login, data, options);
}

export async function register(data: Record<string, unknown>, options?: RequestOptions) {
  return httpClient.post(ENDPOINTS.auth.register, data, options);
}

export async function logout() {
  // Typically local logout: clear storage, etc.
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
  }
}
