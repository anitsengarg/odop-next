import React from "react";
import { notFound } from "next/navigation";
import { fetchHamaraPradeshDetail } from "@/services/hamara-pradesh.service";
import { decrypt128 } from "@/lib/api";
import DistrictDetailClient from "./DistrictDetailClient";

interface DistrictDetailPageProps {
  params: Promise<{ slug: string }>;
}

async function getDistrictDetail(slug: string) {
  try {
    const response = await fetchHamaraPradeshDetail(slug, {
      next: { revalidate: 3600 },
    });

    if (!response || !(response.data as any).body) {
      return null;
    }

    const decryptedData: any = await decrypt128((response.data as any).body);
    
    console.log(decryptedData)
    // Validate the decrypted data structure
    if (!decryptedData || !decryptedData.data || !decryptedData.data.district) {
      return null;
    }

    return decryptedData.data;
  } catch (error) {
    console.error(`Error fetching district detail for ${slug}:`, error);
    return null;
  }
}

export async function generateMetadata({ params }: DistrictDetailPageProps) {
  const { slug } = await params;
  const data = await getDistrictDetail(slug);

  if (!data) {
    return {
      title: "District Not Found | ODOP UP Portal",
    };
  }

  return {
    title: `${data.district.name} - ${data.district.title} | ODOP UP Portal`,
    description: data.district.description?.substring(0, 160),
  };
}

export default async function DistrictDetailPage({ params }: DistrictDetailPageProps) {
  const { slug } = await params;
  const data = await getDistrictDetail(slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <DistrictDetailClient data={data} />
    </main>
  );
}
