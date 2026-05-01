import type { Metadata } from "next";
export const metadata: Metadata = { title: "Upcoming Events | Events & Media | ODOP UP", description: "Upcoming events and programmes under the ODOP initiative in Uttar Pradesh." };
export default function UpcomingEventsPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Upcoming Events</h1><p className="page-hero-subtitle">Stay updated with forthcoming events, exhibitions, summits, and programmes under the ODOP initiative.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Events Calendar</span><h2>Upcoming ODOP Events</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>Details of upcoming ODOP events, exhibitions, and programmes are published on the official ODOP UP portal. Please visit <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a> for the latest event schedule.</p></article></section></div>
    </main>
  );
}
