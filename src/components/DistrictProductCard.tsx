import React from "react";
import { FaEye, FaLayerGroup, FaCubes, FaTag } from "react-icons/fa6";
import Link from "next/link";
import { API_CONFIG } from "@/lib/api";

export interface DistrictProduct {
  id?: number | string;
  slug: string;
  name: string;
  img: string;
  product: string;
  secondary_product?: string;
  tertiary_product?: string;
  profile?: string;
}

interface DistrictProductCardProps {
  district: DistrictProduct;
  index: number;
}

export default function DistrictProductCard({ district, index }: DistrictProductCardProps) {
  const { slug, name, img, product, secondary_product, tertiary_product, profile } = district;
  
  // Use image from API if it's a relative path, otherwise use as is
  const imageUrl = img.startsWith("http") || img.startsWith("/") 
    ? img 
    : `${API_CONFIG.IMAGE_BASE_URL}${img}`;

  const profileUrl = profile || `/districts/${slug}`;

  return (
    <div className={`district-card reveal${index % 4 === 1 ? " delay-1" : index % 4 === 2 ? " delay-2" : index % 4 === 3 ? " delay-3" : ""}`}>
      <div className="district-card-img">
        <img src={imageUrl} alt={`${name} primary product`} loading="lazy" />
        <span className="product-tag">{product}</span>
      </div>
      <div className="district-card-thumb">
        <img src={imageUrl} alt="District thumbnail" loading="lazy" />
      </div>
      <div className="district-card-body">
        <h4>{name}</h4>
        <p className="district-product">
          <FaTag aria-hidden="true" /> {product}
        </p>
        <div className="district-meta district-meta-list">
          {secondary_product && (
            <span>
              <FaLayerGroup aria-hidden="true" /> {secondary_product}
            </span>
          )}
          {tertiary_product && (
            <span>
              <FaCubes aria-hidden="true" /> {tertiary_product}
            </span>
          )}
        </div>
        <Link href={profileUrl} className="btn btn-outline-primary btn-sm w-100">
          <FaEye aria-hidden="true" /> View District Profile
        </Link>
      </div>
    </div>
  );
}