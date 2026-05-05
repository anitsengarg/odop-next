import type { Metadata } from "next";
import "@/styles/nabl-labs.css";
import { fetchNablLabsList } from "@/services/schemes.service";

export const metadata: Metadata = {
  title: "List of NABL Labs | Resources | ODOP UP",
  description:
    "NABL-accredited laboratories in Uttar Pradesh for testing, calibration and certification of ODOP products.",
};

type NablLab = {
  sNo: number;
  category: string;
  cabId: string;
  cabName: string;
  address: string;
  district: string;
  discipline: string;
};

export default async function NablLabsPage() {
  const { data: nablLabsData } = await fetchNablLabsList();
  const nablLabs = (Array.isArray(nablLabsData) ? nablLabsData : []) as NablLab[];

  return (
    <div className="nabl-labs-page">
      <section className="page-hero nabl-hero relative">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content relative z-10">
          <h1 className="page-hero-title">List of NABL Labs</h1>
          <p className="page-hero-subtitle">
            NABL-accredited laboratories in Uttar Pradesh providing quality testing,
            calibration and certification for ODOP products.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-overview-visual">
              <div className="about-image-stack">
                <img
                  src="/assets/img/NABL.jpg"
                  alt="NABL Accredited Laboratory"
                  className="about-main-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about-overview-content">
              <div className="section-eyebrow">Quality Assurance</div>
              <h2 className="section-title">NABL-Accredited Laboratories</h2>
              <p>
                In Uttar Pradesh, National Accreditation Board for Testing and Calibration
                Laboratories (NABL)-accredited laboratories play a crucial role in
                strengthening the One District One Product (ODOP) initiative by ensuring
                that products meet nationally and internationally accepted quality standards.
              </p>
              <p>
                These labs provide reliable testing, calibration, and certification services
                for ODOP products such as handicrafts, food items, and textiles, helping
                local producers validate product quality, safety, and compliance.
              </p>
              <p>
                This accreditation builds trust among buyers, exporters, and regulatory
                bodies, making ODOP goods more competitive in both domestic and global
                markets. By supporting standardization and quality assurance,
                NABL-accredited labs directly contribute to enhancing the credibility,
                export potential, and overall value of ODOP products from the state.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="nabl-main-content section">
        <div className="container">
          <section className="nabl-section">
            <h2>District-wise NABL-Accredited Laboratories ({nablLabs.length} Labs)</h2>
            <div className="nabl-table-scroll">
              <table className="nabl-table">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>ODOP Category</th>
                    <th>CAB ID</th>
                    <th>Laboratory Name</th>
                    <th>Address</th>
                    <th>District</th>
                    <th>Discipline</th>
                  </tr>
                </thead>
                <tbody>
                  {nablLabs.map((lab, index) => (
                    <tr key={lab.cabId || index}>
                      <td style={{ textAlign: "center", fontWeight: "600", color: "#153b66" }}>
                        {lab.sNo || index + 1}
                      </td>
                      <td>
                        <span className="category-chip">
                          {lab.category}
                        </span>
                      </td>
                      <td className="cab-id">
                        {lab.cabId}
                      </td>
                      <td style={{ fontWeight: "500", color: "#1f324a" }}>
                        {lab.cabName}
                      </td>
                      <td style={{ color: "#4a6078" }}>
                        {lab.address}
                      </td>
                      <td style={{ fontWeight: "500" }}>
                        {lab.district}
                      </td>
                      <td style={{ color: "#4a6078" }}>
                        {lab.discipline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="source-note">
              Source: National Accreditation Board for Testing and Calibration Laboratories (NABL).
              For the latest accreditation status, visit{" "}
              <a
                href="https://www.nabl-india.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.nabl-india.org
              </a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
