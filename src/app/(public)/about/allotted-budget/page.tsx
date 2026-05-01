import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allotted Budget | About ODOP UP",
  description: "Budget allotted by the Government of Uttar Pradesh for ODOP programme implementation — year-wise allocation.",
};

export default function AllottedBudgetPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Allotted Budget</h1>
          <p className="page-hero-subtitle">Budget allotted by the Government of Uttar Pradesh for ODOP programme implementation.</p>
        </div>
      </section>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Financial Planning</span>
          <h2>ODOP Budget Overview</h2>
          <p>Year-wise budget allocation published for programme implementation under the One District One Product initiative.</p>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>Year-wise Budget Allocation</h3>
            <p>Budget allotted by the Government of Uttar Pradesh for implementation of One District One Product Programme:</p>
            <div className="budget-grid">
              <div className="budget-item">
                <div className="year">FY 2024-25</div>
                <div className="amount">INR 307 Crore</div>
              </div>
              <div className="budget-item">
                <div className="year">FY 2025-26</div>
                <div className="amount">INR 337 Crore</div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
