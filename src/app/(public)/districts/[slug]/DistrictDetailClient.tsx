"use client";

import React, { useState } from "react";
import { FaPlay, FaXmark, FaUpRightFromSquare } from "react-icons/fa6";
import { API_CONFIG } from "@/lib/api";
import { VideoModal } from "@/components/ui/VideoModal";

// Interfaces based on provided structure
export interface DistrictProduct {
  id: number;
  name: string;
  hindi_name: string;
  slug: string;
  thumbnail: string;
  description: string;
  hindi_description: string;
  status: string;
}

export interface DistrictFamous {
  id: number;
  name: string;
  hindi_name: string;
  slug: string;
  thumbnail: string;
  descriptions: string;
  hindi_descriptions: string;
  url: string | null;
  status: string;
}

export interface DistrictType {
  id: number;
  name: string;
  hindi_name: string;
  slug: string;
  thumbnail: string;
  descriptions: string;
  district_famous: DistrictFamous[];
}

export interface District {
  id: number;
  name: string;
  hindi_name: string;
  title: string;
  hindi_title: string;
  short_description: string;
  description: string;
  hindi_description: string;
  thumbnail: string;
  slug: string;
  url: string;
  district_product: DistrictProduct[];
}

export interface DistrictResponse {
  district: District;
  districtType: DistrictType[];
}

interface DistrictDetailClientProps {
  data: DistrictResponse;
}

export default function DistrictDetailClient({ data }: DistrictDetailClientProps) {
  const [selectedItem, setSelectedItem] = useState<{ name: string; descriptions: string; thumbnail: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const { district, districtType } = data;
  const featuredProduct = district.district_product?.[0];

  const getImageUrl = (path: string) => {
    if (!path) return "/assets/img/placeholder.jpg";
    return path.startsWith("http") || path.startsWith("/")
      ? path
      : `${API_CONFIG.IMAGE_BASE_URL}${path}`;
  };

  const getYoutubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const openModal = (item: { name: string; descriptions: string; thumbnail: string }) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
    document.body.style.overflow = "";
  };

  return (
    <div className="min-h-screen pb-20">
      {/* 1. HEADER SECTION */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <h1 className="page-hero-title">{district.name}</h1>
          <p className="page-hero-subtitle">
            Exploring the unique heritage, products, and culture of {district.name} district in Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* 2. DISTRICT OVERVIEW SECTION */}
      <section className="about-section">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-overview-visual">
              <div className="relative group overflow-hidden shadow-2xl aspect-video bg-gray-200 rounded-xl">
                <img
                  src={getImageUrl(district.thumbnail)}
                  alt={district.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button 
                    onClick={() => setActiveVideoId(getYoutubeId(district.url))}
                    className="w-16 h-16 bg-[#E8562E] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                  >
                    <FaPlay className="ml-1 text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div className="about-overview-content">
              <div className="section-eyebrow">District Overview</div>
              <h2 className="section-title">{district.name} - {district.hindi_name}</h2>
              <div 
                className="text-gray-700 text-lg leading-relaxed prose prose-red max-w-none"
                dangerouslySetInnerHTML={{ __html: district.description }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPECIAL SECTION: DISTRICT PRODUCT (ODOP) */}
      {featuredProduct && (
        <section className="about-section bg-gray-50">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Featured Product</span>
              <h2 className="section-title">One District One Product (ODOP)</h2>
            </div>
            <div className="about-overview-grid items-center">
              <div className="about-overview-content">
                <div className="section-eyebrow">Main Product</div>
                <h2 className="section-title">{featuredProduct.name}</h2>
                <div 
                  className="text-gray-600 mb-8 line-clamp-6 leading-relaxed prose prose-sm"
                  dangerouslySetInnerHTML={{ __html: featuredProduct.description }}
                />
                <button 
                  onClick={() => openModal({
                    name: featuredProduct.name,
                    descriptions: featuredProduct.description,
                    thumbnail: featuredProduct.thumbnail
                  })}
                  className="btn btn-primary btn-lg"
                >
                  Explore Details <FaUpRightFromSquare />
                </button>
              </div>
              <div className="about-overview-visual">
                <div className="about-image-stack">
                  <img
                    src={getImageUrl(featuredProduct.thumbnail)}
                    alt={featuredProduct.name}
                    className="about-main-image !rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. DYNAMIC SECTIONS */}
      {districtType && districtType.map((section, sIdx) => (
        <section key={sIdx} className="section pb-20">
          <div className="container">
            <div className="section-header centered-header !mb-12">
               <h2 className="section-title">{section.name}</h2>
               <div className="divider"><span></span><span></span><span></span></div>
            </div>
            
            <div className="schemes-grid">
              {section.district_famous.map((item, iIdx) => (
                <div 
                  key={iIdx}
                  className="scheme-card cursor-pointer"
                  onClick={() => openModal({
                    name: item.name,
                    descriptions: item.descriptions,
                    thumbnail: item.thumbnail
                  })}
                >
                  <div className="overflow-hidden h-60 rounded-t-2xl">
                    <img 
                      src={getImageUrl(item.thumbnail)} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="scheme-card-body">
                    <h3 className="scheme-name mb-3">{item.name}</h3>
                    <div 
                      className="text-gray-600 line-clamp-3 text-sm prose prose-sm"
                      dangerouslySetInnerHTML={{ __html: item.descriptions }}
                    />
                  </div>
                  <div className="scheme-card-footer">
                    <button className="btn btn-outline-primary btn-sm btn-full">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* 4. MODAL INTERACTION */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>
          
          {/* Content */}
          <div 
            className={`relative bg-white  w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-300 transform ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md  flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <FaXmark className="text-xl" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={getImageUrl(selectedItem.thumbnail)} 
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  {selectedItem.name}
                </h2>
                <div className="w-20 h-1 bg-[#E8562E] mb-8"></div>
                <div 
                  className="text-gray-700 leading-relaxed text-lg prose prose-red max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedItem.descriptions }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal Component */}
      <VideoModal 
        videoId={activeVideoId} 
        onClose={() => setActiveVideoId(null)} 
      />
    </div>
  );
}
