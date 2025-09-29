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
            icon: <BarChart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
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
            icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
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
            icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
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
            icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
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
            icon: <Target className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
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
            icon: <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
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
        <div className="min-h-screen pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 xl:px-4 pb-8 sm:pb-16 lg:pb-24 bg-[#151515] flex flex-col">
            <div className="flex-grow max-w-7xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h1
                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase text-white mb-6 sm:mb-8 leading-tight"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.02em",
                        }}
                    >
                        MY <span className="text-[#0fb8af]">SERVICES</span>
                    </h1>

                    {/* EXPERT SOLUTIONS with sliding background */}
                    <div className="relative inline-block mx-auto mb-4 sm:mb-6">
                        <span
                            className="absolute top-0 left-0 h-full bg-[#0fb8af] inline-block"
                            style={{
                                width: "0%",
                                animation: "slideRight 2s forwards",
                            }}
                        ></span>

                        <span
                            className="relative z-10 text-black text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase px-3 sm:px-4 lg:px-6 py-1 sm:py-2 inline-block"
                            style={{
                                fontFamily: '"Bebas Neue", Arial, sans-serif',
                                letterSpacing: "0.05em",
                            }}
                        >
                            EXPERT SOLUTIONS
                        </span>
                    </div>

                    <p
                        className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#E0F7FA] max-w-3xl mx-auto px-2"
                        style={{
                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                        }}
                    >
                        With over 7 years of experience, I provide comprehensive digital
                        transformation and business growth services to help your business
                        thrive.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#252525] p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-700 hover:border-[#0fb8af] transition-all duration-300 group cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[#02B600]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="text-[#0fb8af] mb-4 sm:mb-6 group-hover:text-[#02B600] transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3
                                    className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#E0F7FA] transition-colors"
                                    style={{
                                        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                    }}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    className="text-[#E0F7FA] mb-4 sm:mb-6 text-sm sm:text-base"
                                    style={{
                                        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                    }}
                                >
                                    {service.description}
                                </p>
                                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-2 text-[#E0F7FA] text-xs sm:text-sm"
                                            style={{
                                                fontFamily:
                                                    'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                            }}
                                        >
                                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#02B600] flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-[#252525] rounded-lg p-6 sm:p-8 lg:p-12 text-center border border-gray-700 relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage:
                                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
                            backgroundSize: "60px 60px",
                        }}
                    ></div>

                    <div className="relative z-10">
                        <h2
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 uppercase"
                            style={{
                                fontFamily: '"Bebas Neue", Arial, sans-serif',
                                letterSpacing: "0.05em",
                            }}
                        >
                            Ready to Transform Your Business?
                        </h2>
                        <p
                            className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#E0F7FA] mb-6 sm:mb-8 max-w-2xl mx-auto"
                            style={{
                                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                            }}
                        >
                            Let&apos;s discuss how my services can help you achieve your business
                            goals and drive sustainable growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            {/* ✅ Updated Get Started Button with Link */}
                            <Link href="/contact">
                                <button
                                    className="bg-[#0fb8af] text-black px-6 sm:px-8 py-2 sm:py-3 font-bold uppercase tracking-wider rounded-lg hover:bg-[#0fb8af]/80 transition-colors text-sm sm:text-base"
                                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                                >
                                    Get Started
                                </button>
                            </Link>
                            <Link href="/portfolio">
                                <button
                                    className="border-2 border-[#0fb8af] text-[#0fb8af] px-6 sm:px-8 py-2 sm:py-3 font-bold uppercase tracking-wider rounded-lg hover:bg-[#0fb8af]/80 hover:text-black transition-colors text-sm sm:text-base"
                                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
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