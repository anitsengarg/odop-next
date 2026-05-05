import { ENDPOINTS, httpClient, RequestOptions, PaginatedResponse } from "@/lib/api";
import { Scheme } from "@/lib/schemes";

export async function fetchSchemesList(options?: RequestOptions) {
  return httpClient.get<Scheme[]>(ENDPOINTS.schemes.list, options);
}

export async function fetchSchemeDetail(slug: string, options?: RequestOptions) {
  return httpClient.get<Scheme>(ENDPOINTS.schemes.detail(slug), options);
}

export async function fetchCfcList(page: number = 1, limit: number = 10, options?: RequestOptions) {
  return httpClient.get<PaginatedResponse<any>>(`${ENDPOINTS.cfc.list}?page=${page}&limit=${limit}`, options);
}

export async function fetchNablLabsList(page: number = 1, limit: number = 10, options?: RequestOptions) {
  return httpClient.get<PaginatedResponse<any>>(`${ENDPOINTS.nablLabs.list}?page=${page}&limit=${limit}`, options);
}


