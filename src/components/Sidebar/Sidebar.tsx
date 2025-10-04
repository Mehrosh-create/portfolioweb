//sidebar fixed

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Search,
} from "lucide-react";

// Extra icons
import { FaDiscord, FaPinterest, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

interface SidebarProps {
  onSearchClick?: () => void;
}

const Sidebar = ({ onSearchClick }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [hoveredNav, setHoveredNav] = useState("");
  const [searchHover, setSearchHover] = useState(false);

  const pathname = usePathname();

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
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://www.facebook.com/sheikh.nabeel.ali.2025/about/?_rdr", icon: Facebook, label: "Facebook" },
    { href: "https://www.pinterest.com", icon: FaPinterest, label: "Pinterest" },
    { href: "https://pk.linkedin.com/in/sheikhnabeelofficial", icon: Linkedin, label: "Linkedin" },
    { href: "https://www.youtube.com/@EurosHub", icon: Youtube, label: "YouTube" },
    { href: "https://www.instagram.com/sheikhnabeel.official/?hl=en", icon: Instagram, label: "Instagram" },
    { href: "https://snapchat.com/add/sheikhnabeel.official", icon: FaSnapchatGhost, label: "Snapchat" },
    { href: "https://discord.com", icon: FaDiscord, label: "Discord" },
    { href: "https://www.tiktok.com/@sheikhnabeel.official", icon: SiTiktok, label: "TikTok" },
    { href: "https://wa.me/923000369622", icon: FaWhatsapp, label: "WhatsApp" },
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
            className="text-white bg-gradient-to-br from-gray-900 to-black p-3 rounded-xl transition-all hover:scale-105 shadow-xl hover:shadow-2xl hover:from-[#0fb8af] hover:to-gray-900 group"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
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
        className={`fixed top-0 left-0 h-screen ${getSidebarWidth()} bg-black text-white z-50 transition-all duration-300 shadow-xl shadow-black/50 overflow-hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"} ${screenSize === "desktop" ? "translate-x-0" : ""}`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Close button for mobile/tablet */}
          {screenSize !== "desktop" && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-[#0fb8af] transition-colors z-10 p-2 hover:bg-white/10 rounded-lg"
              aria-label="Close Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          {/* Logo */}
          <div
            className={`px-4 py-3 flex justify-center items-center flex-shrink-0`}
          >
            <Link href="/" className="block w-full flex justify-center">
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

          {/* Nav Links */}
          <nav className="px-4 py-2">
            <ul
              className={`${screenSize === "mobile"
                ? "space-y-1"
                : screenSize === "tablet"
                  ? "space-y-1.5"
                  : "space-y-2"
                } w-full`}
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
                      ${isActive || hoveredNav === item.href
                          ? "scale-x-100 origin-left"
                          : "scale-x-0 origin-left"
                        }`}
                      style={{ zIndex: -1 }}
                    />
                    <Link
                      href={item.href}
                      prefetch={true}
                      className={`block px-2 ${screenSize === "mobile" ? "py-1.5" : "py-2"
                        } relative text-white transition-colors duration-300`}
                      onMouseEnter={() => setHoveredNav(item.href)}
                      onMouseLeave={() => setHoveredNav("")}
                      onClick={() => {
                        if (screenSize !== "desktop") {
                          setIsOpen(false);
                        }
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

              {/* Search Button */}
              <li className="flex justify-start pt-2 pl-1">
                <button
                  onClick={onSearchClick}
                  onMouseEnter={() => setSearchHover(true)}
                  onMouseLeave={() => setSearchHover(false)}
                  className={`${screenSize === "mobile" ? "w-8 h-8" : "w-9 h-9"
                    } flex items-center justify-center rounded-full transition-colors duration-300`}
                  style={{ color: searchHover ? "#0fb8af" : "white" }}
                >
                  <Search
                    className={`${screenSize === "mobile" ? "w-4 h-4" : "w-5 h-5"
                      } transition-colors duration-300`}
                    style={{ color: searchHover ? "#0fb8af" : "white" }}
                  />
                </button>
              </li>
            </ul>
          </nav>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Social Links */}
          <div
            className={`p-4 border-t border-[#0fb8af]/40 flex-shrink-0 ${screenSize === "mobile" ? "p-3" : ""
              }`}
          >
            <div className="mb-3">
              <ul
                className={`grid ${getSocialGridCols()} gap-2 justify-items-center`}
              >
                {socialLinks
                  .slice(0, screenSize === "mobile" ? 8 : socialLinks.length)
                  .map((social, i) => (
                    <li key={i}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`relative ${screenSize === "mobile" ? "w-8 h-8" : "w-10 h-10"
                          } overflow-hidden rounded-full group block`}
                      >
                        <span className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                          <social.icon
                            className={`${screenSize === "mobile" ? "w-4 h-4" : "w-5 h-5"
                              } text-white`}
                          />
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center bg-[#0fb8af] translate-y-full transition-all duration-300 group-hover:translate-y-0">
                          <social.icon
                            className={`${screenSize === "mobile" ? "w-4 h-4" : "w-5 h-5"
                              } text-white`}
                          />
                        </span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <p
              className={`${screenSize === "mobile" ? "text-[10px]" : "text-xs"
                } text-center text-gray-400`}
            >
              © {new Date().getFullYear()} Entrepreneur Portfolio
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
