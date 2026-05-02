import type { Metadata } from "next";
export const metadata: Metadata = { title: "Minutes of Meeting | About ODOP UP", description: "Minutes of meetings held under the ODOP programme in Uttar Pradesh." };
export default function MinutesOfMeetingPage() {
  return (
    <main className="main-content schemes-page about-static-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Minutes of Meeting</h1><p className="page-hero-subtitle">Recorded minutes from official meetings held under the ODOP programme.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Official Records</span><h2>Meeting Minutes</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>Minutes of meetings held as part of the One District One Product (ODOP) programme administration in Uttar Pradesh are published on the official ODOP UP portal. Please visit the official portal for access to meeting minutes and related records.</p></article></section></div>
    </main>
  );
}
