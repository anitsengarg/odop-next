import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand ODOP | About ODOP UP",
  description: "Brand ODOP concept, scope, and implementation approach of One District One Product in Uttar Pradesh.",
};

export default function BrandOdopPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero brand-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Brand ODOP</h1>
          <p className="page-hero-subtitle">Concept, scope, and implementation approach of One District One Product in Uttar Pradesh.</p>
        </div>
      </section>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Brand Strategy</span>
          <h2>Brand ODOP Framework</h2>
          <p>Concept, objectives, and implementation priorities that shape district-led product identity in Uttar Pradesh.</p>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>Concept: One District - One Product</h3>
            <p>Spread over an area of 2,40,928 square kilometers, Uttar Pradesh is the fourth largest state of India in terms of area, comprising 7.3% of the total area of the country. It is also the largest state in terms of population with the 2011 census count, which is about 16.5% of the total population of the country.</p>
            <p>In terms of size of the economy, the state ranks third in the country, with a share of 8.4% and GDP of 11,45,234 Cr in the year 2015-16. The MSME sector plays an important role in the economy of the state and is a significant contributor to capital investment, production and employment.</p>
            <p>In terms of number of MSME units (about 46 lakh units, 8%), Uttar Pradesh stands first in the country. This sector, in the state as well as India, is the largest contributor to employment after agriculture. Uttar Pradesh has been a leading state in export of handicrafts, processed food, engineering goods, carpet, readymade garments and leather products.</p>
            <p>The export of handicrafts from Uttar Pradesh contributes 44% to total export of handicrafts from the country. Similarly, this contribution stands at 39% in carpets and 26% in leather and leather products. The share of Uttar Pradesh in total exports from the country is 4.73%.</p>
            <p>Almost each district in the state has one or more unique products, whether in handicrafts, handlooms, agriculture or horticulture produce, or small enterprises, with distinct identity at national and international levels.</p>
          </article>
          <article className="static-card">
            <h3>Key Objectives Under Brand ODOP</h3>
            <ul className="static-list">
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span>Preserve and develop local crafts and skills.</span></li>
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span>Increase incomes and local employment resulting in decline in migration for employment.</span></li>
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span>Improve product quality and skill development.</span></li>
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span>Transform products in an artistic way through packaging and branding.</span></li>
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span>Connect production with tourism through live demo and sales outlets for gifts and souvenirs.</span></li>
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span>Resolve issues of economic difference and regional imbalance.</span></li>
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span>Take ODOP to national and international level after successful implementation at state level.</span></li>
            </ul>
          </article>
          <article className="static-card">
            <h3>Implementation Focus</h3>
            <ul className="static-list">
              <li><i className="fas fa-diagram-project" aria-hidden="true" /><span>District-wise product and stakeholder database development.</span></li>
              <li><i className="fas fa-lightbulb" aria-hidden="true" /><span>Research on possibilities regarding production, development and marketing of products.</span></li>
              <li><i className="fas fa-file-signature" aria-hidden="true" /><span>Micro-plan for product development, marketing promotion, additional employment and wage increment.</span></li>
              <li><i className="fas fa-bullhorn" aria-hidden="true" /><span>Advertising, publicity, and market access at district, state, national, and global levels.</span></li>
              <li><i className="fas fa-hand-holding-dollar" aria-hidden="true" /><span>Coordination with MUDRA, PMEGP, Stand Up schemes, Mukhya Mantri Yuva Swarojgar Yojna and Vishwakarma Shram Samman Yojna for finance to new and existing units.</span></li>
              <li><i className="fas fa-people-group" aria-hidden="true" /><span>Setup of cooperatives and self-help groups.</span></li>
              <li><i className="fas fa-graduation-cap" aria-hidden="true" /><span>General and technical training of craft and technology development.</span></li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
