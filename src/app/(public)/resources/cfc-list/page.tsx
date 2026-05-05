import type { Metadata } from "next";
import "@/styles/cfc-list.css";
import Link from "next/link";
import { fetchCfcList } from "@/services/schemes.service";
import Pagination from "@/components/shared/Pagination";

export const metadata: Metadata = {
  title: "CFC List | ODOP UP - One District One Product",
  description: "CFC List - Common Facility Centres under ODOP Uttar Pradesh. View SOP, dashboard links, and district-wise CFC details.",
};

interface CfcItem {
  id: number;
  district: string;
  product: string;
  spv_name: string;
  address: string;
  intervention: string;
  contact: string;
  status: string;
  pdf_link?: string;
  slug?: string;
  is_under_implementation?: boolean;
}

export default async function CfcListPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const limit = 20;

  const { data: paginatedData } = await fetchCfcList(currentPage, limit);
  const cfcList = paginatedData?.data || [];
  const totalPages = paginatedData?.last_page || 1;
  const perPage = paginatedData?.per_page || limit;

  const functionalCfc = Array.isArray(cfcList) ? cfcList.filter(item => !item.is_under_implementation) : [];
  const underImplementationCfc = Array.isArray(cfcList) ? cfcList.filter(item => item.is_under_implementation) : [];

  const renderStatus = (item: CfcItem) => {
    if (item.is_under_implementation) {
      return <span className="status-chip implementation">Under Implementation</span>;
    }
    if (item.status?.toLowerCase() === "under revision") {
      return <span className="status-chip revision">Under Revision</span>;
    }
    if (item.pdf_link) {
      return (
        <a
          className="cfc-pdf-btn"
          href={item.pdf_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-file-pdf"></i> View PDF
        </a>
      );
    }
    return <span className="status-chip functional">Functional</span>;
  };

  return (
    <div className="cfc-list-page">
      <section className="page-hero cfc-hero relative">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content relative z-10">
          <h1 className="page-hero-title">Common Facility Centre (CFC)</h1>
          <p className="page-hero-subtitle">
            District-wise CFC ecosystem to support ODOP manufacturers and MSMEs with
            modern technology, value-added services, and cluster-led growth.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-overview-visual">
              <div className="about-image-stack">
                <img
                  src="/assets/img/CFC.png"
                  alt="Common Facility Centre"
                  className="about-main-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about-overview-content">
              <div className="section-eyebrow">What is Common Facility Centre?</div>
              <h2 className="section-title">ODOP Infrastructure Support</h2>
              <p>
                A Common Facility Centre (CFC) is a centralized hub equipped with
                state-of-the-art, high-end, and capital-intensive machinery,
                offering a range of services at cost-effective rates. It provides
                the latest technulogy to ODOP manufacturers and micro, small, and
                medium enterprises (MSMEs), enhancing their competitiveness in the
                market.
              </p>

              <p>
                <strong>Objective of CFCs:</strong> To develop state-of-the-art
                technical infrastructure for ODOP manufacturers and MSMEs in the
                state.
              </p>
              <div className="about-highlights-list">
                <div className="about-highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>
                    To provide the latest technulogy to ODOP manufacturers,
                    enabling them to develop market-competitive products that
                    comply with export norms.
                  </span>
                </div>
                <div className="about-highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>
                    To offer value-added services identified in the product value
                    chain.
                  </span>
                </div>
                <div className="about-highlight-item">
                  <i className="fas fa-check-circle"></i>
                  <span>
                    By strengthening CFCs, the ODOP program aims to establish them
                    as growth engines, business hubs, and marketing centers for the
                    cluster.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="cfc-page section">
        <div className="container">
          <section className="cfc-section">
            <h2>SOP and Dashboard</h2>
            <div className="cfc-grid-two">
              <div className="table-wrap">
                <h3 className="cfc-table-title">SOP for ODOP</h3>
                <div className="cfc-table-scroll cfc-table-scroll-fixed">
                  <table className="cfc-table cfc-table-compact">
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        <th>Subject</th>
                        <th>Language</th>
                        <th>Uploaded On</th>
                        <th>View / Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>SOP for ODOP CFC (449 KB)</td>
                        <td>English</td>
                        <td>04-03-2025</td>
                        <td>
                          <a
                            className="cfc-link-btn"
                            href="https://odopup.in/en/article/downloadmedia/siteContent/202503041326422152SOP-for-ODOP-CFC-0325.pdf"
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
              </div>
              <div className="table-wrap">
                <h3 className="cfc-table-title">CFC Dashboard</h3>
                <div className="cfc-table-scroll cfc-table-scroll-fixed">
                  <table className="cfc-table cfc-table-compact cfc-dashboard-table">
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        <th>Subject</th>
                        <th>Access</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>CFC Dashboard (Power BI)</td>
                        <td>
                          <a
                            className="cfc-link-btn"
                            href="https://app.powerbi.com/view?r=eyJrIjoiYTBkMDY1MDAtMGYxZS00Njc0LTg5YTctMWVjMTBmZTcyMDJkIiwidCI6IjYxYTc2OTA5LTllOWUtNDllOC1hZmViLTU0NmZiMjcxN2ZhNyJ9"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="cfc-section">
            <h2>District-wise Functional and Under-Implementation CFCs</h2>
            <p className="cfc-section-note">
              Status labels:{" "}
              <span className="status-chip functional">Functional</span>{" "}
              <span className="status-chip implementation">
                Under Implementation
              </span>{" "}
              <span className="status-chip revision">Under Revision</span>
            </p>
            <div className="cfc-table-scroll">
              <table className="cfc-table cfc-master-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>District</th>
                    <th>Product</th>
                    <th>SPV Name</th>
                    <th>Address</th>
                    <th>Intervention</th>
                    <th>Contact</th>
                    <th>Status / Link</th>
                  </tr>
                </thead>
                <tbody>
                  {cfcList.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="no-data-cell">
                        <div className="no-data-found">
                          <i className="fas fa-search"></i>
                          <p>No CFC data found.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <>
                      {functionalCfc.map((item, index) => (
                        <tr key={item.id || index}>
                          <td>{(currentPage - 1) * perPage + index + 1}</td>
                          <td>
                            {item.slug ? (
                              <Link className="district-link" href={`/resources/cfc-list/${item.slug}`}>
                                {item.district}
                              </Link>
                            ) : (
                              <span className="district-link">{item.district}</span>
                            )}
                          </td>
                          <td>{item.product}</td>
                          <td>{item.spv_name}</td>
                          <td>{item.address}</td>
                          <td>{item.intervention}</td>
                          <td>{item.contact}</td>
                          <td>{renderStatus(item)}</td>
                        </tr>
                      ))}
                      
                      {underImplementationCfc.length > 0 && (
                        <>
                          <tr className="section-row">
                            <td colSpan={8}>CFCs Under Implementation</td>
                          </tr>
                          {underImplementationCfc.map((item, index) => (
                            <tr key={item.id || index}>
                              <td>{(currentPage - 1) * perPage + functionalCfc.length + index + 1}</td>
                              <td>{item.district}</td>
                              <td>{item.product}</td>
                              <td>{item.spv_name}</td>
                              <td>{item.address || "-"}</td>
                              <td>{item.intervention || "-"}</td>
                              <td>{item.contact || "-"}</td>
                              <td>{renderStatus(item)}</td>
                            </tr>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </tbody>
              </table>
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl="/resources/cfc-list"
              searchParams={params}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
