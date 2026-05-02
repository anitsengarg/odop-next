import { httpClient, ENDPOINTS, type RequestOptions } from "@/lib/api";

export async function fetchUserProfile(options?: RequestOptions) {
  return httpClient.get(ENDPOINTS.profile, options);
}

export async function updateUserProfile(
  data: Record<string, unknown>,
  options?: RequestOptions
) {
  return httpClient.post(ENDPOINTS.profileUpdate, data, options);
}

export async function uploadProfileImage(
  formData: FormData,
  options?: RequestOptions
) {
  return httpClient.post(ENDPOINTS.uploadProfileImage, formData, options);
}

export async function forgotPassword(
  data: Record<string, unknown>,
  options?: RequestOptions
) {
  return httpClient.post(ENDPOINTS.forgotPassword, data, options);
}
