'use client'

import Link from 'next/link'
import {
    FaChevronRight,
    FaDownload,
    FaExternalLinkAlt,
    FaSearch,
    FaUserPlus,
} from 'react-icons/fa'
import {
    FaUserCheck,
} from 'react-icons/fa6'
import { SCHEMES_PAGE_CATALOG, SCHEME_META_ICONS, SchemeCardData } from '@/lib/schemes'
import { fetchSchemesList } from '@/services/schemes.service'
import { useEffect, useState } from 'react'

function SchemeMetaIcon({ name }: { name: string }) {
    const Icon = SCHEME_META_ICONS[name]
    if (!Icon) return null
    return <Icon aria-hidden />
}

function SchemeCard({ scheme }: { scheme: SchemeCardData }) {
    const applyLabel = scheme.applyLabel ?? 'View Details & Apply'
    const brochureLabel = scheme.brochureLabel ?? 'Brochure'

    return (
        <div className="scheme-card" data-category={scheme.category}>
            <div className="scheme-card-header">
                <div className={`scheme-icon ${scheme.iconColorClass}`}>
                    <img src={scheme.image.src} alt={scheme.image.alt} loading="lazy" />
                </div>
                <div className="scheme-title-block">
                    <h3 className="scheme-name">{scheme.title}</h3>
                </div>
            </div>
            <div className="scheme-card-body">
                <p className="scheme-description">{scheme.description}</p>
                <div className="scheme-meta">
                    {scheme.meta.map((row, idx) => (
                        <div className="scheme-meta-item" key={`${scheme.id}-meta-${idx}`}>
                            <span className="scheme-meta-label">
                                <SchemeMetaIcon name={row.labelIcon} />
                                {row.label}
                            </span>
                            <span className="scheme-meta-value">{row.value}</span>
                        </div>
                    ))}
                </div>
                <div className="scheme-tags">
                    {scheme.tags.map((t, i) => (
                        <span className="scheme-tag" key={`${scheme.id}-tag-${i}`}>
                            {t}
                        </span>
                    ))}
                </div>
                <div className="eligibility-bar">
                    <FaUserCheck />
                    <span dangerouslySetInnerHTML={{ __html: scheme.eligibility }} />
                </div>
            </div>
            <div className="scheme-card-footer">
                <Link
                    href={`/odop-schemes/${scheme.id}`}
                    className="btn btn-primary btn-sm scheme-apply-btn"
                >
                    <FaExternalLinkAlt className="mr-2" />
                    {applyLabel}
                </Link>
                <a className="btn btn-ghost btn-sm" href="#" onClick={(e) => e.preventDefault()}>
                    <FaDownload />
                    {brochureLabel}
                </a>
            </div>
        </div>
    )
}

