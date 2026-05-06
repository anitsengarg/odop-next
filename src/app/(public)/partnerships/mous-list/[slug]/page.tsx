import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMouBySlug, mouRecords } from "@/lib/mou-data";

type MouDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: MouDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const mou = getMouBySlug(slug);

  if (!mou) {
    return {
      title: "MOU Detail | Partnerships | ODOP UP",
      description: "MOU attachment details under ODOP partnerships.",
    };
  }

  return {
    title: `${mou.title} | MOU Detail | ODOP UP`,
    description: `Signed date and attachment for ${mou.title} under ODOP partnerships.`,
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
          <h1 className="page-hero-title !text-white">MOU Attachment</h1>
          <p className="page-hero-subtitle !max-w-2xl !mx-auto !text-white/90">{mou.title}</p>
        </div>
      </section>

      <div className="container !py-16">
        <div className="section-header !mb-12">
          <span className="eyebrow !text-[#E8562E] !font-bold !uppercase !tracking-widest">Official Document</span>
          <h2 className="!mt-4 !text-3xl !md:text-4xl !font-bold !text-gray-900">{mou.title}</h2>
          <div className="divider !mt-6"><span /><span /><span /></div>
        </div>

        <section className="static-content-wrap !mt-12 !grid !gap-10">
          <article className="static-card !p-8 !md:p-10 !bg-white !rounded-3xl !border !border-gray-100 !shadow-xl">
            <h3 className="!text-2xl !font-bold !text-gray-900 !mb-8 !flex !items-center !gap-3">
              <i className="fas fa-file-contract !text-[#E8562E]" />
              MOU Details
            </h3>
            <div className="!space-y-6">
              <div>
                <span className="!block !text-sm !font-bold !text-gray-500 !uppercase !tracking-wider !mb-2">Signed On</span>
                <p className="!text-gray-700 !text-lg !leading-relaxed">{mou.signedOn}</p>
              </div>
              <div className="!pt-6 !border-t !border-gray-100">
                <a
                  href={mou.attachmentPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn !btn-primary !rounded-full !px-8 !py-4 !font-bold"
                >
                  Open Attachment
                </a>
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
