import type { Metadata } from "next";
export const metadata: Metadata = { title: "Ministers' & Officers' List | About ODOP UP", description: "List of ministers and government officers involved in ODOP programme administration in Uttar Pradesh." };
export default function MinistersOfficersListPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Ministers&apos; &amp; Officers&apos; List</h1><p className="page-hero-subtitle">Official list of ministers and government officers involved in the ODOP programme in Uttar Pradesh.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Administration</span><h2>Ministers &amp; Government Officers</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>The list of ministers and government officers responsible for administration of the One District One Product (ODOP) programme in Uttar Pradesh is updated on a regular basis. Please visit the official ODOP UP portal for the latest information.</p></article></section></div>
    </main>
  );
}
