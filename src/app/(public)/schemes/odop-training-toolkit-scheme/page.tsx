import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ODOP Training and Toolkit Scheme | ODOP UP",
  description: "Skill development and toolkit distribution scheme for artisans under ODOP Uttar Pradesh.",
};

export default function TrainingToolkitSchemePage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">ODOP Training and Toolkit Scheme</h1>
          <p className="page-hero-subtitle">
            Enhancing artisan skills and providing modern tools to improve product quality.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Capacity Building</span>
          <h2>Skill Development & Toolkits</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>About the Scheme</h3>
            <p>
              Under this scheme, artisans receive advanced training related to their district's identified product. Upon successful completion of the training, modern toolkits are provided free of cost to help improve productivity and product quality.
            </p>
            <p>
              Register and apply through the MSME portal.
            </p>
            <p>
              <a className="cfc-link-btn" href="https://msme1connect.up.gov.in/scheme-list/odop-training-and-toolkit-scheme" target="_blank" rel="noopener noreferrer">
                View Scheme on MSME Portal
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
