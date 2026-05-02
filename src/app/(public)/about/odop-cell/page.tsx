import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ODOP Cell | About ODOP UP",
  description: "ODOP Cell — dedicated institutional cell for ODOP implementation, coordination, and promotion at Niryat Bhawan, Lucknow.",
};

export default function OdopCellPage() {
  return (
    <main className="main-content schemes-page about-static-page policy-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">ODOP Cell</h1>
          <p className="page-hero-subtitle">Dedicated institutional cell for ODOP implementation, coordination, and promotion.</p>
        </div>
      </section>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Institutional Framework</span>
          <h2>About ODOP Cell</h2>
          <div className="divider"><span /><span /><span /></div>
        </div>
        <section className="static-content-wrap">
          <article className="static-card">
            <p>To facilitate the effective implementation of the One District One Product (ODOP) program, a dedicated ODOP Cell has been established at Niryat Bhawan, Lucknow. This cell operates under the guidance of the Additional Commissioner, Export Promotion Bureau and functions under the overall supervision of the Principal Secretary, Micro, Small &amp; Medium Enterprises and Export Promotion/Export Commissioner.</p>
            <p>The ODOP Cell is committed to promoting district-specific products, enhancing export potential, and supporting local artisans and entrepreneurs through targeted initiatives and policy interventions.</p>
          </article>
          <article className="static-card">
            <h3>Official Documents</h3>
            <div className="policy-table-wrap">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Language</th>
                    <th>Size</th>
                    <th>Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Regarding implementation of &apos;One District One Product&apos; scheme.</td>
                    <td>Hindi</td>
                    <td>227 KB</td>
                    <td><a className="cfc-link-btn" href="https://odopup.in/downloadmedia/siteContent/202503011700291484ODOP-GO_010325.pdf" target="_blank" rel="noopener noreferrer">View / Download</a></td>
                  </tr>
                  <tr>
                    <td>ODOP Cell</td>
                    <td>Hindi</td>
                    <td>98 KB</td>
                    <td><a className="cfc-link-btn" href="https://odopup.in/downloadmedia/siteContent/202503061224458738ODOP-Cell_060325.pdf" target="_blank" rel="noopener noreferrer">View / Download</a></td>
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
