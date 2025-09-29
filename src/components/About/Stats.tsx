// src/components/About/Stats.tsx
"use client";

import { useEffect, useState } from "react";

const Stats = () => {
    const [counters, setCounters] = useState({
        followers: 0,
        impressions: 0,
        clients: 0,
        projects: 0,
        years: 0,
    });

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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="transform transition duration-700 opacity-0 translate-y-8 animate-fadeInUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative overflow-hidden bg-[#252525] p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-700 hover:border-[#0fb8af] transition-all duration-500 text-center group cursor-pointer">
                                {/* Sliding green background */}
                                <div className="absolute inset-0 bg-[#02B600] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out"></div>

                                {/* Content sits above */}
                                <div className="relative z-10">
                                    <div
                                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0fb8af] mb-1 sm:mb-2 transition-colors group-hover:text-white"
                                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                                    >
                                        {stat.value}
                                        {stat.suffix}
                                    </div>
                                    <div
                                        className="text-xs sm:text-sm text-[#e0f7fa] uppercase tracking-wider transition-colors group-hover:text-white leading-tight"
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

            {/* Animations */}
            <style>
                {`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 1s ease forwards;
                }
                `}
            </style>
        </div>
    );
};

export default Stats;