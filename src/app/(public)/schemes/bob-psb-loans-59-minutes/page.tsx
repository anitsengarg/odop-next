import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOB PSB Loans in 59 Minutes | ODOP UP",
  description: "Fast-track loan approval portal through Bank of Baroda for MSMEs.",
};

export default function BobPsbLoansPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">BOB PSB Loans in 59 Minutes</h1>
          <p className="page-hero-subtitle">
            Quick, contact-less loan approvals for MSMEs.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Fast Finance</span>
          <h2>59 Minutes Loan Approval</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>PSB Loans in 59 Minutes</h3>
            <p>
              An initiative empowering MSMEs to receive automated loan approvals up to ₹5 Crores in just 59 minutes. This platform connects borrowers with multiple Public Sector Banks (PSBs) like Bank of Baroda seamlessly.
            </p>
            <p>
              Click below to visit the portal and get an in-principle approval.
            </p>
            <p>
              <a className="cfc-link-btn" href="https://bankofbaroda.bank.in/" target="_blank" rel="noopener noreferrer">
                Visit BOB Portal
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
