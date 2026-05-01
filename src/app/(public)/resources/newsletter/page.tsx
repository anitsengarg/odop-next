import type { Metadata } from "next";
export const metadata: Metadata = { title: "Newsletter | Resources | ODOP UP", description: "ODOP UP newsletters — official publications and updates from the One District One Product programme." };
export default function NewsletterPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Newsletter</h1><p className="page-hero-subtitle">Official newsletters and publications from the One District One Product programme in Uttar Pradesh.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Publications</span><h2>ODOP Newsletter</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>ODOP UP newsletters are available for download on the official ODOP UP portal. Please visit <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a> for the latest issues.</p></article></section></div>
    </main>
  );
}
