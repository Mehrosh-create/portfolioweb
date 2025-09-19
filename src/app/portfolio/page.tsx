// src/app/portfolio/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const portfolioItems = [
        {
            id: 1,
            title: "Euroshub Digital Transformation",
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
        { id: "all", name: "All Projects" },
        { id: "digital", name: "Digital Transformation" },
        { id: "marketing", name: "Growth Marketing" },
        { id: "development", name: "Development" },
        { id: "branding", name: "Branding" },
    ];

    const filteredItems =
        activeFilter === "all"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeFilter);

    return (
        <div className="min-h-screen pt-20 pb-20 px-40 bg-[#151515] flex flex-col">
            <div className="flex-grow max-w-7xl mx-auto lg:mr-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1
                        className="text-5xl md:text-7xl font-black uppercase text-white mb-8 leading-tight"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.02em",
                        }}
                    >
                        MY <span className="text-[#FFEA00]">PORTFOLIO</span>
                    </h1>

                    {/* CASE STUDIES & PROJECTS with sliding background */}
                    <div className="relative inline-block mx-auto mb-6">
                        <span
                            className="absolute top-0 left-0 h-full bg-[#FFEA00] inline-block"
                            style={{
                                width: "0%",
                                animation: "slideRight 2s forwards",
                            }}
                        ></span>

                        <span
                            className="relative z-10 text-black text-lg md:text-xl lg:text-2xl font-bold uppercase px-6 py-2 inline-block"
                            style={{
                                fontFamily: '"Bebas Neue", Arial, sans-serif',
                                letterSpacing: "0.05em",
                            }}
                        >
                            CASE STUDIES & PROJECTS
                        </span>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2 rounded-full transition-colors uppercase tracking-wide ${activeFilter === filter.id
                                ? "bg-[#FFEA00] text-black"
                                : "bg-[#252525] text-white hover:bg-[#FFEA00] hover:text-black"
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-[#252525] rounded-lg overflow-hidden border border-gray-700 hover:border-[#FFEA00] transition-all duration-500"
                        >
                            {/* Image with hover overlay */}
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                    <a
                                        href={item.link}
                                        className="bg-[#FFEA00] text-black p-3 rounded-full hover:scale-110 transition-transform"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={item.github}
                                        className="bg-[#02B600] text-white p-3 rounded-full hover:scale-110 transition-transform"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 relative z-10">
                                <h3
                                    className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFEA00] transition-colors"
                                    style={{
                                        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-lg text-[#e0f7fa] mb-4 leading-relaxed"
                                    style={{
                                        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                    }}
                                >
                                    {item.description}
                                </p>
                                <span
                                    className="inline-block px-4 py-1 bg-[#02B600] text-white text-sm rounded-full uppercase tracking-wider"
                                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                                >
                                    {item.category.charAt(0).toUpperCase() +
                                        item.category.slice(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Keyframes */}
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
