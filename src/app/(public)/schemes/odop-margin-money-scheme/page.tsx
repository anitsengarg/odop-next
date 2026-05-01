import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ODOP Margin Money Scheme | ODOP UP",
  description: "Financial Assistance Scheme for One District One Product (ODOP Margin Money Scheme).",
};

export default function MarginMoneySchemePage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">ODOP Margin Money Scheme</h1>
          <p className="page-hero-subtitle">
            Financial Assistance Scheme for establishing or expanding ODOP-related businesses.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Financial Aid</span>
          <h2>Margin Money Assistance</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>Scheme Details</h3>
            <p>
              The ODOP Margin Money Scheme offers capital subsidy to entrepreneurs setting up micro and small enterprises related to the identified ODOP products of their respective districts, reducing the financial burden and encouraging investment.
            </p>
            <p>
              Applications and detailed guidelines are available on the MSME portal.
            </p>
            <p>
              <a className="cfc-link-btn" href="https://msme1connect.up.gov.in/scheme-list/financial-assistance-scheme-for-one-district-one-product-(odop-margin-money-scheme)" target="_blank" rel="noopener noreferrer">
                View Scheme on MSME Portal
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
