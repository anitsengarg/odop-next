"use client";

import { useState } from "react";
import Image from "next/image";
import { VideoModal } from "@/components/ui/VideoModal";
import { API_CONFIG } from "@/lib/api";

export interface Documentary {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  short_description: string | null;
  sub_category?: {
    name: string;
    title: string;
  };
  url?: string; // Fallback for video
}

interface DocumentaryListProps {
  documentaries: Documentary[];
}

export function DocumentaryList({ documentaries }: DocumentaryListProps) {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  // Helper to extract YouTube ID if a full URL is provided in the future
  const getYouTubeId = (url: string | undefined | null): string => {
    if (!url || url === "null") return "";
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : url;
  };

  return (
    <>
      <div className="kb-ss-grid" role="list">
        {documentaries.map((doc) => {
          const title = doc.name;
          const kicker = doc.sub_category?.name || "Documentary";
          const imageSrc = doc.thumbnail
            ? `${API_CONFIG.IMAGE_BASE_URL}${doc.thumbnail}`
            : "/assets/img/placeholder.jpg"; // Use a fallback image if needed

          // Assuming the video URL might be added or we use slug temporarily
          const videoId = getYouTubeId(doc.url) || doc.slug || "dummy_video";

          return (
            <article key={doc.id} className="kb-doc-card" role="listitem">
              <div className="kb-doc-card__surface">
                <div className="kb-doc-card__image-container">
                  <Image
                    src={imageSrc}
                    alt={title || "Documentary Image"}
                    className="kb-doc-card__image"
                    width={400}
                    height={250}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="kb-doc-card__scrim" aria-hidden="true"></div>
                <div className="kb-doc-card__body">
                  <p className="kb-doc-card__kicker">{kicker}</p>
                  <h3 className="kb-doc-card__heading">{title}</h3>
                </div>
                <button
                  type="button"
                  className="kb-ss-card__play kb-doc-card__play-btn"
                  onClick={() => setSelectedVideoId(videoId)}
                  aria-label={`Play documentary: ${title}`}
                >
                  <span className="kb-ss-card__play-shape" aria-hidden="true"></span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <VideoModal
        videoId={selectedVideoId}
        onClose={() => setSelectedVideoId(null)}
      />
    </>
  );
}
