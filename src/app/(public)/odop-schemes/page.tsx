'use client'

import Link from 'next/link'
import type { IconType } from 'react-icons'
import {
    FaChartLine,
    FaChevronRight,
    FaDownload,
    FaExternalLinkAlt,
    FaRupeeSign,
    FaSearch,
    FaUserPlus,
} from 'react-icons/fa'
import {
    FaAward,
    FaBuilding,
    FaCalendarDays,
    FaCertificate,
    FaClock,
    FaDroplet,
    FaFlask,
    FaGlobe,
    FaIndustry,
    FaIndianRupeeSign,
    FaLaptopCode,
    FaLayerGroup,
    FaLeaf,
    FaLink,
    FaLockOpen,
    FaPeopleGroup,
    FaPercent,
    FaPlane,
    FaRecycle,
    FaSackDollar,
    FaShieldHalved,
    FaStore,
    FaToolbox,
    FaUser,
    FaUserCheck,
    FaWallet,
} from 'react-icons/fa6'

export type SchemeCardData = {
    id: string
    category: string
    iconColorClass: string
    image: { src: string; alt: string }
    title: string
    description: string
    meta: Array<{ labelIcon: string; label: string; value: string }>
    tags: string[]
    eligibility: string
    applyLabel?: string
    brochureLabel?: string
}


const SCHEME_META_ICONS: Record<string, IconType> = {
    FaRupeeSign,
    FaChartLine,
    FaSackDollar,
    FaCalendarDays,
    FaWallet,
    FaToolbox,
    FaStore,
    FaPlane,
    FaLink,
    FaLayerGroup,
    FaFlask,
    FaPeopleGroup,
    FaPercent,
    FaIndustry,
    FaIndianRupeeSign,
    FaShieldHalved,
    FaLockOpen,
    FaClock,
    FaBuilding,
    FaCertificate,
    FaLaptopCode,
    FaAward,
    FaGlobe,
    FaUserCheck,
    FaUser,
    FaRecycle,
    FaDroplet,
    FaLeaf,
}

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
                    <SchemeMetaIcon name="FaUserCheck" />
                    <span dangerouslySetInnerHTML={{ __html: scheme.eligibility }} />
                </div>
            </div>
            <div className="scheme-card-footer">
                <button
                    type="button"
                    className="btn btn-primary btn-sm scheme-apply-btn"
                    onClick={() => alert('openSchemeModal')}
                >
                    <FaExternalLinkAlt />
                    {applyLabel}
                </button>
                <a className="btn btn-ghost btn-sm" href="#" onClick={(e) => e.preventDefault()}>
                    <FaDownload />
                    {brochureLabel}
                </a>
            </div>
        </div>
    )
}

