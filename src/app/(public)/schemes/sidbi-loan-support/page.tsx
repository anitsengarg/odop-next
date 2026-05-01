import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIDBI Loan Support | ODOP UP",
  description: "Small Industries Development Bank of India (SIDBI) support and schemes.",
};

export default function SidbiLoanSupportPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">SIDBI Loan Support</h1>
          <p className="page-hero-subtitle">
            Comprehensive financial support and schemes offered by SIDBI for MSMEs.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Institutional Support</span>
          <h2>SIDBI Initiatives</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>About SIDBI Support</h3>
            <p>
              SIDBI acts as the principal financial institution for the promotion, financing, and development of the Micro, Small, and Medium Enterprise (MSME) sector.
            </p>
            <p>
              Explore SIDBI's direct and indirect finance offerings for MSMEs on their official website.
            </p>
            <p>
              <a className="cfc-link-btn" href="https://www.sidbi.in/en/" target="_blank" rel="noopener noreferrer">
                Visit SIDBI Website
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
