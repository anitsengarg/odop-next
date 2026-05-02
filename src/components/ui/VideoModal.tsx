"use client";

import { useEffect } from "react";

interface VideoModalProps {
  videoId: string | null;
  onClose: () => void;
}

export function VideoModal({ videoId, onClose }: VideoModalProps) {
  useEffect(() => {
    if (videoId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [videoId]);

  if (!videoId) return null;

  return (
    <div id="kb-ss-modal" className="kb-ss-modal" role="dialog" aria-modal="true" aria-label="Video player">
      <div className="kb-ss-modal__backdrop" onClick={onClose} tabIndex={-1}></div>
      <button type="button" className="kb-ss-modal__close" onClick={onClose} aria-label="Close video">
        <i className="fas fa-times" aria-hidden="true"></i>
      </button>
      <div className="kb-ss-modal__panel">
        <button type="button" className="kb-ss-modal__close" onClick={onClose} aria-label="Close video">
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>
        <div className="kb-ss-modal__frame">
          <iframe
            id="kb-ss-iframe"
            className="kb-ss-modal__iframe"
            title="YouTube video player"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
