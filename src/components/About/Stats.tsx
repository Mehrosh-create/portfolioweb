"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Stats = () => {
    const [counters, setCounters] = useState({
        followers: 0,
        impressions: 0,
        clients: 0,
        projects: 0,
        years: 0,
    });

    const { theme } = useTheme();

    useEffect(() => {
        const targetValues = {
            followers: 680000,
            impressions: 3500000,
            clients: 120,
            projects: 250,
            years: 7,
        };

        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep += 1;
            const progress = currentStep / steps;

            setCounters({
                followers: Math.floor(targetValues.followers * progress),
                impressions: Math.floor(targetValues.impressions * progress),
                clients: Math.floor(targetValues.clients * progress),
                projects: Math.floor(targetValues.projects * progress),
                years: Math.floor(targetValues.years * progress),
            });

            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, []);

    const stats = [
        { value: counters.followers.toLocaleString(), label: "FOLLOWERS", suffix: "+" },
        { value: counters.impressions.toLocaleString(), label: "IMPRESSIONS", suffix: "+" },
        { value: counters.clients, label: "CLIENTS", suffix: "+" },
        { value: counters.projects, label: "PROJECTS", suffix: "+" },
        { value: counters.years, label: "YEARS EXPERIENCE", suffix: "+" },
    ];

    return (
        <div className="min-h-screen pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 xl:px-4 pb-8 sm:pb-12 lg:pb-16 bg-background flex flex-col">
            <div className="flex-grow max-w-7xl mx-auto w-full">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h1
                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase text-foreground mb-4 sm:mb-6 lg:mb-8 leading-tight"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.02em",
                        }}
                    >
                        BUSINESS <span className="text-[#0fb8af]">STATISTICS</span>
                    </h1>

                    {/* Sliding background highlight */}
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
                            GROWTH METRICS
                        </span>
                    </div>
                </div>

                {/* Stats Section */}
                <div
                    id="fws_68ccdc3a5efda"
                    className="relative py-8 sm:py-12 lg:py-16 mb-8 sm:mb-12 lg:mb-16 overflow-hidden"
                >
                    {/* Background pattern */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage:
                                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
                            backgroundSize: "60px 60px",
                        }}
                    ></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
                        {/* Responsive grid that adapts to screen size */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="transform transition duration-700 opacity-0 translate-y-8 animate-fadeInUp"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative overflow-hidden bg-gray-dark p-3 xs:p-4 sm:p-5 lg:p-6 xl:p-7 rounded-lg border border-gray-700 hover:border-[#0fb8af] transition-all duration-500 text-center group cursor-pointer h-full 
                                        min-h-[100px] xs:min-h-[110px] sm:min-h-[130px] 
                                        md:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px] 
                                        flex items-center justify-center">

                                        {/* Sliding green background */}
                                        <div className="absolute inset-0 bg-[#0fb8af] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out"></div>

                                        {/* Content sits above */}
                                        <div className="relative z-10 w-full flex flex-col justify-center items-center">
                                            <div
                                                className="font-bold text-[#0fb8af] transition-colors group-hover:text-white leading-tight w-full px-2
                                                    text-xl xs:text-2xl sm:text-3xl 
                                                    md:text-2xl lg:text-3xl xl:text-4xl
                                                    mb-2 xs:mb-3"
                                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                                            >
                                                {stat.value}
                                                {stat.suffix}
                                            </div>
                                            <div
                                                className="text-foreground uppercase tracking-wider transition-colors group-hover:text-white leading-tight w-full px-2
                                                    text-xs xs:text-sm sm:text-base
                                                    md:text-sm lg:text-base xl:text-lg"
                                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                                            >
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Content Section */}
                <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-dark rounded-lg">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 uppercase"
                            style={{
                                fontFamily: '"Bebas Neue", Arial, sans-serif',
                                letterSpacing: "0.05em",
                            }}
                        >
                            TRUSTED BY INDUSTRY LEADERS
                        </h2>
                        <p className="text-foreground text-base sm:text-lg lg:text-xl mb-8 leading-relaxed">
                            These numbers represent real results delivered to clients worldwide through
                            strategic digital transformation and innovative business solutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style>
                {`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideRight {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 1s ease forwards;
                }
                
                /* Extra small devices (phones, 320px and up) */
                @media (min-width: 320px) {
                    .xs\\:px-4 { padding-left: 1rem; padding-right: 1rem; }
                    .xs\\:gap-4 { gap: 1rem; }
                    .xs\\:p-4 { padding: 1rem; }
                    .xs\\:min-h-\\[110px\\] { min-height: 110px; }
                    .xs\\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
                    .xs\\:text-sm { font-size: 0.875rem; line-height: 1.25rem; }
                    .xs\\:mb-3 { margin-bottom: 0.75rem; }
                }
                
                /* Tablet specific adjustments */
                @media (min-width: 768px) and (max-width: 1023px) {
                    .md\\:min-h-\\[120px\\] { min-height: 120px; }
                    .md\\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
                    .md\\:text-sm { font-size: 0.875rem; line-height: 1.25rem; }
                }
                
                /* iPad Pro and larger tablets */
                @media (min-width: 1024px) and (max-width: 1365px) {
                    .lg\\:min-h-\\[140px\\] { min-height: 140px; }
                    .lg\\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
                    .lg\\:text-base { font-size: 1rem; line-height: 1.5rem; }
                }
                
                /* Foldable devices and unusual aspect ratios */
                @media (max-width: 319px) {
                    .grid-cols-2 {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }
                
                /* Surface Duo and dual screen devices */
                @media (min-width: 540px) and (max-width: 767px) and (orientation: portrait) {
                    .grid-cols-2 {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }
                
                /* Nest Hub and smart displays */
                @media (min-width: 1024px) and (max-height: 600px) {
                    .min-h-\\[100px\\] { min-height: 90px; }
                    .lg\\:min-h-\\[140px\\] { min-height: 120px; }
                }
                `}
            </style>
        </div>
    );
};

export default Stats;