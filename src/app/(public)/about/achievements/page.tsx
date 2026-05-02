import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements | About ODOP UP",
  description: "ODOP programme achievements and progress figures.",
};

export default function AchievementsPage() {
  return (
    <main className="main-content schemes-page about-static-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Achievements</h1>
          <p className="page-hero-subtitle">ODOP programme progress and impact figures published on the official portal.</p>
        </div>
      </section>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Programme Outcomes</span>
          <h2>ODOP Schemes Progress</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <ul className="static-list">
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span><strong>ODOP Common Facility Center Scheme:</strong> 29 Common Facility Centres (CFCs) have been sanctioned, of which 11 are operational, and 18 are under implementation.</span></li>
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span><strong>ODOP Margin Money Scheme:</strong> Projects worth Rs 4,000 Cr have been sanctioned under ODOP Margin Money scheme, since the start of ODOP programme.</span></li>
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span><strong>Skill Development &amp; Toolkit Distribution Scheme:</strong> More than 1 lakh ODOP artisans have been trained and provided with modern ODOP toolkits.</span></li>
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span><strong>Market Development Scheme:</strong> Participation in international events such as Dubai Expo 2021 and Bharat-Sri Lanka Maitri Utsav in 2024.</span></li>
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span>ODOP manufacturers/artisans participated in domestic events such as ODOP Summit, Hunar Haat, Delhi Haat, etc.</span></li>
              <li><i className="fas fa-circle-check" aria-hidden="true" /><span>Over 20,000 ODOP products are being sold across e-commerce platforms. Amazon and Flipkart are each selling more than Rs 2000 Cr of ODOP products every year.</span></li>
            </ul>
          </article>
          <article className="static-card">
            <h3>Impact of ODOP Programme</h3>
            <ul className="static-list">
              <li><i className="fas fa-chart-line" aria-hidden="true" /><span>Exports of the State have increased by 76% since the start of ODOP programme.</span></li>
              <li><i className="fas fa-chart-simple" aria-hidden="true" /><span>Export from the State has nearly doubled (from approximately Rs 88,967 Cr in 2017-18 to Rs 1.71 Lakh Cr in 2023-24).</span></li>
              <li><i className="fas fa-globe" aria-hidden="true" /><span>ODOP products are major contributors to the State&apos;s exports.</span></li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
