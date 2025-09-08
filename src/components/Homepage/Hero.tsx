// components/HomePage/Hero.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import VideoModal from '@/components/Video/Videomodal'
import { SearchIcon, X } from 'lucide-react'

interface HeroSectionProps {
  onVideoPlay: () => void
  showSearch: boolean
  onSearchClose: () => void
  bgColor?: string // <-- new prop for background color
}

const HeroSection = ({ onVideoPlay, showSearch, onSearchClose, bgColor = "bg-black/60" }: HeroSectionProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleVideoPlay = () => {
    setIsVideoOpen(true)
    onVideoPlay()
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Add your search logic here
  }

  return (
    <>
      {/* Search Bar */}
      {showSearch && (
        <div className="w-full bg-black py-8 px-8 border-b border-gray-700 relative z-50">
          <div className="max-w-7xl mx-auto flex items-center">
            <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center">
              <SearchIcon className="w-8 h-8 text-white mr-6" />
              <input
                type="text"
                placeholder="SEARCH..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white border-0 text-3xl font-light focus:outline-none focus:ring-0 py-3 px-2 placeholder-gray-400"
                autoFocus
                style={{ fontSize: '2.5rem' }}
              />
              <button
                type="submit"
                className="ml-8 text-white bg-transparent border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300 text-xl font-medium"
              >
                SEARCH
              </button>
            </form>
            <button onClick={onSearchClose} className="ml-8 text-white hover:text-gray-300">
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/ceo.png"
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
                Entrepreneur & Digital Growth Expert
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
                <svg className="w-12 h-12 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
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
  )
}

export default HeroSection
