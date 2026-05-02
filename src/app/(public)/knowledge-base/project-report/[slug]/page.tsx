import { fetchProjectReportDetail } from "@/services/project-report.service";
import { decrypt128 } from "@/lib/api";
import Link from "next/link";
import ClientView from "./ClientView";
import type { ProjectReportGroup } from "./ClientView";

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
  let reportGroups: ProjectReportGroup[] = [];

  if (detailData.success && detailData.data && typeof (detailData.data as any).body === "string") {
    try {
      decryptedData = await decrypt128((detailData.data as any).body);
      reportGroups = decryptedData?.data?.project_reports || [];
      console.log(`\n=== Decrypted Project Report Detail Data for [${slug}] ===\n`, decryptedData, `\n========================================================\n`);
    } catch (error) {
      console.error("Decryption failed:", error);
    }
  } else {
    console.log(`Failed to fetch or decrypt project report detail for [${slug}]. Response:`, detailData);
  }

  const breadcrumbName = reportGroups.length > 0 ? reportGroups[0].name : "Detail";

  return (
    <main className="main-content">
      <div className="breadcrumb-bar kb-pr-detail-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb kb-pr-detail-breadcrumb" aria-label="Breadcrumb">
            <Link href="/"><i className="fas fa-home"></i> Home</Link>
            <span className="separator"><i className="fas fa-chevron-right"></i></span>
            <Link href="/knowledge-base/project-report">Knowledge Base</Link>
            <span className="separator"><i className="fas fa-chevron-right"></i></span>
            <Link href="/knowledge-base/project-report">Project Report</Link>
            <span className="separator"><i className="fas fa-chevron-right"></i></span>
            <span className="current">{breadcrumbName}</span>
          </nav>
        </div>
      </div>

      <ClientView slug={slug} reportGroups={reportGroups} />
    </main>
  );
}
