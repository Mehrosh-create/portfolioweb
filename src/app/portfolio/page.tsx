// src/app/portfolio/page.tsx - UPDATED WITH NEW FILTER BUTTONS
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const portfolioItems = [
        {
            id: 1,
            title: "Euroshub Digital Solutions",
            category: "digital",
            description:
                "Complete digital overhaul for a leading business consultancy",
            image: "/images/euroshub.jpg",
            link: "#",
            github: "#",
        },
        {
            id: 2,
            title: "E-Commerce Growth Strategy",
            category: "marketing",
            description: "Tripled revenue for an online retail brand in 6 months",
            image: "/images/ecommerce.jpg",
            link: "#",
            github: "#",
        },
        {
            id: 3,
            title: "CRM Implementation",
            category: "development",
            description: "Custom CRM solution for a service-based business",
            image: "/images/crm.jpg",
            link: "#",
            github: "#",
        },
        {
            id: 4,
            title: "Brand Positioning",
            category: "branding",
            description: "Rebranding and market positioning for tech startup",
            image: "/images/branding.jpg",
            link: "#",
            github: "#",
        },
        {
            id: 5,
            title: "Automation System",
            category: "digital",
            description: "Workflow automation that saved 20+ hours weekly",
            image: "/images/Automate.jpg",
            link: "#",
            github: "#",
        },
        {
            id: 6,
            title: "Digital Marketing Funnel",
            category: "marketing",
            description: "High-conversion funnel generating 500+ leads monthly",
            image: "/images/funnel.jpg",
            link: "#",
            github: "#",
        },
    ];

    const filters = [
        { id: "all", name: "ALL" },
        { id: "digital", name: "DIGITAL TRANSFORMATION" },
        { id: "marketing", name: "CRM SYSTEMS" },
        { id: "development", name: "LEADERSHIP" },
        { id: "branding", name: "AUTOMATION" },
    ];

    const filteredItems =
        activeFilter === "all"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeFilter);

    return (
        <div className="min-h-screen pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 xl:px-4 pb-8 sm:pb-16 lg:pb-20 bg-[#151515] flex flex-col">
            <div className="flex-grow max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h1
                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase text-white mb-6 sm:mb-8 leading-tight"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.02em",
                        }}
                    >
                        MY <span className="text-[#0fb8af]">PORTFOLIO</span>
                    </h1>

                    {/* CASE STUDIES & PROJECTS with sliding background */}
                    <div className="relative inline-block mx-auto mb-4 sm:mb-6">
                        <span
                            className="absolute top-0 left-0 h-full bg-[#0fb8af] inline-block"
                            style={{
                                width: "0%",
                                animation: "slideRight 2s forwards",
                            }}
                        ></span>

                        <span
                            className="relative z-10 text-black text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase px-3 sm:px-4 lg:px-6 py-1 sm:py-2 inline-block"
                            style={{
                                fontFamily: '"Bebas Neue", Arial, sans-serif',
                                letterSpacing: "0.05em",
                            }}
                        >
                            CASE STUDIES & PROJECTS
                        </span>
                    </div>
                </div>

                {/* Filters - UPDATED WITH NEW BUTTON STYLE */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full transition-colors uppercase tracking-wide text-xs sm:text-sm ${activeFilter === filter.id
                                ? "bg-[#0fb8af] text-black"
                                : "bg-[#252525] text-white hover:bg-[#0fb8af] hover:text-black"
                                }`}
                            style={{
                                fontFamily: '"Bebas Neue", Arial, sans-serif',
                                letterSpacing: "0.04em",
                            }}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-[#252525] rounded-lg overflow-hidden border border-gray-700 hover:border-[#0fb8af] transition-all duration-500"
                        >
                            {/* Image with hover overlay */}
                            <div className="relative h-48 sm:h-56 lg:h-60 xl:h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3 sm:gap-4">
                                    <a
                                        href={item.link}
                                        className="bg-[#0fb8af] text-black p-2 sm:p-3 rounded-full hover:scale-110 transition-transform"
                                        aria-label={`View ${item.title} live demo`}
                                    >
                                        <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                                    </a>
                                    <a
                                        href={item.github}
                                        className="bg-[#0fb8af] text-white p-2 sm:p-3 rounded-full hover:scale-110 transition-transform"
                                        aria-label={`View ${item.title} source code`}
                                    >
                                        <Github size={16} className="sm:w-5 sm:h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-4 sm:p-5 lg:p-6 relative z-10">
                                <h3
                                    className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#0fb8af] transition-colors"
                                    style={{
                                        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-[#E0F7FA] text-sm sm:text-base mb-3 sm:mb-4"
                                    style={{
                                        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                    }}
                                >
                                    {item.description}
                                </p>
                                <span
                                    className="inline-block px-3 py-1 bg-[#0fb8af]/20 text-[#0fb8af] rounded-full text-xs sm:text-sm uppercase tracking-wider"
                                    style={{
                                        fontFamily: '"Bebas Neue", Arial, sans-serif',
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    {item.category.charAt(0).toUpperCase() +
                                        item.category.slice(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section (Updated like testimonial CTA style) */}
                <div className="py-16 px-6 bg-[#1a1a1a]">
                    <div className="max-w-7xl mx-auto">
                        <div
                            className="bg-[#151515] border rounded-lg p-8 lg:p-12 text-center"
                            style={{ borderColor: "#1F2937" }}
                        >
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 uppercase"
                                style={{
                                    fontFamily: '"Bebas Neue", Arial, sans-serif',
                                    letterSpacing: "0.05em",
                                }}
                            >
                                Ready to Start Your Project?
                            </h2>
                            <p
                                className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#E0F7FA] mb-6 sm:mb-8 max-w-2xl mx-auto"
                                style={{
                                    fontFamily:
                                        'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                Let&apos;s discuss how we can bring your vision to life with
                                innovative digital solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link href="/contact">
                                    <button
                                        className="relative px-6 py-3 border-2 border-[#0fb8af] text-[#0fb8af] font-semibold 
                      transition-all duration-300 ease-in-out
                      hover:bg-[#0fb8af] hover:text-black
                      active:bg-[#0fb8af] active:text-black"
                                    >
                                        Get In Touch
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
          @keyframes slideRight {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}
            </style>
        </div>
    );
};

export default Portfolio;