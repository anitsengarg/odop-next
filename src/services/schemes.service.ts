import { ENDPOINTS, httpClient, RequestOptions } from "@/lib/api";
import { Scheme } from "@/lib/schemes";

export async function fetchSchemesList(options?: RequestOptions) {
  return httpClient.get<Scheme[]>(ENDPOINTS.schemes.list, options);
}

export async function fetchSchemeDetail(slug: string, options?: RequestOptions) {
  return httpClient.get<Scheme>(ENDPOINTS.schemes.detail(slug), options);
}

export async function fetchCfcList(options?: RequestOptions) {
  return httpClient.get(ENDPOINTS.cfc.list, options);
}

export async function fetchNablLabsList(options?: RequestOptions) {
  return httpClient.get(ENDPOINTS.nablLabs.list, options);
}


