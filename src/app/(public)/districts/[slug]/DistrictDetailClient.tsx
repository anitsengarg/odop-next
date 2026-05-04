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
    <div className="bg-[#F5F5F5] min-h-screen pb-20">
      {/* 1. HEADER SECTION */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(district.thumbnail)}
            alt={district.name}
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            {district.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 mb-8 max-w-2xl mx-auto">
            {district.title}
          </p>
        </div>
      </section>
        <section className="container mt-16">
        <div className="relative group  overflow-hidden shadow-2xl aspect-video max-w-5xl mx-auto bg-gray-200">
          <img
            src={getImageUrl(district.thumbnail)}
            alt="District Banner"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <button 
              onClick={() => setActiveVideoId(getYoutubeId(district.url))}
              className="w-20 h-20 bg-[#E53935] !important text-white  flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
            >
              <FaPlay className="ml-1 text-2xl" />
            </button>
          </div>
        </div>
      </section>

      <section className="container -mt-16 relative z-20">
        <div className=" p-8 shadow-xl">
          <div 
            className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto prose prose-red max-w-none"
            dangerouslySetInnerHTML={{ __html: district.description }}
          />
        </div>
      </section>

      {/* 2. INTRO / VIDEO SECTION */}
    

      {/* 5. SPECIAL SECTION: DISTRICT PRODUCT (ODOP) */}
      {featuredProduct && (
        <section className="container mt-20">
          <div className="bg-white  overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-80 md:h-auto">
              <img
                src={getImageUrl(featuredProduct.thumbnail)}
                alt={featuredProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <span className="text-[#E53935] !important font-bold tracking-widest uppercase text-sm mb-4">
                ODOP Product
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {featuredProduct.name}
              </h2>
              <div 
                className="text-gray-600 mb-8 line-clamp-4 leading-relaxed prose prose-sm"
                dangerouslySetInnerHTML={{ __html: featuredProduct.description }}
              />
              <button 
                onClick={() => openModal({
                  name: featuredProduct.name,
                  descriptions: featuredProduct.description,
                  thumbnail: featuredProduct.thumbnail
                })}
                className="bg-[#E53935] !important text-white px-8 py-3  font-bold self-start hover:bg-[#D32F2F] transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
              >
                Learn More <FaUpRightFromSquare className="text-sm" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 3. DYNAMIC SECTIONS */}
      {districtType && districtType.map((section, sIdx) => (
        <section key={sIdx} className="container mt-20">
          <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-bold text-gray-900">{section.name}</h2>
            <button className="text-[#E53935] !important font-semibold hover:underline">View All</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {section.district_famous.map((item, iIdx) => (
              <div 
                key={iIdx}
                onClick={() => openModal({
                  name: item.name,
                  descriptions: item.descriptions,
                  thumbnail: item.thumbnail
                })}
                className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-transparent hover:border-[#E53935]/20"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={getImageUrl(item.thumbnail)} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#E53935] transition-colors">
                    {item.name}
                  </h3>
                  <div 
                    className="text-gray-600 line-clamp-2 text-sm prose prose-sm"
                    dangerouslySetInnerHTML={{ __html: item.descriptions }}
                  />
                </div>
              </div>
            ))}
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
                <div className="w-20 h-1 bg-[#E53935] !important mb-8"></div>
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
