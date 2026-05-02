"use client";

import { useState } from "react";
import Image from "next/image";
import { VideoModal } from "@/components/ui/VideoModal";

export interface SuccessStory {
  id: string | number;
  title: string;
  description: string;
  district: string;
  thumbnail: string;
  video_id: string;
  duration?: string;
}

interface SuccessStoryListProps {
  stories: SuccessStory[];
}

export function SuccessStoryList({ stories }: SuccessStoryListProps) {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
    <>
      <div className="kb-ss-grid" role="list">
        {stories.map((story) => (
          <article key={story.id} className="kb-ss-card" role="listitem">
            <div className="kb-ss-card__media">
              <Image
                src={story.thumbnail}
                alt={story.title}
                className="kb-ss-card__thumb"
                width={1280}
                height={720}
                style={{ objectFit: "cover" }}
              />
              {story.duration && (
                <span className="kb-ss-card__duration" aria-hidden="true">
                  {story.duration}
                </span>
              )}
              <button
                type="button"
                className="kb-ss-card__play"
                onClick={() => setSelectedVideoId(story.video_id)}
                aria-label={`Play: ${story.title}`}
              >
                <span className="kb-ss-card__play-shape" aria-hidden="true"></span>
              </button>
            </div>
            <div className="kb-ss-card__meta">
              <div className="kb-ss-card__avatar">
                <Image
                  src={story.thumbnail}
                  alt={story.title}
                  width={48}
                  height={48}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="kb-ss-card__copy">
                <h3 className="kb-ss-card__title">{story.title}</h3>
                <p className="kb-ss-card__desc">{story.description}</p>
                <span className="kb-ss-card__tag">{story.district}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <VideoModal
        videoId={selectedVideoId}
        onClose={() => setSelectedVideoId(null)}
      />
    </>
  );
}
