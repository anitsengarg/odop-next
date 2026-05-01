import type { Metadata } from "next";
export const metadata: Metadata = { title: "Project Video | Knowledge Base | ODOP UP Portal", description: "ODOP UP project videos — district-level documentations and programme highlights." };
export default function ProjectVideoPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Project Video</h1><p className="page-hero-subtitle">District-level project videos and programme highlights from the One District One Product initiative.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Knowledge Base</span><h2>ODOP Project Videos</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>Project videos for the ODOP programme are available on the official ODOP UP portal and YouTube channel. Please visit <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a> to watch the complete video library.</p></article></section></div>
    </main>
  );
}
