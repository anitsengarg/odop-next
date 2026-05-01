import type { Metadata } from "next";
export const metadata: Metadata = { title: "List of CFCs | Resources | ODOP UP", description: "List of Common Facility Centres (CFCs) under the ODOP programme in Uttar Pradesh." };
export default function CfcListPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">List of CFCs</h1><p className="page-hero-subtitle">Common Facility Centres (CFCs) established under the ODOP programme provide shared infrastructure and modern machinery to district producers.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Infrastructure</span><h2>Common Facility Centres</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>The complete list of ODOP Common Facility Centres (CFCs) is available on the official ODOP UP portal. Please visit <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a> for the latest CFC directory.</p></article></section></div>
    </main>
  );
}
