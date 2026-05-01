import type { Metadata } from "next";
export const metadata: Metadata = { title: "Event Reports | Events & Media | ODOP UP", description: "Reports from events, exhibitions, and programmes conducted under the ODOP initiative in Uttar Pradesh." };
export default function EventReportsPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Event Reports</h1><p className="page-hero-subtitle">Detailed reports from ODOP events, summits, exhibitions, and district-level programmes across Uttar Pradesh.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Reports</span><h2>ODOP Event Reports</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>Event reports for ODOP programmes are published on the official ODOP UP portal. Please visit <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a> for event reports and documentation.</p></article></section></div>
    </main>
  );
}
