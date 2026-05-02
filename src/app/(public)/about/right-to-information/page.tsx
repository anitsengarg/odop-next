import type { Metadata } from "next";
export const metadata: Metadata = { title: "Right to Information (RTI) | About ODOP UP", description: "Right to Information RTI details for ODOP Uttar Pradesh programme." };
export default function RightToInformationPage() {
  return (
    <>

      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Right to Information (RTI)</h1>
          <p className="page-hero-subtitle">Official RTI-related documents available on the ODOP portal.</p>
        </div>
      </section>

  <main className="main-content schemes-page policy-page rti-page">
    <div className="container">
      <div className="section-header"><span className="eyebrow">Transparency</span>
        <h2>RTI Documents</h2>
        <div className="divider"><span></span><span></span><span></span></div>
      </div>
      <section className="static-content-wrap">
        <article className="static-card">
          <h3>Available Files</h3>
          <div className="policy-table-wrap">
            <table className="policy-table">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Language</th>
                  <th>Size</th>
                  <th>Uploaded On</th>
                  <th>Access</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>List of Public Authorities, State Public Information Officers and First
                    Appellate Officers.</td>
                  <td>Hindi</td>
                  <td>251 KB</td>
                  <td>06-07-2019</td>
                  <td><a className="cfc-link-btn"
                      href="https://odopup.in/downloadmedia/siteContent/201907081327159589odop1.pdf" target="_blank"
                      rel="noopener noreferrer">View</a></td>
                </tr>
                <tr>
                  <td>Right to Information Act, 2005</td>
                  <td>Hindi</td>
                  <td>389 KB</td>
                  <td>09-08-2018</td>
                  <td><a className="cfc-link-btn"
                      href="https://odopup.in/downloadmedia/siteContent/201811051416048799rti_act.pdf" target="_blank"
                      rel="noopener noreferrer">View</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </div>
  </main>
    
    </>
  );
}
