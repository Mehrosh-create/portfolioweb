// src/components/About/Stats.tsx
"use client";

import { useEffect, useState } from "react";

const Stats = () => {
    const [counters, setCounters] = useState({
        followers: 0,
        impressions: 0,
        clients: 0,
        projects: 0,
        years: 0
    });

    useEffect(() => {
        const targetValues = {
            followers: 680000,
            impressions: 3500000,
            clients: 120,
            projects: 250,
            years: 7
        };

        const duration = 2000; // ms
        const steps = 60;
        const stepDuration = duration / steps;

        const animateCounters = () => {
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep += 1;
                const progress = currentStep / steps;

                setCounters({
                    followers: Math.floor(targetValues.followers * progress),
                    impressions: Math.floor(targetValues.impressions * progress),
                    clients: Math.floor(targetValues.clients * progress),
                    projects: Math.floor(targetValues.projects * progress),
                    years: Math.floor(targetValues.years * progress)
                });

                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, stepDuration);
        };

        animateCounters();
    }, []);

    const stats = [
        { value: counters.followers.toLocaleString(), label: "FOLLOWERS", suffix: "+" },
        { value: counters.impressions.toLocaleString(), label: "IMPRESSIONS", suffix: "+" },
        { value: counters.clients, label: "CLIENTS", suffix: "+" },
        { value: counters.projects, label: "PROJECTS", suffix: "+" },
        { value: counters.years, label: "YEARS EXPERIENCE", suffix: "+" }
    ];

    return (
        <div className="py-16 mb-16 relative">
            {/* Background pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: "60px 60px",
                }}
            ></div>

            <div className="relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group cursor-pointer">
                            <div className="bg-[#252525] p-6 rounded-lg border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 hover:scale-105">
                                <div className="text-3xl md:text-4xl font-bold text-[#FFEA00] mb-2 group-hover:text-[#02B600] transition-colors"
                                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                                    {stat.value}{stat.suffix}
                                </div>
                                <div className="text-sm text-[#e0f7fa] uppercase tracking-wider group-hover:text-white transition-colors"
                                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;