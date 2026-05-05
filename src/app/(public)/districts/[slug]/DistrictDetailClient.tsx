"use client";

import React, { useState } from "react";
import { API_CONFIG } from "@/lib/api";
import { VideoModal } from "@/components/ui/VideoModal";
import Link from "next/link";

// Interfaces based on provided structure
export interface DistrictProduct {
  id: number;
  name: string;
  hindi_name: string;
  slug: string;
  thumbnail: string;
  description: string;
  hindi_description: string;
  status: string;
}

export interface DistrictFamous {
  id: number;
  name: string;
  hindi_name: string;
  slug: string;
  thumbnail: string;
  descriptions: string;
  hindi_descriptions: string;
  url: string | null;
  status: string;
}

export interface DistrictType {
  id: number;
  name: string;
  hindi_name: string;
  slug: string;
  thumbnail: string;
  descriptions: string;
  district_famous: DistrictFamous[];
}

export interface District {
  id: number;
  name: string;
  hindi_name: string;
  title: string;
  hindi_title: string;
  short_description: string;
  description: string;
  hindi_description: string;
  thumbnail: string;
  slug: string;
  url: string;
  district_product: DistrictProduct[];
}

export interface DistrictResponse {
  district: District;
  districtType: DistrictType[];
}

interface DistrictDetailClientProps {
  data: DistrictResponse;
}

