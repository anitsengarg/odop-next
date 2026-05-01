import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIDBI Online Loan Application | ODOP UP",
  description: "Direct portal for applying for SIDBI loans online.",
};

export default function SidbiOnlineLoanPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">SIDBI Online Loan Application</h1>
          <p className="page-hero-subtitle">
            Apply directly for SIDBI financial products through their digital portal.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Apply Now</span>
          <h2>Digital Loan Portal</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>SIDBI Online Application</h3>
            <p>
              The SIDBI online portal allows MSMEs to seamlessly apply for various credit products tailored to their growth needs. The digital process ensures faster processing and transparency.
            </p>
            <p>
              Proceed to the application portal to begin.
            </p>
            <p>
              <a className="cfc-link-btn" href="https://onlineloanappl.sidbi.in/OnlineApplication/" target="_blank" rel="noopener noreferrer">
                Start Loan Application
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
