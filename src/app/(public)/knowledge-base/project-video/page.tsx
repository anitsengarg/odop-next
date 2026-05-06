import type { Metadata } from "next";
import { fetchProjectVideos } from "@/services";
import { ProjectVideoList, ProjectVideo } from "./ProjectVideoList";
import { decrypt128 } from "@/lib/api";

export const metadata: Metadata = {
  title: "Product Video | Knowledge Base | ODOP UP Portal",
  description: "ODOP UP product videos — district-level documentations and programme highlights."
};

  const getYouTubeId = (url: string | undefined | null): string => {
    if (!url || url === "null") return "";
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : url;
  };



async function getProjectVideos(): Promise<ProjectVideo[]> {
  try {
    const response = await fetchProjectVideos({
      next: { revalidate: 3600 },
    });

    let data: any;
    if ((response.data as any)?.body && typeof (response.data as any).body === "string") {
      const decryptedData = await decrypt128((response.data as any).body);

      data = typeof decryptedData === "string" ? JSON.parse(decryptedData) : decryptedData;
      console.log("Decrypted product video data:", data);
    } else {
      data = response.data;
    }

    const items = data?.data?.product || data?.data || data || [];
    if (!Array.isArray(items)) return [];

    return items.map((item: any) => ({
      id: item.id || Math.random().toString(),
      title: item.title || item.name || item.product_name || "Product Video",
      district: item.district || item.district_name || "Uttar Pradesh",
      city_name: item.sub_category.name || item.sub_category.hindi_name || "Lucknow",
      description: item.description || item.short_description || item.content || "Description not available.",
      thumbnail: item.thumbnail || item.image || item.image_url || "",
      video_url: getYouTubeId(item?.sub_category?.video_url || item?.sub_category?.url),
    }));
  } catch (error) {
    console.error("Error fetching Product videos:", error);
    return [];
  }
}

export default async function ProjectVideoPage() {
  const videos = await getProjectVideos();

  const displayVideos = videos.length > 0 ? videos : [
    {
      id: "x4yQU1nxa_Q",
      title: "Leather Shoe",
      district: "Agra",
      description: "India is the second largest manufacturer of leather shoes after China...",
      thumbnail: "/assets/img/knowledge-base/product-video/agra.png",
      video_url: "x4yQU1nxa_Q"
    },
    {
      id: "x4yQU1nxa_Q",
      title: "Tarkashi",
      district: "Mainpuri",
      description: "The artisans of Taarkashi have stretched the magic of their silver wire inlay...",
      thumbnail: "/assets/img/knowledge-base/product-video/mainpuri.png",
      video_url: "x4yQU1nxa_Q"
    },
    {
      id: "x4yQU1nxa_Q",
      title: "Bangels",
      district: "Firozabad",
      description: "Glass is a unique material for the expression of art and craft...",
      thumbnail: "/assets/img/knowledge-base/product-video/firozabad.png",
      video_url: "x4yQU1nxa_Q"
    },
    {
      id: "x4yQU1nxa_Q",
      title: "Chikankari & Zari Zardozi",
      district: "Lucknow",
      description: "Lucknow is well known for its Chikankari and zari-zardozi work across the world...",
      thumbnail: "/assets/img/knowledge-base/product-video/lucknow.jpg",
      video_url: "x4yQU1nxa_Q"
    },
    {
      id: "x4yQU1nxa_Q",
      title: "Black Pottery",
      district: "Azamgarh",
      description: "Black clay pottery from Azamgarh reflects a long soil-and-kiln tradition...",
      thumbnail: "/assets/img/knowledge-base/product-video/azamgarh.png",
      video_url: "x4yQU1nxa_Q"
    },
    {
      id: "x4yQU1nxa_Q",
      title: "Wooden Toy",
      district: "Chitrakoot",
      description: "Chitrakoot is known for wooden handicraft, toys in particular...",
      thumbnail: "/assets/img/knowledge-base/product-video/chitrakoot.png",
      video_url: "x4yQU1nxa_Q"
    }
  ];

  return (
    <main className="main-content schemes-page kb-pv-page">
      <section className="page-hero schemes-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">Product Video</h1>
          <p className="page-hero-subtitle">
            Official programme videos, event highlights and knowledge capsules from ODOP Uttar Pradesh.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Knowledge Base</span>
          <h2>Product Video</h2>
          <div className="divider">
            <span />
            <span />
            <span />
          </div>
        </div>

        <ProjectVideoList videos={displayVideos} />
      </div>
    </main>
  );
}
