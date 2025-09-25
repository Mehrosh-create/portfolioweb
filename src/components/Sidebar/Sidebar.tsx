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
} from "lucide-react";

// ✅ Correct professional icons
import { FaDiscord, FaPinterest, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";
import { SiThreads, SiTiktok } from "react-icons/si";

interface SidebarProps {
  onSearchClick?: () => void;
}

const Sidebar = ({ onSearchClick }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [activeLink, setActiveLink] = useState("");
  const [hoveredNav, setHoveredNav] = useState("");
  const [searchHover, setSearchHover] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
        setIsOpen(false);
      } else if (width < 1024) {
        setScreenSize("tablet");
        setIsOpen(false);
      } else {
        setScreenSize("desktop");
        setIsOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (screenSize !== "desktop") setIsOpen(false);
  };

  // ✅ Updated with WhatsApp, TikTok, Threads, Snapchat
  const socialLinks = [
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://www.facebook.com/sheikh.nabeel.ali.2025/about/?_rdr", icon: Facebook, label: "Facebook" },
    { href: "https://www.pinterest.com", icon: FaPinterest, label: "Pinterest" },
    { href: "https://pk.linkedin.com/in/sheikhnabeelofficial", icon: Linkedin, label: "Linkedin" },
    { href: "https://www.youtube.com", icon: Youtube, label: "YouTube" },
    { href: "https://www.instagram.com/sheikhnabeel.official/?hl=en", icon: Instagram, label: "Instagram" },
    { href: "https://snapchat.com/add/sheikhnabeel.official", icon: FaSnapchatGhost, label: "Snapchat" },
    { href: "https://discord.com", icon: FaDiscord, label: "Discord" },
    { href: "https://www.tiktok.com/@sheikhnabeel.official", icon: SiTiktok, label: "TikTok" },
    { href: "https://www.threads.net", icon: SiThreads, label: "Threads" },
    { href: "https://wa.me/923335489622", icon: FaWhatsapp, label: "WhatsApp" },
  ];

  const getSidebarWidth = () => {
    switch (screenSize) {
      case "mobile":
        return "w-[85vw] max-w-[280px]";
      case "tablet":
        return "w-[60vw] max-w-[320px]";
      case "desktop":
        return "w-64";
      default:
        return "w-64";
    }
  };

  const getLogoSize = () => {
    switch (screenSize) {
      case "mobile":
        return { width: 120, height: 38 };
      case "tablet":
        return { width: 140, height: 44 };
      case "desktop":
        return { width: 160, height: 50 };
      default:
        return { width: 160, height: 50 };
    }
  };

  const getFontSize = () => {
    switch (screenSize) {
      case "mobile":
        return "1rem";
      case "tablet":
        return "1.1rem";
      case "desktop":
        return "1.2rem";
      default:
        return "1.2rem";
    }
  };

  const getSocialGridCols = () => {
    switch (screenSize) {
      case "mobile":
        return "grid-cols-4";
      case "tablet":
        return "grid-cols-5";
      case "desktop":
        return "grid-cols-5";
      default:
        return "grid-cols-5";
    }
  };

  const logoSize = getLogoSize();

  return (
    <>
      {screenSize !== "desktop" && (
        <div className="fixed top-3 left-3 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white bg-gray-900 px-3 py-2 rounded-md text-lg transition-all hover:scale-105 shadow-lg"
          >
            ☰
          </button>
        </div>
      )}

      {screenSize !== "desktop" && isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen ${getSidebarWidth()} bg-black text-white z-50 transition-all duration-300 shadow-xl shadow-black/50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} ${screenSize === "desktop" ? "translate-x-0" : ""}`}
      >
        <div className="flex flex-col h-full">
          <div
            className={`px-4 transition-all duration-300 ${scrolled ? "py-2" : screenSize === "mobile" ? "py-3" : screenSize === "tablet" ? "py-4" : "py-6"} flex justify-center items-center flex-shrink-0`}
          >
            <Link
              href="/"
              onClick={() => handleLinkClick("home")}
              className="block w-full flex justify-center"
            >
              <Image
                src="/images/sign.png"
                alt="Entrepreneur Portfolio Logo"
                width={logoSize.width}
                height={logoSize.height}
                className="h-auto object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="flex-1 px-4 flex items-start justify-start min-h-0">
            <ul className={`${screenSize === "mobile" ? "space-y-2" : screenSize === "tablet" ? "space-y-2.5" : "space-y-3"} w-full`}>
              {[
                { href: "/", label: "HOME", id: "home" },
                { href: "/about", label: "ABOUT", id: "about" },
                { href: "/portfolio", label: "PORTFOLIO", id: "portfolio" },
                { href: "/services", label: "SERVICES", id: "services" },
                { href: "/testimonials", label: "TESTIMONIALS", id: "testimonials" },
                { href: "/contact", label: "CONTACT", id: "contact" },
              ].map((item) => (
                <li key={item.id} className="relative">
                  <div
                    className={`absolute inset-y-0 left-0 w-[70%] bg-[#02B600] transform transition-transform duration-300 ease-out ${activeLink === item.id
                      ? "scale-x-100 origin-left"
                      : hoveredNav === item.id
                        ? "scale-x-100 origin-left"
                        : "scale-x-0 origin-left"
                      }`}
                    style={{ zIndex: -1 }}
                  />
                  <Link
                    href={item.href}
                    className={`block px-2 ${screenSize === "mobile" ? "py-1.5" : "py-2"} relative text-white transition-colors duration-300`}
                    onClick={() => handleLinkClick(item.id)}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    onMouseLeave={() => setHoveredNav("")}
                    style={{
                      fontFamily: '"Bebas Neue", sans-serif',
                      fontWeight: 100,
                      fontSize: getFontSize(),
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="flex justify-start pt-2 pl-1">
                <button
                  onClick={onSearchClick}
                  onMouseEnter={() => setSearchHover(true)}
                  onMouseLeave={() => setSearchHover(false)}
                  className={`${screenSize === "mobile" ? "w-8 h-8" : "w-9 h-9"} flex items-center justify-center rounded-full transition-colors duration-300`}
                  style={{ color: searchHover ? "#02B600" : "white" }}
                >
                  <SearchIcon
                    className={`${screenSize === "mobile" ? "w-4 h-4" : "w-5 h-5"} transition-colors duration-300`}
                    style={{ color: searchHover ? "#02B600" : "white" }}
                  />
                </button>
              </li>
            </ul>
          </nav>

          <div className={`p-4 border-t border-[#02B600]/40 flex-shrink-0 ${screenSize === "mobile" ? "p-3" : ""}`}>
            <div className="mb-3">
              <ul className={`grid ${getSocialGridCols()} gap-2 justify-items-center`}>
                {socialLinks.slice(0, screenSize === "mobile" ? 8 : socialLinks.length).map((social, i) => (
                  <li key={i}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`relative ${screenSize === "mobile" ? "w-8 h-8" : "w-10 h-10"} overflow-hidden rounded-full group block`}
                    >
                      <span className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                        <social.icon className={`${screenSize === "mobile" ? "w-4 h-4" : "w-5 h-5"} text-white`} />
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center bg-[#02B600] translate-y-full transition-all duration-300 group-hover:translate-y-0">
                        <social.icon className={`${screenSize === "mobile" ? "w-4 h-4" : "w-5 h-5"} text-white`} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className={`${screenSize === "mobile" ? "text-[10px]" : "text-xs"} text-center text-gray-400`}>
              © {new Date().getFullYear()} Entrepreneur Portfolio
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
