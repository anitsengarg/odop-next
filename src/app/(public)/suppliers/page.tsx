import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supplier Directory | ODOP UP",
  description: "Browse ODOP UP supplier directory — manufacturers, wholesalers, distributors, shopkeepers, artisans, and exporters across Uttar Pradesh.",
};

export default function SuppliersPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Supplier Directory</h1>
          <p className="page-hero-subtitle">Browse ODOP-registered manufacturers, wholesalers, distributors, shopkeepers, artisans, and exporters from across Uttar Pradesh.</p>
        </div>
      </section>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Supplier Listing</span>
          <h2>ODOP Suppliers</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <p>The complete supplier directory is available on the official ODOP UP portal. Please visit <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a> to browse and connect with ODOP suppliers.</p>
          </article>
        </section>
      </div>
    </main>
  );
}
