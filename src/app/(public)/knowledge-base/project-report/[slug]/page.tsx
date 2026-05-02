import { fetchProjectReportDetail } from "@/services/project-report.service";
import { decrypt128 } from "@/lib/api";

interface ProjectReportDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectReportDetailPage(props: ProjectReportDetailPageProps) {
  const params = await props.params;
  const { slug } = params;

  const detailData = await fetchProjectReportDetail(slug);
  let decryptedData: any = null;

  if (detailData.success && detailData.data && typeof (detailData.data as any).body === "string") {
    try {
      decryptedData = await decrypt128((detailData.data as any).body);
      console.log(`\n=== Decrypted Project Report Detail Data for [${slug}] ===\n`, decryptedData, `\n========================================================\n`);
    } catch (error) {
      console.error("Decryption failed:", error);
    }
  } else {
    console.log(`Failed to fetch or decrypt project report detail for [${slug}]. Response:`, detailData);
  }

  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Project Report Detail</h1>
          <p className="page-hero-subtitle">
            Currently viewing project report details for: {slug}
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: "60px 0", minHeight: "400px" }}>
        <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#666" }}>
          UI Implementation is pending. Please check the terminal console for the decrypted API data.
        </p>
      </div>
    </main>
  );
}
