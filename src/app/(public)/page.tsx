"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Counter from "@/components/Counter";
import Link from "next/link";
import { FaAddressBook, FaAmazon, FaArrowRight, FaBagShopping, FaBookOpenReader, FaCalendarDays, FaCartShopping, FaCircleExclamation, FaClockRotateLeft, FaCubes, FaEbay, FaFileInvoice, FaGlobe, FaHandHoldingDollar, FaHandPointDown, FaHands, FaHandshake, FaHeadset, FaIndustry, FaLayerGroup, FaListCheck, FaPaperPlane, FaPhone, FaQuoteLeft, FaShop, FaStore, FaTag, FaTruck, FaUserPlus, FaWarehouse } from "react-icons/fa6";
import { FaEye, FaGlobeAsia, FaListAlt, FaMapMarkedAlt } from "react-icons/fa";
import HeroSlider from "@/components/ui/HeroSlider";


export default function Home() {


  useScrollReveal();

  return (
    <main>
      {/* --------------------------------
                  HERO SECTION
      -------------------------------- */}
      <HeroSlider />


      {/* --------------------------------
                  QUICK STRIP
      -------------------------------- */}
      <div className="quick-strip" role="navigation" aria-label="Quick access">
        <div className="container">
          <div className="quick-grid">
            <Link href="supplier-registration" className="quick-item quick-item-primary">
              <div className="quick-icon"><FaShop /></div>
              <span className="quick-label">Register Business</span>
            </Link>
            <a href="#schemes" className="quick-item">
              <div className="quick-icon"><FaFileInvoice /> </div>
              <span className="quick-label">Govt. Schemes</span>
            </a>
            <a href="https://odopmart.up.gov.in/" className="quick-item">
              <div className="quick-icon"><FaCartShopping /></div>
              <span className="quick-label">ODOP Mart</span>
            </a>
            <Link href={'resources/grievance-redressal'}  className="quick-item">
              <div className="quick-icon"><FaCircleExclamation /></div>
              <span className="quick-label">File Grievance</span>
            </Link>
            <a className="quick-item">
              <div className="quick-icon"><FaListCheck /></div>
              <span className="quick-label">Track Application</span>
            </a>
          </div>
        </div>
      </div>


      {/* --------------------------------
                 LEADERSHIP DESK
      -------------------------------- */}
      <section className="section section-surface-white leadership-section" id="leadership-desk">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Leadership Desk</span>
            <h2>Hon'ble Leadership and Senior Administrative Officers</h2>
            <p>Leadership driving ODOP vision, implementation and enterprise support across Uttar Pradesh.</p>
            <div className="divider"><span></span><span></span><span></span></div>
          </div>
          <div className="leadership-showcase">
            <div className="leadership-officials-stack">
              <div className="leadership-row leadership-row-top">
                <article className="leadership-card leadership-card-highlight reveal">
                  <div className="leadership-photo-wrap">
                    <img src="/assets/img/CM-Yogi-Adityanath.jpg" alt="Shri Yogi Adityanath portrait"
                      className="leadership-photo" loading="lazy" />
                  </div>
                  <div className="leadership-card-body">
                    <span className="leadership-role leadership-role-pill">Chief Minister</span>
                    <h4>Yogi Adityanath
                    </h4>
                    <p>Hon'ble Chief Minister,
                      Uttar Pradesh</p>
                  </div>
                </article>
                <article className="leadership-card reveal delay-1">
                  <div className="leadership-photo-wrap">
                    <img src="/assets/img/Minister-Shri-Rakesh-Sachan.jpg" alt="Shri Rakesh Sachan portrait"
                      className="leadership-photo" loading="lazy" />
                  </div>
                  <div className="leadership-card-body">
                    <span className="leadership-role">Cabinet Minister</span>
                    <h4>Shri Rakesh Sachan</h4>
                    <p>Hon’ble Cabinet Minister of Micro Small and Medium Enterprises, Khadi and Villages
                      Industries, Sericulture Industries, Handloom and Textile.</p>
                  </div>
                </article>
              </div>
              <div className="leadership-row leadership-row-ias">
                <article className="leadership-card reveal">
                  <div className="leadership-photo-wrap">
                    <img src="/assets/img/Shri-Shashi-Prakash-Goyal-IAS.jpg"
                      alt="Shri Shashi Prakash Goyal IAS portrait" className="leadership-photo"
                      loading="lazy" />
                  </div>
                  <div className="leadership-card-body">
                    <span className="leadership-role">IAS Officer</span>
                    <h4>Shri Shashi Prakash Goyal, IAS</h4>
                    <p>Chief Secretary,
                      Uttar Pradesh.</p>
                  </div>
                </article>
                <article className="leadership-card reveal delay-2">
                  <div className="leadership-photo-wrap">
                    <img src="/assets/img/Shri-Alok-Kumar-IAS.jpg" alt="Shri Alok Kumar IAS portrait"
                      className="leadership-photo" loading="lazy" />
                  </div>
                  <div className="leadership-card-body">
                    <span className="leadership-role">IAS Officer</span>
                    <h4>Shri Alok Kumar, <br />IAS</h4>
                    <p>MSME & Export Promotion Department
                      Uttar Pradesh.</p>
                  </div>
                </article>
                <article className="leadership-card reveal delay-3">
                  <div className="leadership-photo-wrap">
                    <img src="/assets/img/Shri-K-Vijayendra-Pandian-IAS.jpg"
                      alt="Shri K. Vijayendra Pandian IAS portrait" className="leadership-photo"
                      loading="lazy" />
                  </div>
                  <div className="leadership-card-body">
                    <span className="leadership-role">IAS Officer</span>
                    <h4>Shri K. Vijayendra Pandian, IAS</h4>
                    <p>Commissioner & Director,
                      Directorate of Industries,
                      Kanpur, Uttar Pradesh.</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="leadership-map-column reveal delay-1">
              <div className="resource-map-panel leadership-map-panel">
                <div className="leadership-map-head">
                  <div className="leadership-map-line"></div>
                  <p className="leadership-map-eyebrow">Interactive ODOP Map</p>
                  <h3 className="leadership-map-title">Explore Uttar Pradesh Districts</h3>
                  <p className="leadership-map-copy">View district-wise ODOP product coverage across Uttar Pradesh.</p>
                  <p className="leadership-map-hint">Click any district on the map to open that district profile page.
                    <FaHandPointDown /></p>
                </div>
                <div className="resource-map-visual leadership-map-visual">
                  <img src="/assets/img/up-map.png" alt="Map of Uttar Pradesh showing district-wise ODOP products"
                    loading="lazy" useMap="#odop-up-map" className="district-map-image" />
                  {/* MAP SVG WITH CLICKABLE AREAS */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------
                 DISTRICT PRODUCTS GRIDS
      -------------------------------- */}
      <section className="section section-surface-white district-grid-identical">
        <div className="container">
          <div className="section-header"><span className="eyebrow">Explore</span>
            <h2>District-wise ODOP Products</h2>
            <p>Each of UP's 75 districts has a unique product identity. Explore the rich heritage of craftsmanship
              and across the state.</p>
            <div className="divider"><span></span><span></span><span></span></div>
          </div>
          <div className="districts-grid">

            {
              districtProductData.map((product, index) => (
                <div key={index} className={`district-card reveal delay-${index % 4}`}>

                  <div className="district-card-img"><img src={product.imageUrl} alt={`${product.district} primary product`}
                    loading="lazy" /><span className="product-tag">{product.category}</span></div>
                  <div className="district-card-thumb"><img src={product.imageUrl} alt="District thumbnail"
                    loading="lazy" /></div>

                  <div className="district-card-body">
                    <h4>{product.district}</h4>
                    <p className="district-product"><FaTag /> {product.category}</p>

                    <div className="district-meta district-meta-list">
                      {
                        product.meta.map((metaItem, metaIndex) => {
                          const Icon = metaItem.icon;
                          return (
                            <span key={metaIndex}> <Icon /> {metaItem.text}</span>
                          );
                        })
                      }
                    </div>

                    <a href="agra-district-profile.html" className="btn btn-outline-primary btn-sm w-100">
                      <FaEye />  View District Profile </a>
                  </div>

                </div>
              ))
            }

          </div >
          <div className="section-action"><a href="district-products.html" className="btn btn-outline-secondary btn-lg"> <FaMapMarkedAlt /> Explore All 75 Districts </a></div>
        </div >
      </section >

      {/* --------------------------------
                STATICS SECTION
      -------------------------------- */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card reveal">
              <div className="stat-icon"> <FaMapMarkedAlt /> </div>
              <span className="stat-number"><Counter value="75" /></span>
              <span className="stat-label">ODOP Districts</span>
            </div>
            <div className="stat-card reveal delay-1">
              <div className="stat-icon"> <FaStore /> </div>
              <span className="stat-number"><Counter value="12,400" /></span>
              <span className="stat-label">Verified Suppliers</span>
            </div>
            <div className="stat-card reveal delay-2">
              <div className="stat-icon"> <FaHands /> </div>
              <span className="stat-number"><Counter value="3,200" /></span>
              <span className="stat-label">Master Artisans</span>
            </div>
            <div className="stat-card reveal delay-3">
              <div className="stat-icon"> <FaGlobeAsia /> </div>
              <span className="stat-number"><Counter value="42" /></span>
              <span className="stat-label">Export Countries</span>
            </div>
          </div>
        </div>
      </section>


      {/* --------------------------------
                ODOP SERVICES SECTION
      -------------------------------- */}
      <section className="section section-surface-soft" id="key-services">
        <div className="container">
          <div className="section-header"><span className="eyebrow">Entrepreneur Services</span>
            <h2>ODOP Services and Support</h2>
            <p>Access ODOP's core business support services in one place.</p>
            <div className="divider"><span></span><span></span><span></span></div>
          </div>
          <div className="services-grid">
            <article className="service-card reveal">
              <div className="service-icon"> <FaBookOpenReader /> </div>
              <h4>ODOP Incubation</h4>
              <p>Project reports and videos for business learning.</p>
              <div className="service-links">
                <Link href="https://odopup.in/en/page/video-gallery" target="_blank" rel="noopener"
                  className="btn btn-primary btn-sm">View Reports &amp; Videos</Link>
              </div>
            </article>
            <article className="service-card reveal delay-1">
              <div className="service-icon"> <FaAddressBook /> </div>
              <h4>Supplier Directory</h4>
              <p>Verified district-wise suppliers across ODOP categories.</p>
              <div className="service-links">
                <Link href="supplier-listing.html" className="btn btn-primary btn-sm">Access Directory</Link>
              </div>
            </article>
            <article className="service-card reveal delay-2">
              <div className="service-icon"> <FaHandshake /> </div>
              <h4>Buyer-Seller Meet</h4>
              <p>Access official procurement and buyer-seller coordination links.</p>
              <div className="service-links">
                <Link href="#buyer-seller-platform" className="btn btn-primary btn-sm">View Official Links</Link>
              </div>
            </article>
            <article className="service-card reveal">
              <div className="service-icon"> <FaHeadset /> </div>
              <h4>Help and Support</h4>
              <p>Support channels for guidance and assistance.</p>
              <div className="service-links">
                <Link href="contact-us.html" className="btn btn-primary btn-sm">Contact Support Desk</Link>
              </div>
            </article>
            <article className="service-card reveal delay-1">
              <div className="service-icon"> <FaCircleExclamation /> </div>
              <h4>Register Grievance</h4>
              <p>Submit and track your grievance online.</p>
              <div className="service-links">
                <Link href="#grievance-redressal" className="btn btn-primary btn-sm">Submit Grievance</Link>
              </div>
            </article>
            <article className="service-card reveal delay-2">
              <div className="service-icon"> <FaUserPlus /> </div>
              <h4>Register Business</h4>
              <p>Start your ODOP supplier registration and onboarding process.</p>
              <div className="service-links">
                <Link href="/supplier-registration" className="btn btn-primary btn-sm">Apply for Registration</Link>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* --------------------------------
                GOVERNEMENT SCHEMES SECTION
      -------------------------------- */}
      <section className="section section-surface-whitw" id="schemes">
        <div className="container">
          <div className="section-header"><span className="eyebrow">Financial Support</span>
            <h2>Government Schemes &amp; Finance</h2>
            <p>Explore available schemes, subsidies, skill support, export assistance, and loans for your ODOP
              enterprise.</p>
            <div className="divider"><span></span><span></span><span></span></div>
          </div>
          <div className="schemes-grid">
            <div className="scheme-card scheme-orange reveal">
              <div className="scheme-card-header">
                <div className="scheme-icon"><img src="assets/img/schemes/PMEGP.jpg" alt="PMEGP logo" loading="lazy" /></div>
                <h4>PMEGP</h4><span className="scheme-ministry">Prime Minister Employment Generation
                  Programme</span>
              </div>
              <div className="scheme-card-body">
                <p>Provides margin money subsidy for setting up new micro-enterprises in manufacturing and
                  service sectors.</p>
                <div className="scheme-amount">Up to Rs 25 Lakh <small>project cost</small></div>
                <div className="scheme-tags"><span className="scheme-tag">Manufacturing</span><span
                  className="scheme-tag">Service</span><span className="scheme-tag">Subsidy 35%</span></div>
              </div>
              <div className="scheme-card-footer">
                <a href="govt-schemes.html" className="btn btn-primary btn-sm w-100">View Scheme Details <FaArrowRight /></a>
              </div>
            </div>
            <div className="scheme-card scheme-blue reveal delay-1">
              <div className="scheme-card-header">
                <div className="scheme-icon"><img src="assets/img/schemes/clcss.jpg"
                  alt="MSME technology upgrade scheme logo" loading="lazy" /></div>
                <h4>MSME Technology Upgrade</h4><span className="scheme-ministry">Technology and machinery support
                  for UP enterprises</span>
              </div>
              <div className="scheme-card-body">
                <p>Capital subsidy for purchasing advanced machinery and upgrading production processes in UP
                  enterprises.</p>
                <div className="scheme-amount">Up to Rs 50 Lakh <small>capital subsidy</small></div>
                <div className="scheme-tags"><span className="scheme-tag">Machinery</span><span
                  className="scheme-tag">Technology</span><span className="scheme-tag">50% Subsidy</span></div>
              </div>
              <div className="scheme-card-footer">
                <a href="govt-schemes.html" className="btn btn-secondary btn-sm w-100">View Scheme Details <FaArrowRight /></a>
              </div>
            </div>
            <div className="scheme-card scheme-blue reveal delay-2">
              <div className="scheme-card-header">
                <div className="scheme-icon"><img src="assets/img/schemes/Pradhan-Mantri-Kaushal-Vikas.png"
                  alt="Pradhan Mantri Kaushal Vikas Yojana logo" loading="lazy" /></div>
                <h4>Kaushal Vikas for Artisans</h4><span className="scheme-ministry">Skill development,
                  certification, and stipend support</span>
              </div>
              <div className="scheme-card-body">
                <p>Free skill training programs, certification, and stipend for artisans registered under ODOP
                  districts.</p>
                <div className="scheme-amount">Rs 8,000 <small>monthly stipend</small></div>
                <div className="scheme-tags"><span className="scheme-tag">Training</span><span
                  className="scheme-tag">Certificate</span><span className="scheme-tag">Stipend</span></div>
              </div>
              <div className="scheme-card-footer">
                <a href="govt-schemes.html" className="btn btn-secondary btn-sm w-100">View Scheme Details <FaArrowRight /></a>
              </div>
            </div>
            <div className="scheme-card scheme-green reveal delay-3">
              <div className="scheme-card-header">
                <div className="scheme-icon"><img src="assets/img/schemes/Pradhanmantri-Mudra-Yojna.png"
                  alt="Pradhan Mantri Mudra Yojana logo" loading="lazy" /></div>
                <h4>MUDRA Loan</h4><span className="scheme-ministry">Pradhan Mantri Mudra Yojana for small
                  businesses</span>
              </div>
              <div className="scheme-card-body">
                <p>Collateral-free micro loans for small businesses under ODOP, available through nationalized
                  and partner banks.</p>
                <div className="scheme-amount">Rs 10 Lakh <small>no collateral</small></div>
                <div className="scheme-tags"><span className="scheme-tag">Loan</span><span className="scheme-tag">No
                  Collateral</span></div>
              </div>
              <div className="scheme-card-footer">
                <a href="govt-schemes.html" className="btn btn-success btn-sm w-100">View Scheme Details <FaArrowRight /></a>
              </div>
            </div>
          </div>
          <div className="section-action"><a href="govt-schemes.html" className="btn btn-outline-secondary btn-lg"><FaListAlt /> View All Schemes </a></div>
        </div>
      </section>

      {/* --------------------------------
            COFFEE TABLE BOOK
      -------------------------------- */}
      <section className="section section-surface-soft" id="coffee-book-map">
        <div className="container">
          <div className="section-header"><span className="eyebrow">Official Resources</span>
            <h2>Official Publications and Resource Links</h2>
            <p>Access official ODOP publications, resource links and approved digital platform references.
            </p>
            <div className="divider"><span></span><span></span><span></span></div>
          </div>
          <div className="resource-showcase-shell">
            <div className="resource-showcase resource-showcase-single">
              <div className="resource-column reveal">
                <div className="resource-column-heading">
                  <h3>Coffee Table Book</h3>
                </div>
                <div className="resource-card-grid">
                  <a href="https://odopup.in/pdf/Coffee-Table-Book_040424.pdf" target="_blank" rel="noopener"
                    className="resource-card-item resource-card-wide">
                    <div className="resource-card-thumb"><img
                      src="https://odopup.in/downloadmedia/siteContent/201903121306546330cover.jpg"
                      alt="Coffee Table Book" loading="lazy" /></div>
                    <span className="resource-card-link">Open Resource <FaArrowRight /> </span>
                  </a>
                  <a href="https://odopmart.up.gov.in/" target="_blank" rel="noopener"
                    className="resource-card-item">
                    <div className="resource-card-thumb"><img
                      src="https://odopup.in/downloadmedia/siteContent/202504221623071306ODOP-MART_220425.jpg"
                      alt="ODOP Mart" loading="lazy" /></div>
                    <span className="resource-card-link">Open Resource <FaArrowRight /> </span>
                  </a>
                  <a href="https://odopup.in/en/newsletter" target="_blank" rel="noopener"
                    className="resource-card-item">
                    <div className="resource-card-thumb"><img
                      src="https://odopup.in/downloadmedia/siteContent/202107241651555215newsletter_240721.jpg"
                      alt="Newsletter" loading="lazy" /></div>
                    <span className="resource-card-link">Open Resource <FaArrowRight /> </span>
                  </a>
                  <a href="https://www.nsic.co.in/" target="_blank" rel="noopener" className="resource-card-item">
                    <div className="resource-card-thumb"><img
                      src="https://odopup.in/downloadmedia/siteContent/202106241644073014NSIC_240621.jpg"
                      alt="National Small Industries Corporation" loading="lazy" /></div>
                    <span className="resource-card-link">Open Resource <FaArrowRight /> </span>
                  </a>
                  <a href="https://apps.apple.com/in/app/msme-sathi/id1538917709" target="_blank"
                    rel="noopener" className="resource-card-item">
                    <div className="resource-card-thumb"><img
                      src="https://odopup.in/downloadmedia/siteContent/202107241651555059msme-sathi_240721.jpg"
                      alt="MSME Sathi" loading="lazy" /></div>
                    <span className="resource-card-link">Open Resource <FaArrowRight /> </span>
                  </a>
                  <a href="https://apps.apple.com/in/app/udyam-sarthi/id1545330242" target="_blank"
                    rel="noopener" className="resource-card-item">
                    <div className="resource-card-thumb"><img
                      src="https://odopup.in/downloadmedia/siteContent/202107241651555059udhyan_240721.jpg"
                      alt="Udyam Sarthi" loading="lazy" /></div>
                    <span className="resource-card-link">Open Resource <FaArrowRight /> </span>
                  </a>

                  <a href="https://odopup.in/pdf/_FINAL-ODOP-ENG-BOOKLET-compressed.pdf" target="_blank"
                    rel="noopener" className="resource-card-item">
                    <div className="resource-card-thumb"><img
                      src="https://odopup.in/downloadmedia/siteContent/202107241651555371booklet_240721.jpg"
                      alt="ODOP Booklet" loading="lazy" /></div>
                    <span className="resource-card-link">Open Resource <FaArrowRight /> </span>
                  </a>


                  <a href="https://www.msmemart.com/" target="_blank" rel="noopener"
                    className="resource-card-item">
                    <div className="resource-card-thumb"><img
                      src="https://odopup.in/downloadmedia/siteContent/202106241644072858MSME_240621.jpg"
                      alt="MSME Global Mart" loading="lazy" /></div>
                    <span className="resource-card-link">Open Resource <FaArrowRight /> </span>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* --------------------------------
            NEWS AND EVENTS SECTION
      -------------------------------- */}
      <section className="section section-surface-white news-updates-section" id="news-events">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Official Updates</span>
            <h2>News &amp; Events</h2>
            <p>Track policy announcements, district milestones, trade participation, and export-led progress across
              the ODOP programme.</p>
            <div className="divider"><span></span><span></span><span></span></div>
          </div>
          <div className="news-updates-layout">
            <div className="news-updates-sidebar reveal ">
              <div className="news-updates-sidebar-inner">
                <div className="news-updates-line"></div>
                <p className="news-updates-eyebrow">Browse By Category</p>
                <h3 className="news-updates-title">Filter Updates</h3>
                <p className="news-updates-copy">Choose a category to focus on domestic activity, national exposure,
                  or international ODOP highlights.</p>
                <div className="news-updates-filters" role="tablist" aria-label="News categories">
                  <button className="news-filter-btn is-active" type="button" data-filter="all"
                    aria-pressed="true">All</button>
                  <button className="news-filter-btn" type="button" data-filter="domestic"
                    aria-pressed="false">Domestic</button>
                  <button className="news-filter-btn" type="button" data-filter="national"
                    aria-pressed="false">National</button>
                  <button className="news-filter-btn" type="button" data-filter="international"
                    aria-pressed="false">International</button>
                </div>
              </div>
            </div>
            <div className="news-updates-list reveal  delay-1">
              <a className="news-update-card" href="https://odopup.in/en/news?Newslistslug=en-national-events"
                target="_blank" rel="noopener" data-category="national">
                <div className="news-update-card-main">
                  <div className="news-update-card-meta">
                    <span className="news-update-pill">National</span>
                    <span className="news-update-date"><FaCalendarDays />20 Mar 2026</span>
                  </div>
                  <p className="news-update-text">ODOP products showcased at International Trade Fair, New Delhi
                  </p>
                </div>
                <span className="news-update-arrow" aria-hidden="true"><FaArrowRight /></span>
              </a>
              <a className="news-update-card" href="https://odopup.in/en/news?Newslistslug=en-domestics-events"
                target="_blank" rel="noopener" data-category="domestic">
                <div className="news-update-card-main">
                  <div className="news-update-card-meta">
                    <span className="news-update-pill">Domestic</span>
                    <span className="news-update-date"><FaCalendarDays />18 Mar 2026</span>
                  </div>
                  <p className="news-update-text">New CFC inaugurated in Varanasi for Banarasi Silk weavers</p>
                </div>
                <span className="news-update-arrow" aria-hidden="true"><FaArrowRight /></span>
              </a>
              <a className="news-update-card" href="https://odopup.in/en/news?Newslistslug=en-domestics-events"
                target="_blank" rel="noopener" data-category="domestic">
                <div className="news-update-card-main">
                  <div className="news-update-card-meta">
                    <span className="news-update-pill">Domestic</span>
                    <span className="news-update-date"><FaCalendarDays />15 Mar 2026</span>
                  </div>
                  <p className="news-update-text">Lucknow Chikankari artisans receive GI tag certification support
                  </p>
                </div>
                <span className="news-update-arrow" aria-hidden="true"><FaArrowRight /></span>
              </a>
              <a className="news-update-card" href="https://odopup.in/en/news?Newslistslug=en-international-eventsl"
                target="_blank" rel="noopener" data-category="international">
                <div className="news-update-card-main">
                  <div className="news-update-card-meta">
                    <span className="news-update-pill">International</span>
                    <span className="news-update-date"><FaCalendarDays />12 Mar 2026</span>
                  </div>
                  <p className="news-update-text">ODOP products displayed at Dubai Expo 2026</p>
                </div>
                <span className="news-update-arrow" aria-hidden="true"><FaArrowRight /></span>
              </a>
              <a className="news-update-card" href="https://odopup.in/en/news?Newslistslug=en-domestics-events"
                target="_blank" rel="noopener" data-category="domestic">
                <div className="news-update-card-main">
                  <div className="news-update-card-meta">
                    <span className="news-update-pill">Domestic</span>
                    <span className="news-update-date"><FaCalendarDays />10 Mar 2026</span>
                  </div>
                  <p className="news-update-text">CM launches new skill development centre for leather artisans in
                    Agra</p>
                </div>
                <span className="news-update-arrow" aria-hidden="true"><FaArrowRight /></span>
              </a>
              <a className="news-update-card" href="https://odopup.in/en/news?Newslistslug=en-international-eventsl"
                target="_blank" rel="noopener" data-category="international">
                <div className="news-update-card-main">
                  <div className="news-update-card-meta">
                    <span className="news-update-pill">International</span>
                    <span className="news-update-date"><FaCalendarDays />8 Mar 2026</span>
                  </div>
                  <p className="news-update-text">Moradabad brassware exported to 15 new countries under ODOP
                    initiative</p>
                </div>
                <span className="news-update-arrow" aria-hidden="true"><FaArrowRight /></span>
              </a>
              <a className="news-update-card" href="https://odopup.in/en/news?Newslistslug=en-national-events"
                target="_blank" rel="noopener" data-category="national">
                <div className="news-update-card-main">
                  <div className="news-update-card-meta">
                    <span className="news-update-pill">National</span>
                    <span className="news-update-date"><FaCalendarDays />5 Mar 2026</span>
                  </div>
                  <p className="news-update-text">Rs 500 Crore sanctioned for ODOP scheme expansion in FY 2026-27
                  </p>
                </div>
                <span className="news-update-arrow" aria-hidden="true"><FaArrowRight /></span>
              </a>

              <div className="news-updates-empty" hidden>No updates available for this category.</div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------
            MARKETPLACE AND PROCUREMENT LINKS
      -------------------------------- */}
      <section className="section section-surface-soft" id="buyer-seller-platform">
        <div className="container">
          <div className="section-header"><span className="eyebrow">Marketplace Access</span>
            <h2>Official Marketplace and Procurement Links</h2>
            <p>Official marketplace links referenced on the ODOP website.</p>
            <div className="divider"><span></span><span></span><span></span></div>
          </div>
          <div className="platform-grid">
            <article className="platform-card reveal">
              <div className="platform-icon"><FaAmazon /></div>
              <h4>Amazon</h4>
              <p>Official access links for procurement and seller onboarding.</p>
              <div className="platform-actions">
                <a href="https://www.amazon.in/b/ref=s9_acss_bw_cg_kalapart_2d1_w?node=16204640031&pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-7&pf_rd_r=34RF0G7PF6H0KYR2J076&pf_rd_t=101&pf_rd_p=1ddc12b0-558b-4b5b-bb70-c018ea47f19f&pf_rd_i=15424266031"
                  target="_blank" rel="noopener" className="btn btn-primary btn-sm">Buyer Access</a>
                <a href="https://forms.gle/j2ZvA7XcPjwuTaEJA" target="_blank" rel="noopener"
                  className="btn btn-outline-primary btn-sm">Seller Access</a>
              </div>
            </article>
            <article className="platform-card reveal delay-1">
              <div className="platform-icon"><FaStore /></div>
              <h4>GeM Portal</h4>
              <p>Official GeM training access.</p>
              <div className="platform-actions">
                <a href="https://gem.gov.in/training/training_module" target="_blank" rel="noopener"
                  className="btn btn-secondary btn-sm">Access Portal</a>
              </div>
            </article>
            <article className="platform-card reveal delay-2">
              <div className="platform-icon"><FaEbay /></div>
              <h4>eBay</h4>
              <p>Seller center link from the ODOP website.</p>
              <div className="platform-actions">
                <a href="https://sellglobal.ebay.in/seller-center/?source=ODOP-website" target="_blank"
                  rel="noopener" className="btn btn-primary btn-sm">Access Portal</a>
              </div>
            </article>
            <article className="platform-card reveal">
              <div className="platform-icon"><FaCartShopping /></div>
              <h4>ODOP Mart</h4>
              <p>Direct marketplace link from the ODOP menu.</p>
              <div className="platform-actions">
                <a href="https://odopmart.up.gov.in/" target="_blank" rel="noopener"
                  className="btn btn-secondary btn-sm">Access Portal</a>
              </div>
            </article>
            <article className="platform-card reveal delay-1">
              <div className="platform-icon"><FaBagShopping /></div>
              <h4>ODOP Flipkart Store</h4>
              <p>Official Flipkart store link for ODOP products.</p>
              <div className="platform-actions">
                <a href="https://www.flipkart.com/welcome-to-kumbh-mela-with-flipkart-store" target="_blank"
                  rel="noopener" className="btn btn-primary btn-sm">Access Store</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* --------------------------------
           SUCCESS STORIES SECTION
      -------------------------------- */}
      <section className="section success-stories-section" id="success-stories">
        <div className="container">
          <div className="section-header"><span className="eyebrow">Success Stories</span>
            <h2>ODOP Success Stories</h2>
            <p>Real stories of artisans, exporters, and business owners who expanded their reach through the ODOP
              ecosystem.</p>
            <div className="divider"><span></span><span></span><span></span></div>
          </div>
          <div className="success-stories-grid">
            <article className="story-card reveal">
              <div className="story-quote"><FaQuoteLeft /></div>
              <p className="story-text">Moradabad brassware orders nearly doubled within six months of joining ODOP.
              </p>
              <div className="story-metrics"><span>Moradabad Brass</span><span>2x order growth</span></div>
              <div className="story-author">
                <div className="story-author-badge">RK</div>
                <div>
                  <h4>Rizwan Khan</h4>
                  <p>Brass Handicraft Manufacturer, Moradabad</p>
                </div>
              </div>
            </article>
            <article className="story-card reveal delay-1">
              <div className="story-quote"><FaQuoteLeft /></div>
              <p className="story-text">Lucknow Chikankari artisans moved from fairs to regular boutique orders.</p>
              <div className="story-metrics"><span>Lucknow Chikankari</span><span>Multi-city supply</span></div>
              <div className="story-author">
                <div className="story-author-badge">SA</div>
                <div>
                  <h4>Shabana Ali</h4>
                  <p>Artisan Collective Lead, Lucknow</p>
                </div>
              </div>
            </article>
            <article className="story-card reveal delay-2">
              <div className="story-quote"><FaQuoteLeft /></div>
              <p className="story-text">ODOP export support helped our Banarasi silk catalogue reach global buyers.
              </p>
              <div className="story-metrics"><span>Varanasi Silk</span><span>Export-ready brand</span></div>
              <div className="story-author">
                <div className="story-author-badge">VP</div>
                <div>
                  <h4>Vikas Pandey</h4>
                  <p>Silk Export Entrepreneur, Varanasi</p>
                </div>
              </div>
            </article>
            <article className="story-card reveal delay-3">
              <div className="story-quote"><FaQuoteLeft /></div>
              <p className="story-text">Kannauj attar makers expanded premium retail reach with ODOP support.</p>
              <div className="story-metrics"><span>Kannauj Attar</span><span>Retail expansion</span></div>
              <div className="story-author">
                <div className="story-author-badge">AF</div>
                <div>
                  <h4>Arif Farooqui</h4>
                  <p>Perfume Entrepreneur, Kannauj</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* --------------------------------
           FACILITATION AND GRIEVANCE REDRESSAL SECTION
      -------------------------------- */}
      <section className="section section-surface-soft" id="grievance-redressal">
        <div className="container">
          <div className="section-header grievance-section-header"><span className="eyebrow">Support Desk</span>
            <h2>Facilitation &amp; Grievance Redressal</h2>
            <p>Submit your issue, get a ticket ID, and track resolution through ODOP support channels with defined
              service timelines.</p>
            <div className="divider"><span></span><span></span><span></span></div>
          </div>
          <div className="grievance-wrap">
            <div className="grievance-info">
              <h3>ODOP Support Assistance</h3>
              <p>Our centralized facilitation centre handles all queries, business support requests, and
                grievances with defined service timelines and escalation matrices.</p>
              <div className="grievance-steps">
                <div className="grievance-step">
                  <div className="step-num">1</div>
                  <div className="step-text">
                    <strong>Submit Your Grievance</strong>
                    <small>Complete the form in less than 3 minutes</small>
                  </div>
                </div>
                <div className="grievance-step">
                  <div className="step-num">2</div>
                  <div className="step-text">
                    <strong>Get a Ticket ID</strong>
                    <small>Track your case via SMS and portal</small>
                  </div>
                </div>
                <div className="grievance-step">
                  <div className="step-num">3</div>
                  <div className="step-text">
                    <strong>Resolution within 15 Days</strong>
                    <small>Auto-escalation if SLA is breached</small>
                  </div>
                </div>
              </div>
              <div className="grievance-actions">
                <a className="btn btn-primary"><FaClockRotateLeft /> Track Grievance Status</a>
              </div>
            </div>
            <div className="grievance-form">
              <div className="grievance-form-header">
                <h4><FaCircleExclamation /> Submit a New Grievance</h4>
                <p>Share the issue details below and the ODOP team will connect with you with the next action.
                </p>
              </div>
              <form noValidate>
                <div className="form-group">
                  <label htmlFor="g-name">Full Name *</label>
                  <input type="text" id="g-name" placeholder="Enter your full name" required />
                </div>
                <div className="grievance-form-grid">
                  <div className="form-group">
                    <label htmlFor="g-mobile">Mobile Number *</label>
                    <input type="tel" id="g-mobile" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="g-district">District *</label>
                    <select id="g-district" required>
                      <option value="">Select district</option>
                      <option>Varanasi</option>
                      <option>Lucknow</option>
                      <option>Agra</option>
                      <option>Kannauj</option>
                      <option>Moradabad</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="g-category">Issue Category *</label>
                  <select id="g-category" required>
                    <option value="">Select category</option>
                    <option>Scheme Application</option>
                    <option>Business Registration</option>
                    <option>Loan and Finance</option>
                    <option>ONDC / E-Commerce</option>
                    <option>Training Program</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="g-desc">Describe Your Issue *</label>
                  <textarea id="g-desc" rows={4} placeholder="Please describe your issue in detail..."
                    required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg grievance-submit-btn">
                  <FaPaperPlane /> Submit Grievance
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main >
  );
}


