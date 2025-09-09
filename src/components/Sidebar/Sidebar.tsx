"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Twitter,
  SearchIcon,
  MessageCircle,
  Play,
  Hash,
  Camera,
  Bookmark,
  Phone,
} from "lucide-react";

interface SidebarProps {
  onSearchClick?: () => void;
}

const Sidebar = ({ onSearchClick }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [activeSocialIcon, setActiveSocialIcon] = useState("");

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsOpen(window.innerWidth >= 1024); // Sidebar always open on desktop
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (isMobile) setIsOpen(false);
    setTimeout(() => setActiveLink(""), 500);
  };

  const handleSocialIconClick = (iconName: string) => {
    setActiveSocialIcon(iconName);
    setTimeout(() => setActiveSocialIcon(""), 300);
  };

  // Social links data
  const socialLinks = [
    { href: "https://twitter.com/garyvee", icon: Twitter, label: "Twitter" },
    { href: "https://www.facebook.com/gary", icon: Facebook, label: "Facebook" },
    { href: "https://www.pinterest.com/garyvee/", icon: Bookmark, label: "Pinterest" },
    { href: "https://www.linkedin.com/in/garyvaynerchuk/", icon: Linkedin, label: "Linkedin" },
    { href: "https://www.youtube.com/c/garyvee", icon: Youtube, label: "YouTube" },
    { href: "https://www.instagram.com/garyvee/", icon: Instagram, label: "Instagram" },
    { href: "https://snapchat.com/add/garyvee", icon: Camera, label: "Snapchat" },
    { href: "https://discord.com/invite/veefriends", icon: MessageCircle, label: "Discord" },
    { href: "https://www.tiktok.com/@garyvee", icon: Play, label: "TikTok" },
    { href: "https://www.threads.net/@teamgaryvee?hl=en", icon: Hash, label: "Threads" },
    { href: "sms:+12129315731", icon: Phone, label: "Phone" },
  ];

  return (
    <>
      {/* Hamburger for mobile */}
      {isMobile && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white bg-gray-900 px-3 py-2 rounded transition-all hover:scale-105"
          >
            ☰
          </button>
        </div>
      )}

      {/* Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-black text-white z-50 transition-transform duration-300 shadow-xl shadow-black/50
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Logo */}
          <div
            className={`p-6 transition-all duration-300 ${scrolled ? "py-4" : "py-6"} flex justify-center`}
          >
            <Link href="/" onClick={() => handleLinkClick("home")}>
              <Image
                src="/images/logo.png"
                alt="Entrepreneur Portfolio Logo"
                width={160}
                height={56}
                className="transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_#02B600]"
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
                    className={`block px-4 py-3 rounded-lg relative overflow-hidden text-xl font-semibold transition-all duration-300
                      ${activeLink === item.id
                        ? "text-[#02B600] drop-shadow-[0_0_10px_#02B600]"
                        : "text-white hover:text-[#02B600] hover:drop-shadow-[0_0_8px_#02B600]"
                      }`}
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#02B600] transform transition-transform duration-300 ${
                        activeLink === item.id ? "translate-x-0" : "-translate-x-full"
                      }`}
                    />
                  </Link>
                </li>
              ))}

              {/* Search */}
              <li>
                <button
                  onClick={onSearchClick}
                  className="w-full px-4 py-3 rounded-lg text-white text-xl font-semibold flex items-center transition-all duration-300 hover:text-[#02B600] hover:drop-shadow-[0_0_8px_#02B600]"
                >
                  <SearchIcon className="w-6 h-6 mr-3" />
                  Search
                </button>
              </li>
            </ul>
          </nav>

          {/* Footer Socials */}
          <div className="p-6 border-t border-[#02B600]/40 mt-auto">
            {/* Desktop Grid */}
            <ul className="hidden lg:grid grid-cols-4 gap-4 justify-items-center mb-6">
              {socialLinks.map((social, i) => (
                <li key={i}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block transition-transform duration-300 hover:-translate-y-2"
                    aria-label={social.label}
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-black/40 rounded-full group-hover:bg-[#02B600] group-hover:shadow-[0_0_12px_#02B600] transition-all">
                      <social.icon className="w-5 h-5 text-white" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Horizontal Scroll */}
            <div className="lg:hidden overflow-x-auto">
              <ul className="flex gap-4 mb-6 px-1">
                {socialLinks.map((social, i) => (
                  <li key={i} className="flex-shrink-0">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block transition-transform duration-300 hover:-translate-y-2"
                      aria-label={social.label}
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-black/40 rounded-full group-hover:bg-[#02B600] group-hover:shadow-[0_0_12px_#02B600] transition-all">
                        <social.icon className="w-5 h-5 text-white" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
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
