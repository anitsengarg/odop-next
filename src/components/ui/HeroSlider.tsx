"use client";

import { useState, useEffect } from "react";
import { FaArrowRight, FaCertificate } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { DistrictProduct } from "../DistrictProductCard";

const slides = [
    "/assets/img/hero-odop-1.jpeg",
    "/assets/img/hero-odop-2.jpeg",
    "/assets/img/hero-odop-3.jpg",
    "/assets/img/hero-odop-4.jpg",
];


function HeroSlider({district}: {district?: DistrictProduct[]}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <section className="hero hero-no-image">
            <div className="hero-bg-carousel" aria-hidden="true">
                {
                    slides.map((src, index) => (
                        <div key={index} className={`hero-bg hero-bg-slide hero-bg-home ${index === currentSlide ? 'is-active' : ''}`} style={{ backgroundImage: `url(${src})` }}></div>
                    ))
                }
            </div>
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content animate-fadeInUp">
                    
                    {/* { <div className="hero-eyebrow"><FaCertificate /> Government of Uttar Pradesh Initiative
                    </div> } */}
                    <h1>One District One Product<br /> Uttar Pradesh</h1>
                    <p className="hero-subtitle">Empowering districts by promoting traditional industries, enhancing livelihoods, and driving sustainable local economic growth.enhancing livelihoods, and driving sustainable local economic growth.</p>
                     
                    <form className="hero-search">
                        <label className="hero-search-field" htmlFor="hero-ai-search">
                            <FaSearch />
                            <input id="hero-ai-search" type="text" autoComplete="off"
                                placeholder='Ask AI something like &quot;Show brass suppliers from Moradabad&quot;' />
                            <button className="hero-search-action" type="submit" aria-label="Search with AI">
                                <FaArrowRight />
                            </button>
                        </label>
                    </form>
                    <div className="hero-prompt-tags" aria-label="Suggested AI searches"> 

                        {district && district?.map((item, index) => (
                            <button key={index} className="hero-prompt-chip" type="button"
                                data-prompt={`Find ODOP products for gifting and retail from ${item.name}`}>{item.name} {item.product}</button>
                        ))}
                       
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeroSlider;