import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSME Financing – TReDS | ODOP UP",
  description: "Trade Receivables Discounting System (TReDS) for MSME financing.",
};

export default function MsmeFinancingTredsPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">MSME Financing – TReDS</h1>
          <p className="page-hero-subtitle">
            Trade Receivables Discounting System for improving MSME cash flow.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Working Capital</span>
          <h2>TReDS Platform</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>What is TReDS?</h3>
            <p>
              TReDS is an electronic platform facilitating the financing and discounting of trade receivables of MSMEs from corporate buyers, including Government Departments and PSUs, through multiple financiers.
            </p>
            <p>
              Register on the RXIL TReDS platform to unlock working capital.
            </p>
            <p>
              <a className="cfc-link-btn" href="https://www.rxil.in/" target="_blank" rel="noopener noreferrer">
                Visit RXIL Portal
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
