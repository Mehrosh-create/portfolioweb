// src/app/about/page.tsx
"use client";

import Image from "next/image";
import SignatureContent from "@/components/About/SignatureContent";
import Stats from "@/components/About/Stats";

export default function About() {
    return (
        <div className="min-h-screen pt-20 px-6 bg-[#151515] flex flex-col">
            <div className="flex-grow max-w-7xl mx-auto lg:mr-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1
                        className="text-5xl md:text-7xl font-black uppercase text-white mb-8 leading-tight"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.02em",
                        }}
                    >
                        I <span className="text-[#FFEA00]">TRANSFORM</span> BUSINESSES
                    </h1>
                    <div
                        className="inline-block bg-[#FFEA00] text-black px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                    >
                        DIGITAL TRANSFORMATION EXPERT
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <div>
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-6 text-white"
                            style={{
                                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                            }}
                        >
                            I'm a Global Strategist & Digital Transformer Leader.
                        </h2>
                        <p
                            className="text-lg text-[#e0f7fa] mb-6 leading-relaxed"
                            style={{
                                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                            }}
                        >
                            I'm Sheikh Nabeel — Entrepreneur, Business Strategist & CEO of
                            Eurostride. With Over 7 years of experience, I help founders,
                            startups, and global teams simplify complex operations, implement
                            scalable systems, and grow through digital innovation.
                        </p>
                        <p
                            className="text-lg text-[#e0f7fa] leading-relaxed"
                            style={{
                                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                            }}
                        >
                            My mission is to empower businesses with the tools and strategies
                            they need to thrive in the digital age. Through strategic
                            consulting, digital transformation, and growth marketing, I've
                            helped countless organizations achieve unprecedented success.
                        </p>
                    </div>
                    <div className="relative h-96 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-[#02B600] transition-all duration-300">
                        <Image
                            src="/images/about-profile.jpg"
                            alt="Sheikh Nabeel"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#02B600]/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mb-20">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-8 text-white text-center uppercase"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.05em",
                        }}
                    >
                        MY SERVICES & EXPERTISE
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Business Strategy & Digital Growth",
                            "Operations Management & Automation",
                            "CRM & Client Lifecycle Solutions",
                            "Digital Funnels & Brand Positioning",
                            "Team Management & Communication Systems",
                            "Digital Transformation Consulting",
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#252525] p-6 rounded-lg border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 group cursor-pointer"
                            >
                                <div
                                    className="text-[#FFEA00] text-2xl font-bold mb-2 group-hover:text-[#02B600] transition-colors"
                                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                                >
                                    0{index + 1}
                                </div>
                                <h3
                                    className="text-xl font-semibold text-white group-hover:text-[#e0f7fa] transition-colors"
                                    style={{
                                        fontFamily:
                                            'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                    }}
                                >
                                    {service}
                                </h3>
                                <div className="mt-3 h-1 w-0 bg-[#02B600] group-hover:w-full transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <Stats />

                {/* Signature Content with Custom Cursor */}
                <div className="signature-cursor">
                    <SignatureContent />
                </div>
            </div>
        </div>
    );
}