const districtProductData = [
  {
    district: "Agra",
    category: "Leather Products",
    productTitle: "Agra",
    meta: [
      { icon: FaLayerGroup, text: "Marble inlay work" },
      { icon: FaCubes, text: "Petha Making" }
    ],
    imageUrl: "/assets/img/district/agra.jpg",
    profileLink: "agra-district-profile.html"
  },
  {
    district: "Lucknow",
    category: "Chikankari Zari Zardozi",
    productTitle: "Lucknow",
    meta: [
      { icon: FaLayerGroup, text: "Chikankari Clutches & Silk Stoles" },
      { icon: FaCubes, text: "Muslin Fabric Supply" }
    ],
    imageUrl: "/assets/img/district/lucknow.jpg",
    profileLink: "lucknow-district-profile.html"
  },
  {
    district: "Moradabad",
    category: "Metal Craft",
    productTitle: "Moradabad",
    meta: [
      { icon: FaLayerGroup, text: "Decorative Copper Water Pitchers Cups" },
      { icon: FaCubes, text: "Engraving &amp; Design Work" }
    ],
    imageUrl: "/assets/img/district/moradabad.jpg",
    profileLink: "moradabad-district-profile.html"
  },
  {
    district: "Bhadohi",
    category: "Carpet (Dari)",
    productTitle: "Bhadohi",
    meta: [
      { icon: FaLayerGroup, text: "Wool" },
      { icon: FaCubes, text: "Carpet Cleaning &amp; Repair Service" }
    ],
    imageUrl: "/assets/img/district/bhadohi.jpg",
    profileLink: "bhadohi-district-profile.html"
  },
  {
    district: "Varanasi",
    category: "Banarasi Silk Saree",
    productTitle: "Varanasi",
    meta: [
      { icon: FaLayerGroup, text: "Banarasi Silk Garments (Kurta, Jackets)" },
      { icon: FaCubes, text: "Spice Box Making" }
    ],
    imageUrl: "/assets/img/district/varanasi.jpg",
    profileLink: "varanasi-district-profile.html"
  },
  {
    district: "Aligarh",
    category: "Locks",
    productTitle: "Aligarh",
    meta: [
      { icon: FaLayerGroup, text: "Brass Furniture Hardware" },
      { icon: FaCubes, text: "Steel Sheet Cutting Stamping" }
    ],
    imageUrl: "/assets/img/district/aligarh.jpg",
    profileLink: "aligarh-district-profile.html"
  },
  {
    district: "Firozabad",
    category: "Glassware bangles",
    productTitle: "Firozabad",
    meta: [
      { icon: FaLayerGroup, text: "Glass Lamp" },
      { icon: FaCubes, text: "Silica Sand" }
    ],
    imageUrl: "/assets/img/district/firozabad.jpg",
    profileLink: "firozabad-district-profile.html"
  },
  {
    district: "Kannauj",
    category: "Perfume (Attar)",
    productTitle: "Kannauj",
    meta: [
      { icon: FaLayerGroup, text: "Rose Water" },
      { icon: FaCubes, text: "Perfume Bottles Manufacturing" }
    ],
    imageUrl: "/assets/img/district/kannauj.jpg",
    profileLink: "kannauj-district-profile.html"
  },




];


