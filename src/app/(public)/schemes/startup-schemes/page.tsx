import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start-Up Schemes | ODOP UP",
  description: "Information about Start-Up Schemes under the One District One Product initiative in Uttar Pradesh.",
};

export default function StartupSchemesPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Start-Up Schemes</h1>
          <p className="page-hero-subtitle">
            Empowering innovation and entrepreneurship in Uttar Pradesh through dedicated support for startups.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Initiatives</span>
          <h2>Start-Up Schemes Overview</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>Start-Up Support Portal</h3>
            <p>
              The Government of Uttar Pradesh offers comprehensive support for new startups, providing incubation, funding,
              and mentorship opportunities to foster a vibrant startup ecosystem.
            </p>
            <p>
              For complete details, eligibility criteria, and to apply, please visit the official StartinUP portal.
            </p>
            <p>
              <a className="cfc-link-btn" href="https://startinup.up.gov.in/" target="_blank" rel="noopener noreferrer">
                Visit StartinUP Portal
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
