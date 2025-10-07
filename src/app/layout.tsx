import type { Metadata } from "next";
import { Inter, Roboto_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/Layout/ClientLayout";
import ThemeToggle from "@/components/Global/ThemeToggle"; // ✅ Import

// Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Sheikh Nabeel - Entrepreneur & Digital Growth Expert",
  description:
    "Serial Entrepreneur, Founder & CEO of Euroshub, Business Strategist, & Digital Transformation Expert",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} ${bebasNeue.variable} antialiased bg-[#151515] text-white overflow-x-hidden transition-colors duration-500`}
      >
        {/* 🔘 Theme Toggle - Fixed Top Right */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>

        {/* Main Client Layout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
