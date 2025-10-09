// src/components/Homepage/Hero.tsx - CLEAN VERSION
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
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/ceo.png"
            alt="Sheikh Nabeel"
            fill
            className="object-cover hero-image"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className={`absolute inset-0 ${bgColor}`}></div>
        </div>

        <div className="relative z-10 w-full h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-3 py-6 xs:px-4 xs:py-8 sm:px-5 sm:py-10 md:px-6 md:py-12 lg:px-8 lg:py-16 xl:px-4">
            <div className="flex flex-col items-start text-left space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
              <div className="max-w-full w-full">
                <h1 className="font-bold text-white drop-shadow-2xl text-xl leading-snug xs:text-2xl xs:leading-snug sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight 2xl:text-7xl 2xl:leading-tight mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  {customHeading || "Entrepreneur & Digital Growth Expert"}
                </h1>

                <h2 className="font-light text-[#0fb8af] drop-shadow-xl text-lg leading-snug xs:text-xl xs:leading-snug sm:text-2xl sm:leading-snug md:text-3xl md:leading-snug lg:text-4xl lg:leading-snug xl:text-5xl xl:leading-snug 2xl:text-6xl 2xl:leading-snug mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
                  SHEIKH NABEEL
                </h2>

                <div className="text-gray-200 drop-shadow-lg space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-2.5 text-[10px] leading-relaxed xs:text-xs xs:leading-relaxed sm:text-sm sm:leading-relaxed md:text-base md:leading-relaxed lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-relaxed 2xl:text-2xl 2xl:leading-relaxed">
                  <p className="uppercase tracking-wide">SERIAL ENTREPRENEUR, FOUNDER & CEO OF</p>
                  <p className="uppercase tracking-wide">EUROSHUB, BUSINESS STRATEGIST,</p>
                  <p className="uppercase tracking-wide">& DIGITAL TRANSFORMATION EXPERT</p>
                </div>

                <button
                  onClick={handleVideoPlay}
                  className="bg-white/20 backdrop-blur-sm border-2 border-white rounded-full hover:bg-white/30 transition-all duration-300 shadow-2xl hover:scale-110 group mt-4 p-2 xs:mt-5 xs:p-2.5 sm:mt-6 sm:p-3 md:mt-8 md:p-4 lg:mt-10 lg:p-5 xl:mt-12 xl:p-6"
                  aria-label="Play introduction video"
                >
                  <svg
                    className="text-white group-hover:scale-110 transition-transform w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
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

        <div className="absolute opacity-30 bg-white rounded-full top-3 left-3 w-1 h-1 xs:top-4 xs:left-4 xs:w-1.5 xs:h-1.5 sm:top-6 sm:left-6 sm:w-2 sm:h-2 md:top-8 md:left-8 lg:top-10 lg:left-10"></div>
        <div className="absolute opacity-20 bg-white rounded-full bottom-10 left-5 w-1.5 h-1.5 xs:bottom-12 xs:left-6 xs:w-2 xs:h-2 sm:bottom-16 sm:left-12 sm:w-2.5 sm:h-2.5 md:bottom-20 md:left-16 md:w-3 md:h-3 lg:bottom-24 lg:left-20"></div>
        <div className="absolute opacity-40 bg-white rounded-full top-10 right-5 w-0.5 h-0.5 xs:top-12 xs:right-6 xs:w-1 xs:h-1 sm:top-16 sm:right-12 sm:w-1.5 sm:h-1.5 md:top-20 md:right-16 lg:top-24 lg:right-20"></div>
        <div className="absolute opacity-25 bg-white rounded-full bottom-3 right-3 w-1 h-1 xs:bottom-4 xs:right-4 xs:w-1.5 xs:h-1.5 sm:bottom-6 sm:right-6 sm:w-2 sm:h-2 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10"></div>
      </section>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="https://www.youtube.com/embed/drEM8XOVdoA?si=ONDt5j28Pp3nP4H2&autoplay=1&loop=1&playlist=drEM8XOVdoA&rel=0&modestbranding=1&showinfo=0"
        isYouTube={true}
      />

      <style>{`
        /* Responsive image positioning - AGGRESSIVE FIX */
        .hero-image {
          object-fit: cover;
        }
        
        /* iPhone SE & very small devices (320px - 374px) */
        @media (max-width: 374px) {
          .hero-image {
            object-position: 70% 35% !important;
            transform: scale(1.1);
          }
        }
        
        /* iPhone XR, 12 Pro, small mobiles (375px - 479px) */
        @media (min-width: 375px) and (max-width: 479px) {
          .hero-image {
            object-position: 65% 40% !important;
            transform: scale(1.05);
          }
        }
        
        /* Larger mobiles (480px - 639px) */
        @media (min-width: 480px) and (max-width: 639px) {
          .hero-image {
            object-position: 60% 40% !important;
          }
        }
        
        /* Small tablets portrait (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .hero-image {
            object-position: 55% 45% !important;
          }
        }
        
        /* Tablets portrait (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-image {
            object-position: 50% 45% !important;
          }
        }
        
        /* Tablets landscape & small desktops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .hero-image {
            object-position: center 48% !important;
          }
        }
        
        /* Desktop (1280px+) */
        @media (min-width: 1280px) {
          .hero-image {
            object-position: center center !important;
          }
        }
        
        /* Better viewport height support */
        section {
          min-height: 100vh;
          min-height: 100dvh;
        }
        
        /* Ensure image container doesn't crop */
        .absolute.inset-0 {
          overflow: visible;
        }
      `}</style>
    </>
  );
};

export default HeroSection;