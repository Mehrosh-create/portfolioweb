import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/Layout/ClientLayout";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebazNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata must only exist in a Server Component
export const metadata: Metadata = {
  title: "Sheikh Nabeel - Entrepreneur & Digital Growth Expert",
  description: "Serial Entrepreneur, Founder & CEO of Euroshub, Business Strategist, & Digital Transformation Expert",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebazNeue.variable} antialiased bg-[#151515] text-white overflow-x-hidden`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}