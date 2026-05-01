import type { Metadata } from "next";
export const metadata: Metadata = { title: "Grievance Redressal | Resources | ODOP UP", description: "Grievance redressal mechanism for the ODOP programme in Uttar Pradesh." };
export default function GrievanceRedressalPage() {
  return (
    <main className="main-content schemes-page">
      <section className="page-hero schemes-hero"><div className="page-hero-overlay" /><div className="container page-hero-content"><h1 className="page-hero-title">Grievance Redressal</h1><p className="page-hero-subtitle">Official grievance redressal mechanism for artisans, entrepreneurs, and stakeholders under the ODOP programme.</p></div></section>
      <div className="container"><div className="section-header"><span className="eyebrow">Support</span><h2>Grievance Redressal</h2><div className="divider"><span /><span /><span /></div></div><section className="static-content-wrap"><article className="static-card"><p>For grievances related to the One District One Product (ODOP) programme, please contact the ODOP Cell at:</p><ul className="static-list"><li><i className="fas fa-map-marker-alt" aria-hidden="true" /><span>ODOP Cell, Niryat Bhawan, Second Floor, 8 Cantt Road, Qaiserbagh, Lucknow – 226001</span></li><li><i className="fas fa-phone" aria-hidden="true" /><span>Helpline: 1800-180-5555 (Toll Free)</span></li><li><i className="fas fa-envelope" aria-hidden="true" /><span>odop-up@nic.in</span></li></ul></article></section></div>
    </main>
  );
}
