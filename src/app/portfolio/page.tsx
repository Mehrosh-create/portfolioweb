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
            description: "Complete digital overhaul for a leading business consultancy",
            image: "/images/euroshub.jpg",
            link: "#",
            github: "#"
        },
        {
            id: 2,
            title: "E-Commerce Growth Strategy",
            category: "marketing",
            description: "Tripled revenue for an online retail brand in 6 months",
            image: "/images/ecommerce.jpg",
            link: "#",
            github: "#"
        },
        {
            id: 3,
            title: "CRM Implementation",
            category: "development",
            description: "Custom CRM solution for a service-based business",
            image: "/images/crm.jpg",
            link: "#",
            github: "#"
        },
        {
            id: 4,
            title: "Brand Positioning",
            category: "branding",
            description: "Rebranding and market positioning for tech startup",
            image: "/images/branding.jpg",
            link: "#",
            github: "#"
        },
        {
            id: 5,
            title: "Automation System",
            category: "digital",
            description: "Workflow automation that saved 20+ hours weekly",
            image: "/images/Automate.jpg",
            link: "#",
            github: "#"
        },
        {
            id: 6,
            title: "Digital Marketing Funnel",
            category: "marketing",
            description: "High-conversion funnel generating 500+ leads monthly",
            image: "/images/funnel.jpg",
            link: "#",
            github: "#"
        }
    ];

    const filters = [
        { id: "all", name: "All Projects" },
        { id: "digital", name: "Digital Transformation" },
        { id: "marketing", name: "Growth Marketing" },
        { id: "development", name: "Development" },
        { id: "branding", name: "Branding" }
    ];

    const filteredItems = activeFilter === "all"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <div className="min-h-screen pt-20 pb-16 px-6 bg-[#151515]">
            <div className="max-w-7xl mx-auto lg:mr-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-8 leading-tight"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.02em"
                        }}>
                        MY <span className="text-[#FFEA00]">PORTFOLIO</span>
                    </h1>
                    <div className="inline-block bg-[#FFEA00] text-black px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        CASE STUDIES & PROJECTS
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2 rounded-full font-semibold transition-colors uppercase ${activeFilter === filter.id
                                ? "bg-[#FFEA00] text-black"
                                : "bg-[#252525] text-white hover:bg-[#FFEA00] hover:text-black"
                                }`}
                            style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map(item => (
                        <div key={item.id} className="bg-[#252525] rounded-lg overflow-hidden group border border-gray-700 hover:border-[#FFEA00] transition-all duration-300">
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={item.link}
                                        className="bg-[#FFEA00] text-black p-2 rounded-full hover:scale-110 transition-transform">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={item.github}
                                        className="bg-[#02B600] text-white p-2 rounded-full hover:scale-110 transition-transform">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFEA00] transition-colors"
                                    style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                    {item.title}
                                </h3>
                                <p className="text-[#e0f7fa]"
                                    style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                    {item.description}
                                </p>
                                <span className="inline-block mt-4 px-3 py-1 bg-[#02B600] text-white text-sm rounded-full uppercase"
                                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;