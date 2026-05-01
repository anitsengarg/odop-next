import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UdyamiMitra – Loan Facilitation | ODOP UP",
  description: "UdyamiMitra portal for MSME loan facilitation.",
};

export default function UdyamitraLoanPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">UdyamiMitra – Loan Facilitation</h1>
          <p className="page-hero-subtitle">
            A comprehensive portal facilitating MSME access to credit and support services.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Credit Access</span>
          <h2>UdyamiMitra Portal</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>About UdyamiMitra</h3>
            <p>
              UdyamiMitra is an enabling platform providing universal access to credit for MSMEs. It acts as a bridge between entrepreneurs and various financial institutions, simplifying the loan matching and application process.
            </p>
            <p>
              Visit the UdyamiMitra portal to explore credit options.
            </p>
            <p>
              <a className="cfc-link-btn" href="https://udyamimitra.in/" target="_blank" rel="noopener noreferrer">
                Visit UdyamiMitra
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
