// src/app/services/page.tsx
"use client";

import { CheckCircle, ArrowRight, BarChart, Users, Target, TrendingUp, Lightbulb, Zap } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: <BarChart className="w-12 h-12" />,
            title: "Business Strategy & Digital Growth",
            description: "Comprehensive business strategies tailored to your goals with data-driven digital growth plans.",
            features: ["Market Analysis", "Growth Planning", "KPI Development", "Performance Tracking"]
        },
        {
            icon: <Zap className="w-12 h-12" />,
            title: "Operations Management & Automation",
            description: "Streamline your operations with cutting-edge automation solutions and efficient management systems.",
            features: ["Process Optimization", "Workflow Automation", "Efficiency Analysis", "System Implementation"]
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: "CRM & Client Lifecycle Solutions",
            description: "End-to-end CRM implementation and client management solutions to enhance customer relationships.",
            features: ["CRM Selection", "Implementation", "Team Training", "Ongoing Support"]
        },
        {
            icon: <TrendingUp className="w-12 h-12" />,
            title: "Digital Funnels & Brand Positioning",
            description: "Create high-conversion digital funnels and establish powerful brand positioning in your market.",
            features: ["Funnel Design", "Conversion Optimization", "Brand Strategy", "Market Positioning"]
        },
        {
            icon: <Target className="w-12 h-12" />,
            title: "Team Management & Communication Systems",
            description: "Implement effective team management structures and communication systems for optimal productivity.",
            features: ["Team Structure", "Communication Tools", "Performance Management", "Collaboration Systems"]
        },
        {
            icon: <Lightbulb className="w-12 h-12" />,
            title: "Digital Transformation Consulting",
            description: "Complete digital transformation services to future-proof your business operations.",
            features: ["Digital Audit", "Transformation Roadmap", "Technology Integration", "Change Management"]
        }
    ];

    return (
        <div className="min-h-screen pt-20 pb-16 px-6 bg-[#151515]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-8 leading-tight"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.02em"
                        }}>
                        MY <span className="text-[#FFEA00]">SERVICES</span>
                    </h1>
                    <div className="inline-block bg-[#FFEA00] text-black px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        EXPERT SOLUTIONS
                    </div>
                    <p className="text-xl text-[#e0f7fa] max-w-3xl mx-auto"
                        style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                        With over 7 years of experience, I provide comprehensive digital transformation and business growth services to help your business thrive.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div key={index} className="bg-[#252525] p-8 rounded-lg border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 group cursor-pointer relative overflow-hidden">
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-[#02B600]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="text-[#FFEA00] mb-6 group-hover:text-[#02B600] transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e0f7fa] transition-colors"
                                    style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                    {service.title}
                                </h3>
                                <p className="text-[#e0f7fa] mb-6"
                                    style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-[#e0f7fa]"
                                            style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                            <CheckCircle className="w-5 h-5 text-[#02B600]" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="flex items-center gap-2 text-[#FFEA00] font-semibold group-hover:gap-3 transition-all uppercase"
                                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-[#252525] rounded-lg p-12 text-center border border-gray-700 relative overflow-hidden">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase"
                            style={{
                                fontFamily: '"Bebas Neue", Arial, sans-serif',
                                letterSpacing: "0.05em"
                            }}>
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-[#e0f7fa] mb-8 max-w-2xl mx-auto"
                            style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                            Let's discuss how my services can help you achieve your business goals and drive sustainable growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#FFEA00] text-black px-8 py-3 font-bold uppercase tracking-wider rounded-lg hover:bg-yellow-300 transition-colors"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                                Get Started
                            </button>
                            <button className="border-2 border-[#FFEA00] text-[#FFEA00] px-8 py-3 font-bold uppercase tracking-wider rounded-lg hover:bg-[#FFEA00] hover:text-black transition-colors"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;