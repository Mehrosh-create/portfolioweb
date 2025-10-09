// src/app/about/page.tsx
"use client";

import Image from "next/image";
import SignatureContent from "@/components/About/SignatureContent";
import Stats from "@/components/About/Stats";
import { InfiniteMovingCards } from "@/ui/infinite-moving-cards";
import Cursor from "@/components/Global/CursorEffect";
import { useState, useEffect } from "react";

export default function About() {
    const services = [
        "Business Strategy & Digital Growth",
        "Operations Management & Automation",
        "CRM & Client Lifecycle Solutions",
        "Digital Funnels & Brand Positioning",
        "Team Management & Communication Systems",
        "Digital Transformation Consulting",
    ];

    const [showCursor, setShowCursor] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const handleMouseDown = () => setIsDragging(true);
        const handleMouseUp = () => setIsDragging(false);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col w-full overflow-x-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
            <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">

                {/* HERO SECTION */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
                    <h1
                        className="font-black uppercase text-foreground leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif', letterSpacing: "0.02em" }}
                    >
                        I <span className="text-[#0fb8af]">TRANSFORM</span> BUSINESSES
                    </h1>

                    <div className="relative inline-block mx-auto">
                        <span className="slideright-bg"></span>
                        <span
                            className="relative z-10 text-black font-bold uppercase inline-block text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-1.5 sm:py-2 md:py-2.5 leading-tight"
                            style={{ fontFamily: '"Bebas Neue", Arial, sans-serif', letterSpacing: "0.05em" }}
                        >
                            DIGITAL TRANSFORMATION EXPERT
                        </span>
                    </div>
                </div>

                {/* MAIN CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-14 mb-12">

                    {/* TEXT CONTENT */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center">
                        <h2
                            className="font-bold text-foreground leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-5"
                            style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                        >
                            I&apos;m a Global Strategist & Digital Transformation Leader.
                        </h2>

                        <p
                            className="text-gray-light leading-relaxed text-sm sm:text-base md:text-lg mb-4"
                            style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                        >
                            I&apos;m Sheikh Nabeel — Entrepreneur, Business Strategist & CEO of Eurostride.
                            With over 7 years of experience, I help founders, startups, and global teams simplify complex operations,
                            implement scalable systems, and grow through digital innovation.
                        </p>

                        <p
                            className="text-gray-light leading-relaxed text-sm sm:text-base md:text-lg"
                            style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                        >
                            My mission is to empower businesses with the tools and strategies they need to thrive in the digital age.
                            Through strategic consulting, digital transformation, and growth marketing, I&apos;ve helped countless
                            organizations achieve unprecedented success.
                        </p>
                    </div>

                    {/* PROFILE IMAGE */}
                    <div className="order-1 lg:order-2 flex justify-center items-center">
                        <div className="group relative rounded-lg overflow-hidden border-2 border-gray-700 transition-all duration-300 cursor-pointer w-full max-w-[480px] sm:max-w-[520px] md:max-w-[560px] lg:max-w-[600px] xl:max-w-[640px] h-auto">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <div className="absolute inset-0 bg-[#0FB8AF]/30 animate-pulse z-20"></div>
                                <div className="absolute inset-0 bg-gradient-radial from-[#0FB8AF]/40 via-[#0FB8AF]/20 to-transparent animate-ping"></div>
                            </div>

                            <div className="relative z-10 w-full h-full">
                                <Image
                                    src="/images/about-profile.jpg"
                                    alt="Sheikh Nabeel"
                                    width={800}
                                    height={900}
                                    className="w-full h-auto object-contain md:object-cover lg:object-contain xl:object-cover"
                                    priority
                                    quality={95}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* SERVICES SECTION */}
                <div
                    className="relative mb-12"
                    onMouseEnter={() => setShowCursor(true)}
                    onMouseLeave={() => setShowCursor(false)}
                >
                    <h2
                        className="font-bold text-foreground text-center uppercase leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif', letterSpacing: "0.05em" }}
                    >
                        MY SERVICES & EXPERTISE
                    </h2>

                    <div className="relative overflow-hidden w-full">
                        <InfiniteMovingCards items={services} direction="right" speed="slow" />
                    </div>

                    {showCursor && (
                        <Cursor mousePos={mousePos} isDragging={isDragging} showCursor={showCursor} />
                    )}
                </div>

                {/* STATS SECTION */}
                <Stats />

                {/* SIGNATURE SECTION */}
                <div className="signature-cursor mt-10">
                    <SignatureContent />
                </div>
            </div>

            {/* STYLING */}
            <style>{`
        @keyframes slideRight {
          from { width: 0%; }
          to { width: 100%; }
        }

        .slideright-bg {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background-color: #0fb8af;
          display: inline-block;
          animation: slideRight 2s forwards;
        }

        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        @media (max-width: 640px) {
          body {
            font-size: 14px;
          }
        }

        @media (max-width: 768px) {
          .grid {
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .grid {
            gap: 3rem;
          }
        }
      `}</style>
        </div>
    );
}
