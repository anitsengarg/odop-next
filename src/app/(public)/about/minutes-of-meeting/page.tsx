import type { Metadata } from "next";
export const metadata: Metadata = { title: "Minutes of Meeting | About ODOP UP", description: "Minutes of meetings held under the ODOP programme in Uttar Pradesh." };
export default function MinutesOfMeetingPage() {
  return (
    <main className="main-content schemes-page about-static-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Minutes of Meeting</h1><p className="page-hero-subtitle">Recorded minutes from official meetings held under the ODOP programme.</p></div></section>
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Minutes of Meeting</h1>
          <p className="page-hero-subtitle">Official meeting records and action points published under ODOP reports.</p>
        </div>
      </section>

      <main className="main-content schemes-page">
        <div className="container">
          <div className="section-header"><span className="eyebrow">Reports</span>
            <h2>Action Point Documents</h2>
            <div className="divider"><span></span><span></span><span></span></div>
          </div>
          <section className="static-content-wrap">
            <article className="static-card">
              <p className="static-note">The source page also carries the message "content will be available soon..".
                The following action-point files are available in page links.</p>
              <div className="policy-table-wrap">
                <table className="policy-table">
                  <thead>
                    <tr>
                      <th>Document</th>
                      <th>Access</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Action point of ODOP Meeting on 13-03-18 at New Delhi</td>
                      <td><a className="cfc-link-btn"
                        href="https://odopup.in/pdf/20180405_Action%20point%20of%20ODOP%20Meeting%20on%2013-03-18%20at%20New%20Delhi.pdf"
                        target="_blank" rel="noopener">View / Download</a></td>
                    </tr>
                    <tr>
                      <td>Action point of ODOP Meeting on 14-03-18 at Varanasi</td>
                      <td><a className="cfc-link-btn"
                        href="https://odopup.in/pdf/20180405_Action%20point%20of%20ODOP%20Meeting%20on%2014-03-18%20at%20Varanasi.pdf"
                        target="_blank" rel="noopener">View / Download</a></td>
                    </tr>
                    <tr>
                      <td>Action point of ODOP Meeting on 17-03-18 at Agra</td>
                      <td><a className="cfc-link-btn"
                        href="https://odopup.in/pdf/20180405_Action%20point%20of%20ODOP%20Meeting%20on%2017-03-18%20at%20Agra.pdf"
                        target="_blank" rel="noopener">View / Download</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </section>
        </div>
      </main>
    </main>
  );
}
