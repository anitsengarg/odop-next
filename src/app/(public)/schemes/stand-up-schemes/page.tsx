import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stand-Up Schemes | ODOP UP",
  description: "Information about Stand-Up Schemes under the One District One Product initiative in Uttar Pradesh.",
};

export default function StandUpSchemesPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Stand-Up Schemes</h1>
          <p className="page-hero-subtitle">
            Financial support programs designed to promote entrepreneurship at the grassroots level.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Financial Support</span>
          <h2>Stand-Up India Scheme Details</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>About Stand-Up Schemes</h3>
            <p>
              The Stand-Up India scheme facilitates bank loans for establishing greenfield enterprises. This enterprise may be in manufacturing, services, agri-allied activities, or the trading sector.
            </p>
            <p>
              Please review the official documentation for comprehensive scheme guidelines and procedures.
            </p>
            <p>
              <a className="cfc-link-btn" href="https://odopup.in/downloadmedia/siteContent/639126275519019895.pdf" target="_blank" rel="noopener noreferrer">
                View Scheme Document
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
