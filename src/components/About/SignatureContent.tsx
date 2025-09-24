// src/components/About/SignatureContent.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const SignatureContent = () => {
    const [playVideo, setPlayVideo] = useState<{ [key: string]: boolean }>({});

    const toggleVideo = (key: string) => {
        setPlayVideo((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="py-8 sm:py-12 lg:py-16">
            {/* Header */}
            <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mb-8 sm:mb-12 text-center"
                style={{
                    fontFamily: '"Bebas Neue", Arial, sans-serif',
                    letterSpacing: "0.05em",
                }}
            >
                <span className="text-[#FFEA00]">SIGNATURE</span> CONTENT
            </h2>

            {/* Main Content - Improved grid responsiveness */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 lg:mb-16">
                {/* Card 1 */}
                <div className="bg-[#252525] p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 group">
                    <h3
                        className="text-xl sm:text-2xl font-bold text-[#FFEA00] mb-3 sm:mb-4 group-hover:text-[#02B600] transition-colors"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                    >
                        How To Create Content Efficiently
                    </h3>
                    <p
                        className="text-[#e0f7fa] mb-4 sm:mb-6 text-sm sm:text-base"
                        style={{
                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                        }}
                    >
                        Learn my proven framework for creating high-quality content that resonates with your audience and drives engagement.
                    </p>

                    <div className="aspect-video relative mb-4 sm:mb-6 rounded-lg overflow-hidden border border-gray-600 group-hover:border-[#02B600] transition-colors">
                        {playVideo["content"] ? (
                            <video
                                src="/videos/content-creation.mp4"
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <>
                                <Image
                                    src="/images/content-creation.jpg"
                                    alt="Content Creation"
                                    width={640}
                                    height={360}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <button
                                        onClick={() => toggleVideo("content")}
                                        className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFEA00] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#252525] p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 group">
                    <h3
                        className="text-xl sm:text-2xl font-bold text-[#FFEA00] mb-3 sm:mb-4 group-hover:text-[#02B600] transition-colors"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                    >
                        Digital Transformation Mastery
                    </h3>
                    <p
                        className="text-[#e0f7fa] mb-4 sm:mb-6 text-sm sm:text-base"
                        style={{
                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                        }}
                    >
                        Discover the strategies I&apos;ve used to help businesses transform their operations and achieve digital excellence.
                    </p>

                    <div className="aspect-video relative mb-4 sm:mb-6 rounded-lg overflow-hidden border border-gray-600 group-hover:border-[#02B600] transition-colors">
                        {playVideo["digital"] ? (
                            <video
                                src="/videos/digital-mastery.mp4"
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <>
                                <Image
                                    src="/images/digital-mastery.jpg"
                                    alt="Digital Transformation"
                                    width={640}
                                    height={360}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <button
                                        onClick={() => toggleVideo("digital")}
                                        className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFEA00] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignatureContent;