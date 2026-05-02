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

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Partnerships</span>
          <h2>List of MOUs</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>Memorandums of Understanding (Sample)</h3>
            <p>
              This page lists sample ODOP MOUs. Click any MOU title to open its detail and report page.
            </p>

            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b border-gray-200">
                    <th className="py-3 pr-4">S. No.</th>
                    <th className="py-3 pr-4">MOU Title</th>
                    <th className="py-3 pr-4">Partner</th>
                    <th className="py-3">Signed On</th>
                  </tr>
                </thead>
                <tbody>
                  {mouRecords.map((mou, index) => (
                    <tr key={mou.slug} className="border-b border-gray-100 align-top">
                      <td className="py-3 pr-4">{index + 1}</td>
                      <td className="py-3 pr-4">
                        <Link
                          href={`/partnerships/mous-list/${mou.slug}`}
                          className="text-[#0056b3] hover:underline font-semibold"
                        >
                          {mou.title}
                        </Link>
                      </td>
                      <td className="py-3 pr-4">{mou.partner}</td>
                      <td className="py-3">{mou.signedOn}</td>
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
