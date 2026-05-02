import { httpClient, ENDPOINTS, type RequestOptions } from "@/lib/api";

export async function fetchSuccessStories(options?: RequestOptions) {
  return httpClient.get(ENDPOINTS.successStories, options);
}
