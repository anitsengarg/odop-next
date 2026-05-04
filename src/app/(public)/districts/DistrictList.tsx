"use client";

import React from "react";
import DistrictProductCard, { DistrictProduct } from "@/components/DistrictProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface DistrictListProps {
  districts: DistrictProduct[];
}

export default function DistrictList({ districts }: DistrictListProps) {
  useScrollReveal();

  if (!districts || districts.length === 0) {
    return (
      <div className="text-center py-10">
        <p>No districts found.</p>
      </div>
    );
  }

  return (
    <div className="districts-grid">
      {districts.map((district, i) => (
        <DistrictProductCard 
          key={district.slug || (district.id?.toString()) || i} 
          district={district} 
          index={i} 
        />
      ))}
    </div>
  );
}
