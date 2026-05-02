import type { Metadata } from "next";
import { fetchSuccessStories } from "@/services";
import { SuccessStoryList, SuccessStory } from "./SuccessStoryList";
import { decrypt128, API_CONFIG } from "@/lib/api";

export const metadata: Metadata = {
  title: "Success Story | Knowledge Base | ODOP UP Portal",
  description: "Inspiring success stories of ODOP artisans and entrepreneurs from across Uttar Pradesh."
};

async function getSuccessStories(): Promise<any> {
  try {
    const response = await fetchSuccessStories({
      next: { revalidate: 3600 },
    });
    let decryptedData: any = await decrypt128((response.data as any).body);
    let data = decryptedData?.data?.data || decryptedData?.data || decryptedData;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      const arrayVal = Object.values(data).find(val => Array.isArray(val));
      if (arrayVal) data = arrayVal;
    }
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching success stories:", error);
    return [];
  }
}

export default async function SuccessStoryPage() {
  const storiesFromApi = await getSuccessStories();

  const getYouTubeId = (url: string | undefined | null): string => {
    if (!url || url === "null") return "";
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : url;
  };

  const stories: SuccessStory[] = (storiesFromApi || []).map((item: any) => ({
    id: item.id || Math.random(),
    title: item.title || item.name || "Successful Entrepreneur",
    description: item.short_description || item.description || "Success Story",
    district: item.district?.name || item.district || "Uttar Pradesh",
    thumbnail: item.thumbnail ? `${API_CONFIG.IMAGE_BASE_URL}${item.thumbnail}` : "/assets/img/placeholder.jpg",
    video_id: getYouTubeId(item.url) || item.video_id || "",
    duration: item.duration || undefined,
  }));

  return (
    <main className="main-content schemes-page kb-ss-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Success Story</h1>
          <p className="page-hero-subtitle">
            Field stories of growth, exports and livelihood impact from ODOP-registered
            enterprises and clusters across Uttar Pradesh.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Knowledge Base</span>
          <h2 className="section-title">Success Story</h2>
          <div className="divider">
            <span />
            <span />
            <span />
          </div>
        </div>

        <SuccessStoryList stories={stories} />
      </div>
    </main>
  );
}
