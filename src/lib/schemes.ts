import type { IconType } from 'react-icons'
import {
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
} from 'react-icons/fa6'

export type SchemeMeta = {
    labelIcon: string
    label: string
    value: string
}

export type SchemeHighlight = {
    icon: string
    title: string
    description: string
}

export type SchemeStep = {
    number: number
    title: string
    description: string
}

export type SchemeBenefitRow = {
    slab: string
    subsidy: string
}

export type SchemeExample = {
    projectCost: string
    eligibleSubsidy: string
    effectiveLoan: string
}

export type SchemeDetail = {
    heroSubtitle: string
    overview: string
    highlights: SchemeHighlight[]
    eligibility: string[]
    eligibilityNote?: string
    benefits: SchemeBenefitRow[]
    benefitsNote?: string
    howItWorks: SchemeStep[]
    example?: SchemeExample
    documents: string[]
    docSidebox?: {
        title: string
        description: string
        linkText: string
        linkHref: string
    }
    cta: {
        title: string
        description: string
        applyUrl: string
    }
    visuals?: {
        eligibility?: string
        benefits?: string
    }
}

export interface SchemeCardData {
    id: string
    category: string
    iconColorClass: string
    image: { src: string; alt: string }
    title: string
    description: string
    meta: SchemeMeta[]
    tags: string[]
    eligibility: string
    applyLabel?: string
    brochureLabel?: string
    detail?: SchemeDetail
}

