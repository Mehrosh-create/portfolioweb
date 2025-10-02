// src/app/services/page.tsx - UPDATED
"use client";

import Link from "next/link";
import {
    CheckCircle,
    BarChart,
    Users,
    Target,
    TrendingUp,
    Lightbulb,
    Zap,
} from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: <BarChart className="w-8 h-8" />,
            title: "Business Strategy & Digital Growth",
            description:
                "Comprehensive business strategies tailored to your goals with data-driven digital growth plans.",
            features: [
                "Market Analysis",
                "Growth Planning",
                "KPI Development",
                "Performance Tracking",
            ],
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Operations Management & Automation",
            description:
                "Streamline your operations with cutting-edge automation solutions and efficient management systems.",
            features: [
                "Process Optimization",
                "Workflow Automation",
                "Efficiency Analysis",
                "System Implementation",
            ],
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "CRM & Client Lifecycle Solutions",
            description:
                "End-to-end CRM implementation and client management solutions to enhance customer relationships.",
            features: [
                "CRM Selection",
                "Implementation",
                "Team Training",
                "Ongoing Support",
            ],
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Digital Funnels & Brand Positioning",
            description:
                "Create high-conversion digital funnels and establish powerful brand positioning in your market.",
            features: [
                "Funnel Design",
                "Conversion Optimization",
                "Brand Strategy",
                "Market Positioning",
            ],
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Team Management & Communication Systems",
            description:
                "Implement effective team management structures and communication systems for optimal productivity.",
            features: [
                "Team Structure",
                "Communication Tools",
                "Performance Management",
                "Collaboration Systems",
            ],
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Digital Transformation Consulting",
            description:
                "Complete digital transformation services to future-proof your business operations.",
            features: [
                "Digital Audit",
                "Transformation Roadmap",
                "Technology Integration",
                "Change Management",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-[#151515] text-white">
            {/* Header Section */}
            <div className="py-20 px-40">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        {/* EXPERT SOLUTIONS with sliding background */}
                        <div className="relative inline-block mx-auto mb-4 overflow-hidden">
                            <span
                                className="absolute top-0 left-0 h-full bg-[#0fb8af] inline-block"
                                style={{
                                    width: "0%",
                                    animation: "slideRight 2s forwards",
                                }}
                            ></span>

                            <span
                                className="relative z-10 text-black text-xs font-bold uppercase px-3 py-1 inline-block"
                                style={{
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                }}
                            >
                                EXPERT SOLUTIONS
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold uppercase text-white mb-6 leading-tight">
                            MY <span className="text-[#0fb8af]">SERVICES</span>
                        </h1>

                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            With over 7 years of experience, I provide comprehensive digital
                            transformation and business growth services to help your business
                            thrive.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#151515] border overflow-hidden transition-all duration-300 hover:scale-105 group cursor-pointer"
                                style={{ borderColor: "#1F2937" }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#0fb8af")}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1F2937")}
                            >
                                <div className="p-6">
                                    <div className="text-[#0fb8af] mb-4 group-hover:text-[#0fb8af] transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#0fb8af] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2 mb-4">
                                        {service.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2 text-gray-300 text-sm"
                                            >
                                                <CheckCircle className="w-4 h-4 text-[#0fb8af] flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 px-6 bg-[#1a1a1a]">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#151515] border rounded-lg p-8 lg:p-12 text-center"
                        style={{ borderColor: "#1F2937" }}>
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 uppercase">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-gray-300 text-base mb-6 max-w-2xl mx-auto">
                            Let&apos;s discuss how my services can help you achieve your business
                            goals and drive sustainable growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/contact">
                                <button
                                    className="px-6 py-3 font-bold uppercase tracking-wider transition-colors text-sm"
                                    style={{ backgroundColor: "#0fb8af", color: "#000" }}
                                >
                                    Get Started
                                </button>
                            </Link>
                            <Link href="/portfolio">
                                <button
                                    className="border-2 border-[#0fb8af] text-[#0fb8af] px-6 py-3 uppercase transition-all duration-300 transform hover:scale-105 text-sm text-center font-semibold"
                                    style={{
                                        letterSpacing: "0.08em",
                                    }}
                                >
                                    View Portfolio
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
          @keyframes slideRight {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}
            </style>
        </div>
    );
};

export default Services;