export default function OdopSchemes() {
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
                        {ODOP_SCHEMES_DATA.map((scheme) => (
                            <SchemeCard key={scheme.id} scheme={scheme} />
                        ))}
                    </div>

                    <div className="section-header">
                        <div className="section-header-left">
                            <h2 className="section-title">Other MSME Schemes</h2>
                        </div>
                    </div>

                    <div className="schemes-grid">
                        {OTHER_MSME_SCHEMES_DATA.map((scheme) => (
                            <SchemeCard key={scheme.id} scheme={scheme} />
                        ))}
                    </div>
                </div>
            </main>

            {/* -------------------------------------------------------------------------- */}
            {/*  HOW TO APPLY SECTION  */}
            {/* -------------------------------------------------------------------------- */}

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
                            <div className          ="step-number">01</div>
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
                            <i className="fas fa-chevron-right"></i>
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
                            <i className="fas fa-chevron-right"></i>
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
                        <Link href="supplier-registration.html" className="btn btn-primary btn-lg">
                            <i className="fas fa-user-plus"></i> Apply for Registration
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

/* -------------------------------------------------------------------------- */
/*  Scheme catalog — all card content, images, meta icons  */
/* -------------------------------------------------------------------------- */

const ODOP_SCHEMES_DATA: SchemeCardData[] = [
    {
        id: 'odop-margin-money',
        category: 'financial',
        iconColorClass: 'scheme-icon-green',
        image: { src: '/assets/img/schemes/odop.png', alt: 'ODOP Margin Money scheme' },
        title: 'ODOP Margin Money Scheme',
        description: 'Margin money subsidy for ODOP projects based on project cost slabs.',
        meta: [
            { labelIcon: 'FaRupeeSign', label: ' Up to Rs 25 lakh', value: '25% subsidy, max Rs 6.25 lakh' },
            { labelIcon: 'FaChartLine', label: ' Rs 25-50 lakh', value: '20% or Rs 6.25 lakh (higher)' },
            { labelIcon: 'FaSackDollar', label: ' Above Rs 50 lakh', value: '10% subsidy, up to Rs 20 lakh' },
        ],
        tags: ['Age 18+', 'No minimum education', 'Not a bank/FI defaulter'],
        eligibility: '<strong>Eligible:</strong> ODOP entrepreneurs meeting age and banking norms.',
    },
    {
        id: 'odop-training-toolkit',
        category: 'training',
        iconColorClass: 'scheme-icon-purple',
        image: { src: '/assets/img/schemes/odop.png', alt: 'ODOP Training and Toolkit scheme' },
        title: 'ODOP Training and Toolkit Scheme',
        description: 'Skill training support for ODOP artisans with stipend and toolkit.',
        meta: [
            { labelIcon: 'FaCalendarDays', label: ' Training Duration', value: 'Free training for 10 days' },
            { labelIcon: 'FaWallet', label: ' Honorarium', value: 'Rs 200 per day' },
            { labelIcon: 'FaToolbox', label: ' Toolkit', value: 'Toolkit support after training' },
        ],
        tags: ['U.P. native', 'Age 18+', 'One per family'],
        eligibility: '<strong>Eligible:</strong> U.P. artisans, 18+, no toolkit benefit in last 2 years.',
    },
    {
        id: 'odop-mda',
        category: 'export',
        iconColorClass: 'scheme-icon-teal',
        image: { src: '/assets/img/schemes/MDA-Scheme.jpg', alt: 'Marketing Development Assistance scheme' },
        title: 'ODOP Marketing Development Assistance Scheme',
        description: 'Support for ODOP participation in fairs, travel and e-commerce promotion.',
        meta: [
            { labelIcon: 'FaStore', label: ' Stall and Participation', value: '75% stall support with capping.' },
            { labelIcon: 'FaPlane', label: ' Travel and Transport', value: '75% travel support with capping.' },
            { labelIcon: 'FaLink', label: ' E-Commerce', value: '75% expense, max Rs 10,000' },
        ],
        tags: ['Udyam registration required', 'Booth and travel support'],
        eligibility: '<strong>Eligible:</strong> ODOP units with valid Udyam registration.',
    },
    {
        id: 'odop-cfc',
        category: 'infrastructure',
        iconColorClass: 'scheme-icon-orange',
        image: { src: '/assets/img/schemes/odop.png', alt: 'ODOP CFC scheme' },
        title: 'ODOP Common Facility Centre Scheme',
        description: 'Shared infrastructure for production and testing via an SPV model.',
        meta: [
            { labelIcon: 'FaLayerGroup', label: ' Project up to Rs 10 cr', value: 'Project support: 70% - 90%.' },
            {
                labelIcon: 'FaFlask',
                label: ' Environment/R&D Projects',
                value: '60% support, maximum Rs 9 cr',
            },
            {
                labelIcon: 'FaPeopleGroup',
                label: ' SPV Requirement',
                value: 'Min 20 members; 2/3 linked to ODOP.',
            },
        ],
        tags: ['Shared infrastructure', 'Cluster support', 'Technology and quality'],
        eligibility: '<strong>Eligible:</strong> ODOP SPVs meeting norms.',
    },
]

const OTHER_MSME_SCHEMES_DATA: SchemeCardData[] = [
    {
        id: 'up-msme-capital-subsidy',
        category: 'financial',
        iconColorClass: 'scheme-icon-blue',
        image: { src: '/assets/img/schemes/Pradhanmantri-Mudra-Yojna.png', alt: 'UP MSME Promotion Policy' },
        title: 'UP MSME Promotion Policy 2022 (Capital Subsidy)',
        description: 'Capital subsidy support for MSME units under the state policy.',
        meta: [
            {
                labelIcon: 'FaPercent',
                label: ' Bundelkhand/Purvanchal',
                value: '25% (Micro), 20% (Small), 15% (Medium)',
            },
            {
                labelIcon: 'FaPercent',
                label: ' Madhyanchal/Paschimanchal',
                value: '20% (Micro), 15% (Small), 10% (Medium)',
            },
            {
                labelIcon: 'FaIndustry',
                label: ' Maximum Assistance',
                value: 'Up to Rs 4 crore, plus 2% for SC/ST and women',
            },
        ],
        tags: ['MSME policy benefit'],
        eligibility: '<strong>Eligible:</strong> MSME units under notified policy criteria.',
        applyLabel: 'View Details and Apply',
        brochureLabel: 'Download Brochure',
    },
    {
        id: 'pmegp',
        category: 'financial',
        iconColorClass: 'scheme-icon-green',
        image: { src: '/assets/img/schemes/PMEGP.jpg', alt: 'PMEGP logo' },
        title: "PM's Employment Generation Programme",
        description: 'Credit-linked subsidy for new micro-enterprise self-employment..',
        meta: [
            {
                labelIcon: 'FaIndianRupeeSign',
                label: ' Project Cost',
                value: 'Up to Rs 50 lakh (manufacturing) and Rs 20 lakh (service/business)',
            },
            {
                labelIcon: 'FaPercent',
                label: ' Subsidy',
                value: 'Margin money support: 15% to 35% of project cost',
            },
            { labelIcon: 'FaUser', label: ' Own Contribution', value: 'As per PMEGP category norms' },
        ],
        tags: ['Manufacturing', 'Service Sector', 'Rural/Urban'],
        eligibility: '<strong>Eligible:</strong> 18+ individuals, SHGs, institutions and co-operatives.',
        applyLabel: 'View Details and Apply',
        brochureLabel: 'Download Brochure',
    },
    {
        id: 'cgtmse',
        category: 'financial',
        iconColorClass: 'scheme-icon-orange',
        image: { src: '/assets/img/schemes/cgtmse.jpg', alt: 'CGTMSE logo' },
        title: 'Credit Guarantee Fund Scheme for MSMEs (CGTMSE)',
        description: 'Credit guarantee support for collateral-free MSME loans under CGTMSE.',
        meta: [
            {
                labelIcon: 'FaIndianRupeeSign',
                label: ' Credit Limit',
                value: 'Collateral-free loans up to Rs 2 crore under CGTMSE',
            },
            {
                labelIcon: 'FaShieldHalved',
                label: ' Guarantee Cover',
                value: 'State support for one-time guarantee fee',
            },
            { labelIcon: 'FaLockOpen', label: ' Collateral', value: 'Collateral-free for eligible MSME loans' },
        ],
        tags: ['Micro Enterprise', 'Small Enterprise', 'Women-led enterprises'],
        eligibility: '<strong>Eligible:</strong> New & existing MSMEs (manufacturing & services).',
    },
    {
        id: 'epf-reimbursement',
        category: 'training',
        iconColorClass: 'scheme-icon-purple',
        image: { src: '/assets/img/schemes/Pradhan-Mantri-Kaushal-Vikas.png', alt: 'PMKVY logo' },
        title: 'EPF Reimbursement for New MSMEs',
        description: 'EPF reimbursement support for new MSMEs during initial years.',
        meta: [
            { labelIcon: 'FaPercent', label: ' Reimbursement', value: '100% employer EPF share reimbursement' },
            { labelIcon: 'FaClock', label: ' Support Period', value: 'For 5 years from production start' },
            { labelIcon: 'FaBuilding', label: ' Applicable Units', value: 'New MSME units under policy conditions' },
        ],
        tags: ['Employment support', 'New MSMEs', 'Policy reimbursement'],
        eligibility: '<strong>Eligible:</strong> New MSMEs meeting policy reimbursement conditions.',
    },
    {
        id: 'quality-gi-erp',
        category: 'export',
        iconColorClass: 'scheme-icon-teal',
        image: { src: '/assets/img/schemes/RoDTEP.jpg', alt: 'RoDTEP logo' },
        title: 'Quality Certification, GI and ERP Support',
        description: 'Reimbursement support for quality improvement, GI registration and ERP adoption.',
        meta: [
            {
                labelIcon: 'FaCertificate',
                label: ' GI/IP Support',
                value: '75% reimbursement, maximum Rs 10 lakh',
            },
            {
                labelIcon: 'FaLaptopCode',
                label: ' ERP Adoption',
                value: '75% reimbursement, maximum Rs 1 lakh',
            },
            {
                labelIcon: 'FaAward',
                label: ' Quality Upgradation',
                value: 'Notified quality certification reimbursement',
            },
        ],
        tags: ['GI registration', 'ERP support', 'Certification support'],
        eligibility: '<strong>Eligible:</strong> MSME units applying under policy reimbursement norms.',
    },
    {
        id: 'technology-upgradation',
        category: 'technology',
        iconColorClass: 'scheme-icon-blue',
        image: { src: '/assets/img/schemes/clcss.jpg', alt: 'CLCSS logo' },
        title: 'Technology Upgradation (Capital and Interest Subsidy)',
        description: 'Technology upgradation support with capital and interest subsidy.',
        meta: [
            {
                labelIcon: 'FaIndianRupeeSign',
                label: ' Capital Subsidy',
                value: '50% on additional machinery, up to Rs 5 lakh',
            },
            {
                labelIcon: 'FaPercent',
                label: ' Interest Subsidy',
                value: '50% interest subsidy, up to Rs 1 lakh per year for 5 years.',
            },
            {
                labelIcon: 'FaGlobe',
                label: ' Other Support',
                value: 'Up to Rs 1 lakh each for ERP and branding',
            },
        ],
        tags: ['Technology Upgrade', 'Machinery Purchase', 'Capacity Building'],
        eligibility: '<strong>Eligible:</strong> Existing micro and small enterprises with Udyam registration.',
    },
    {
        id: 'pm-vishwakarma',
        category: 'financial',
        iconColorClass: 'scheme-icon-gold',
        image: { src: '/assets/img/schemes/PM-Vishkarma-Yojna.png', alt: 'PM Vishwakarma Yojana logo' },
        title: 'PM Vishwakarma Yojana',
        description: 'Livelihood support for traditional artisans with training and toolkit.',
        meta: [
            { labelIcon: 'FaCalendarDays', label: ' Training', value: 'Free skill training for 10 days' },
            { labelIcon: 'FaToolbox', label: ' Toolkit', value: 'Toolkit support after successful training' },
            { labelIcon: 'FaUserCheck', label: ' Age', value: 'Minimum age: 18 years' },
        ],
        tags: ['Artisans', 'Craftspeople', '18 Trades Covered'],
        eligibility: '<strong>Eligible:</strong> Traditional artisans, 18+, as per scheme trade criteria.',
    },
    {
        id: 'environmental-support',
        category: 'marketing',
        iconColorClass: 'scheme-icon-green',
        image: { src: '/assets/img/schemes/GI-Tag.png', alt: 'Environmental support' },
        title: 'Environmental Support for MSME Units',
        description: 'Financial support for common environmental infrastructure in MSME clusters.',
        meta: [
            {
                labelIcon: 'FaRecycle',
                label: ' Common Facilities',
                value: '50% assistance, max Rs 10 crore for CETP/waste management',
            },
            {
                labelIcon: 'FaDroplet',
                label: ' Zero Liquid Discharge',
                value: '50% assistance, max Rs 75 lakh for eligible units',
            },
            { labelIcon: 'FaLeaf', label: ' Focus', value: 'Cleaner production and compliant systems' },
        ],
        tags: ['CETP support', 'Waste management', 'ZLD support'],
        eligibility:
            '<strong>Eligible:</strong> MSME units/clusters creating eligible common environmental facilities.',
    },
]

export const SCHEMES_PAGE_CATALOG = {
    odop: ODOP_SCHEMES_DATA,
    otherMsme: OTHER_MSME_SCHEMES_DATA,
} as const