export default  function OdopSchemes() {
    const [odopSchemes, setOdopSchemes] = useState<Array<SchemeCardData>>([])
    const [otherSchemes, setOtherSchemes] = useState<Array<SchemeCardData>>([])

   useEffect(() => {
  const loadSchemes = async () => {
    try {
      const response = await fetchSchemesList();

      console.log("Fetched schemes:", response.data);

      if (Array.isArray(response?.data)) {
        // setOdopSchemes(response.data || []);    
      }
    } catch (error) {
      console.error("Failed to fetch schemes:", error);
    }
  };

  loadSchemes();
}, []);
    return (
        <>
            <section className="page-hero schemes-hero">
                <div className="page-hero-overlay"></div>
                <div className="container page-hero-content">
                    <h1 className="page-hero-title">Government Schemes & Benefits</h1>
                    <p className="page-hero-subtitle">
                        Explore financial assistance, subsidies, and support programs for artisans, manufacturers, and
                        entrepreneurs under ODOP and allied government initiatives.
                    </p>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <div className="about-overview-grid">
                        <div className="about-overview-visual">
                            <div className="about-image-stack">
                                <img
                                    src="/assets/img/scheme-1.jpg"
                                    alt="Traditional UP Craft"
                                    className="about-main-image"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="about-overview-content">
                            <div className="section-eyebrow">Flagship Scheme</div>
                            <h2 className="section-title">ODOP Promotion Scheme - Uttar Pradesh</h2>
                            <p>
                                The ODOP Schemes of Uttar Pradesh are a set of targeted support programs designed to strengthen
                                district-specific industries by addressing key gaps in finance, infrastructure, skills, and market
                                access. These include the Common Facility Centre (CFC) Scheme, which provides shared infrastructure
                                and modern machinery to producers; the Margin Money / Finance Assistance Scheme, offering subsidies
                                to help entrepreneurs access loans; the Skill Development & Toolkit Scheme, which trains artisans
                                and provides improved tools; and the Marketing Development Assistance (MDA) Scheme, which supports
                                participation in exhibitions, branding, and market linkage. Together, these schemes aim to enhance
                                productivity, improve product quality, reduce production costs, and enable artisans, self-help
                                groups, and MSMEs to compete in national and international markets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <main className="main-content schemes-page">
                <div className="container">
                    <div className="section-header">
                        <div className="section-header-left">
                            <h2 className="section-title">All ODOP Schemes</h2>
                        </div>
                    </div>

                    <div className="schemes-grid" id="schemesGrid">
                        {odopSchemes.map((scheme) => (
                            <SchemeCard key={scheme.id} scheme={scheme} />
                        ))}
                    </div>

                    <div className="section-header">
                        <div className="section-header-left">
                            <h2 className="section-title">Other MSME Schemes</h2>
                        </div>
                    </div>

                    <div className="schemes-grid">
                        {otherSchemes.map((scheme) => (
                            <SchemeCard key={scheme.id} scheme={scheme} />
                        ))}
                    </div>
                </div>
            </main>

            <section className="how-to-apply-section">
                <div className="container">
                    <div className="section-header centered-header">
                        <h2 className="section-title">How to Apply for Schemes?</h2>
                        <p className="section-subtitle">
                            A simple 4-step process to avail benefits under any government
                            scheme
                        </p>
                    </div>
                    <div className="apply-steps-grid">
                        <div className="apply-step">
                            <div className="step-number">01</div>
                            <div className="step-icon"><FaUserPlus /></div>
                            <h3>Register on Portal</h3>
                            <p>
                                Create your free artisan/MSME profile on the ODOP UP portal with
                                basic business information and Aadhaar/PAN details.
                            </p>
                        </div>
                        <div className="apply-step-connector">
                            <FaChevronRight />
                        </div>
                        <div className="apply-step">
                            <div className="step-number">02</div>
                            <div className="step-icon"><FaSearch /></div>
                            <h3>Select Scheme</h3>
                            <p>
                                Browse through available schemes and check your eligibility
                                criteria. Use our Scheme Finder tool to find the most suitable
                                scheme.
                            </p>
                        </div>
                        <div className="apply-step-connector">
                            <FaChevronRight />
                        </div>
                        <div className="apply-step">
                            <div className="step-number">03</div>
                            <div className="step-icon"><i className="fas fa-file-upload"></i></div>
                            <h3>Submit Application</h3>
                            <p>
                                Fill the online application form and upload required documents.
                                Our helpdesk team can assist you throughout the process.
                            </p>
                        </div>
                        <div className="apply-step-connector">
                            <FaChevronRight />
                        </div>
                        <div className="apply-step">
                            <div className="step-number">04</div>
                            <div className="step-icon"><i className="fas fa-check-circle"></i></div>
                            <h3>Get Benefits</h3>
                            <p>
                                Track your application status online. Upon approval, benefits are
                                directly disbursed to your registered bank account.
                            </p>
                        </div>
                    </div>
                    <div className="apply-cta">
                        <Link href="/contact-us" className="btn btn-secondary btn-lg">
                            <i className="fas fa-headset"></i> Need Help? Contact Our Helpdesk
                        </Link>
                        <Link href="/supplier-registration" className="btn btn-primary btn-lg">
                            <i className="fas fa-user-plus"></i> Apply for Registration
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
