"use client";

import { useEffect } from "react";

interface ProjectVideoModalProps {
  video: { id: string; title: string; description: string } | null;
  onClose: () => void;
}

function getYouTubeEmbedUrl(videoIdOrUrl: string): string {
  if (!videoIdOrUrl || videoIdOrUrl === "null") return "";

  const value = videoIdOrUrl.trim();
  const watchMatch = value.match(/[?&]v=([^&]+)/);
  const shortMatch = value.match(/youtu\.be\/([^?&]+)/);
  const embedMatch = value.match(/youtube\.com\/embed\/([^?&]+)/);
  const shortsMatch = value.match(/youtube\.com\/shorts\/([^?&]+)/);
  const videoId = watchMatch?.[1] || shortMatch?.[1] || embedMatch?.[1] || shortsMatch?.[1] || value;

  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
}

export function ProjectVideoModal({ video, onClose }: ProjectVideoModalProps) {
  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [video]);

  if (!video) return null;

  const embedUrl = getYouTubeEmbedUrl(video.id);

  return (
    <div id="kb-pv-modal" className="kb-pv-modal" role="dialog" aria-modal="true" aria-labelledby="kb-pv-modal-title">
      <div className="kb-pv-modal__backdrop" onClick={onClose} tabIndex={-1}></div>
      <div className="kb-pv-modal__panel">
        <div className="kb-pv-modal__toolbar">
          <button type="button" className="kb-pv-modal__close" onClick={onClose} aria-label="Close video">
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="kb-pv-modal__body">
          <h3 id="kb-pv-modal-title" className="kb-pv-modal__title">{video.title}</h3>
          <div className="kb-pv-modal__frame-wrap">
            <div className="kb-pv-modal__frame">
              {embedUrl && embedUrl.trim() !== "" ? (
                <iframe
                  id="kb-pv-iframe"
                  className="kb-pv-modal__iframe"
                  title="YouTube video player"
                  src={embedUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                 <div className="flex items-center justify-center h-full w-full">
                  <p className="text-center text-lg font-semibold text-gray-500">
                    Video not found
                  </p>
                </div>
              )}
            </div>
          </div>
          <div id="kb-pv-modal-desc" className="kb-pv-modal__desc">
            <span>Description</span>
            <p dangerouslySetInnerHTML={{ __html: video.description }} />
          </div>
        </div>
      </div>
    </div>
  );
}
