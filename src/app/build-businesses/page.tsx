"use client";

import Hero from "@/components/Homepage/Hero";
import BusinessGrid from "@/components/BuildBusinesses/BusinessGrid";

export default function BuildBusinessesPage() {
    const handleVideoPlay = () => {
        console.log("Video play triggered");
    };

    return (
        <div className="bg-[#151515] text-white min-h-screen">
            <Hero
                onVideoPlay={handleVideoPlay}
                bgColor="bg-black/60"
                customHeading="Building Businesses with Vision"
            />
            <BusinessGrid />
        </div>
    );
}

export const metadata = {
    title: "Sheikh Nabeel - Build Businesses",
    description: "Explore how Sheikh Nabeel builds and transforms businesses as a serial entrepreneur and CEO.",
};