import type { Metadata } from "next";
export const metadata: Metadata = { title: "Directorate Officers' List | About ODOP UP", description: "List of directorate officers involved in ODOP programme in Uttar Pradesh." };
export default function DirectorateOfficersListPage() {
  return (
    <main className="main-content schemes-page about-static-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Directorate Officers&apos; List</h1><p className="page-hero-subtitle">List of directorate officers responsible for ODOP programme coordination in Uttar Pradesh.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Administration</span><h2>Directorate Officers</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>The list of directorate officers involved in the administration and implementation of the One District One Product (ODOP) programme in Uttar Pradesh is updated regularly. Please visit the official ODOP UP portal for the latest information.</p></article></section></div>
    </main>
  );
}
