import type { Metadata } from "next";
import { fetchDocumentaries } from "@/services";
import { DocumentaryList } from "./DocumentaryList";
import { decrypt128 } from "@/lib/api";

export const metadata: Metadata = {
  title: "Documentary | Knowledge Base | ODOP UP Portal",
  description:
    "ODOP UP documentary films and video documentation of the One District One Product programme.",
};

async function getDocumentaries(): Promise<any> {
  try {
    const response = await fetchDocumentaries({
      next: { revalidate: 3600 },
    });
    console.log("documentariesFromApi", response);
    let decryptedData: any = await decrypt128((response.data as any).body);
    console.log("decryptedData", decryptedData);

    return decryptedData?.data?.product || [];

  } catch (error) {
    console.error("Error fetching documentaries:", error);
    return [];
  }
}

export default async function DocumentaryPage() {
  const documentariesFromApi = await getDocumentaries();

  // Use API data if available, otherwise fallback to static design data
  const documentaries = documentariesFromApi


  return (
    <main className="main-content schemes-page kb-ss-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Documentary</h1>
          <p className="page-hero-subtitle">
            Curated documentary features on districts, products and people
            shaping the ODOP ecosystem in Uttar Pradesh.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Knowledge Base</span>
          <h2 className="section-title">Documentary</h2>
          <div className="divider">
            <span />
            <span />
            <span />
          </div>
        </div>

        <DocumentaryList documentaries={documentaries} />
      </div>
    </main>
  );
}
