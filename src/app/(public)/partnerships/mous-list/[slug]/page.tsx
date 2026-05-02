import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMouBySlug, mouRecords } from "@/lib/mou-data";

type MouDetailPageProps = {
  params: Promise<{ slug: string }>;
};

function formatInr(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export async function generateMetadata({ params }: MouDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const mou = getMouBySlug(slug);

  if (!mou) {
    return {
      title: "MOU Detail | Partnerships | ODOP UP",
      description: "MOU details and implementation report under ODOP partnerships.",
    };
  }

  return {
    title: `${mou.title} | MOU Detail | ODOP UP`,
    description: `Detail and report for ${mou.title} under ODOP partnerships.`,
  };
}

export async function generateStaticParams() {
  return mouRecords.map((mou) => ({ slug: mou.slug }));
}

export default async function MouDetailPage({ params }: MouDetailPageProps) {
  const { slug } = await params;
  const mou = getMouBySlug(slug);

  if (!mou) {
    notFound();
  }

  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">MOU Detail and Report</h1>
          <p className="page-hero-subtitle">{mou.title}</p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Partnership Outcome</span>
          <h2>{mou.partner}</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>

        <section className="static-content-wrap">
          <article className="static-card">
            <h3>MOU Detail</h3>
            <p><strong>Signed On:</strong> {mou.signedOn}</p>
            <p><strong>Objective:</strong> {mou.objective}</p>
            <p>{mou.detail}</p>
          </article>

          <article className="static-card mt-6">
            <h3>Implementation Report ({mou.report.period})</h3>
            <p><strong>Sales Channels:</strong> {mou.report.channels.join(", ")}</p>
            <p><strong>Total Products Sold:</strong> {mou.report.unitsSold.toLocaleString("en-IN")}</p>
            <p><strong>Total Revenue Generated:</strong> {formatInr(mou.report.revenueInr)}</p>

            <h4 className="mt-5">Report Highlights</h4>
            <ul className="list-disc pl-5 mt-2">
              {mou.report.keyHighlights.map((point) => (
                <li key={point} className="mb-2">{point}</li>
              ))}
            </ul>
          </article>

          <div className="mt-6">
            <Link href="/partnerships/mous-list" className="cfc-link-btn">
              Back to MOUs List
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
