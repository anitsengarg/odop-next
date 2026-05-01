import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Budget Report | Partnerships | ODOP UP",
  description: "Financial reports and budget allocations for ODOP exhibitions and events.",
};

export default function EventBudgetReportPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Budget Report</h1>
          <p className="page-hero-subtitle">
            Financial transparency in ODOP promotional events and exhibitions.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Financials</span>
          <h2>Event Budget Allocation</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>Exhibition & Event Budgets</h3>
            <p>
              To promote ODOP products globally, the department participates in and organizes numerous trade fairs, exhibitions, and promotional events. The budget reports provide a breakdown of the sanctioned and utilized funds for these activities.
            </p>
            <p>
              The latest financial year's reports are being compiled and will be available soon.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
