import type { Metadata } from "next";
export const metadata: Metadata = { title: "Covid-19 | Events & Media | ODOP UP", description: "ODOP UP response and activities during the Covid-19 pandemic." };
export default function Covid19Page() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Covid-19</h1><p className="page-hero-subtitle">ODOP UP response and activities during the Covid-19 pandemic.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Pandemic Response</span><h2>ODOP &amp; Covid-19</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>Information about ODOP&apos;s response and support activities during the Covid-19 pandemic is available on the official ODOP UP portal at <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a>.</p></article></section></div>
    </main>
  );
}
