import type { Metadata } from "next";
import "@/styles/cfc-list.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CFC List | ODOP UP - One District One Product",
  description: "CFC List - Common Facility Centres under ODOP Uttar Pradesh. View SOP, dashboard links, and district-wise CFC details.",
};

export default function CfcListPage() {
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
                  <tr>
                    <td>1</td>
                    <td>
                      <Link className="district-link" href="/resources/cfc-list/siddharthnagar">
                        Siddharthnagar
                      </Link>
                    </td>
                    <td>Kalanamak Rice</td>
                    <td>
                      Shivaansh Siddharth Nagar Agriculture Development Producer
                      Company Ltd.
                    </td>
                    <td>Maduapur, Kaithwaliya, Tehsil Bansi, Siddharthnagar - 272154</td>
                    <td>Rice processing, warehouse, vacuum packaging</td>
                    <td>+91-9839517007</td>
                    <td>
                      <a
                        className="cfc-pdf-btn"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202502281804001035Siddharthnagar-01.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf"></i> View PDF
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <a
                        className="district-link"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202502281806085286Ambedkarnagar.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ambedkar Nagar
                      </a>
                    </td>
                    <td>Textile Products</td>
                    <td>Tanda Textiles Association</td>
                    <td>Sakrawal East, Naipura, Tanda, Uttar Pradesh 224190</td>
                    <td>Common textile processing support</td>
                    <td>+91-8081477003</td>
                    <td>
                      <a
                        className="cfc-pdf-btn"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202502281806085286Ambedkarnagar.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf"></i> View PDF
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <a
                        className="district-link"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202502281805130859Agra-01.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agra
                      </a>
                    </td>
                    <td>Leather Products</td>
                    <td>JD Welfare Society</td>
                    <td>Nawada, Shamsabad Road, Agra, Uttar Pradesh 283125</td>
                    <td>Leather goods training center</td>
                    <td>+91-9997490901</td>
                    <td>
                      <a
                        className="cfc-pdf-btn"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202502281805130859Agra-01.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf"></i> View PDF
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <a
                        className="district-link"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202502281807000808Moradabad-01.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Moradabad
                      </a>
                    </td>
                    <td>Metal Craft</td>
                    <td>NVS Metal Foundation</td>
                    <td>Village Nehtora, Thakurdwara, Moradabad, PIN 244001</td>
                    <td>Physical Vapour Deposition for metal</td>
                    <td>+91-958798888, 9045680001</td>
                    <td>
                      <a
                        className="cfc-pdf-btn"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202502281807000808Moradabad-01.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf"></i> View PDF
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <a
                        className="district-link"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202502281803376272Varanasi-01.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Varanasi
                      </a>
                    </td>
                    <td>Banarasi Silk Saree</td>
                    <td>UP Town Welfare Foundation</td>
                    <td>12/34C-4, Dhupchandi, Varanasi, Uttar Pradesh 221001</td>
                    <td>Design, sampling and common processing support</td>
                    <td>+91-9935347888</td>
                    <td>
                      <a
                        className="cfc-pdf-btn"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202502281803376272Varanasi-01.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf"></i> View PDF
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      <a
                        className="district-link"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202502281807000808Moradabad-01.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Moradabad
                      </a>
                    </td>
                    <td>Metal Craft</td>
                    <td>Gulden Arrow CPVD Foundation</td>
                    <td>Khajoor Ki Sarai, Ladwali, Agwanpur, 244001</td>
                    <td>CPVD for metal, plastic, wood</td>
                    <td>+91-9837061218</td>
                    <td>
                      <a
                        className="cfc-pdf-btn"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202502281807000808Moradabad-01.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf"></i> View PDF
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      <a
                        className="district-link"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202506261439117406CFC-Azamgarh-UCh.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Azamgarh
                      </a>
                    </td>
                    <td>Black Pottery</td>
                    <td>Black Pottery Foundation</td>
                    <td>Begpur Khalsa, Nizamabad, Azamgarh, Uttar Pradesh 276206</td>
                    <td>Common production center and kiln support</td>
                    <td>+91-9452422616</td>
                    <td>
                      <a
                        className="cfc-pdf-btn"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202506261439117406CFC-Azamgarh-UCh.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf"></i> View PDF
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>
                      <a
                        className="district-link"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202506261439551429CFC-Sitapur-UC.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sitapur
                      </a>
                    </td>
                    <td>Carpet (Dari)</td>
                    <td>Biswan Bunkar Welfare Society</td>
                    <td>Gurera, Biswan, Bhagwanpur Mafi, Sitapur 261201</td>
                    <td>Common processing center</td>
                    <td>+91-9838971910, 9415329417</td>
                    <td>
                      <a
                        className="cfc-pdf-btn"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202506261439551429CFC-Sitapur-UC.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf"></i> View PDF
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>
                      <a
                        className="district-link"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202506261439319563CFC-Sharanpur-UC.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Saharanpur
                      </a>
                    </td>
                    <td>Wood Crafting</td>
                    <td>Saharanpur Handicraft Development Center</td>
                    <td>Bonsa, Near UPSIDC Industrial Area, Pilkhani, Saharanpur 247232</td>
                    <td>Chemical treatment, seasoning and cutting support</td>
                    <td>+91-9897661000</td>
                    <td>
                      <a
                        className="cfc-pdf-btn"
                        href="https://odopup.in/en/article/downloadmedia/siteContent/202506261439319563CFC-Sharanpur-UC.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file-pdf"></i> View PDF
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Mainpuri</td>
                    <td>Tarkashi Art</td>
                    <td>Santoshimaa Tarkashi Handicraft Association</td>
                    <td>Khanketal, Bajhera, Bewar, Mainpuri, Uttar Pradesh 205301</td>
                    <td>Tool room and display center</td>
                    <td>+91-7830029398</td>
                    <td>
                      <span className="status-chip revision">Under Revision</span>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Sambhal</td>
                    <td>Horn Bone Craft</td>
                    <td>Horn Bone Crafts Foundation</td>
                    <td>Sarai Tareen, Sambhal 244303</td>
                    <td>Button processing and polishing unit</td>
                    <td>+91-9837140318</td>
                    <td>
                      <span className="status-chip revision">Under Revision</span>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Ghaziabad</td>
                    <td>Engineering Goods</td>
                    <td>AKG Foundation For Innovation & Product Development</td>
                    <td>
                      AKGEC Campus, 27th KM Milestone, Delhi-Meerut Expy, Ghaziabad
                      201015
                    </td>
                    <td>Modern tool room and testing support</td>
                    <td>+91-9891984680</td>
                    <td>
                      <span className="status-chip revision">Under Revision</span>
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Ayodhya</td>
                    <td>Jaggery</td>
                    <td>Ayodhya Dham Jaggery Association</td>
                    <td>Jalaluddin Nagar Uparh, Ayodhya, Uttar Pradesh 224161</td>
                    <td>Automatic jaggery processing support</td>
                    <td>+91-7880469668</td>
                    <td>
                      <span className="status-chip revision">Under Revision</span>
                    </td>
                  </tr>
                  <tr className="section-row">
                    <td colSpan={8}>CFCs Under Implementation</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Bijnor</td>
                    <td>Wood Craft</td>
                    <td>Devdaar Association</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Unnao</td>
                    <td>Zari Zardozi</td>
                    <td>Unnao Zari Zardozi Satbhav Foundation</td>
                    <td>-</td>
                    <td>Embroidery and tracing machine center</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Bareilly</td>
                    <td>Zari Zardozi</td>
                    <td>K Impression Society</td>
                    <td>-</td>
                    <td>Training center</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Bijnor</td>
                    <td>Wood Craft</td>
                    <td>Pushya Woodcraft Welfare Foundation</td>
                    <td>-</td>
                    <td>Seasoning and chemical treatment plant</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Bijnor</td>
                    <td>Wood Craft</td>
                    <td>EKAA Woodworks Foundation</td>
                    <td>-</td>
                    <td>Advanced tool room</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Moradabad</td>
                    <td>Metal Craft</td>
                    <td>LA Growth Tech Foundation</td>
                    <td>-</td>
                    <td>Hybrid ERP for exporters</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Bhadohi</td>
                    <td>Carpet</td>
                    <td>Bhadohi Woolen Association</td>
                    <td>-</td>
                    <td>Raw material processing center</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>Mirzapur</td>
                    <td>Carpet</td>
                    <td>Vindhya Spinners and Rugs Association</td>
                    <td>-</td>
                    <td>Raw material bank</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>Lucknow</td>
                    <td>Chikankari</td>
                    <td>SEWA - Samriddhi</td>
                    <td>-</td>
                    <td>Common production center</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>Muzaffarnagar</td>
                    <td>Jaggery</td>
                    <td>Badhai Agribusiness Producer Co. Ltd. (FPO)</td>
                    <td>-</td>
                    <td>Testing laboratory unit</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>Muzaffarnagar</td>
                    <td>Jaggery</td>
                    <td>
                      Jaivik Kisan Organic Farmers Producer Company Ltd. (FPO)
                    </td>
                    <td>-</td>
                    <td>Cold storage facility and warehouse</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>Gautam Buddha Nagar</td>
                    <td>Readymade Garments</td>
                    <td>Crossroads Infotech</td>
                    <td>-</td>
                    <td>Testing laboratory</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>Chitrakoot</td>
                    <td>Wooden Toys and Wooden Craft</td>
                    <td>Chitrakoot Hastashilp Samiti</td>
                    <td>-</td>
                    <td>Advanced tool room</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>Gonda</td>
                    <td>Food Processing (Corn)</td>
                    <td>Bharat Maize Producers' Foundation</td>
                    <td>-</td>
                    <td>Corn chips processing</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>Maharajganj</td>
                    <td>Furniture</td>
                    <td>Maharajganj Great Wood Foundation</td>
                    <td>-</td>
                    <td>Common wood seasoning center</td>
                    <td>-</td>
                    <td>
                      <span className="status-chip implementation">
                        Under Implementation
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