export const SCHEME_META_ICONS: Record<string, IconType> = {
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
        detail: {
            heroSubtitle: 'Financial support to grow your district-based business through a credit-linked subsidy that lowers the loan burden for entrepreneurs, MSMEs, and artisans working on notified ODOP products in Uttar Pradesh.',
            overview: 'The ODOP Margin Money Scheme is a focused financial assistance programme under the One District One Product initiative of Uttar Pradesh. It supports entrepreneurs, MSMEs, and artisans by providing margin money subsidy against eligible bank-linked projects, which helps reduce the initial loan burden and improves the viability of district-based enterprises. The scheme is designed to promote local industries, traditional crafts, and value-added production around officially identified ODOP products.',
            highlights: [
                {
                    icon: 'FaLink',
                    title: 'Credit-Linked Subsidy',
                    description: 'Subsidy is connected to the approved bank-financed project, making formal credit more accessible.'
                },
                {
                    icon: 'FaPeopleGroup',
                    title: 'Built for Local Enterprise',
                    description: 'Supports MSMEs, traditional artisans, and first-generation entrepreneurs across Uttar Pradesh.'
                },
                {
                    icon: 'FaCertificate',
                    title: 'ODOP Product Focus',
                    description: 'Applicable only to projects linked with the notified ODOP product of the relevant district.'
                },
                {
                    icon: 'FaLeaf',
                    title: 'Lower Initial Burden',
                    description: 'Reduces up-front financial pressure so businesses can invest in machinery, working capital, and scale.'
                }
            ],
            eligibility: [
                'Applicant must be at least 18 years old.',
                'Business or proposed unit must be based in Uttar Pradesh.',
                'The project should relate to the ODOP product identified for the district.',
                'Applicant should not be a bank defaulter.',
                'Applicant should not have already availed a similar subsidy-based scheme for the same project.',
                'Self-contribution is 10% for General category and 5% for Special categories.'
            ],
            eligibilityNote: 'Applicants should prepare a viable project and remain ready for district and bank-level verification before loan sanction.',
            benefits: [
                { slab: 'Up to Rs 25 lakh', subsidy: '25% subsidy, maximum Rs 6.25 lakh' },
                { slab: 'Rs 25-50 lakh', subsidy: 'Rs 6.25 lakh or 20% of project cost, whichever is higher' },
                { slab: 'Rs 50-150 lakh', subsidy: 'Rs 10 lakh or 10% of project cost, whichever is higher' },
                { slab: 'Above Rs 150 lakh', subsidy: '10% subsidy, maximum Rs 20 lakh' }
            ],
            benefitsNote: 'Subsidy is generally adjusted after the unit completes a successful operation period of around 2 years, subject to scheme conditions and verification.',
            howItWorks: [
                { number: 1, title: 'Choose ODOP Product', description: 'Select the district-specific ODOP product relevant to your business proposal.' },
                { number: 2, title: 'Prepare DPR', description: 'Create a project report with cost, production plan, and financial requirement.' },
                { number: 3, title: 'Apply Online', description: 'Submit your application through the MSME or ODOP-linked online portal.' },
                { number: 4, title: 'Upload Documents', description: 'Share identity proof, bank details, category certificate, and the project report.' },
                { number: 5, title: 'DIC Verification', description: 'The District Industries Centre reviews the proposal and supporting records.' },
                { number: 6, title: 'Bank Loan Approval', description: 'Eligible projects move forward for appraisal and sanction by the financing bank.' },
                { number: 7, title: 'Subsidy Adjustment', description: 'After satisfactory operation, the subsidy is adjusted under the approved scheme norms.' }
            ],
            example: {
                projectCost: 'Rs 20 lakh',
                eligibleSubsidy: 'Rs 5 lakh',
                effectiveLoan: 'Rs 15 lakh'
            },
            documents: [
                'Aadhaar Card and PAN Card',
                'Detailed Project Report (DPR)',
                'Bank account details and related financial information',
                'Category certificate, if applicable'
            ],
            docSidebox: {
                title: 'Before You Submit',
                description: 'Keep your business idea aligned to the ODOP product of your district, confirm your contribution amount, and ensure the project report clearly explains production, pricing, and loan need.',
                linkText: 'View Project Report Resources',
                linkHref: '/resources/project-reports'
            },
            cta: {
                title: 'Apply for ODOP Scheme Today',
                description: 'Use the official MSME application portal to start your ODOP Margin Money Scheme application, or contact the ODOP support desk if you need help with documents, eligibility, or the project report.',
                applyUrl: 'https://msme.up.gov.in/login/registration_login'
            },
            visuals: {
                eligibility: '/assets/img/odop-2.jpg',
                benefits: '/assets/img/odop-3.jpg'
            }
        }
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
        detail: {
            heroSubtitle: 'Empowering artisans with modern skills and advanced toolkits to enhance productivity and product quality under the ODOP initiative.',
            overview: 'The ODOP Training and Toolkit Scheme is designed to bridge the skill gap in traditional district-specific industries. It provides comprehensive 10-day training to artisans, followed by the distribution of modern toolkits tailored to their specific craft. This initiative aims to modernize traditional production methods, increase artisan income, and ensure the sustainability of local crafts.',
            highlights: [
                {
                    icon: 'FaCalendarDays',
                    title: 'Free Skill Training',
                    description: '10 days of specialized training by experts in the relevant ODOP craft.'
                },
                {
                    icon: 'FaWallet',
                    title: 'Daily Stipend',
                    description: 'Artisans receive an honorarium of Rs 200 per day during the training period.'
                },
                {
                    icon: 'FaToolbox',
                    title: 'Modern Toolkits',
                    description: 'Distribution of high-quality, modern toolkits upon successful completion of training.'
                },
                {
                    icon: 'FaAward',
                    title: 'Certification',
                    description: 'Official certification that recognizes the artisan\'s skills and training.'
                }
            ],
            eligibility: [
                'Applicant must be a native of Uttar Pradesh.',
                'Minimum age of 18 years.',
                'The applicant or any family member should not have received a toolkit benefit in the last 2 years.',
                'Only one person per family is eligible for the scheme.',
                'Applicant must be involved in the notified ODOP craft of their district.'
            ],
            benefits: [
                { slab: 'Training Duration', subsidy: '10 Days of free technical training' },
                { slab: 'Stipend', subsidy: 'Rs 200 per day (Total Rs 2,000)' },
                { slab: 'Toolkit Support', subsidy: 'Free advanced toolkit relevant to the craft' }
            ],
            howItWorks: [
                { number: 1, title: 'Identify Craft', description: 'Ensure you are practicing the notified ODOP craft of your district.' },
                { number: 2, title: 'Online Registration', description: 'Apply through the official ODOP portal with required personal and craft details.' },
                { number: 3, title: 'Verification', description: 'District Industries Centre (DIC) verifies the application and artisan status.' },
                { number: 4, title: 'Training Batch', description: 'Enroll in the scheduled 10-day training program at the designated centre.' },
                { number: 5, title: 'Skill Assessment', description: 'Complete the training and participate in the skill assessment session.' },
                { number: 6, title: 'Toolkit Distribution', description: 'Receive the modern toolkit and certificate at the end of the program.' }
            ],
            documents: [
                'Aadhaar Card',
                'Residence Proof (Domicile of UP)',
                'Caste/Category Certificate (if applicable)',
                'Bank Passbook for stipend transfer',
                'Passport size photograph'
            ],
            cta: {
                title: 'Apply for Skill Training Today',
                description: 'Join thousands of artisans who have modernized their craft. Apply for the ODOP Training and Toolkit scheme now.',
                applyUrl: 'https://msme.up.gov.in/login/registration_login'
            },
            visuals: {
                eligibility: '/assets/img/odop-1.jpg',
                benefits: '/assets/img/odop-3.jpg'
            }
        }
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
        detail: {
            heroSubtitle: 'Expanding market reach for ODOP products through financial support for exhibitions, trade fairs, and digital marketplace integration.',
            overview: 'The Marketing Development Assistance (MDA) Scheme provides financial incentives to ODOP units to showcase their products in national and international exhibitions. It covers expenses related to stall rentals, travel, and freight. Additionally, it encourages digital adoption by subsidizing the costs of onboarding and selling on e-commerce platforms.',
            highlights: [
                {
                    icon: 'FaStore',
                    title: 'Exhibition Support',
                    description: 'Reimbursement of stall charges for participating in recognized trade fairs and exhibitions.'
                },
                {
                    icon: 'FaPlane',
                    title: 'Travel Assistance',
                    description: 'Support for travel expenses incurred by entrepreneurs for attending outstation marketing events.'
                },
                {
                    icon: 'FaLink',
                    title: 'E-Commerce Onboarding',
                    description: 'Financial assistance for registering and promoting products on major e-commerce portals.'
                },
                {
                    icon: 'FaGlobe',
                    title: 'Global Exposure',
                    description: 'Higher limits of support for international exhibitions to promote exports from UP.'
                }
            ],
            eligibility: [
                'The unit must be producing the notified ODOP product of the district.',
                'Valid Udyam Registration is mandatory.',
                'Participation must be in recognized/approved fairs or exhibitions.',
                'For e-commerce, the unit must have a formal agreement with the platform.'
            ],
            benefits: [
                { slab: 'Stall Charges', subsidy: '75% of charges, subject to event-specific capping' },
                { slab: 'Travel & Freight', subsidy: '75% reimbursement for travel and product transport' },
                { slab: 'E-Commerce Support', subsidy: '75% of onboarding/promotion cost, max Rs 10,000' }
            ],
            howItWorks: [
                { number: 1, title: 'Select Event', description: 'Choose from the list of approved national or international exhibitions.' },
                { number: 2, title: 'Prior Approval', description: 'Submit an application to the DIC for intent to participate and avail MDA.' },
                { number: 3, title: 'Participate', description: 'Attend the event and maintain all original receipts, photos, and participation proof.' },
                { number: 4, title: 'Claim Submission', description: 'Submit the reimbursement claim form with all supporting documents within 30 days.' },
                { number: 5, title: 'Verification', description: 'DIC/ODOP cell reviews the claim and participation records.' },
                { number: 6, title: 'Disbursement', description: 'Approved MDA amount is credited to the unit\'s bank account.' }
            ],
            documents: [
                'Udyam Registration Certificate',
                'Event Participation Certificate/Proof',
                'Original Bills and Invoices',
                'Travel Tickets/Boarding Passes',
                'Photographs of the stall'
            ],
            cta: {
                title: 'Take Your Business Global',
                description: 'Showcase your ODOP products to the world. Apply for Marketing Development Assistance today.',
                applyUrl: 'https://msme.up.gov.in/login/registration_login'
            },
            visuals: {
                eligibility: '/assets/img/scheme-1.jpg',
                benefits: '/assets/img/odop-2.jpg'
            }
        }
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
        detail: {
            heroSubtitle: 'Developing shared industrial infrastructure and modern testing facilities to boost collective productivity of ODOP clusters.',
            overview: 'The Common Facility Centre (CFC) Scheme supports the creation of shared infrastructure that individual MSMEs or artisans might find too expensive. This includes modern machinery, testing labs, design centres, packaging units, and raw material banks. CFCs are established through a Special Purpose Vehicle (SPV) model, ensuring that the local industry takes ownership and benefits collectively.',
            highlights: [
                {
                    icon: 'FaLayerGroup',
                    title: 'High Project Funding',
                    description: 'Government provides 70% to 90% of the project cost for CFCs up to Rs 10 crore.'
                },
                {
                    icon: 'FaFlask',
                    title: 'R&D and Quality Control',
                    description: 'Support for establishing specialized testing labs and research facilities.'
                },
                {
                    icon: 'FaPeopleGroup',
                    title: 'Cluster-Led Model',
                    description: 'Driven by Special Purpose Vehicles (SPVs) formed by local entrepreneurs and artisans.'
                },
                {
                    icon: 'FaIndustry',
                    title: 'Modern Machinery',
                    description: 'Access to state-of-the-art production technology for all cluster members.'
                }
            ],
            eligibility: [
                'Formation of an SPV with at least 20 members.',
                'At least 2/3 of members must be involved in the notified ODOP craft.',
                'The SPV must be registered as a legal entity (Company/Society/Trust).',
                'Availability of suitable land for the CFC.'
            ],
            benefits: [
                { slab: 'General Projects', subsidy: 'Up to 90% government grant on project cost' },
                { slab: 'Environment/R&D', subsidy: 'Up to 60% grant, maximum Rs 9 crore' },
                { slab: 'Operation Support', subsidy: 'Shared overheads and expert management' }
            ],
            howItWorks: [
                { number: 1, title: 'SPV Formation', description: 'Local entrepreneurs and artisans come together to form a Special Purpose Vehicle.' },
                { number: 2, title: 'DPR Preparation', description: 'Conduct a gap analysis and prepare a Detailed Project Report for the CFC.' },
                { number: 3, title: 'Proposal Submission', description: 'Submit the CFC proposal to the Directorate of Industries/ODOP Cell.' },
                { number: 4, title: 'Approval', description: 'The project is reviewed and approved by the State Level Steering Committee.' },
                { number: 5, title: 'Implementation', description: 'Execution of civil works and procurement of machinery as per the approved DPR.' },
                { number: 6, title: 'Operationalization', description: 'CFC starts providing services to the cluster members on a user-charge basis.' }
            ],
            documents: [
                'SPV Registration Documents',
                'List of SPV Members with Aadhaar/Udyam',
                'Detailed Project Report (DPR)',
                'Land Documents (Lease/Ownership)',
                'Bank Guarantee for SPV contribution'
            ],
            cta: {
                title: 'Build Shared Success',
                description: 'Join hands with fellow entrepreneurs to build world-class infrastructure. Start your ODOP CFC project today.',
                applyUrl: 'https://msme.up.gov.in/login/registration_login'
            },
            visuals: {
                eligibility: '/assets/img/odop-2.jpg',
                benefits: '/assets/img/scheme-1.jpg'
            }
        }
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
