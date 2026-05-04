import type { Metadata } from "next";
import Link from "next/link";
import { mouRecords } from "@/lib/mou-data";

export const metadata: Metadata = {
  title: "MOUs and GOs | Partnerships | ODOP UP",
  description: "Memorandums of Understanding (MOUs) and Government Orders (GOs) related to the One District One Product program.",
};

export default function MousListPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">MOUs and GOs</h1>
          <p className="page-hero-subtitle">
            Official agreements and government directives shaping the ODOP program framework.
          </p>
        </div>
      </section>

      <div className="container py-10">
        <div className="section-header">
          <span className="eyebrow">Partnerships</span>
          <h2>List of MOUs</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        
<section className="mt-8 p-4">
  <article className=" border-gray-100 bg-white">
    {/* Header */}
    <div className=" border-gray-100 px-6 py-6 md:px-8 md:py-8">
      <div className="max-w-3xl">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Memorandums of Understanding(Sample)
        </h3>
        <p className="my-3 text-sm leading-6 text-gray-600 md:text-base">
          This page lists sample ODOP MOUs.  Click any MOU title to open its detail and report page.
        </p>
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto !p-3 !my-4 border border-gray-300 rounded-md">
      <table className="min-w-full text-left   ">
        <thead className=" border border-b border-gray-50">
          <tr>
            <th className="px-6 !py-4  text-xs font-semibold uppercase tracking-wider text-gray-500 md:px-8">
              S.No.
            </th>
            <th className="px-6  text-xs font-semibold uppercase tracking-wider text-gray-500 md:px-8">
              MOU Title
            </th>
            <th className="px-6  text-xs font-semibold uppercase tracking-wider text-gray-500 md:px-8">
              Partner Organization
            </th>
            <th className="px-6  text-xs font-semibold uppercase tracking-wider text-gray-500 md:px-8">
              Signed On
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {mouRecords.map((mou, index) => (
            <tr
              key={mou.slug}
              className="transition-colors duration-200  hover:bg-orange-50/40"
            >
              <td className="!py-3 text-sm font-semibold text-gray-500 md:px-8 ">
                {String(index + 1).padStart(2, "0")}
              </td>

              <td className="px-6 py-5 md:px-8">
                <Link
                  href={`/partnerships/mous-list/${mou.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-[#E8562E] md:text-base"
                >
                  <span className="line-clamp-2">{mou.title}</span>
                  <svg
                    className="h-4 w-4 translate-x-0 text-[#E8562E] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </td>

              <td className="px-6 py-5 text-sm text-gray-600 md:px-8">
                {mou.partner}
              </td>

              <td className="px-6 py-5 md:px-8">
                <span className="inline-flex rounded-full bg-gray-100 !px-3 py-1 text-xs font-medium text-gray-700 md:text-sm">
                  {mou.signedOn}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </article>
</section>
      </div>
    </main>
  );
}
