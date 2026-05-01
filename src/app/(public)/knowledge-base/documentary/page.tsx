import type { Metadata } from "next";
export const metadata: Metadata = { title: "Documentary | Knowledge Base | ODOP UP Portal", description: "ODOP UP documentary films and video documentation of the One District One Product programme." };
export default function DocumentaryPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Documentary</h1><p className="page-hero-subtitle">Documentary films and video documentation of the One District One Product programme in Uttar Pradesh.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Knowledge Base</span><h2>ODOP Documentary</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>ODOP documentary films are available on the official ODOP UP portal and YouTube channel. Please visit <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a> to watch the full documentaries.</p></article></section></div>
    </main>
  );
}
