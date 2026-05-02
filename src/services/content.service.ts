import { httpClient, ENDPOINTS, type RequestOptions } from "@/lib/api";

export async function fetchAboutUs(options?: RequestOptions) {
  return httpClient.get(ENDPOINTS.aboutUs, options);
}

export async function fetchGovernmentSchemes(options?: RequestOptions) {
  return httpClient.get(ENDPOINTS.governmentSchemes, options);
}

export async function fetchLoanLinkCategories(options?: RequestOptions) {
  return httpClient.get(ENDPOINTS.loanLinkCategory, options);
}
