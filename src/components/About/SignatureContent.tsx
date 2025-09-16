// src/components/About/SignatureContent.tsx
"use client";

import { useState } from "react";

const SignatureContent = () => {
    const [playVideo, setPlayVideo] = useState<{ [key: string]: boolean }>({});

    const toggleVideo = (key: string) => {
        setPlayVideo((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="py-16">
            {/* Header */}
            <h2
                className="text-4xl md:text-5xl font-black uppercase text-white mb-12 text-center"
                style={{
                    fontFamily: '"Bebas Neue", Arial, sans-serif',
                    letterSpacing: "0.05em",
                }}
            >
                <span className="text-[#FFEA00]">SIGNATURE</span> CONTENT
            </h2>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* Card 1 */}
                <div className="bg-[#252525] p-8 rounded-lg border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 group">
                    <h3
                        className="text-2xl font-bold text-[#FFEA00] mb-4 group-hover:text-[#02B600] transition-colors"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                    >
                        How To Create Content Efficiently
                    </h3>
                    <p
                        className="text-[#e0f7fa] mb-6"
                        style={{
                            fontFamily:
                                'Arial, "Helvetica Neue", Helvetica, sans-serif',
                        }}
                    >
                        Learn my proven framework for creating high-quality content that resonates with your audience and drives engagement.
                    </p>

                    <div className="aspect-video relative mb-6 rounded-lg overflow-hidden border border-gray-600 group-hover:border-[#02B600] transition-colors">
                        {playVideo["content"] ? (
                            <video
                                src="/videos/content-creation.mp4"
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <>
                                <img
                                    src="/images/content-creation.jpg"
                                    alt="Content Creation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <button
                                        onClick={() => toggleVideo("content")}
                                        className="w-16 h-16 bg-[#FFEA00] rounded-full flex items-center justify-center"
                                    >
                                        <svg
                                            className="w-8 h-8 text-black"
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
                <div className="bg-[#252525] p-8 rounded-lg border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 group">
                    <h3
                        className="text-2xl font-bold text-[#FFEA00] mb-4 group-hover:text-[#02B600] transition-colors"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                    >
                        Digital Transformation Mastery
                    </h3>
                    <p
                        className="text-[#e0f7fa] mb-6"
                        style={{
                            fontFamily:
                                'Arial, "Helvetica Neue", Helvetica, sans-serif',
                        }}
                    >
                        Discover the strategies I've used to help businesses transform their operations and achieve digital excellence.
                    </p>

                    <div className="aspect-video relative mb-6 rounded-lg overflow-hidden border border-gray-600 group-hover:border-[#02B600] transition-colors">
                        {playVideo["digital"] ? (
                            <video
                                src="/videos/digital-mastery.mp4"
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <>
                                <img
                                    src="/images/digital-mastery.jpg"
                                    alt="Digital Transformation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <button
                                        onClick={() => toggleVideo("digital")}
                                        className="w-16 h-16 bg-[#FFEA00] rounded-full flex items-center justify-center"
                                    >
                                        <svg
                                            className="w-8 h-8 text-black"
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
