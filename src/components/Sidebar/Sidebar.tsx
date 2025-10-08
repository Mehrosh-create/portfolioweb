"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaUpwork } from "react-icons/fa6";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Search,
} from "lucide-react";
import { FaDiscord, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { useTheme } from "@/contexts/ThemeContext"; // ✅ Correct path

interface SidebarProps {
  onSearchClick?: () => void;
}

const Sidebar = ({ onSearchClick }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [hoveredNav, setHoveredNav] = useState("");

  const pathname = usePathname();
  const { theme } = useTheme(); // ✅ Use theme context

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

  const socialLinks = [
    { href: "https://x.com/nabeel1sheikh", icon: Twitter, label: "Twitter" },
    { href: "https://www.facebook.com/sheikh.nabeel.ali.2025/about/?_rdr", icon: Facebook, label: "Facebook" },
    { href: "https://www.upwork.com/freelancers/sheikhnabeelofficial", icon: FaUpwork, label: "Upwork" },
    { href: "https://pk.linkedin.com/in/sheikhnabeelofficial", icon: Linkedin, label: "Linkedin" },
    { href: "https://www.youtube.com/@EurosHub", icon: Youtube, label: "YouTube" },
    { href: "https://www.instagram.com/sheikhnabeel.official/?hl=en", icon: Instagram, label: "Instagram" },
    { href: "https://snapchat.com/add/sheikhnabeel.official", icon: FaSnapchatGhost, label: "Snapchat" },
    { href: "https://discord.com", icon: FaDiscord, label: "Discord" },
    { href: "https://www.tiktok.com/@sheikhnabeel.official", icon: SiTiktok, label: "TikTok" },
    { href: "https://wa.me/923000369622", icon: FaWhatsapp, label: "WhatsApp" },
  ];

  // Theme-based styling
  const themeStyles = {
    dark: {
      sidebar: "bg-black text-white",
      overlay: "bg-black/70 backdrop-blur-sm",
      menuButton: "text-white bg-gradient-to-br from-gray-900 to-black hover:from-[#0fb8af] hover:to-gray-900",
      menuButtonBars: "bg-white",
      closeButton: "text-white hover:text-[#0fb8af] hover:bg-white/10",
      navText: "text-white",
      searchButton: "text-white hover:text-[#0fb8af]",
      searchIcon: "text-white",
      socialIcon: "text-white",
      copyright: "text-gray-400",
      logoFilter: "filter-none",
      border: "border-[#0fb8af]/40",
    },
    light: {
      sidebar: "bg-white text-black",
      overlay: "bg-black/50 backdrop-blur-sm",
      menuButton: "text-black bg-white hover:bg-[#0fb8af] border border-gray-300",
      menuButtonBars: "bg-black",
      closeButton: "text-black hover:text-[#0fb8af] hover:bg-black/10",
      navText: "text-black",
      searchButton: "border border-gray-400 hover:border-[#0fb8af]",
      searchIcon: "text-black hover:text-[#0fb8af]",
      socialIcon: "text-black",
      copyright: "text-gray-600",
      logoFilter: "filter invert",
      border: "border-[#0fb8af]/40",
    }
  };

  const currentTheme = theme === "dark" ? themeStyles.dark : themeStyles.light;

  const getSidebarWidth = () => {
    switch (screenSize) {
      case "mobile": return "w-[85vw] max-w-[280px]";
      case "tablet": return "w-[60vw] max-w-[320px]";
      default: return "w-64";
    }
  };

  const getLogoSize = () => {
    switch (screenSize) {
      case "mobile": return { width: 120, height: 38 };
      case "tablet": return { width: 140, height: 44 };
      default: return { width: 160, height: 50 };
    }
  };

  const getFontSize = () => {
    switch (screenSize) {
      case "mobile": return "1rem";
      case "tablet": return "1.1rem";
      default: return "1.2rem";
    }
  };

  const getSocialGridCols = () => {
    switch (screenSize) {
      case "mobile": return "grid-cols-4";
      case "tablet": return "grid-cols-5";
      default: return "grid-cols-5";
    }
  };

  const logoSize = getLogoSize();

  return (
    <>
      {screenSize !== "desktop" && (
        <div className="fixed top-3 left-3 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-3 rounded-xl transition-all hover:scale-105 shadow-xl hover:shadow-2xl ${currentTheme.menuButton}`}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''} ${currentTheme.menuButtonBars}`}
              ></span>
              <span
                className={`h-0.5 w-full rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''} ${currentTheme.menuButtonBars}`}
              ></span>
              <span
                className={`h-0.5 w-full rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''} ${currentTheme.menuButtonBars}`}
              ></span>
            </div>
          </button>
        </div>
      )}

      {screenSize !== "desktop" && isOpen && (
        <div
          className={`fixed inset-0 z-40 ${currentTheme.overlay}`}
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen ${getSidebarWidth()} ${currentTheme.sidebar} z-50 transition-all duration-300 shadow-xl shadow-black/50 overflow-hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"} ${screenSize === "desktop" ? "translate-x-0" : ""}`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {screenSize !== "desktop" && (
            <button
              onClick={() => setIsOpen(false)}
              className={`absolute top-3 right-3 transition-colors z-10 p-2 rounded-lg ${currentTheme.closeButton}`}
              aria-label="Close Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Logo */}
          <div className="px-4 py-3 flex justify-center items-center flex-shrink-0">
            <Link href="/" className="block w-full flex justify-center">
              <Image
                src="/images/sign.png"
                alt="Entrepreneur Portfolio Logo"
                width={logoSize.width}
                height={logoSize.height}
                className={`h-auto object-contain ${currentTheme.logoFilter}`}
                priority
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="px-4 py-2">
            <ul
              className={`${screenSize === "mobile" ? "space-y-1" : screenSize === "tablet" ? "space-y-1.5" : "space-y-2"} w-full`}
            >
              {[
                { href: "/", label: "HOME" },
                { href: "/about", label: "ABOUT" },
                { href: "/portfolio", label: "PORTFOLIO" },
                { href: "/services", label: "SERVICES" },
                { href: "/testimonials", label: "TESTIMONIALS" },
                { href: "/contact", label: "CONTACT" },
              ].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href} className="relative">
                    <div
                      className={`absolute inset-y-0 left-0 w-[70%] bg-[#0fb8af] transform transition-transform duration-300 ease-out 
                      ${isActive || hoveredNav === item.href ? "scale-x-100 origin-left" : "scale-x-0 origin-left"}`}
                      style={{ zIndex: -1 }}
                    />
                    <Link
                      href={item.href}
                      prefetch={true}
                      className={`block px-2 ${screenSize === "mobile" ? "py-1.5" : "py-2"} relative transition-colors duration-300 ${currentTheme.navText}`}
                      onMouseEnter={() => setHoveredNav(item.href)}
                      onMouseLeave={() => setHoveredNav("")}
                      onClick={() => {
                        if (screenSize !== "desktop") setIsOpen(false);
                      }}
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
                );
              })}

              {/* Search Button Only */}
              <li className="flex justify-start pt-2 pl-1">
                <button
                  onClick={onSearchClick}
                  className={`${screenSize === "mobile" ? "w-8 h-8" : "w-9 h-9"} flex items-center justify-center rounded-full transition-colors duration-300 ${currentTheme.searchButton}`}
                >
                  <Search
                    className={`${screenSize === "mobile" ? "w-4 h-4" : "w-5 h-5"} transition-colors duration-300 ${currentTheme.searchIcon}`}
                  />
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex-1" />

          {/* Social Links */}
          <div className={`p-4 border-t ${currentTheme.border} flex-shrink-0 ${screenSize === "mobile" ? "p-3" : ""}`}>
            <div className="mb-3">
              <ul className={`grid ${getSocialGridCols()} gap-2 justify-items-center`}>
                {socialLinks
                  .slice(0, screenSize === "mobile" ? 8 : socialLinks.length)
                  .map((social, i) => (
                    <li key={i}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`relative ${screenSize === "mobile" ? "w-8 h-8" : "w-10 h-10"} overflow-hidden rounded-full group block`}
                      >
                        <span
                          className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0"
                          style={{
                            backgroundColor: theme === "dark" ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.2)'
                          }}
                        >
                          <social.icon className={`${screenSize === "mobile" ? "w-4 h-4" : "w-5 h-5"} ${currentTheme.socialIcon}`} />
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center bg-[#0fb8af] translate-y-full transition-all duration-300 group-hover:translate-y-0">
                          <social.icon className={`${screenSize === "mobile" ? "w-4 h-4" : "w-5 h-5"} text-white`} />
                        </span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <p className={`${screenSize === "mobile" ? "text-[10px]" : "text-xs"} text-center ${currentTheme.copyright}`}>
              © {new Date().getFullYear()} Entrepreneur Portfolio
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;