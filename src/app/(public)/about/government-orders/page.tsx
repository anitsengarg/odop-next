import type { Metadata } from "next";
export const metadata: Metadata = { title: "Government Orders | About ODOP UP", description: "Government orders (GOs) issued for the ODOP programme in Uttar Pradesh." };
export default function GovernmentOrdersPage() {
  return (
    <main className="main-content schemes-page about-static-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Government Orders</h1><p className="page-hero-subtitle">Official government orders issued under the ODOP programme.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Official Directives</span><h2>Government Orders (GOs)</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>Government orders (GOs) related to the One District One Product (ODOP) programme are available on the official UP Government Shasan Adesh portal.</p><a className="cfc-link-btn" href="http://shasanadesh.up.nic.in/ShowGOforDept.aspx?dept=166" target="_blank" rel="noopener noreferrer">View Government Orders on Shasan Adesh Portal <i className="fas fa-external-link-alt" aria-hidden="true" /></a></article></section></div>
    </main>
  );
}
