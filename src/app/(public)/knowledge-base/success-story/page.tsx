import type { Metadata } from "next";
export const metadata: Metadata = { title: "Success Story | Knowledge Base | ODOP UP Portal", description: "Inspiring success stories of ODOP artisans and entrepreneurs from across Uttar Pradesh." };
export default function SuccessStoryPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Success Story</h1><p className="page-hero-subtitle">Inspiring journeys of ODOP artisans and entrepreneurs building new market access across Uttar Pradesh.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Knowledge Base</span><h2>ODOP Success Stories</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>Success stories of ODOP artisans and entrepreneurs are available on the official ODOP UP portal. Please visit <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a> to read the complete stories.</p></article></section></div>
    </main>
  );
}
