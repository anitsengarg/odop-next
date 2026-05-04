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
          <p className="page-hero-subtitle max-w-2xl mx-auto">{mou.title}</p>
        </div>
      </section>

      <div className="container py-12">
        <div className="section-header">
          <span className="eyebrow">Partnership Outcome</span>
          <h2 className="mt-4">{mou.partner}</h2>
          <div className="divider mt-6"><span /><span /><span /></div>
        </div>

        <section className="static-content-wrap mt-8 grid gap-8">
          <article className="static-card p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <i className="fas fa-file-contract text-[#E8562E]" />
              MOU Detail
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Signed On</span>
                <p className="text-gray-900 font-semibold">{mou.signedOn}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Status</span>
                <p className="text-green-600 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Active Agreement
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="block text-sm font-bold text-gray-700 mb-1">Objective</span>
                <p className="text-gray-600 leading-relaxed">{mou.objective}</p>
              </div>
              <div className="pt-4 border-top border-gray-100">
                <p className="text-gray-600 leading-relaxed italic">{mou.detail}</p>
              </div>
            </div>
          </article>

          <article className="static-card p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <i className="fas fa-chart-line text-[#E8562E]" />
              Implementation Report ({mou.report.period})
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Total Units Sold</span>
                <p className="text-2xl font-bold text-[#1B3C72]">{mou.report.unitsSold.toLocaleString("en-IN")}</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Revenue Generated</span>
                <p className="text-2xl font-bold text-[#1B3C72]">{formatInr(mou.report.revenueInr)}</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Sales Channels</span>
                <p className="text-lg font-bold text-[#1B3C72] leading-tight mt-1">{mou.report.channels.length} Channels</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="block text-sm font-bold text-gray-700 mb-2">Channels</span>
                <div className="flex flex-wrap gap-2">
                  {mou.report.channels.map(channel => (
                    <span key={channel} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100">
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-sm font-bold text-gray-700 mb-3">Report Highlights</span>
                <ul className="grid gap-3">
                  {mou.report.keyHighlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <i className="fas fa-check-circle text-green-500 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="flex justify-center mt-4">
            <Link href="/partnerships/mous-list" className="btn btn-outline-primary rounded-full px-8 py-3 group">
              <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to MOUs List
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
