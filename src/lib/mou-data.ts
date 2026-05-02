export type MouRecord = {
  slug: string;
  title: string;
  partner: string;
  signedOn: string;
  objective: string;
  detail: string;
  report: {
    period: string;
    unitsSold: number;
    revenueInr: number;
    channels: string[];
    keyHighlights: string[];
  };
};

export const mouRecords: MouRecord[] = [
  {
    slug: "amazon-flipkart-ecommerce-marketplace-mou",
    title: "ODOP Marketplace Integration with Amazon and Flipkart",
    partner: "Amazon India and Flipkart",
    signedOn: "12 February 2025",
    objective:
      "Enable ODOP producers to list, promote, and sell district products on major e-commerce platforms.",
    detail:
      "Through this MOU, ODOP sellers receive onboarding support, catalog creation guidance, and campaign visibility during festive and state promotion windows.",
    report: {
      period: "FY 2025-26",
      unitsSold: 128450,
      revenueInr: 186400000,
      channels: ["Amazon", "Flipkart"],
      keyHighlights: [
        "Banarasi textile and Moradabad metal crafts led online demand.",
        "Average seller order volume grew by 34% after catalog standardization.",
        "ODOP-focused promotions improved repeat customer rate by 18%.",
      ],
    },
  },
  {
    slug: "geographical-indication-brand-protection-mou",
    title: "GI Product Branding and Protection Collaboration",
    partner: "Quality Council and IP Facilitation Partners",
    signedOn: "22 March 2025",
    objective:
      "Strengthen branding, traceability, and legal protection for ODOP GI-tagged products.",
    detail:
      "The partnership supports district producer groups with packaging standards, digital traceability labels, and trademark assistance for export-ready branding.",
    report: {
      period: "FY 2025-26",
      unitsSold: 35600,
      revenueInr: 74200000,
      channels: ["Domestic Retail", "Export Buyers"],
      keyHighlights: [
        "14 GI product clusters onboarded for branding support.",
        "Counterfeit complaints reduced in pilot markets.",
        "Export enquiries increased after standardized packaging rollout.",
      ],
    },
  },
  {
    slug: "odop-logistics-warehousing-support-mou",
    title: "Integrated Logistics and Warehousing Support for ODOP",
    partner: "India Post and Private Logistics Partners",
    signedOn: "8 April 2025",
    objective:
      "Reduce delivery time and logistics cost for ODOP shipments across India.",
    detail:
      "This MOU establishes district pickup points, zonal warehousing, and discounted shipping slabs to improve market responsiveness for artisans and MSMEs.",
    report: {
      period: "FY 2025-26",
      unitsSold: 82100,
      revenueInr: 96500000,
      channels: ["D2C Shipments", "Marketplace Fulfilment"],
      keyHighlights: [
        "Average delivery TAT reduced by 21% in covered districts.",
        "Return rates fell after improved packaging SOP adoption.",
        "Seller shipping cost dropped by up to 11% in pilot phase.",
      ],
    },
  },
  {
    slug: "odop-export-promotion-market-access-mou",
    title: "Export Promotion and International Buyer Access",
    partner: "Export Promotion Councils and Trade Bodies",
    signedOn: "3 May 2025",
    objective:
      "Create structured export pathways for ODOP enterprises and producer groups.",
    detail:
      "The collaboration includes export-readiness training, buyer-seller meets, and assisted participation in international trade fairs.",
    report: {
      period: "FY 2025-26",
      unitsSold: 19400,
      revenueInr: 118700000,
      channels: ["Bulk Export Orders", "International Exhibitions"],
      keyHighlights: [
        "New export leads generated in the UAE, Germany, and Japan.",
        "Product compliance documentation support expanded to 26 districts.",
        "Average export order value improved for handicraft categories.",
      ],
    },
  },
  {
    slug: "digital-payments-financial-inclusion-mou",
    title: "Digital Payments and Financial Inclusion for Artisans",
    partner: "Public Sector Banks and Fintech Partners",
    signedOn: "19 June 2025",
    objective:
      "Improve formal financial access, digital payment adoption, and transaction transparency.",
    detail:
      "The MOU supports ODOP units with merchant QR setup, working capital facilitation, and digital bookkeeping orientation at district level camps.",
    report: {
      period: "FY 2025-26",
      unitsSold: 67250,
      revenueInr: 53800000,
      channels: ["UPI", "Bank POS", "Payment Gateway"],
      keyHighlights: [
        "More than 9,000 artisan accounts activated for digital collections.",
        "Cashless transaction share increased significantly in pilot clusters.",
        "Faster payment settlement reduced working capital cycle time.",
      ],
    },
  },
];

export function getMouBySlug(slug: string) {
  return mouRecords.find((mou) => mou.slug === slug);
}
