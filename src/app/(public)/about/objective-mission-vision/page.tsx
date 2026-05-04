import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Objective and Mission & Vision | About ODOP UP",
  description:
    "Objective and Mission & Vision of ODOP Uttar Pradesh — core goals and long-term development direction of the One District One Product Programme.",
};

export default function ObjectiveMissionVisionPage() {
  return (
    <>
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Objective and Mission &amp; Vision</h1>
          <p className="page-hero-subtitle">
            Policy intent and strategic direction of the One District One Product
            Programme in Uttar Pradesh.
          </p>
        </div>
      </section>

      <main className="main-content schemes-page about-static-page">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Programme Direction</span>
            <h2>Objective, Mission and Vision</h2>
            <p>
              Core goals and long-term development direction of the One District
              One Product Programme in Uttar Pradesh.
            </p>
            <div className="divider">
              <span /><span /><span />
            </div>
          </div>

          <section className="static-content-wrap">
            <article className="static-card">
              <div className="info-head">
                <h3>Programme Objectives</h3>
                <p>
                  The main objectives of the One District One Product Programme
                  of Uttar Pradesh are as follows:
                </p>
              </div>
              <ul className="static-list">
                <li>
                  <i className="fas fa-circle-check" aria-hidden="true" />
                  <span>Preservation and development of local crafts and skills and promotion of the art.</span>
                </li>
                <li>
                  <i className="fas fa-circle-check" aria-hidden="true" />
                  <span>Increase in incomes and local employment resulting in decline in migration for employment.</span>
                </li>
                <li>
                  <i className="fas fa-circle-check" aria-hidden="true" />
                  <span>Improvement in product quality and skill development.</span>
                </li>
                <li>
                  <i className="fas fa-circle-check" aria-hidden="true" />
                  <span>Transforming products in an artistic way through packaging and branding.</span>
                </li>
                <li>
                  <i className="fas fa-circle-check" aria-hidden="true" />
                  <span>To connect production with tourism through live demos and sales outlets for gifts and souvenirs.</span>
                </li>
                <li>
                  <i className="fas fa-circle-check" aria-hidden="true" />
                  <span>To resolve issues of economic difference and regional imbalance.</span>
                </li>
                <li>
                  <i className="fas fa-circle-check" aria-hidden="true" />
                  <span>To take the concept of ODOP to national and international level after successful implementation at state level.</span>
                </li>
              </ul>
            </article>

            <article className="static-card">
              <div className="info-head">
                <h3>Mission and Vision</h3>
                <p>Core direction for district-led industrial development.</p>
              </div>
              <p>
                One District One Product Programme is aimed at creating
                product-specific traditional industrial hubs across 75 districts
                of Uttar Pradesh that will promote traditional industries which are
                synonymous with the respective districts of the state.
              </p>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
