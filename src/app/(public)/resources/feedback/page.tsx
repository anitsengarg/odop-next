import type { Metadata } from "next";
export const metadata: Metadata = { title: "Feedback | Resources | ODOP UP", description: "Share your feedback about the ODOP programme in Uttar Pradesh." };
export default function FeedbackPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Feedback</h1><p className="page-hero-subtitle">Share your experience and suggestions to help improve the One District One Product programme.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Your Voice Matters</span><h2>Submit Feedback</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>To share your feedback about the ODOP programme, please visit the official ODOP UP portal at <a href="https://odopup.in" target="_blank" rel="noopener noreferrer">odopup.in</a> or contact our helpline at <strong>1800-180-5555</strong> (Toll Free).</p></article></section></div>
    </main>
  );
}
