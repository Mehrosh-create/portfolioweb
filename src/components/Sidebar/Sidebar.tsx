"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
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
  const [hoveredNav, setHoveredNav] = useState("");
  const [searchHover, setSearchHover] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsOpen(window.innerWidth >= 1024);
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
    setTimeout(() => setActiveLink(""), 800);
  };

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
      {/* Mobile Hamburger */}
      {isMobile && (
        <div className="fixed top-3 left-3 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white bg-gray-900 px-2 py-1 rounded text-sm transition-all hover:scale-105"
          >
            ☰
          </button>
        </div>
      )}

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-black text-white z-50 transition-transform duration-300 shadow-xl shadow-black/50 ${isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Logo */}
          <div
            className={`p-4 transition-all duration-300 ${scrolled ? "py-3" : "py-4"
              } flex justify-center`}
          >
            <Link href="/" onClick={() => handleLinkClick("home")}>
              <Image
                src="/images/logo.png"
                alt="Entrepreneur Portfolio Logo"
                width={110}
                height={40}
                className="transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_#02B600]"
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 flex items-center justify-center">
            <ul className="space-y-2 w-full">
              {[
                { href: "/", label: "HOME", id: "home" },
                { href: "/about", label: "ABOUT", id: "about" },
                { href: "/portfolio", label: "PORTFOLIO", id: "portfolio" },
                { href: "/services", label: "SERVICES", id: "services" },
                { href: "/testimonials", label: "TESTIMONIALS", id: "testimonials" },
                { href: "/contact", label: "CONTACT", id: "contact" },
              ].map((item) => (
                <li key={item.id} className="relative">
                  {/* Green hover background (slides left → right, 65% width) */}
                  <div
                    className={`absolute inset-y-0 left-0 w-[65%] bg-[#02B600] transform transition-transform duration-300 ease-out ${hoveredNav === item.id ? "scale-x-100 origin-left" : "scale-x-0 origin-left"
                      }`}
                    style={{ zIndex: -1 }}
                  />
                  <Link
                    href={item.href}
                    className="block px-2 py-1.5 relative text-white transition-colors duration-300"
                    onClick={() => handleLinkClick(item.id)}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    onMouseLeave={() => setHoveredNav("")}
                    style={{
                      fontFamily: '"Bebas Neue", sans-serif',
                      fontWeight: 100,
                      fontSize: "1.3rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Search Icon */}
              <li className="flex justify-start pt-2 pl-1">
                <button
                  onClick={onSearchClick}
                  onMouseEnter={() => setSearchHover(true)}
                  onMouseLeave={() => setSearchHover(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300"
                  style={{ color: searchHover ? "#02B600" : "white" }}
                >
                  <SearchIcon
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: searchHover ? "#02B600" : "white" }}
                  />
                </button>
              </li>
            </ul>
          </nav>

          {/* Footer Socials */}
          <div className="p-4 border-t border-[#02B600]/40">
            {/* Desktop Grid */}
            <ul className="hidden lg:grid grid-cols-5 gap-3 justify-items-center mb-4">
              {socialLinks.map((social, i) => (
                <li key={i}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="relative w-10 h-10 overflow-hidden rounded-full group block"
                  >
                    {/* Default Icon */}
                    <span className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                      <social.icon className="w-5 h-5 text-white" />
                    </span>
                    {/* Hover Green Icon */}
                    <span className="absolute inset-0 flex items-center justify-center bg-[#02B600] translate-y-full transition-all duration-300 group-hover:translate-y-0">
                      <social.icon className="w-5 h-5 text-white" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile scrollable icons */}
            <div className="lg:hidden overflow-x-auto">
              <ul className="flex gap-3 mb-4 px-1">
                {socialLinks.map((social, i) => (
                  <li key={i} className="flex-shrink-0">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="relative w-10 h-10 overflow-hidden rounded-full group block"
                    >
                      <span className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                        <social.icon className="w-5 h-5 text-white" />
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center bg-[#02B600] translate-y-full transition-all duration-300 group-hover:translate-y-0">
                        <social.icon className="w-5 h-5 text-white" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-center text-gray-400">
              © {new Date().getFullYear()} Entrepreneur Portfolio
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
