import { Suspense } from "react";
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

async function ProjectReportDetailContent({ slug }: { slug: string }) {
  const detailData = await fetchProjectReportDetail(slug);
  let decryptedData: any = null;
  let reportGroups: ProjectReportGroup[] = [];

  if (detailData.success && detailData.data && typeof (detailData.data as any).body === "string") {
    try {
      decryptedData = await decrypt128((detailData.data as any).body);
      reportGroups = decryptedData?.data?.project_reports || [];
    } catch (error) {
      console.error("Decryption failed:", error);
    }
  }

  return <ClientView slug={slug} reportGroups={reportGroups} />;
}

function DetailLoadingSkeleton() {
  return (
    <div className="container mt-4">
      <div className="skeleton-line title" style={{ width: '60%', height: '40px', marginBottom: '20px' }}></div>
      <div className="skeleton-line desc" style={{ width: '100%', height: '20px', marginBottom: '10px' }}></div>
      <div className="skeleton-line desc" style={{ width: '90%', height: '20px', marginBottom: '30px' }}></div>
      <div className="skeleton-media" style={{ height: '400px' }}></div>
    </div>
  );
}

export default async function ProjectReportDetailPage(props: ProjectReportDetailPageProps) {
  const params = await props.params;
  const { slug } = params;

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
            <span className="current">Detail</span>
          </nav>
        </div>
      </div>

      <Suspense fallback={<DetailLoadingSkeleton />}>
        <ProjectReportDetailContent slug={slug} />
      </Suspense>
    </main>
  );
}
