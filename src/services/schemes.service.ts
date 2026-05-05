import { ENDPOINTS, httpClient, RequestOptions } from "@/lib/api";

export async function fetchSchemesList(options?: RequestOptions) {
  return httpClient.get(ENDPOINTS.schemes.list, options);
}

export async function fetchSchemeDetail(slug: string, options?: RequestOptions) {
  return httpClient.get(ENDPOINTS.schemes.detail(slug), options);
}


