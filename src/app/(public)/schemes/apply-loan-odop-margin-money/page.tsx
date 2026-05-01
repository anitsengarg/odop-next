import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for Loan – ODOP Margin Money | ODOP UP",
  description: "Direct application link for ODOP Margin Money Loan.",
};

export default function ApplyLoanMarginMoneyPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Apply for Loan – ODOP Margin Money</h1>
          <p className="page-hero-subtitle">
            Register and apply for financial assistance under the ODOP program.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Application</span>
          <h2>Loan Application Portal</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>Online Registration</h3>
            <p>
              To avail the benefits of the ODOP Margin Money Scheme, eligible applicants must register online and submit their business proposals. The process is managed digitally to ensure transparency and efficiency.
            </p>
            <p>
              Proceed to the official MSME registration portal to begin your application.
            </p>
            <p>
              <a className="cfc-link-btn" href="https://msme1connect.up.gov.in/registration" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
