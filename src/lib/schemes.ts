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



export interface Scheme {
  id: number;
  slug: string;
  name: string;
  logo: string;
  shortDescription: string;
  longDescription: string;
  heroJson: any | null;

  introJson: IntroSection;

  highlightsJson: Highlight[];

  eligibilityJson: Eligibility;

  subsidyJson: Subsidy;

  howItWorksJson: HowItWorks;

  calculationJson: Calculation;

  documentsJson: Documents;

  ctaJson: CTA;

  footerInfoJson: FooterInfo[];

  dynamicSectionsJson: DynamicSections;

  status: number;
  created_at: string;
  updated_at: string;
}

/* ---------------- Sections ---------------- */

export interface IntroSection {
  tag: string;
  title: string;
  description: string;
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface Eligibility {
  note: string;
  points: string[];
}

export interface Subsidy {
  rows: SubsidyRow[];
  columns: SubsidyColumn[];
  footnote: string;
}

export interface SubsidyRow {
  [key: string]: string | number;
}

export interface SubsidyColumn {
  id: string;
  label: string;
}

export interface HowItWorks {
  steps: Step[];
}

export interface Step {
  title?: string;
  description?: string;
  icon?: string;
}

export interface Calculation {
  intro: string;
  project_cost: string;
  effective_loan: string;
  eligible_subsidy: string;
}

export interface Documents {
  documents: DocumentItem[];
  resources_label: string;
  before_submit_body: string;
  before_submit_title: string;
}

export interface DocumentItem {
  name?: string;
  url?: string;
}

export interface CTA {
  apply_url: string;
  cta_title: string;
  cta_subtitle: string;
  helpdesk_url: string;
}

export interface FooterInfo {
  title?: string;
  description?: string;
}

export interface DynamicSections {
  cta: boolean;
  intro: boolean;
  subsidy: boolean;
  documents: boolean;
  highlights: boolean;
  calculation: boolean;
  eligibility: boolean;
  footer_info: boolean;
  how_it_works: boolean;
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



