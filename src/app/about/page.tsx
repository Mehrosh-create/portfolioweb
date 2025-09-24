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

    // Track mouse position
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // (Optional) Track dragging state
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
        <div className="min-h-screen pt-20 bg-[#151515] flex flex-col">
            {/* Main Container with responsive padding */}
            <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-40">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6 lg:mb-8 leading-tight"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.02em",
                        }}
                    >
                        I <span className="text-[#FFEA00]">TRANSFORM</span> BUSINESSES
                    </h1>

                    {/* DIGITAL TRANSFORMATION EXPERT with sliding background */}
                    <div className="relative inline-block mx-auto mb-4 sm:mb-6">
                        <span
                            className="absolute top-0 left-0 h-full bg-[#FFEA00] inline-block"
                            style={{
                                width: "0%",
                                animation: "slideRight 2s forwards",
                            }}
                        ></span>

                        <span
                            className="relative z-10 text-black text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase px-4 sm:px-6 py-2 inline-block"
                            style={{
                                fontFamily: '"Bebas Neue", Arial, sans-serif',
                                letterSpacing: "0.05em",
                            }}
                        >
                            DIGITAL TRANSFORMATION EXPERT
                        </span>
                    </div>
                </div>

                {/* Main Content - Improved grid responsiveness */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 lg:mb-20">
                    <div className="order-2 lg:order-1">
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white"
                            style={{
                                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                            }}
                        >
                            I&apos;m a Global Strategist & Digital Transformer Leader.
                        </h2>
                        <p
                            className="text-base sm:text-lg text-[#e0f7fa] mb-4 sm:mb-6 leading-relaxed"
                            style={{
                                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                            }}
                        >
                            I&apos;m Sheikh Nabeel — Entrepreneur, Business Strategist & CEO of
                            Eurostride. With Over 7 years of experience, I help founders,
                            startups, and global teams simplify complex operations, implement
                            scalable systems, and grow through digital innovation.
                        </p>
                        <p
                            className="text-base sm:text-lg text-[#e0f7fa] leading-relaxed"
                            style={{
                                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                            }}
                        >
                            My mission is to empower businesses with the tools and strategies
                            they need to thrive in the digital age. Through strategic
                            consulting, digital transformation, and growth marketing, I&apos;ve
                            helped countless organizations achieve unprecedented success.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2 relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-[#02B600] transition-all duration-300">
                        <Image
                            src="/images/about-profile.jpg"
                            alt="Sheikh Nabeel"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-[#02B600]/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                {/* Services Section with Cursor Effect */}
                <div
                    className="mb-12 lg:mb-20 relative"
                    onMouseEnter={() => setShowCursor(true)}
                    onMouseLeave={() => setShowCursor(false)}
                >
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 lg:mb-8 text-white text-center uppercase"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.05em",
                        }}
                    >
                        MY SERVICES & EXPERTISE
                    </h2>

                    <div className="relative overflow-hidden w-full">
                        <InfiniteMovingCards
                            items={services}
                            direction="right"
                            speed="slow"
                        />
                    </div>

                    {/* Cursor appears only inside this section */}
                    {showCursor && (
                        <Cursor
                            mousePos={mousePos}
                            isDragging={isDragging}
                            showCursor={showCursor}
                        />
                    )}
                </div>

                {/* Stats Section */}
                <Stats />

                {/* Signature Content */}
                <div className="signature-cursor">
                    <SignatureContent />
                </div>
            </div>

            {/* Keyframes + Cursor style */}
            <style>
                {`
                    @keyframes slideRight {
                        0% { width: 0%; }
                        100% { width: 100%; }
                    }

                    /* Custom pointer for clickable elements */
                    button, 
                    a, 
                    [role="button"], 
                    input[type="submit"], 
                    input[type="button"], 
                    .clickable {
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    );
}