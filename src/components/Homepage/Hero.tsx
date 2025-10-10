// src/components/Homepage/Hero.tsx - UPDATED
"use client";

import { useState } from "react";
import Image from "next/image";
import VideoModal from "@/components/Video/Videomodal";

interface HeroSectionProps {
  onVideoPlay: () => void;
  bgColor?: string;
  customHeading?: string;
}

const HeroSection = ({
  onVideoPlay,
  bgColor = "bg-black/60",
  customHeading,
}: HeroSectionProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoOpen(true);
    onVideoPlay();
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Full Background Image - IMPROVED FOR ALL DEVICES */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/ceo.png"
            alt="Sheikh Nabeel"
            fill
            className="object-contain lg:object-cover"
            priority
            quality={100}
            sizes="(max-width: 375px) 100vw, (max-width: 428px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw"
            style={{
              objectPosition: 'center center'
            }}
          />
          {/* Overlay with dynamic bgColor */}
          <div className={`absolute inset-0 ${bgColor}`}></div>
        </div>

        {/* Content Container - IMPROVED RESPONSIVENESS */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex flex-col items-start text-left w-full">
            {/* Text Content - ENHANCED FOR ALL SCREENS */}
            <div className="max-w-4xl w-full px-2 xs:px-3 sm:px-4 md:px-6">
              {/* Main Heading - RESPONSIVE FONT SIZES */}
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-white leading-tight drop-shadow-2xl">
                {customHeading || "Entrepreneur & Digital Growth Expert"}
              </h1>

              {/* Name - RESPONSIVE FONT SIZES */}
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 text-[#0fb8af] drop-shadow-xl">
                SHEIKH NABEEL
              </h2>

              {/* Description - IMPROVED SPACING */}
              <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 space-y-1 xs:space-y-2 sm:space-y-3 drop-shadow-lg max-w-3xl">
                <p className="uppercase tracking-wider leading-relaxed">SERIAL ENTREPRENEUR, FOUNDER & CEO OF</p>
                <p className="uppercase tracking-wider leading-relaxed">EUROSHUB, BUSINESS STRATEGIST,</p>
                <p className="uppercase tracking-wider leading-relaxed">& DIGITAL TRANSFORMATION EXPERT</p>
              </div>

              {/* Video Play Button - BETTER POSITIONING */}
              <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                <button
                  onClick={handleVideoPlay}
                  className="bg-white/20 backdrop-blur-sm border-2 border-white rounded-full p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 hover:bg-white/30 transition-all shadow-2xl hover:scale-110 group"
                  aria-label="Play introduction video"
                >
                  <svg
                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements - BETTER POSITIONING */}
        <div className="absolute top-3 xs:top-4 sm:top-6 md:top-8 left-3 xs:left-4 sm:left-6 md:left-8 w-1 xs:w-2 h-1 xs:h-2 bg-white rounded-full opacity-30"></div>
        <div className="absolute bottom-12 xs:bottom-14 sm:bottom-16 md:bottom-20 left-6 xs:left-8 sm:left-12 md:left-16 lg:left-20 w-2 xs:w-3 h-2 xs:h-3 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-12 xs:top-14 sm:top-16 md:top-20 right-6 xs:right-8 sm:right-12 md:right-16 lg:right-20 w-1 xs:w-2 h-1 xs:h-2 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8 right-3 xs:right-4 sm:right-6 md:right-8 w-1 xs:w-2 h-1 xs:h-2 bg-white rounded-full opacity-25"></div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="https://www.youtube.com/embed/drEM8XOVdoA?si=ONDt5j28Pp3nP4H2&autoplay=1&loop=1&playlist=drEM8XOVdoA&rel=0&modestbranding=1&showinfo=0"
        isYouTube={true}
      />
    </>
  );
};

export default HeroSection;