import type { Metadata } from "next";
export const metadata: Metadata = { title: "Frequently Asked Questions (FAQs) | About ODOP UP", description: "Frequently asked questions about the ODOP programme in Uttar Pradesh." };
export default function FrequentlyAskedQuestionsPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Frequently Asked Questions (FAQs)</h1><p className="page-hero-subtitle">Answers to common queries about the ODOP programme in Uttar Pradesh.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Help &amp; Support</span><h2>FAQs</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>For answers to frequently asked questions about registration, schemes, eligibility, and benefits under the One District One Product (ODOP) programme, please visit the official ODOP UP portal or contact the ODOP Cell helpline at <strong>1800-180-5555</strong> (Toll Free).</p></article></section></div>
    </main>
  );
}
