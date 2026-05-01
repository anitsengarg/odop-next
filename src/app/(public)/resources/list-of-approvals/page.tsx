import type { Metadata } from "next";
export const metadata: Metadata = { title: "List of Approvals | Resources | ODOP UP", description: "List of approvals granted under the ODOP programme in Uttar Pradesh." };
export default function ListOfApprovalsPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">List of Approvals</h1><p className="page-hero-subtitle">Official list of approvals granted under the One District One Product programme in Uttar Pradesh.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Official Records</span><h2>ODOP Approvals</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>The list of approvals under the ODOP programme is published on the official ODOP UP portal. Please visit <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a> for the updated approvals directory.</p></article></section></div>
    </main>
  );
}