export default function DistrictDetailClient({ data }: DistrictDetailClientProps) {
  const [activeTab, setActiveTab] = useState<"products" | "overview" | "knowledge">("products");
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const { district, districtType } = data;
  const products = district.district_product || [];

  const getImageUrl = (path: string) => {
    if (!path) return "/assets/img/placeholder.jpg";
    return path.startsWith("http") || path.startsWith("/")
      ? path
      : `${API_CONFIG.IMAGE_BASE_URL}${path}`;
  };

  const getYoutubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <main className="district-portal-page">
      {/* HERO SECTION */}
      <section className="page-hero district-hero">
        <div 
          className="district-hero-bg" 
          style={{ backgroundImage: `url(${getImageUrl(district.thumbnail)})` }}
        ></div>
        <div className="district-hero-overlay"></div>
        <div className="container">
          <div className="district-hero-content">
            <div className="district-hero-layout district-hero-layout-single">
              <div className="district-hero-copy">
                <div className="d-flex align-center gap-16 mb-16 district-hero-badges">
                  <span className="badge badge-gold district-hero-badge">
                    <i className="fas fa-certificate"></i> ODOP District
                  </span>
                  <span className="badge badge-success district-hero-badge">
                    <i className="fas fa-check-circle"></i> GI Tagged Product
                  </span>
                  <span className="badge district-hero-badge district-hero-badge-export">
                    <i className="fas fa-globe"></i> Top Export District
                  </span>
                </div>

                <h1 className="district-hero-title">{district.name}, Uttar Pradesh</h1>
                <p className="district-hero-subtitle">
                  <i className="fas fa-star district-hero-star"></i>&nbsp; ODOP Product: <strong
                    className="district-hero-product-name">{district.title}</strong>
                </p>
                <p className="district-hero-description">
                  {district.short_description || `Exploring the unique heritage, products, and culture of ${district.name} district.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="section district-portal-products">
        <div className="container">
          <div className="section-header district-portal-section-head">
            <div className="district-portal-tab-list" role="tablist">
              <button 
                className={`eyebrow district-portal-tab ${activeTab === "products" ? "active" : ""}`} 
                onClick={() => setActiveTab("products")}
                type="button"
                role="tab" 
                aria-selected={activeTab === "products"}
              >
                Explore Products &amp; Suppliers
              </button>
              <button 
                className={`eyebrow district-portal-tab ${activeTab === "overview" ? "active" : ""}`} 
                onClick={() => setActiveTab("overview")}
                type="button" 
                role="tab"
                aria-selected={activeTab === "overview"}
              >
                District Overview &amp; Insights
              </button>
              <button 
                className={`eyebrow district-portal-tab ${activeTab === "knowledge" ? "active" : ""}`} 
                onClick={() => setActiveTab("knowledge")}
                type="button" 
                role="tab"
                aria-selected={activeTab === "knowledge"}
              >
                Knowledge Hub
              </button>
            </div>
            <h2>{district.name} District Products, Suppliers and Profile</h2>
            <p>Discover {district.name}&apos;s ODOP products, connect with suppliers, and access district and scheme information from one page.</p>
            </div>

            <div className="district-portal-tab-panels">
            {/* TAB 1: PRODUCTS */}
            {activeTab === "products" && (
              <div className="district-portal-tab-panel active">
                <form className="hero-search district-profile-inline-search reveal" onSubmit={(e) => e.preventDefault()}>
                  <label className="hero-search-field">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder={`Ask AI something like 'Show ${district.name} ${district.title} suppliers'`} />
                    <button className="hero-search-action" type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </label>
                </form>
                <div className="district-about-grid district-portal-overview-grid district-portal-products-grid">
                  <section className="district-side-stack district-portal-products-copy">
                    <div className="district-portal-product-stack">
                      {products.map((product, idx) => (
                        <div key={idx} className="district-business-shell">
                          <div className={`district-product-panel ${idx !== products.length - 1 ? "district-product-divider" : ""}`}>
                            <div className="district-product-showcase">
                              <div className="district-product-chip-row">
                                <span className="district-product-chip">
                                  {idx === 0 ? "Primary Product" : idx === 1 ? "Secondary Product" : "Tertiary Product"}
                                </span>
                              </div>
                              <div className="district-product-copy">
                                <h2>{product.name}</h2>
                                <div dangerouslySetInnerHTML={{ __html: product.description }} />
                              </div>
                              <div className="district-product-gallery-strip">
                                <figure className="district-product-visual district-product-visual-strip">
                                  <img src={getImageUrl(product.thumbnail)} alt={product.name} loading="lazy" />
                                </figure>
                                <figure className="district-product-visual district-product-visual-strip">
                                  <img src={getImageUrl(product.thumbnail)} alt={product.name} loading="lazy" />
                                </figure>
                                <figure className="district-product-visual district-product-visual-strip">
                                  <img src={getImageUrl(product.thumbnail)} alt={product.name} loading="lazy" />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Sidebar - Suppliers (Static design with placeholders) */}
                  <section className="district-side-stack district-portal-products-side">
                    <div className="district-portal-supplier-rail-inner">
                      <div className="district-portal-split-head district-portal-supplier-head">
                        <span className="eyebrow">Suppliers</span>
                        <h3>Featured suppliers from {district.name}</h3>
                        <p>See the top supplier details side by side with the product information.</p>
                      </div>

                      <div className="top-five-stack district-portal-top-suppliers">
                        <div className="top-five-group">
                          <div className="top-five-group-head">
                            <h3>Top Manufacturers</h3>
                          </div>
                          <div className="top-five-card-grid">
                            <article className="top-five-media-card">
                              <div className="top-five-media-top">
                                <img src={getImageUrl(district.thumbnail)} alt="Manufacturer facility" loading="lazy" />
                                <span className="top-five-badge"><i className="far fa-bell"></i></span>
                                <span className="top-five-verified"><i className="fas fa-id-card"></i> Verified</span>
                              </div>
                              <div className="top-five-media-body">
                                <h4>{district.name} Excellence Units</h4>
                                <div className="top-five-location"><i className="fas fa-location-dot"></i> {district.name}, UP</div>
                                <p>Leading manufacturers of {district.title} and related accessories in the district.</p>
                                <div className="top-five-card-actions">
                                  <Link href="/supplier-listing" className="top-five-primary-btn">View Profile <i className="fas fa-arrow-right"></i></Link>
                                </div>
                              </div>
                            </article>
                          </div>
                          <div className="district-portal-supplier-group-cta">
                            <Link href="/supplier-listing?type=manufacturer" className="top-five-view-all">View All Manufacturers <i className="fas fa-arrow-right"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            )}

            {/* TAB 2: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="district-portal-tab-panel active">
                <div className="district-portal-overview-shell">
                  <div className="mini-stats-grid district-portal-overview-stats">
                    <div className="mini-stat">
                      <span className="mini-stat-number">22.1L</span>
                      <span className="mini-stat-label"><i className="fas fa-users district-stat-icon district-stat-icon-primary"></i> Metro Population</span>
                    </div>
                    <div className="mini-stat">
                      <span className="mini-stat-number">6</span>
                      <span className="mini-stat-label"><i className="fas fa-map district-stat-icon district-stat-icon-secondary"></i> Tehsils</span>
                    </div>
                    <div className="mini-stat">
                      <span className="mini-stat-number">15</span>
                      <span className="mini-stat-label"><i className="fas fa-sitemap district-stat-icon district-stat-icon-success"></i> Blocks</span>
                    </div>
                    <div className="mini-stat">
                      <span className="mini-stat-number">7200</span>
                      <span className="mini-stat-label"><i className="fas fa-industry district-stat-icon district-stat-icon-gold"></i> Small Industries</span>
                    </div>
                  </div>

                  <div className="district-about-grid district-portal-overview-grid">
                    <div className="district-portal-overview-copy">
                      <span className="eyebrow district-about-eyebrow">About the District</span>
                      <h2 className="district-about-title">{district.name} - Heritage and Enterprise</h2>
                      <div className="district-about-copy" dangerouslySetInnerHTML={{ __html: district.description }} />

                      <div className="district-about-facts-grid">
                        <div className="district-about-fact">
                          <div className="district-about-fact-icon district-about-fact-icon-primary"><i className="fas fa-map-marker-alt"></i></div>
                          <h5 className="district-about-fact-title">Location</h5>
                          <p className="district-about-fact-text">{district.name} district, Uttar Pradesh.</p>
                        </div>
                        <div className="district-about-fact">
                          <div className="district-about-fact-icon district-about-fact-icon-success"><i className="fas fa-globe"></i></div>
                          <h5 className="district-about-fact-title">Reach</h5>
                          <p className="district-about-fact-text">Strong tourism demand and an internationally known identity.</p>
                        </div>
                      </div>
                    </div>

                    <div className="district-side-stack district-portal-overview-side">
                      <div className="district-feature-card district-portal-overview-feature">
                        <img src={getImageUrl(district.thumbnail)} alt={district.name} className="district-feature-image" loading="lazy" />
                        <div className="district-feature-overlay">
                          <p className="district-feature-caption">
                            <i 
                              className="fas fa-play-circle district-feature-caption-icon cursor-pointer" 
                              onClick={() => setActiveVideoId(getYoutubeId(district.url))}
                            ></i>
                            {district.name} ecosystem - manufacturing, trading and export-ready production hubs
                          </p>
                        </div>
                      </div>

                      <div className="card-base district-dossier-card district-portal-overview-dossier">
                        <div className="district-detail-list">
                          {districtType.map((type, idx) => (
                            <details key={idx} className="district-detail-card">
                              <summary>
                                <span>
                                  <i className={`fas ${
                                    idx === 0 ? "fa-monument" : 
                                    idx === 1 ? "fa-utensils" : 
                                    idx === 2 ? "fa-place-of-worship" : 
                                    "fa-feather-pointed"
                                  }`}></i> {type.name}
                                </span>
                                <i className="fas fa-plus"></i>
                              </summary>
                              <div className="district-detail-body">
                                <div className="district-detail-pair-list">
                                  {type.district_famous.map((item, fIdx) => (
                                    <div key={fIdx} className="district-detail-pair">
                                      <div className="district-detail-copy">
                                        <strong>{item.name}:</strong>
                                        <div dangerouslySetInnerHTML={{ __html: item.descriptions }} />
                                      </div>
                                      <figure className="district-inline-photo">
                                        <img src={getImageUrl(item.thumbnail)} alt={item.name} loading="lazy" />
                                        <figcaption>{item.name}</figcaption>
                                      </figure>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </details>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: KNOWLEDGE HUB */}
            {activeTab === "knowledge" && (
              <div className="district-portal-tab-panel active">
                <div className="district-portal-knowledge-grid">
                  <article className="district-portal-resource-card">
                    <h3>Video references</h3>
                    <p>Access district media, craft documentation and promotional references.</p>
                    <ul className="district-portal-resource-list">
                      <li><a href="#">{district.name} district industry overview video</a></li>
                      <li><a href="#">ODOP promotional media</a></li>
                    </ul>
                  </article>
                  <article className="district-portal-resource-card">
                    <h3>Project report</h3>
                    <p>Download project and planning documents for reference before contacting suppliers.</p>
                    <ul className="district-portal-resource-list">
                      <li><a href="#">{district.title} Project Report</a></li>
                      <li><a href="#">ODOP PPR List</a></li>
                    </ul>
                  </article>
                  <article className="district-portal-resource-card">
                    <h3>Other information</h3>
                    <p>Use these knowledge links for scheme review and enquiry planning.</p>
                    <ul className="district-portal-resource-list">
                      <li><Link href="/odop-schemes">Government schemes</Link></li>
                      <li><Link href="/supplier-listing">Supplier directory</Link></li>
                      <li><Link href="/contact-us">Support and contact details</Link></li>
                    </ul>
                  </article>
                </div>
                <div className="district-portal-knowledge-links">
                  <a href="#" className="btn btn-outline-primary">Access Videos</a>
                  <a href="#" className="btn btn-primary">Download Project Report</a>
                  <Link href="/odop-schemes" className="btn btn-outline-secondary">View Related Information</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="section district-portal-search">
        <div className="container">
          <div className="district-portal-search-panel">
            <div className="district-portal-search-head">
              <span className="eyebrow">Product Type Search</span>
              <h2>Supplier Search for {district.name} District</h2>
              <p>Search by product name, supplier type, category or local area within {district.name}.</p>
            </div>
            <form className="district-portal-search-form">
              <div className="district-portal-search-field district-portal-search-field-wide">
                <label>Product name</label>
                <input type="text" placeholder="Search products..." />
              </div>
              <div className="district-portal-search-field">
                <label>Supplier type</label>
                <select>
                  <option>All supplier types</option>
                  <option>Manufacturer</option>
                  <option>Wholesaler</option>
                </select>
              </div>
              <div className="district-portal-search-field">
                <label>Category</label>
                <select>
                  <option>All categories</option>
                  <option>{district.title}</option>
                  <option>Handicrafts</option>
                </select>
              </div>
              <div className="district-portal-search-field">
                <label>Location</label>
                <select>
                  <option>All {district.name} locations</option>
                </select>
              </div>
              <div className="district-portal-search-actions">
                <Link href="/supplier-listing" className="btn btn-primary btn-lg">Open Supplier Directory</Link>
                <Link href="/supplier-registration" className="btn btn-outline-primary btn-lg">Submit Enquiry</Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SCHEMES SECTION */}
      <section className="section section-alt district-portal-schemes">
        <div className="container">
          <div className="section-header district-portal-section-head">
            <span className="eyebrow">Government Schemes</span>
            <h2>Scheme Support for {district.name} District</h2>
            <p>Explore scheme categories relevant to supplier growth and ODOP participation.</p>
          </div>
          <div className="district-portal-schemes-grid">
            <article className="district-portal-scheme-card">
              <h3>MSME Support</h3>
              <p>Business development assistance and enterprise facilitation for small units.</p>
              <Link href="/odop-schemes">View Details</Link>
            </article>
            <article className="district-portal-scheme-card">
              <h3>ODOP Schemes</h3>
              <p>District-linked ODOP incentives and product development support.</p>
              <Link href="/odop-schemes">View Eligibility</Link>
            </article>
            <article className="district-portal-scheme-card">
              <h3>Loan / Subsidy</h3>
              <p>Capital support and linked subsidy routes for unit expansion.</p>
              <Link href="/odop-schemes">View Details</Link>
            </article>
            <article className="district-portal-scheme-card">
              <h3>Machinery Support</h3>
              <p>Technology assistance for production capacity and quality.</p>
              <Link href="/odop-schemes">View Eligibility</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ENQUIRY SECTION */}
      <section className="section district-portal-enquiry-section">
        <div className="container">
          <div className="district-portal-enquiry-banner">
            <div>
              <span className="district-portal-enquiry-kicker">Business Enquiry</span>
              <h2>Submit a Supplier Enquiry for {district.name}</h2>
              <p>Use the enquiry route to connect with suitable manufacturers and wholesalers.</p>
            </div>
            <div className="district-portal-enquiry-actions">
              <Link href="/supplier-registration" className="btn btn-primary btn-lg">Submit Enquiry</Link>
              <Link href="/contact-us" className="btn btn-outline-white btn-lg">Contact ODOP Helpdesk</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Component */}
      <VideoModal videoId={activeVideoId} onClose={() => setActiveVideoId(null)} />
    </main>
  );
}
