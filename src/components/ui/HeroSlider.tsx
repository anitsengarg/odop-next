"use client";

import { useState, useEffect } from "react";
import { FaArrowRight, FaCertificate } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const slides = [
    "/assets/img/hero-odop-1.jpeg",
    "/assets/img/hero-odop-2.jpeg",
    "/assets/img/hero-odop-3.jpg",
    "/assets/img/hero-odop-4.jpg",
];


function HeroSlider() {

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
                    <div className="hero-eyebrow"><FaCertificate /> Government of Uttar Pradesh Initiative
                    </div>
                    <h1>One District One Product<br /> Uttar Pradesh</h1>
                    <p className="hero-subtitle">Connecting buyers, manufacturers, wholesalers and artisans across 75 districts
                        of Uttar Pradesh. Discover authentic local products, find trusted suppliers and explore business
                        opportunities.</p>
                    <form className="hero-search">
                        <label className="hero-search-field" htmlFor="hero-ai-search">
                            <FaSearch />
                            <input id="hero-ai-search" type="text" autoComplete="off"
                                placeholder='Ask something like &quot;Show brass suppliers from Moradabad&quot;' />
                            <button className="hero-search-action" type="submit" aria-label="Search with AI">
                                <FaArrowRight />
                            </button>
                        </label>
                    </form>
                    <div className="hero-prompt-tags" aria-label="Suggested AI searches"> 
                        <button className="hero-prompt-chip" type="button"
                            data-prompt="Find ODOP products for gifting and retail">Agra leather</button>
                        <button className="hero-prompt-chip" type="button"
                            data-prompt="Show brass decor suppliers from Moradabad">Moradabad brass decor</button>
                        <button className="hero-prompt-chip" type="button"
                            data-prompt="Find Chikankari wholesalers in Lucknow">Lucknow chikankari</button>
                        <button className="hero-prompt-chip" type="button"
                            data-prompt="Which ODOP schemes support new businesses?">Aligarh lock and hardware</button>
                        <button className="hero-prompt-chip" type="button"
                            data-prompt="List exporters for Banarasi silk products">Banarasi silk exporters</button>
                        <button className="hero-prompt-chip" type="button"
                            data-prompt="Show artisans for Gorakhpur terracotta">Gorakhpur terracotta artisans</button>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeroSlider;