"use client";

import Image from "next/image";
import Link from "next/link";

const businesses = [
    {
        id: 1,
        title: "Euroshub",
        description: "A leading platform for digital growth and business solutions.",
        image: "/images/euroshub-logo.png",
        href: "https://euroshub.com",
        hoverColor: "#02B600",
    },
    {
        id: 2,
        title: "Nabeel Ventures",
        description: "Innovative investments driving digital transformation.",
        image: "/images/nabeel-ventures-logo.png",
        href: "https://nabeelventures.com",
        hoverColor: "#FFEA00",
    },
    // Add more businesses as needed
];

const BusinessGrid = () => {
    return (
        <div className="container mx-auto py-10 px-5">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-[#FFEA00]">
                    <em>Founder & CEO</em>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businesses.map((business) => (
                    <div
                        key={business.id}
                        className="border-t border-l border-b border-[#FFFFFF] p-4 min-h-[250px] relative group"
                    >
                        <Link
                            href={business.href}
                            target="_blank"
                            className="block h-full"
                            aria-label={`Visit ${business.title} website`}
                        >
                            <div className="flex flex-col h-full justify-between">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={business.image}
                                        alt={`${business.title} Logo`}
                                        width={175}
                                        height={175}
                                        className="mx-auto transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="text-lg font-semibold">{business.title}</p>
                                    <p className="text-sm mt-2">{business.description}</p>
                                </div>
                                <div
                                    className="absolute inset-0 bg-transparent transition-colors duration-300 opacity-0 group-hover:opacity-100"
                                    style={{ backgroundColor: business.hoverColor }}
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusinessGrid;