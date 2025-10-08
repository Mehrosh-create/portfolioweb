// src/components/Homepage/Hero.tsx - PROPER STICKY HERO WITH COMPLETE IMAGE REVEAL
"use client";

import { useState, useEffect } from "react";
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVideoPlay = () => {
    setIsVideoOpen(true);
    onVideoPlay();
  };

  // Calculate transform values - longer effect duration
  const heroHeight = window.innerHeight;
  const effectDuration = heroHeight * 3; // Extended to 3 screen heights for complete reveal
  const scrollProgress = Math.min(scrollY / effectDuration, 1);
  const translateY = scrollProgress * heroHeight * 2; // Move content up more than screen height
  const overlayOpacity = Math.max(0.6 - scrollProgress * 0.6, 0);

  return (
    <>
      {/* Sticky Hero Container */}
      <div className="sticky top-0 h-screen overflow-hidden z-10">
        <section className="relative h-full">
          {/* Background Image - Fixed within hero */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/ceo.png"
              alt="Sheikh Nabeel"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>

          {/* Moving Overlay */}
          <div 
            className="absolute inset-0 bg-black transition-transform duration-75 ease-out"
            style={{ 
              opacity: overlayOpacity,
              transform: `translateY(-${translateY}px)`
            }}
          ></div>

          {/* Moving Text Content */}
          <div 
            className="absolute inset-0 flex items-center justify-center transition-transform duration-75 ease-out"
            style={{ transform: `translateY(-${translateY}px)` }}
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
              <div className="flex flex-col items-start text-left">
                <div className="max-w-4xl w-full">
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight drop-shadow-2xl">
                    {customHeading || "Entrepreneur & Digital Growth Expert"}
                  </h1>

                  <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 sm:mb-8 text-[#0fb8af] drop-shadow-xl">
                    SHEIKH NABEEL
                  </h2>

                  <div className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 space-y-2 sm:space-y-3 drop-shadow-lg">
                    <p className="uppercase tracking-wider">SERIAL ENTREPRENEUR, FOUNDER & CEO OF</p>
                    <p className="uppercase tracking-wider">EUROSHUB, BUSINESS STRATEGIST,</p>
                    <p className="uppercase tracking-wider">& DIGITAL TRANSFORMATION EXPERT</p>
                  </div>

                  {/* Video Play Button */}
                  <button
                    onClick={handleVideoPlay}
                    className="mt-6 sm:mt-8 md:mt-12 bg-white/20 backdrop-blur-sm border-2 border-white rounded-full p-3 sm:p-4 md:p-6 hover:bg-white/30 transition-all shadow-2xl hover:scale-110 group"
                    aria-label="Play introduction video"
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-white group-hover:scale-110 transition-transform"
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

          {/* Static Decorative elements */}
          <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-2 h-2 bg-white rounded-full opacity-30"></div>
          <div className="absolute bottom-16 sm:bottom-20 left-8 sm:left-20 w-3 h-3 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-16 sm:top-20 right-8 sm:right-20 w-1 h-1 bg-white rounded-full opacity-40"></div>
          <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-2 h-2 bg-white rounded-full opacity-25"></div>
        </section>
      </div>

      {/* Extended Spacer - Creates more scroll distance before next section appears */}
      <div style={{ height: `${window.innerHeight * 2}px` }}></div>

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