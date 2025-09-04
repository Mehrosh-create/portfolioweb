// components/Sidebar/Sidebar.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Github, 
  Twitter,
  SearchIcon,
  MessageCircle, // Discord alternative
  Play, // TikTok alternative
  Hash, // Threads alternative
  Camera, // Snapchat alternative
  Bookmark, // Pinterest alternative
  Phone // Phone icon
} from 'lucide-react';

interface SidebarProps {
  onSearchClick: () => void;
}

const Sidebar = ({ onSearchClick }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [activeSocialIcon, setActiveSocialIcon] = useState('');

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (isMobile) setIsOpen(false);
    
    // Reset active link after animation completes
    setTimeout(() => {
      setActiveLink('');
    }, 500);
  };

  const handleSocialIconClick = (iconName: string) => {
    setActiveSocialIcon(iconName);
    
    // Reset active icon after animation completes
    setTimeout(() => {
      setActiveSocialIcon('');
    }, 300);
  };

  return (
    <>
      {/* Hamburger for mobile - Updated with reference style */}
      {isMobile && (
        <div className="slide-out-widget-area-toggle mobile-icon simple fixed top-4 left-4 z-50" data-custom-color="false" data-icon-animation="simple-transform">
          <div> 
            <a 
              href="#sidewidgetarea" 
              role="button" 
              aria-label="Navigation Menu" 
              aria-expanded={isOpen}
              className={isOpen ? "" : "closed"}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
            >
              <span className="screen-reader-text">
                Menu
                <span className="close-wrap loaded"> 
                  <span className="close-line close-line1"></span> 
                  <span className="close-line close-line2"></span> 
                </span>
              </span>
              <span aria-hidden="true"> 
                <i className="lines-button x2"> 
                  <i className="lines"></i> 
                </i> 
                <span className={`close-wrap loaded ${isOpen ? 'active' : ''}`}> 
                  <span className="close-line close-line1"></span> 
                  <span className="close-line close-line2"></span> 
                </span>
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black text-white z-40 transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-auto`}
        style={{ width: isOpen ? '300px' : '0px' }}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Logo - Updated with smaller, more professional size */}
          <div className={`p-6 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'} flex justify-center`}>
            <Link href="/" onClick={() => handleLinkClick('home')}>
              <Image
                src="/images/logo.png"
                alt="Entrepreneur Portfolio Logo"
                width={160}
                height={56}
                className="transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-5">
              {[
                { href: "/", label: "Home", id: "home" },
                { href: "/about", label: "About", id: "about" },
                { href: "/portfolio", label: "Portfolio", id: "portfolio" },
                { href: "/services", label: "Services", id: "services" },
                { href: "/testimonials", label: "Testimonials", id: "testimonials" },
                { href: "/contact", label: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-white relative overflow-hidden transition-colors duration-300 text-xl font-semibold ${
                      activeLink === item.id ? 'text-[#02B600]' : 'hover:text-[#02B600]'
                    }`}
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.label}
                    {/* Animated underline effect */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#02B600] transform transition-transform duration-300 ${
                      activeLink === item.id ? 'translate-x-0' : '-translate-x-full'
                    }`}></span>
                  </Link>
                </li>
              ))}
              
              {/* Search Icon below Contact - Updated with reference style */}
              <li>
                <div className="button_social_group">
                  <ul className="buttons sf-menu" data-user-set-ocm="off">
                    <li id="search-btn">
                      <div>
                        <button 
                          onClick={onSearchClick}
                          className="w-full px-4 py-3 rounded-lg text-white hover:bg-[#02B600] hover:text-white transition-colors duration-300 text-xl font-semibold flex items-center"
                        >
                          <SearchIcon className="w-6 h-6 mr-3" />
                          Search
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>

          {/* Footer Socials - Updated with reference style */}
          <div className="p-6 border-t border-white/20 mt-auto">
            <div className="below-menu-items-wrap">
              <div className="button_social_group">
                <ul className="off-canvas-social-links grid grid-cols-4 gap-4 justify-items-center mb-6">
                  {/* Twitter/X */}
                  <li>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener" 
                      className={`group relative block transition-transform duration-300 hover:scale-110 ${
                        activeSocialIcon === 'twitter' ? '-translate-y-2' : ''
                      }`}
                      onClick={() => handleSocialIconClick('twitter')}
                      aria-label="Twitter"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-[#02B600]">
                        <Twitter className="w-5 h-5" />
                      </span>
                    </a>
                  </li>
                  
                  {/* Facebook */}
                  <li>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener" 
                      className={`group relative block transition-transform duration-300 hover:scale-110 ${
                        activeSocialIcon === 'facebook' ? '-translate-y-2' : ''
                      }`}
                      onClick={() => handleSocialIconClick('facebook')}
                      aria-label="Facebook"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-[#02B600]">
                        <Facebook className="w-5 h-5" />
                      </span>
                    </a>
                  </li>
                  
                  {/* Pinterest */}
                  <li>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener" 
                      className={`group relative block transition-transform duration-300 hover:scale-110 ${
                        activeSocialIcon === 'pinterest' ? '-translate-y-2' : ''
                      }`}
                      onClick={() => handleSocialIconClick('pinterest')}
                      aria-label="Pinterest"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-[#02B600]">
                        <Bookmark className="w-5 h-5" />
                      </span>
                    </a>
                  </li>
                  
                  {/* LinkedIn */}
                  <li>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener" 
                      className={`group relative block transition-transform duration-300 hover:scale-110 ${
                        activeSocialIcon === 'linkedin' ? '-translate-y-2' : ''
                      }`}
                      onClick={() => handleSocialIconClick('linkedin')}
                      aria-label="LinkedIn"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-[#02B600]">
                        <Linkedin className="w-5 h-5" />
                      </span>
                    </a>
                  </li>
                  
                  {/* YouTube */}
                  <li>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener" 
                      className={`group relative block transition-transform duration-300 hover:scale-110 ${
                        activeSocialIcon === 'youtube' ? '-translate-y-2' : ''
                      }`}
                      onClick={() => handleSocialIconClick('youtube')}
                      aria-label="YouTube"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-[#02B600]">
                        <Youtube className="w-5 h-5" />
                      </span>
                    </a>
                  </li>
                  
                  {/* Instagram */}
                  <li>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener" 
                      className={`group relative block transition-transform duration-300 hover:scale-110 ${
                        activeSocialIcon === 'instagram' ? '-translate-y-2' : ''
                      }`}
                      onClick={() => handleSocialIconClick('instagram')}
                      aria-label="Instagram"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-[#02B600]">
                        <Instagram className="w-5 h-5" />
                      </span>
                    </a>
                  </li>
                  
                  {/* Snapchat */}
                  <li>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener" 
                      className={`group relative block transition-transform duration-300 hover:scale-110 ${
                        activeSocialIcon === 'snapchat' ? '-translate-y-2' : ''
                      }`}
                      onClick={() => handleSocialIconClick('snapchat')}
                      aria-label="Snapchat"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-[#02B600]">
                        <Camera className="w-5 h-5" />
                      </span>
                    </a>
                  </li>
                  
                  {/* Discord */}
                  <li>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener" 
                      className={`group relative block transition-transform duration-300 hover:scale-110 ${
                        activeSocialIcon === 'discord' ? '-translate-y-2' : ''
                      }`}
                      onClick={() => handleSocialIconClick('discord')}
                      aria-label="Discord"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-[#02B600]">
                        <MessageCircle className="w-5 h-5" />
                      </span>
                    </a>
                  </li>
                  
                  {/* TikTok */}
                  <li>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener" 
                      className={`group relative block transition-transform duration-300 hover:scale-110 ${
                        activeSocialIcon === 'tiktok' ? '-translate-y-2' : ''
                      }`}
                      onClick={() => handleSocialIconClick('tiktok')}
                      aria-label="TikTok"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-[#02B600]">
                        <Play className="w-5 h-5" />
                      </span>
                    </a>
                  </li>
                  
                  {/* Threads */}
                  <li>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener" 
                      className={`group relative block transition-transform duration-300 hover:scale-110 ${
                        activeSocialIcon === 'threads' ? '-translate-y-2' : ''
                      }`}
                      onClick={() => handleSocialIconClick('threads')}
                      aria-label="Threads"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-[#02B600]">
                        <Hash className="w-5 h-5" />
                      </span>
                    </a>
                  </li>
                  
                  {/* Phone */}
                  <li>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener" 
                      className={`group relative block transition-transform duration-300 hover:scale-110 ${
                        activeSocialIcon === 'phone' ? '-translate-y-2' : ''
                      }`}
                      onClick={() => handleSocialIconClick('phone')}
                      aria-label="Phone"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 group-hover:bg-[#02B600]">
                        <Phone className="w-5 h-5" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-center text-gray-400">
              © {new Date().getFullYear()} Entrepreneur Portfolio
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;