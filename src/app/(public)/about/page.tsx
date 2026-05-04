import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ODOP | One District One Product – Uttar Pradesh",
  description:
    "About ODOP UP – Learn about the One District One Product initiative of Uttar Pradesh, its objectives, impact, and district-wise product mapping.",
};

export default function AboutIntroductionPage() {
  return (
    <main className="main-content schemes-page about-static-page">
      {/* ===== PAGE HERO BANNER ===== */}
      <section className="page-hero about-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">One District One Product</h1>
          <p className="page-hero-subtitle">
            A transformative initiative by the Government of Uttar Pradesh to revive,
            promote and develop the traditional crafts, arts, and industries that define each of the state&apos;s 75
            unique districts.
          </p>
        </div>
      </section>

      {/* ===== IMPACT COUNTER SECTION ===== */}
      <section className="impact-counter-section">
        <div className="container">
          <div className="impact-counters-grid">
            <div className="impact-counter">
              <div className="impact-counter-icon impact-counter-icon-primary">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              </div>
              <div className="impact-counter-data">
                <span className="impact-number" data-target="75">75</span>
                <span className="impact-label">Districts Covered</span>
              </div>
            </div>
            <div className="impact-counter">
              <div className="impact-counter-icon impact-counter-icon-secondary">
                <i className="fas fa-industry" aria-hidden="true"></i>
              </div>
              <div className="impact-counter-data">
                <span className="impact-number" data-target="96">96</span>
                <span className="impact-label">Traditional Products</span>
              </div>
            </div>
            <div className="impact-counter">
              <div className="impact-counter-icon impact-counter-icon-success">
                <i className="fas fa-users" aria-hidden="true"></i>
              </div>
              <div className="impact-counter-data">
                <span className="impact-number" data-target="32">32 Lakh+</span>
                <span className="impact-label">Artisans Covered</span>
              </div>
            </div>
            <div className="impact-counter">
              <div className="impact-counter-icon impact-counter-icon-gold">
                <i className="fas fa-globe" aria-hidden="true"></i>
              </div>
              <div className="impact-counter-data">
                <span className="impact-number" data-target="60">60+</span>
                <span className="impact-label">Export Destinations</span>
              </div>
            </div>
            <div className="impact-counter">
              <div className="impact-counter-icon impact-counter-icon-purple">
                <i className="fas fa-rupee-sign" aria-hidden="true"></i>
              </div>
              <div className="impact-counter-data">
                <span className="impact-number" data-target="25">Rs, 25,000 Cr+</span>
                <span className="impact-label">Annual Turnover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS ODOP SECTION ===== */}
      <section className="about-section">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-overview-visual">
              <div className="about-image-stack">
                <img src="/assets/img/odop-1.jpg" alt="Traditional UP Craft" className="about-main-image" loading="lazy" />
              </div>
            </div>
            <div className="about-overview-content">
              <div className="section-eyebrow">What is ODOP?</div>
              <h2 className="section-title">Celebrating the Unique Heritage of Every District</h2>
              <p>The <strong>One District One Product (ODOP)</strong> initiative was launched by the Government of
                Uttar Pradesh in January 2018 with a vision to create a new identity for each district based on
                its traditional art, craft, or industry.</p>
              <p>Under this scheme, each of Uttar Pradesh&apos;s 75 districts has been mapped to one signature product
                that represents its cultural heritage, artisan skill, and economic potential. From the
                world-renowned <em>Banarasi Silk</em> of Varanasi to the intricate <em>Chikankari</em>
                embroidery of Lucknow, ODOP celebrates and elevates each of these unique crafts.</p>
              <p>The programme provides a complete ecosystem - from raw material access and skill training to
                technology upgradation, branding, and domestic/international market linkage.</p>
              <div className="about-highlights-list">
                <div className="about-highlight-item">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>Launched: January 24, 2018 by Chief Minister Yogi Adityanath</span>
                </div>
                <div className="about-highlight-item">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>Adopted as National Programme by Government of India (2019)</span>
                </div>
                <div className="about-highlight-item">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>Nodal Agency: MSME &amp; Export Promotion Department, UP</span>
                </div>
                <div className="about-highlight-item">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                  <span>Budget allocation: Rs.25,000 crore for 5-year period</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OBJECTIVES SECTION ===== */}
      <section className="objectives-section">
        <div className="container">
          <div className="section-header centered-header">
            <div className="section-eyebrow">Our Goals</div>
            <h2 className="section-title">Key Objectives of ODOP</h2>
            <p className="section-subtitle">The programme is built on six core pillars that together create a complete
              and sustainable ecosystem for artisans and small businesses.</p>
          </div>
          <div className="objectives-grid">
            <div className="objective-card">
              <div className="objective-icon objective-icon-primary">
                <i className="fas fa-seedling" aria-hidden="true"></i>
              </div>
              <h3>Preserve Heritage</h3>
              <p>Identify, document, and preserve the traditional crafts, arts, and industries that are the
                cultural legacy of each district of Uttar Pradesh.</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon objective-icon-secondary">
                <i className="fas fa-briefcase" aria-hidden="true"></i>
              </div>
              <h3>Generate Employment</h3>
              <p>Create sustainable livelihood opportunities for artisans, weavers, craftspeople, and micro
                entrepreneurs through skill training and market access.</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon objective-icon-success">
                <i className="fas fa-chart-line" aria-hidden="true"></i>
              </div>
              <h3>Boost Economy</h3>
              <p>Increase the contribution of traditional industries to UP&apos;s GDP by providing financial support,
                infrastructure, and market connectivity at scale.</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon objective-icon-gold">
                <i className="fas fa-globe-asia" aria-hidden="true"></i>
              </div>
              <h3>Expand Exports</h3>
              <p>Enhance export competitiveness of ODOP products through GI registration, international branding,
                trade fair participation, and buyer linkages.</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon objective-icon-purple">
                <i className="fas fa-tools" aria-hidden="true"></i>
              </div>
              <h3>Upgrade Technology</h3>
              <p>Modernize production through Common Facility Centres, advanced tools, testing laboratories, and
                design centers in each ODOP district.</p>
            </div>
            <div className="objective-card">
              <div className="objective-icon objective-icon-danger">
                <i className="fas fa-balance-scale" aria-hidden="true"></i>
              </div>
              <h3>Women Empowerment</h3>
              <p>Priority support for women artisans and SHGs with additional incentives, dedicated training
                programs, and leadership development initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ODOP JOURNEY TIMELINE ===== */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header centered-header">
            <div className="section-eyebrow">Our Journey</div>
            <h2 className="section-title">ODOP Milestones</h2>
            <p className="section-subtitle">From a state initiative to a national movement - the ODOP journey has been
              remarkable.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2018</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>ODOP Launched in UP</h3>
                <p>Chief Minister Yogi Adityanath launched the One District One Product scheme on January 24,
                  2018 - Uttar Pradesh Foundation Day. 75 products mapped to 75 districts.</p>
                <div className="timeline-achievement">
                  <i className="fas fa-trophy" aria-hidden="true"></i>
                  <span>1st state to launch district-product mapping at this scale</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2019</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>National Adoption &amp; PM ODOP Programme</h3>
                <p>Government of India adopted ODOP as a national programme under DPIIT. First ODOP Summit held
                  in Lucknow, attracting international buyers and investors from 30 countries.</p>
                <div className="timeline-achievement">
                  <i className="fas fa-trophy" aria-hidden="true"></i>
                  <span>Rs 5,000 Cr in confirmed investment at inaugural summit</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2020</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Digital Push &amp; E-Commerce Integration</h3>
                <p>ODOP products listed on Amazon India, Flipkart, and GeM (Government e-Marketplace). Over 1.2
                  lakh artisans onboarded to digital platforms during COVID-19 pandemic.</p>
                <div className="timeline-achievement">
                  <i className="fas fa-trophy" aria-hidden="true"></i>
                  <span>80,000+ ODOP products listed online; 35% revenue increase</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2021</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>ODOP Export Certification &amp; GI Tags</h3>
                <p>Accelerated GI tag applications for unregistered ODOP products. 12 new GI tags obtained in a
                  single year. First dedicated ODOP export cluster established in Agra Leather sector.</p>
                <div className="timeline-achievement">
                  <i className="fas fa-trophy" aria-hidden="true"></i>
                  <span>UP&apos;s handicraft exports crossed Rs 15,000 Crore mark</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2022</span>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Invest UP Summit &amp; Global Partnerships</h3>
                <p>ODOP prominently featured in UP Global Investors Summit. MoUs signed with 20+ international
                  trade bodies. Common Facility Centres operational in 40+ ODOP districts.</p>
                <div className="timeline-achievement">
                  <i className="fas fa-trophy" aria-hidden="true"></i>
                  <span>Rs 33 lakh Cr worth of investment intent at Invest UP Summit</span>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2023-24</span>
                <div className="timeline-dot active"></div>
              </div>
              <div className="timeline-content">
                <h3>ODOP Digital Portal &amp; Tech Transformation</h3>
                <p>Launch of the ODOP digital portal, buyer-seller enablement, and export support services was
                  undertaken with registrations tracked in official databases.</p>
                <div className="timeline-achievement">
                  <i className="fas fa-rocket" aria-hidden="true"></i>
                  <span>Target: Rs 1 Lakh Cr exports from UP by 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED DISTRICTS SECTION ===== */}
      <section className="featured-districts-section bg-light">
        <div className="container">
          <div className="section-header centered-header">
            <div className="section-eyebrow">District Showcase</div>
            <h2 className="section-title">Iconic ODOP Districts &amp; Products</h2>
            <p className="section-subtitle">Explore the diverse range of traditional products from across Uttar
              Pradesh&apos;s 75 districts.</p>
          </div>
          <div className="district-showcase-grid">
            <div className="district-showcase-card">
              <div className="district-showcase-visual">
                <img src="/assets/img/district/agra.jpg" alt="Agra Leather Products" loading="lazy" />
                <div className="district-product-overlay">
                  <span className="district-product-label">Leather Products</span>
                </div>
              </div>
              <div className="district-showcase-info">
                <div className="district-showcase-badge">
                  <i className="fas fa-certificate" aria-hidden="true"></i> GI Tagged
                </div>
                <h3>Agra <span>Leather Products</span></h3>
                <p>A major footwear manufacturing hub, Agra&apos;s leather industry supplies domestic and
                  international markets through a broad product range.</p>
                <div className="district-showcase-stats">
                  <span><i className="fas fa-industry" aria-hidden="true"></i> 5,000+ Units</span>
                  <span><i className="fas fa-users" aria-hidden="true"></i> 8 Lakh Artisans</span>
                </div>
                <a href="/districts" className="btn btn-ghost btn-sm">Explore District <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="district-showcase-card">
              <div className="district-showcase-visual">
                <img src="/assets/img/district/lucknow.jpg" alt="Lucknow Chikankari and Zari Zardozi" loading="lazy" />
                <div className="district-product-overlay">
                  <span className="district-product-label">Chikankari &amp; Zari Zardozi</span>
                </div>
              </div>
              <div className="district-showcase-info">
                <div className="district-showcase-badge">
                  <i className="fas fa-certificate" aria-hidden="true"></i> GI Tagged
                </div>
                <h3>Lucknow <span>Chikankari &amp; Zari Zardozi</span></h3>
                <p>The art of shadow embroidery with a 400-year Mughal heritage. Delicate floral patterns
                  hand-embroidered on fine fabric, beloved by fashion designers worldwide.</p>
                <div className="district-showcase-stats">
                  <span><i className="fas fa-industry" aria-hidden="true"></i> 3,500+ Units</span>
                  <span><i className="fas fa-users" aria-hidden="true"></i> 2.5 Lakh Women</span>
                </div>
                <a href="/districts" className="btn btn-ghost btn-sm">Explore District <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="district-showcase-card">
              <div className="district-showcase-visual">
                <img src="/assets/img/district/varanasi.jpg" alt="Varanasi Banarasi Silk Saree" loading="lazy" />
                <div className="district-product-overlay">
                  <span className="district-product-label">Banarasi Silk Saree</span>
                </div>
              </div>
              <div className="district-showcase-info">
                <div className="district-showcase-badge">
                  <i className="fas fa-certificate" aria-hidden="true"></i> GI Tagged
                </div>
                <h3>Varanasi <span>Banarasi Silk Saree</span></h3>
                <p>India&apos;s most prized silk weaving tradition, known for interwoven gold and silver threads
                  (zari). The iconic Banarasi saree is a symbol of Indian bridal tradition.</p>
                <div className="district-showcase-stats">
                  <span><i className="fas fa-industry" aria-hidden="true"></i> 12,000+ Looms</span>
                  <span><i className="fas fa-users" aria-hidden="true"></i> 3.5 Lakh Weavers</span>
                </div>
                <a href="/districts" className="btn btn-ghost btn-sm">Explore District <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="district-showcase-card">
              <div className="district-showcase-visual">
                <img src="/assets/img/district/moradabad.jpg" alt="Moradabad Metal Craft" loading="lazy" />
                <div className="district-product-overlay">
                  <span className="district-product-label">Metal Craft</span>
                </div>
              </div>
              <div className="district-showcase-info">
                <div className="district-showcase-badge">
                  <i className="fas fa-globe" aria-hidden="true"></i> Export Hub
                </div>
                <h3>Moradabad <span>Metal Craft</span></h3>
                <p>Known as the Brass City, Moradabad produces decorative brass, aluminum, and iron handicrafts
                  for domestic and export markets.</p>
                <div className="district-showcase-stats">
                  <span><i className="fas fa-industry" aria-hidden="true"></i> 20,000+ Units</span>
                  <span><i className="fas fa-users" aria-hidden="true"></i> 5 Lakh Artisans</span>
                </div>
                <a href="/districts" className="btn btn-ghost btn-sm">Explore District <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="district-showcase-card">
              <div className="district-showcase-visual">
                <img src="/assets/img/district/bhadohi.jpg" alt="Bhadohi Carpet Dari" loading="lazy" />
                <div className="district-product-overlay">
                  <span className="district-product-label">Carpet (Dari)</span>
                </div>
              </div>
              <div className="district-showcase-info">
                <div className="district-showcase-badge">
                  <i className="fas fa-certificate" aria-hidden="true"></i> GI Tagged
                </div>
                <h3>Bhadohi <span>Carpet (Dari)</span></h3>
                <p>Asia&apos;s largest carpet weaving hub. Hand-knotted Persian-style carpets with exceptional
                  craftsmanship, exported internationally with premium pricing in the US and European markets.
                </p>
                <div className="district-showcase-stats">
                  <span><i className="fas fa-industry" aria-hidden="true"></i> 6,000+ Units</span>
                  <span><i className="fas fa-users" aria-hidden="true"></i> 6 Lakh Weavers</span>
                </div>
                <a href="/districts" className="btn btn-ghost btn-sm">Explore District <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="district-showcase-card">
              <div className="district-showcase-visual">
                <img src="/assets/img/district/firozabad.jpg" alt="Firozabad Glassware and Bangles" loading="lazy" />
                <div className="district-product-overlay">
                  <span className="district-product-label">Glassware &amp; bangles</span>
                </div>
              </div>
              <div className="district-showcase-info">
                <div className="district-showcase-badge">
                  <i className="fas fa-globe" aria-hidden="true"></i> Bangle Capital
                </div>
                <h3>Firozabad <span>Glassware &amp; bangles</span></h3>
                <p>The City of Bangles, Firozabad is known for glass bangles and decorative glassware with a
                  long-standing production heritage.</p>
                <div className="district-showcase-stats">
                  <span><i className="fas fa-industry" aria-hidden="true"></i> 100,000+ Units</span>
                  <span><i className="fas fa-users" aria-hidden="true"></i> 15 Lakh Workers</span>
                </div>
                <a href="/districts" className="btn btn-ghost btn-sm">Explore District <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div className="section-footer-cta">
            <a href="/districts" className="btn btn-outline-primary btn-lg">
              <i className="fas fa-map" aria-hidden="true"></i> View All 75 Districts
            </a>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS / HOW IT WORKS SECTION ===== */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-split-grid">
            <div className="benefits-content">
              <div className="section-eyebrow">How ODOP Helps You</div>
              <h2 className="section-title">Benefits for Every Stakeholder</h2>
              <p className="benefits-intro">Whether you&apos;re a traditional artisan, a manufacturer, a wholesaler, or a
                business buyer - ODOP creates value for everyone in the ecosystem.</p>
              <div className="benefits-tabs-nav" id="benefitsTabs">
                <button className="benefit-tab-btn active" data-tab="artisan">
                  <i className="fas fa-paint-brush" aria-hidden="true"></i> Artisans
                </button>
                <button className="benefit-tab-btn" data-tab="msme">
                  <i className="fas fa-industry" aria-hidden="true"></i> MSMEs
                </button>
                <button className="benefit-tab-btn" data-tab="buyer">
                  <i className="fas fa-shopping-bag" aria-hidden="true"></i> Buyers
                </button>
                <button className="benefit-tab-btn" data-tab="exporter">
                  <i className="fas fa-globe" aria-hidden="true"></i> Exporters
                </button>
              </div>
              <div className="benefits-tab-content">
                <div className="benefit-panel active" id="tab-artisan">
                  <ul className="benefit-list">
                    <li><i className="fas fa-check" aria-hidden="true"></i> Free artisan identity card and ODOP registration</li>
                    <li><i className="fas fa-check" aria-hidden="true"></i> Free skill training and design workshops</li>
                    <li><i className="fas fa-check" aria-hidden="true"></i> Access to Common Facility Centres with modern tools
                    </li>
                    <li><i className="fas fa-check" aria-hidden="true"></i> Rs 500/day stipend during training programs</li>
                    <li><i className="fas fa-check" aria-hidden="true"></i> Free product photography and e-commerce listing</li>
                    <li><i className="fas fa-check" aria-hidden="true"></i> Life and accident insurance coverage</li>
                    <li><i className="fas fa-check" aria-hidden="true"></i> Direct market linkage - no middlemen</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="benefits-visual">
              <div>
                <img src="/assets/img/odop-2.jpg" alt="Artisan at work" className="benefits-img benefits-img-1"
                  loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOVERNMENT SUPPORT SECTION ===== */}
      <section className="govt-support-section bg-secondary-deep">
        <div className="container">
          <div className="section-header centered-header light-header">
            <div className="section-eyebrow light">Government Backing</div>
            <h2 className="section-title light">Strong Government Support at All Levels</h2>
            <p className="section-subtitle light">ODOP UP benefits from coordinated support from Central Government,
              State Government, and international development agencies.</p>
          </div>
          <div className="support-entities-grid">
            <div className="support-entity">
              <div className="support-entity-icon"><i className="fas fa-landmark" aria-hidden="true"></i></div>
              <h4>Central Government</h4>
              <p>DPIIT, Ministry of MSME, and Ministry of Commerce provide policy backing, funding, and export
                promotion infrastructure.</p>
            </div>
            <div className="support-entity">
              <div className="support-entity-icon"><i className="fas fa-map" aria-hidden="true"></i></div>
              <h4>Government of UP</h4>
              <p>MSME &amp; Export Promotion Dept as nodal agency with dedicated budget, team, and implementation
                machinery across 75 districts.</p>
            </div>
            <div className="support-entity">
              <div className="support-entity-icon"><i className="fas fa-university" aria-hidden="true"></i></div>
              <h4>Financial Institutions</h4>
              <p>SBI, Bank of Baroda, Punjab National Bank and SIDBI provide preferential credit to
                ODOP-registered artisans and MSMEs.</p>
            </div>
            <div className="support-entity">
              <div className="support-entity-icon"><i className="fas fa-handshake" aria-hidden="true"></i></div>
              <h4>International Support</h4>
              <p>UNDP, World Bank, IFC, and bilateral development agencies support artisan development, women
                empowerment, and export capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-box">
            <div className="about-cta-content">
              <h2>Participate in the ODOP Programme</h2>
              <p>Whether you are an artisan, an MSME unit, or an institution seeking verified programme
                information, ODOP UP provides official access to registration, supplier networks, and scheme
                support.</p>
              <div className="about-cta-buttons">
                <a href="#" className="btn btn-primary btn-lg">
                  <i className="fas fa-user-plus" aria-hidden="true"></i> Apply for Registration
                </a>
                <a href="/suppliers" className="btn btn-white-outline btn-lg">
                  <i className="fas fa-search" aria-hidden="true"></i> View Supplier Directory
                </a>
                <a href="/odop-schemes" className="btn btn-white-outline btn-lg">
                  <i className="fas fa-file-alt" aria-hidden="true"></i> View Scheme Information
                </a>
              </div>
            </div>
            <div className="about-cta-visual">
              <img src="/assets/img/odop-3.jpg" alt="ODOP Artisan Fair" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
