// src/components/About/SignatureContent.tsx
"use client";

import Image from "next/image";

const SignatureContent = () => {
    const internationalChannels = [
        { language: "SPANISH", flag: "🇪🇸" },
        { language: "CHINESE", flag: "🇨🇳" },
        { language: "ARABIC", flag: "🇸🇦" },
        { language: "PORTUGUESE", flag: "🇵🇹" },
        { language: "HINDI", flag: "🇮🇳" },
        { language: "FRENCH", flag: "🇫🇷" }
    ];

    return (
        <div className="py-16">
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-12 text-center"
                style={{
                    fontFamily: '"Bebas Neue", Arial, sans-serif',
                    letterSpacing: "0.05em"
                }}>
                <span className="text-[#FFEA00]">SIGNATURE</span> CONTENT
            </h2>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-[#252525] p-8 rounded-lg border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 group">
                    <h3 className="text-2xl font-bold text-[#FFEA00] mb-4 group-hover:text-[#02B600] transition-colors"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        How To Create Content Efficiently
                    </h3>
                    <p className="text-[#e0f7fa] mb-6"
                        style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                        Learn my proven framework for creating high-quality content that resonates with your audience and drives engagement.
                    </p>
                    <div className="aspect-video relative mb-6 rounded-lg overflow-hidden border border-gray-600 group-hover:border-[#02B600] transition-colors">
                        <Image
                            src="/images/content-creation.jpg"
                            alt="Content Creation Framework"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-[#FFEA00] rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#02B600] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors uppercase"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        Watch Tutorial
                    </button>
                </div>

                <div className="bg-[#252525] p-8 rounded-lg border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 group">
                    <h3 className="text-2xl font-bold text-[#FFEA00] mb-4 group-hover:text-[#02B600] transition-colors"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        Digital Transformation Mastery
                    </h3>
                    <p className="text-[#e0f7fa] mb-6"
                        style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                        Discover the strategies I've used to help businesses transform their operations and achieve digital excellence.
                    </p>
                    <div className="aspect-video relative mb-6 rounded-lg overflow-hidden border border-gray-600 group-hover:border-[#02B600] transition-colors">
                        <Image
                            src="/images/digital-mastery.jpg"
                            alt="Digital Transformation"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-[#FFEA00] rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#02B600] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors uppercase"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        Learn More
                    </button>
                </div>
            </div>

            {/* International Channels - Marquee */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8 text-center uppercase"
                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                    CHECK OUT MY INTERNATIONAL CHANNELS
                </h3>
                <div className="relative overflow-hidden bg-[#252525] rounded-lg py-4 border border-gray-700">
                    <div className="animate-marquee whitespace-nowrap">
                        {internationalChannels.concat(internationalChannels).map((channel, index) => (
                            <div key={index} className="inline-block mx-4 bg-[#151515] px-6 py-3 rounded-lg border border-gray-600 hover:border-[#02B600] transition-colors">
                                <span className="text-2xl mr-2">{channel.flag}</span>
                                <span className="text-white font-semibold uppercase"
                                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                                    {channel.language}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Resources */}
            <div className="bg-[#252525] p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-[#FFEA00] mb-6 text-center uppercase"
                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                    FREE RESOURCES
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Digital Transformation Guide", action: "Download Now" },
                        { title: "Content Strategy Template", action: "Get Template" },
                        { title: "Growth Marketing Playbook", action: "Access Playbook" }
                    ].map((resource, index) => (
                        <div key={index} className="text-center p-6 bg-[#151515] rounded-lg border border-gray-600 hover:border-[#02B600] transition-all duration-300 group cursor-pointer">
                            <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-[#e0f7fa] transition-colors"
                                style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                {resource.title}
                            </h4>
                            <button className="bg-[#FFEA00] text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                                {resource.action}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SignatureContent;