"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; // ✅ added
import { Calendar, CheckCircle } from "lucide-react";

// ✅ Reuse same updates data from Homepage/New.tsx
const latestUpdates = [
    {
        id: 1,
        title: "Digital Transformation Masterclass",
        description:
            "Complete 12-week program covering advanced digital transformation strategies that scale businesses.",
        category: "COURSE LAUNCH",
        date: "March 20, 2025",
        status: "NEW",
        type: "course",
        price: "$1,997",
        features: [
            "12 Live Sessions",
            "Private Community",
            "Templates & Tools",
            "1-on-1 Support",
        ],
        image: "/images/digital-masterclass.jpg",
        downloadUrl: "/documents/digital-masterclass.pdf",
    },
    {
        id: 2,
        title: "CRM Implementation Toolkit 3.0",
        description:
            "Updated toolkit with 50+ templates, frameworks, and automation scripts for complete CRM transformation.",
        category: "RESOURCE UPDATE",
        date: "March 15, 2025",
        status: "UPDATED",
        type: "toolkit",
        price: "FREE",
        features: [
            "50+ Templates",
            "Automation Scripts",
            "Process Frameworks",
            "Video Tutorials",
        ],
        image: "/images/crmm-toolkit.jpg",
        downloadUrl: "/documents/crmm-toolkit.zip",
    },
    {
        id: 3,
        title: "Growth Marketing Accelerator Program",
        description:
            "6-month intensive program to master growth marketing and funnel optimization strategies.",
        category: "PROGRAM LAUNCH",
        date: "March 10, 2025",
        status: "LAUNCHING SOON",
        type: "program",
        price: "$4,997",
        features: [
            "6 Months Coaching",
            "Weekly Group Calls",
            "Done-with-You Funnels",
            "Marketing Automation",
        ],
        image: "/images/growth-accelerator.jpg",
        downloadUrl: "/documents/growth-accelerator.pdf",
    },
];

export default function LearnMorePage() {
    const { id } = useParams();
    const update = latestUpdates.find((item) => item.id.toString() === id);

    if (!update) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-[#151515]">
                <h2 className="text-2xl font-bold">Update not found</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#151515] text-white py-16 px-6 sm:px-12">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-black mb-6 text-[#0fb8af] uppercase">
                    {update.title}
                </h1>

                {/* Category + Status */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#0fb8af] text-black font-bold uppercase text-xs">
                        {update.category}
                    </span>
                    <span className="px-3 py-1 bg-white/10 border border-gray-700 text-xs uppercase">
                        {update.status}
                    </span>
                </div>

                {/* Image */}
                <Image
                    src={update.image}
                    alt={update.title}
                    width={900}
                    height={500}
                    className="object-cover rounded-lg"
                />

                {/* Description */}
                <p className="text-lg text-gray-300 mb-8 text-center">
                    {update.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {update.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#0fb8af]" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Price + Date */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-3">
                    <div className="text-2xl font-black text-#0fb8af]">
                        {update.price}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {update.date}
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {/* Download */}
                    <a
                        href={update.downloadUrl}
                        download
                        className="px-6 py-3 border-2 border-[#0fb8af] text-[#0fb8af] uppercase font-bold hover:bg-[#0fb8af] hover:text-black transition-all text-center"
                    >
                        Download
                    </a>

                    {/* Enroll - ✅ Navigates to enrollment form page */}
                    <Link
                        href={`/enroll/${update.id}`}
                        className="px-6 py-3 bg-[#0fb8af] text-black uppercase font-bold hover:opacity-90 transition-all text-center"
                    >
                        Enroll
                    </Link>
                </div>
            </div>
        </div>
    );
}
