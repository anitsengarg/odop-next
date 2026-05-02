import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Promotion Policy | About ODOP UP",
  description: "Export Promotion Policy documents under ODOP Uttar Pradesh — official UP Export Promotion Policy 2020-2025 downloads.",
};

export default function ExportPromotionPolicyPage() {
  return (
    <main className="main-content schemes-page about-static-page policy-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Export Promotion Policy</h1>
          <p className="page-hero-subtitle">Official export promotion policy document published on ODOP portal.</p>
        </div>
      </section>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Policy Documents</span>
          <h2>Available Downloads</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <h3>UP Export Promotion Policy 2020-2025</h3>
            <div className="policy-table-wrap">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Language</th>
                    <th>Size</th>
                    <th>Uploaded On</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>English</td>
                    <td>7.18 MB</td>
                    <td>28-02-2025</td>
                    <td>
                      <a
                        className="cfc-link-btn"
                        href="https://odopup.in/downloadmedia/siteContent/202502281406413286UP-Export-Promotion-Policy-2020-25-en.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View / Download
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
