import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMYUVA | ODOP UP",
  description: "Chief Minister Yuva Udyami Vikas Abhiyan (CMYUVA) scheme details.",
};

export default function CmyuvaPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">CMYUVA</h1>
          <p className="page-hero-subtitle">
            Chief Minister Yuva Udyami Vikas Abhiyan - Fostering youth entrepreneurship in Uttar Pradesh.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Youth Empowerment</span>
          <h2>About CMYUVA Scheme</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>CM Yuva Udyami Vikas Abhiyan</h3>
            <p>
              CMYUVA aims to provide financial assistance, training, and a supportive ecosystem to young entrepreneurs across the state, encouraging them to establish self-sustaining ventures.
            </p>
            <p>
              To learn more about the application process and benefits, access the official portal.
            </p>
            <p>
              <a className="cfc-link-btn" href="https://cmyuva.org.in/" target="_blank" rel="noopener noreferrer">
                Visit CMYUVA Portal
              </a>
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
