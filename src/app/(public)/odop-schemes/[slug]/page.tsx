import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SCHEMES_PAGE_CATALOG, SCHEME_META_ICONS } from '@/lib/schemes'
import { FaArrowUpRightFromSquare, FaBookOpen, FaChevronRight, FaFileLines, FaFileInvoice, FaBuildingColumns, FaIdCard, FaHeadset, FaFileSignature, FaCircleInfo, FaEnvelope, FaCircleCheck } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function SchemeDetailPage({ params }: PageProps) {
    const { slug } = await params

    const allSchemes = [...SCHEMES_PAGE_CATALOG.odop, ...SCHEMES_PAGE_CATALOG.otherMsme]
    const scheme = allSchemes.find((s) => s.id)

    if (!scheme || !scheme.detail) {
        notFound()
    }

    const { detail } = scheme

    return (
        <div className="scheme-detail-page">
            <section className="page-hero scheme-detail-hero">
                <div className="page-hero-overlay"></div>
                <div className="container page-hero-content">
                    <h1 className="page-hero-title">{scheme.title}</h1>
                    <p className="page-hero-subtitle scheme-hero-lead">{detail.heroSubtitle}</p>
                    <a
                        href={detail.cta.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                    >
                        <FaFileInvoice className="mr-2" /> Apply Now
                    </a>
                </div>
            </section>

            <main className="main-content schemes-page">
                <div className="container">
                    <div className="section-header">
                        <span className="eyebrow">Scheme Overview</span>
                        <h2>{scheme.title} for Entrepreneurs, MSMEs, and Artisans</h2>
                        <p>Understand the subsidy pattern, eligibility, process, and documents required before you apply through the official portal.</p>
                        <div className="divider"><span></span><span></span><span></span></div>
                    </div>

                    <section className="static-content-wrap">
                        <article className="static-card">
                            <h2>About the Scheme</h2>
                            <p>{detail.overview}</p>
                        </article>

                        <article className="static-card">
                            <h2>Key Highlights</h2>
                            <div className="scheme-highlight-grid">
                                {detail.highlights.map((highlight, index) => {
                                    const Icon = SCHEME_META_ICONS[highlight.icon] || FaCircleInfo
                                    return (
                                        <div className="scheme-highlight-card" key={index}>
                                            <div className="scheme-highlight-icon">
                                                <Icon />
                                            </div>
                                            <h3>{highlight.title}</h3>
                                            <p>{highlight.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </article>

                        <article className="static-card">
                            <div className="scheme-split-card">
                                <div>
                                    <h2>Eligibility Criteria</h2>
                                    <ul className="static-list">
                                        {detail.eligibility.map((item, index) => (
                                            <li key={index}>
                                                <FaCircleCheck className="text-primary mt-1" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {detail.eligibilityNote && (
                                        <p className="scheme-inline-note">{detail.eligibilityNote}</p>
                                    )}
                                </div>
                                {detail.visuals?.eligibility && (
                                    <figure className="scheme-visual">
                                        <img src={detail.visuals.eligibility} alt="Eligibility visual" loading="lazy" />
                                    </figure>
                                )}
                            </div>
                        </article>

                        <article className="static-card">
                            <div className="scheme-split-card">
                                <div>
                                    <h2>Subsidy Structure</h2>
                                    <div className="policy-table-wrap">
                                        <table className="policy-table">
                                            <thead>
                                                <tr>
                                                    <th>Project Cost</th>
                                                    <th>Subsidy</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {detail.benefits.map((row, index) => (
                                                    <tr key={index}>
                                                        <td>{row.slab}</td>
                                                        <td>{row.subsidy}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    {detail.benefitsNote && (
                                        <p className="static-note">{detail.benefitsNote}</p>
                                    )}
                                </div>
                                {detail.visuals?.benefits && (
                                    <figure className="scheme-visual">
                                        <img src={detail.visuals.benefits} alt="Subsidy structure visual" loading="lazy" />
                                    </figure>
                                )}
                            </div>
                        </article>

                        <article className="static-card">
                            <h2>How It Works</h2>
                            <div className="scheme-flow-grid">
                                {detail.howItWorks.map((step, index) => (
                                    <div className="scheme-step" key={index}>
                                        <span className="scheme-step-number">{step.number}</span>
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </article>

                        {detail.example && (
                            <article className="static-card">
                                <h2>Example Calculation</h2>
                                <p>For a small ODOP manufacturing or artisan-led project with a cost of {detail.example.projectCost}, the subsidy can reduce the effective loan burden substantially.</p>
                                <div className="scheme-example-box">
                                    <div className="scheme-example-metric">
                                        <span className="scheme-example-label">Project Cost</span>
                                        <strong>{detail.example.projectCost}</strong>
                                    </div>
                                    <div className="scheme-example-metric">
                                        <span className="scheme-example-label">Eligible Subsidy</span>
                                        <strong>{detail.example.eligibleSubsidy}</strong>
                                    </div>
                                    <div className="scheme-example-metric is-highlighted">
                                        <span className="scheme-example-label">Effective Loan</span>
                                        <strong>{detail.example.effectiveLoan}</strong>
                                    </div>
                                </div>
                            </article>
                        )}

                        <article className="static-card">
                            <div className="scheme-doc-grid">
                                <div>
                                    <h2>Required Documents</h2>
                                    <ul className="static-list">
                                        {detail.documents.map((doc, index) => (
                                            <li key={index}>
                                                <FaFileLines className="text-primary mt-1" />
                                                <span>{doc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {detail.docSidebox && (
                                    <div className="scheme-doc-sidebox">
                                        <h3>{detail.docSidebox.title}</h3>
                                        <p>{detail.docSidebox.description}</p>
                                        <Link href={detail.docSidebox.linkHref} className="btn btn-ghost btn-sm">
                                            <FaBookOpen className="mr-2" /> {detail.docSidebox.linkText}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </article>

                        <article className="static-card scheme-cta-card">
                            <div className="scheme-cta-copy">
                                <span className="eyebrow">Apply Today</span>
                                <h2>{detail.cta.title}</h2>
                                <p>{detail.cta.description}</p>
                            </div>
                            <div className="scheme-cta-actions">
                                <a
                                    href={detail.cta.applyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg"
                                >
                                    <FaArrowUpRightFromSquare className="mr-2" /> Apply Now
                                </a>
                                <Link href="/contact-us" className="btn btn-secondary btn-lg">
                                    <FaHeadset className="mr-2" /> Contact Helpdesk
                                </Link>
                            </div>
                        </article>
                    </section>
                </div>
            </main>

            <section className="quick-contact-section">
                <div className="container">
                    <div className="quick-contact-grid">
                        <div className="quick-contact-card">
                            <div className="qc-icon qc-icon-orange">
                                <FaFileSignature />
                            </div>
                            <div className="qc-content">
                                <h3>Official Application</h3>
                                <p>Proceed to the official portal for ODOP-linked registration and application submission.</p>
                                <a href="https://msme1connect.up.gov.in/registration" className="qc-link" target="_blank" rel="noopener noreferrer">Open Application Portal</a>
                            </div>
                        </div>
                        <div className="quick-contact-card">
                            <div className="qc-icon qc-icon-blue">
                                <FaCircleInfo />
                            </div>
                            <div className="qc-content">
                                <h3>Scheme Details</h3>
                                <p>Read the official scheme listing for the latest operational conditions and updates.</p>
                                <a href="https://msme1connect.up.gov.in/scheme-list/financial-assistance-scheme-for-one-district-one-product-(odop-margin-money-scheme)" className="qc-link" target="_blank" rel="noopener noreferrer">View Official Scheme Note</a>
                            </div>
                        </div>
                        <div className="quick-contact-card">
                            <div className="qc-icon qc-icon-green">
                                <FaPhoneAlt />
                            </div>
                            <div className="qc-content">
                                <h3>ODOP Helpline</h3>
                                <p>Reach the support desk for guidance on eligibility, application flow, and documentation.</p>
                                <a href="tel:18001805555" className="qc-link">1800-180-5555</a>
                            </div>
                        </div>
                        <div className="quick-contact-card">
                            <div className="qc-icon qc-icon-purple">
                                <FaEnvelope />
                            </div>
                            <div className="qc-content">
                                <h3>Contact and Support</h3>
                                <p>Use the portal contact page for assistance from the ODOP support team and district-level offices.</p>
                                <Link href="/contact-us" className="qc-link">Open Contact Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
