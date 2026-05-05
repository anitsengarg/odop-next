import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SCHEME_META_ICONS, Scheme } from '@/lib/schemes'
import { FaArrowUpRightFromSquare, FaBookOpen, FaFileLines, FaHeadset, FaFileSignature, FaCircleInfo, FaEnvelope, FaCircleCheck } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { fetchSchemeDetail } from '@/services/schemes.service'

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function SchemeDetailPage({ params }: PageProps) {
    const { slug } = await params
    let scheme: Scheme | null = null

    try {
        const response = await fetchSchemeDetail(slug)
        if (response?.data) {
            scheme = response.data as Scheme
        }
    } catch (error) {
        console.error("Failed to fetch scheme detail on server:", error)
    }

    if (!scheme) {
        notFound()
    }

    const {
        introJson,
        highlightsJson,
        eligibilityJson,
        subsidyJson,
        howItWorksJson,
        calculationJson,
        documentsJson,
        ctaJson,
        footerInfoJson,
        dynamicSectionsJson
    } = scheme

    return (
        <div className="about-static-page policy-page scheme-detail-page">
            <section className="page-hero scheme-detail-hero">
                <div className="page-hero-overlay"></div>
                <div className="container page-hero-content">
                    <h1 className="page-hero-title">{scheme.name}</h1>
                    <p className="page-hero-subtitle scheme-hero-lead">{scheme.shortDescription}</p>
                    <a
                        href={ctaJson.apply_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                    >
                        <FaFileLines className="mr-2" /> Apply Now
                    </a>
                </div>
            </section>

            <main className="main-content schemes-page about-static-page policy-page">
                <div className="container">
                    {dynamicSectionsJson.intro && (
                        <div className="section-header">
                            <span className="eyebrow">{introJson.tag}</span>
                            <h2>{introJson.title}</h2>
                            <p>{introJson.description}</p>
                            <div className="divider"><span></span><span></span><span></span></div>
                        </div>
                    )}

                    <section className="static-content-wrap">
                        <article className="static-card">
                            <h2>About the Scheme</h2>
                            <p>{scheme.longDescription}</p>
                        </article>

                        {dynamicSectionsJson.highlights && (
                            <article className="static-card">
                                <h2>Key Highlights</h2>
                                <div className="scheme-highlight-grid">
                                    {highlightsJson.map((highlight, index) => {
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
                        )}

                        {dynamicSectionsJson.eligibility && (
                            <article className="static-card">
                                <h2>Eligibility Criteria</h2>
                                <ul className="static-list">
                                    {eligibilityJson.points.map((item, index) => (
                                        <li key={index}>
                                            <FaCircleCheck className="text-primary mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {eligibilityJson.note && (
                                    <p className="scheme-inline-note">{eligibilityJson.note}</p>
                                )}
                            </article>
                        )}

                        {dynamicSectionsJson.subsidy && (
                            <article className="static-card">
                                <h2>Subsidy Structure</h2>
                                <div className="policy-table-wrap">
                                    <table className="policy-table">
                                        <thead>
                                            <tr>
                                                {subsidyJson.columns.map(col => (
                                                    <th key={col.id}>{col.label}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {subsidyJson.rows.map((row, index) => (
                                                <tr key={index}>
                                                    {subsidyJson.columns.map(col => (
                                                        <td key={col.id}>{row[col.id]}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {subsidyJson.footnote && (
                                    <p className="static-note">{subsidyJson.footnote}</p>
                                )}
                            </article>
                        )}

                        {dynamicSectionsJson.how_it_works && (
                            <article className="static-card">
                                <h2>How It Works</h2>
                                <div className="scheme-flow-grid">
                                    {howItWorksJson.steps.map((step, index) => {
                                         const Icon = step.icon ? (SCHEME_META_ICONS[step.icon] || FaCircleInfo) : null;
                                         return (
                                            <div className="scheme-step" key={index}>
                                                <span className="scheme-step-number">{index + 1}</span>
                                                <h3>{step.title}</h3>
                                                <p>{step.description}</p>
                                            </div>
                                         )
                                    })}
                                </div>
                            </article>
                        )}

                        {dynamicSectionsJson.calculation && (
                            <article className="static-card">
                                <h2>Example Calculation</h2>
                                <p>{calculationJson.intro}</p>
                                <div className="scheme-example-box">
                                    <div className="scheme-example-metric">
                                        <span className="scheme-example-label">Project Cost</span>
                                        <strong>{calculationJson.project_cost}</strong>
                                    </div>
                                    <div className="scheme-example-metric">
                                        <span className="scheme-example-label">Eligible Subsidy</span>
                                        <strong>{calculationJson.eligible_subsidy}</strong>
                                    </div>
                                    <div className="scheme-example-metric is-highlighted">
                                        <span className="scheme-example-label">Effective Loan</span>
                                        <strong>{calculationJson.effective_loan}</strong>
                                    </div>
                                </div>
                            </article>
                        )}

                        {dynamicSectionsJson.documents && (
                            <article className="static-card">
                                <div className="scheme-doc-grid">
                                    <div>
                                        <h2>Required Documents</h2>
                                        <ul className="static-list">
                                            {documentsJson.documents.map((doc, index) => (
                                                <li key={index}>
                                                    <FaFileLines className="text-primary mt-1" />
                                                    <span>{doc.name}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="scheme-doc-sidebox">
                                        <h3>{documentsJson.before_submit_title}</h3>
                                        <p>{documentsJson.before_submit_body}</p>
                                        <Link href={ctaJson.helpdesk_url} className="btn btn-ghost btn-sm">
                                            <FaBookOpen className="mr-2" /> {documentsJson.resources_label}
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        )}

                        {dynamicSectionsJson.cta && (
                            <article className="static-card scheme-cta-card">
                                <div className="scheme-cta-copy">
                                    <span className="eyebrow">Apply Today</span>
                                    <h2>{ctaJson.cta_title}</h2>
                                    <p>{ctaJson.cta_subtitle}</p>
                                </div>
                                <div className="scheme-cta-actions">
                                    <a
                                        href={ctaJson.apply_url}
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
                        )}
                    </section>
                </div>
            </main>

            <section className="quick-contact-section">
                <div className="container">
                    <div className="quick-contact-grid">
                        {footerInfoJson.map((info, index) => (
                            <div className="quick-contact-card" key={index}>
                                <div className={`qc-icon qc-icon-${index % 4}`}>
                                    {index === 0 ? <FaFileSignature /> : index === 1 ? <FaCircleInfo /> : index === 2 ? <FaPhoneAlt /> : <FaEnvelope />}
                                </div>
                                <div className="qc-content">
                                    <h3>{info.title}</h3>
                                    <p>{info.description}</p>
                                    <Link href="/contact-us" className="qc-link">Support Page</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
