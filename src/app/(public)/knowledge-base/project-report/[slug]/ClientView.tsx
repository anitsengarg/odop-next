"use client";

import { useState, useEffect } from "react";
import { API_CONFIG } from "@/lib/api";

type ProjectReportItem = {
  id: number;
  title: string;
  project_value: string;
  slug: string;
  hindi_title: string;
  file: string;
  type: string;
  price: string;
  associate_amount: string;
  short_description: string;
  description: string | null;
  hindi_short_description: string;
  hindi_description: string | null;
  thumbnail: string;
  hindi_thumbnail: string;
  laravel_through_key: number;
  is_purchased: any;
};

export type ProjectReportGroup = {
  id: number;
  name: string;
  hindi_name: string;
  slug: string;
  thumbnail: string;
  hindi_thumbnail: string;
  projectreport: ProjectReportItem[];
};

interface ClientViewProps {
  slug: string;
  reportGroups: ProjectReportGroup[];
}

export default function ClientView({ slug, reportGroups }: ClientViewProps) {
  const [activePdfUrl, setActivePdfUrl] = useState<string | null>(null);
  const [activePreviewLabel, setActivePreviewLabel] = useState<string | null>(null);

  // Initialize with the first available PDF if any
  useEffect(() => {
    if (!activePdfUrl && reportGroups.length > 0) {
      for (const group of reportGroups) {
        if (group.projectreport && group.projectreport.length > 0) {
          const firstReport = group.projectreport.find(r => r.file);
          if (firstReport) {
            setActivePdfUrl(`${API_CONFIG.IMAGE_BASE_URL}${firstReport.file}`);
            setActivePreviewLabel(`${group.name} — ${firstReport.title} (PDF)`);
            break;
          }
        }
      }
    }
  }, [reportGroups, activePdfUrl]);

  const handlePdfClick = (fileUrl: string, label: string) => {
    setActivePdfUrl(`${API_CONFIG.IMAGE_BASE_URL}${fileUrl}`);
    setActivePreviewLabel(label);
  };

  if (!reportGroups || reportGroups.length === 0) {
    return (
      <div className="kb-pr-detail-page">
        <div className="container kb-pr-detail-empty-full">
            <p>We could not find a project report for "{slug}".</p>
            <a href="/knowledge-base/project-report" className="btn btn-primary">Back to project reports</a>
        </div>
      </div>
    );
  }

  const mainGroup = reportGroups[0];

  return (
    <div className="kb-pr-detail-page">
      <div className="kb-pr-detail-layout-wrap">
        <div className="container kb-pr-detail-layout">
          
          <aside className="kb-pr-detail-preview-col" aria-label="PDF preview">
            <div className="kb-pr-detail-preview-head">
              <i className="fas fa-file-pdf" aria-hidden="true"></i>
              <span>{activePreviewLabel || 'Document preview'}</span>
            </div>
            <div className="kb-pr-detail-preview-box">
              {activePdfUrl ? (
                <iframe 
                  src={activePdfUrl} 
                  className="kb-pr-detail-iframe" 
                  title="Selected PDF preview"
                ></iframe>
              ) : (
                <div className="kb-pr-detail-pdf-placeholder" role="status">
                  <i className="fas fa-file-pdf" aria-hidden="true"></i>
                  <span>Select a module PDF on the right to preview it here.</span>
                </div>
              )}
            </div>
          </aside>

          <div className="kb-pr-detail-sidebar-col">
            <div className="kb-pr-detail-rail-head">
              <h1>Project report</h1>
              <p className="kb-pr-detail-district-line">District: {mainGroup.name}</p>
              <p className="kb-pr-detail-section-sub">Module content</p>
            </div>
            
            <div className="kb-pr-detail-module-list">
              {reportGroups.map((group, groupIdx) => (
                <article key={group.id || groupIdx} className="kb-pr-detail-mod-card">
                  <div className="kb-pr-detail-mod-card__top">
                    <span className="kb-pr-detail-mod-card__tag">MODULE {groupIdx + 1}</span>
                  </div>
                  <h2 className="kb-pr-detail-mod-card__title">{group.name}</h2>
                  <hr className="kb-pr-detail-mod-card__rule" />
                  
                  {group.projectreport && group.projectreport.length > 0 ? (
                    <div className="kb-pr-detail-mod-card__pdf-list">
                      {group.projectreport.map((report) => {
                        if (!report.file) return null;
                        const fileUrl = report.file;
                        const label = `${report.title} — Document (PDF)`;
                        const previewLabel = `${group.name} — ${label}`;
                        const isCurrentActive = activePdfUrl === `${API_CONFIG.IMAGE_BASE_URL}${fileUrl}`;
                        
                        return (
                          <button 
                            key={report.id}
                            type="button" 
                            className={`kb-pr-detail-mod-card__pdf ${isCurrentActive ? 'is-active' : ''}`}
                            onClick={() => handlePdfClick(fileUrl, previewLabel)}
                          >
                            <span>{label}</span>
                            <i className="fas fa-file-pdf" aria-hidden="true"></i>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <button type="button" className="kb-pr-detail-mod-card__pdf" disabled>
                      <span>PDF not linked yet</span>
                      <i className="fas fa-file-pdf" aria-hidden="true"></i>
                    </button>
                  )}
                </article>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
