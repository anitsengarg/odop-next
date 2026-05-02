import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Report | Knowledge Base | ODOP UP Portal",
  description: "Official programme reports, impact assessments and monitoring publications under the ODOP Uttar Pradesh Knowledge Base.",
};

const reports = [
  { slug: "azamgarh", district: "Azamgarh", title: "Black Clay Flower Pot Making Unit", desc: "Azamgarh is a city in the Indian state of Uttar Pradesh.", img: "/assets/img/knowledge-base/project-report/azamgarh.jpg" },
  { slug: "sambhal", district: "Sambhal", title: "Horn & Bone Handicraft Unit", desc: "Sambhal city in Western Uttar Pradesh, India is one of the oldest towns. It has a rich history...", img: "/assets/img/knowledge-base/project-report/sambhal.jpg" },
  { slug: "rampur", district: "Rampur", title: "Patchwork Fabric Unit", desc: "The magical hands of Rampur's weavers and knitters create patchwork masterpieces...", img: "/assets/img/knowledge-base/project-report/rampur.jpg" },
  { slug: "siddharthnagar", district: "Siddharthnagar", title: "Kala Namak Rice Processing Unit", desc: "Kalanamak variety of rice has been under cultivation since time immemorial. Kalanamak rice...", img: "/assets/img/knowledge-base/project-report/siddharthnagar.jpg" },
  { slug: "saharanpur", district: "Saharanpur", title: "Wood Crafting Unit", desc: "The wood carving artistry is about 400 years old. The products showcase the skill of the craftsmen...", img: "/assets/img/knowledge-base/project-report/saharanpur.jpg" },
  { slug: "unnao", district: "Unnao", title: "Zari Zardozi Work Unit", desc: "The Zardozi industry is largely cottage industry. Zardozi embroidery...", img: "/assets/img/knowledge-base/project-report/unnao.jpg" },
  { slug: "baghpat", district: "Baghpat", title: "Curtains Making Unit", desc: "Baghpat is mainly known for its home furnishing works across the country. Curtains are often...", img: "/assets/img/knowledge-base/project-report/baghpat.jpg" },
];

import { fetchProjectReports } from "@/services/project-report.service";

export default async function ProjectReportPage() {
  const reportsData = await fetchProjectReports();
  console.log("Project Reports Data:", JSON.stringify(reportsData, null, 2));

  return (
    <main className="main-content schemes-page">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Project Report</h1>
          <p className="page-hero-subtitle">
            Official programme reports, impact assessments and monitoring publications under the ODOP Uttar Pradesh
            Knowledge Base.
          </p>
        </div>
      </section>

      <div className="kb-pr-page">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Knowledge Base</span>
            <h2 className="section-title">Project Report</h2>
            <div className="divider"><span /><span /><span /></div>
          </div>

          <div className="kb-pr-grid" role="list">
            {reports.map(({ slug, district, title, desc, img }) => (
              <article key={slug} className="kb-pr-card" role="listitem">
                <a href={`/knowledge-base/project-report/${slug}`} className="kb-pr-card__link">
                  <span className="kb-pr-card__district">{district}</span>
                  <h3 className="kb-pr-card__title">{title}</h3>
                  <p className="kb-pr-card__desc">{desc}</p>
                  <div className="kb-pr-card__media">
                    <img src={img} alt="" className="kb-pr-card__img" width={640} height={400} loading="lazy" />
                    <span className="kb-pr-card__action" aria-hidden="true">
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
