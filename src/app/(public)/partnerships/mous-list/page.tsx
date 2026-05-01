import type { Metadata } from "next";

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
          <h2>Official Directives & Agreements</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>Memorandums of Understanding</h3>
            <p>
              The Government of Uttar Pradesh has signed various MOUs with leading e-commerce platforms, financial institutions, and knowledge partners to provide market access, funding, and skill development to ODOP artisans and manufacturers.
            </p>
            <p>
              Check back here for the latest published documents.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
