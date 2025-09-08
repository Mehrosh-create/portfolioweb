// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata must only exist in a Server Component
export const metadata: Metadata = {
  title: "Entrepreneur Portfolio",
  description: "Professional Entrepreneur Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          {/* ✅ Fixed Sidebar */}
          <Sidebar />

          {/* ✅ Main content pushed right by sidebar width */}
          <main className="flex-1 ml-0 lg:ml-72 h-screen overflow-y-auto bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
