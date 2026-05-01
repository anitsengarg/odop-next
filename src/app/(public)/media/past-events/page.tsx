import type { Metadata } from "next";
export const metadata: Metadata = { title: "Past Events | Events & Media | ODOP UP", description: "Archive of past events, exhibitions, and programmes conducted under the ODOP initiative in Uttar Pradesh." };
export default function PastEventsPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Past Events</h1><p className="page-hero-subtitle">Archive of completed events, exhibitions, summits, and programmes conducted under the ODOP initiative across Uttar Pradesh.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Events Archive</span><h2>Past ODOP Events</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>The archive of past ODOP events is available on the official ODOP UP portal. Please visit <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a> for the complete events archive.</p></article></section></div>
    </main>
  );
}
