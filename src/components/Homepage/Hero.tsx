"use client";

import { useState } from "react";
import Image from "next/image";
import VideoModal from "@/components/Video/Videomodal";
import { SearchIcon, X } from "lucide-react";
import { useSearch } from "@/components/Layout/ClientLayout";

interface HeroSectionProps {
  onVideoPlay: () => void;
  bgColor?: string;
  customHeading?: string; // Added customHeading prop
}

const HeroSection = ({
  onVideoPlay,
  bgColor = "bg-black/60",
  customHeading,
}: HeroSectionProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { showSearch, setShowSearch } = useSearch();

  const handleVideoPlay = () => {
    setIsVideoOpen(true);
    onVideoPlay();
  };

  const handleSearchClose = () => {
    setShowSearch(false);
    setSearchQuery("");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };

  return (
    <>
      {/* Search Bar */}
      {showSearch && (
        <div className="w-full bg-black py-16 px-8 relative z-50">
          <div className="max-w-7xl mx-auto">
            <div className="relative mt-6">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="SEARCH"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-white border-0 text-3xl font-bold focus:outline-none focus:ring-0 py-4 placeholder-white tracking-wider pr-16"
                  autoFocus
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    letterSpacing: "0.1em",
                  }}
                />
                {/* Green underline */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#02B600]"></div>

                {/* Close button positioned above green line at the right */}
                <button
                  onClick={handleSearchClose}
                  className="absolute bottom-4 right-0 text-white hover:text-gray-300 group transition-colors duration-300"
                >
                  <X className="w-8 h-8 transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </form>
            </div>

            {/* Search instruction text */}
            <p className="text-gray-400 text-lg mt-6 font-light">
              Hit enter to search or ESC to close
            </p>
          </div>
        </div>
      )}

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/ceo.png" // Default image; update to /images/build-businesses-bg.jpg for Build Businesses context
            alt="Sheikh Nabeel"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
          {/* Overlay with dynamic bgColor */}
          <div className={`absolute inset-0 ${bgColor}`}></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-start text-left">
            {/* Text Content */}
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-2xl">
                {customHeading || "Entrepreneur & Digital Growth Expert"} {/* Use customHeading if provided */}
              </h1>

              <h2 className="text-4xl lg:text-6xl font-light mb-8 text-[#a8e6cf] drop-shadow-xl">
                SHEIKH NABEEL
              </h2>

              <div className="text-xl lg:text-2xl text-gray-200 space-y-2 drop-shadow-lg">
                <p className="uppercase tracking-wider">SERIAL ENTREPRENEUR, FOUNDER & CEO OF</p>
                <p className="uppercase tracking-wider">EUROSHUB, BUSINESS STRATEGIST,</p>
                <p className="uppercase tracking-wider">& DIGITAL TRANSFORMATION EXPERT</p>
              </div>

              {/* Video Play Button */}
              <button
                onClick={handleVideoPlay}
                className="mt-12 bg-white/20 backdrop-blur-sm border-2 border-white rounded-full p-6 hover:bg-white/30 transition-all shadow-2xl hover:scale-110 group"
              >
                <svg
                  className="w-12 h-12 text-white group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full opacity-25"></div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/videos/intro-video.mp4"
      />
    </>
  );
};

export default HeroSection;