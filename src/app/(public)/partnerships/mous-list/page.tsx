import type { Metadata } from "next";
import { mouRecords } from "@/lib/mou-data";

export const metadata: Metadata = {
  title: "MOUs and GOs | Partnerships | ODOP UP",
  description: "Official list of ODOP memorandums of understanding with signed dates and downloadable attachments.",
};

export default function MousListPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">MOUs and GOs</h1>
          <p className="page-hero-subtitle">
            Official ODOP MOU documents with signed dates and downloadable attachments.
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
          <article className="border-gray-100 bg-white">
            <div className="border-gray-100 px-6 py-6 md:px-8 md:py-8">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                  Memorandums of Understanding
                </h3>
                <p className="my-3 text-sm leading-6 text-gray-600 md:text-base">
                  This page lists the official ODOP MOUs along with their signed dates and attachments.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto !my-4 !p-3 border border-gray-300 rounded-md">
              <table className="min-w-full text-left">
                <thead className="border border-b border-gray-50">
          <tr>
            <th className="px-6 !py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 md:px-8">
              MOU Title
            </th>
            <th className="px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 md:px-8">
              Signed On
            </th>
            <th className="px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 md:px-8">
              Attachment
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {mouRecords.map((mou) => (
            <tr
              key={mou.slug}
              className="transition-colors duration-200  hover:bg-orange-50/40"
            >
              <td className="px-6 py-5 md:px-8">
                <span className="inline-flex text-sm font-semibold text-gray-900 md:text-base">
                  {mou.title}
                </span>
              </td>

              <td className="px-6 py-5 md:px-8">
                <span className="inline-flex rounded-full bg-gray-100 !px-3 py-1 text-xs font-medium text-gray-700 md:text-sm">
                  {mou.signedOn}
                </span>
              </td>

              <td className="px-6 py-5 md:px-8">
                <a
                  href={mou.attachmentPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E8562E]/20 bg-[#E8562E]/5 px-4 py-2 text-sm font-semibold text-[#C64521] transition-colors hover:bg-[#E8562E]/10"
                >
                  View Attachment
                </a>
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
