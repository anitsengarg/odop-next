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
      <section className="page-hero schemes-hero !bg-gradient-to-br !from-[#0A2540] !via-[#1B3C72] !to-[#8B2F0E]">
        <div className="page-hero-overlay !bg-black/20" />
        <div className="container page-hero-content !relative !z-10">
          <h1 className="page-hero-title !text-white">MOU Detail and Report</h1>
          <p className="page-hero-subtitle !max-w-2xl !mx-auto !text-white/90">{mou.title}</p>
        </div>
      </section>

      <div className="container !py-16">
        <div className="section-header !mb-12">
          <span className="eyebrow !text-[#E8562E] !font-bold !uppercase !tracking-widest">Partnership Outcome</span>
          <h2 className="!mt-4 !text-3xl !md:text-4xl !font-bold !text-gray-900">{mou.partner}</h2>
          <div className="divider !mt-6"><span /><span /><span /></div>
        </div>

        <section className="static-content-wrap !mt-12 !grid !gap-10">
          <article className="static-card !p-8 !md:p-10 !bg-white !rounded-3xl !border !border-gray-100 !shadow-xl">
            <h3 className="!text-2xl !font-bold !text-gray-900 !mb-8 !flex !items-center !gap-3">
              <i className="fas fa-file-contract !text-[#E8562E]" />
              MOU Detail
            </h3>
            <div className="!grid !md:grid-cols-2 !gap-8 !mb-8">
              <div className="!p-6 !bg-gray-50 !rounded-2xl !border !border-gray-100">
                <span className="!block !text-xs !font-bold !text-gray-400 !uppercase !tracking-widest !mb-2">Signed On</span>
                <p className="!text-gray-900 !font-bold !text-lg">{mou.signedOn}</p>
              </div>
              <div className="!p-6 !bg-gray-50 !rounded-2xl !border !border-gray-100">
                <span className="!block !text-xs !font-bold !text-gray-400 !uppercase !tracking-widest !mb-2">Status</span>
                <p className="!text-green-600 !font-bold !text-lg !flex !items-center !gap-2">
                  <span className="!w-2.5 !h-2.5 !bg-green-500 !rounded-full !animate-pulse" />
                  Active Agreement
                </p>
              </div>
            </div>
            <div className="!space-y-6">
              <div>
                <span className="!block !text-sm !font-bold !text-gray-500 !uppercase !tracking-wider !mb-2">Objective</span>
                <p className="!text-gray-700 !text-lg !leading-relaxed">{mou.objective}</p>
              </div>
              <div className="!pt-6 !border-t !border-gray-100">
                <p className="!text-gray-500 !text-lg !leading-relaxed !italic">"{mou.detail}"</p>
              </div>
            </div>
          </article>

          <article className="static-card !p-8 !md:p-10 !bg-white !rounded-3xl !border !border-gray-100 !shadow-xl">
            <h3 className="!text-2xl !font-bold !text-gray-900 !mb-8 !flex !items-center !gap-3">
              <i className="fas fa-chart-line !text-[#E8562E]" />
              Implementation Report ({mou.report.period})
            </h3>
            
            <div className="!grid !grid-cols-1 !md:grid-cols-3 !gap-8 !mb-10">
              <div className="!p-6 !bg-blue-50/50 !rounded-2xl !border !border-blue-100/50 !text-center">
                <span className="!block !text-xs !font-bold !text-blue-600 !uppercase !tracking-widest !mb-3">Total Units Sold</span>
                <p className="!text-3xl !font-black !text-[#1B3C72]">{mou.report.unitsSold.toLocaleString("en-IN")}</p>
              </div>
              <div className="!p-6 !bg-orange-50/50 !rounded-2xl !border !border-orange-100/50 !text-center">
                <span className="!block !text-xs !font-bold !text-[#E8562E] !uppercase !tracking-widest !mb-3">Revenue Generated</span>
                <p className="!text-3xl !font-black !text-[#1B3C72]">{formatInr(mou.report.revenueInr)}</p>
              </div>
              <div className="!p-6 !bg-green-50/50 !rounded-2xl !border !border-green-100/50 !text-center">
                <span className="!block !text-xs !font-bold !text-green-600 !uppercase !tracking-widest !mb-3">Sales Channels</span>
                <p className="!text-xl !font-black !text-[#1B3C72] !leading-tight !mt-1">{mou.report.channels.length} Major Channels</p>
              </div>
            </div>

            <div className="!space-y-8">
              <div>
                <span className="!block !text-sm !font-bold !text-gray-500 !uppercase !tracking-wider !mb-4">Distribution Channels</span>
                <div className="!flex !flex-wrap !gap-3">
                  {mou.report.channels.map(channel => (
                    <span key={channel} className="!px-4 !py-2 !bg-white !text-blue-700 !rounded-xl !text-sm !font-bold !border !border-blue-100 !shadow-sm">
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="!block !text-sm !font-bold !text-gray-500 !uppercase !tracking-wider !mb-4">Key Implementation Highlights</span>
                <ul className="!grid !gap-4">
                  {mou.report.keyHighlights.map((point) => (
                    <li key={point} className="!flex !items-start !gap-4 !text-gray-700 !text-lg !leading-relaxed">
                      <i className="fas fa-check-circle !text-green-500 !mt-1.5 !text-xl" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="!flex !justify-center !mt-8">
            <Link href="/partnerships/mous-list" className="btn !btn-outline-primary !rounded-full !px-10 !py-4 !font-bold !group !shadow-lg hover:!shadow-xl !transition-all">
              <i className="fas fa-arrow-left !mr-3 group-hover:!-translate-x-1 !transition-transform" />
              Back to MOUs List
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
