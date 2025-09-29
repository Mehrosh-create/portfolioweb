"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Alex Johnson",
            company: "TechStart Inc.",
            role: "CEO",
            image: "/images/client1.jpg",
            content:
                "Sheikh Nabeel transformed our digital infrastructure completely. His strategic approach to digital transformation helped us increase efficiency by 40% and reduce operational costs significantly.",
            rating: 5,
            hoverBg: "from-blue-600 to-blue-800"
        },
        {
            id: 2,
            name: "Sarah Williams",
            company: "GrowthLabs",
            role: "Marketing Director",
            image: "/images/client2.jpg",
            content:
                "Working with Sheikh Nabeel was a game-changer for our marketing strategy. His expertise in digital funnels and growth marketing helped us triple our lead generation in just 3 months.",
            rating: 5,
            hoverBg: "from-purple-600 to-purple-800"
        },
        {
            id: 3,
            name: "Michael Chen",
            company: "Global Solutions",
            role: "Operations Manager",
            image: "/images/client3.jpg",
            content:
                "The CRM implementation and automation systems designed by Sheikh Nabeel have revolutionized our client management process. We've seen a 60% improvement in client satisfaction scores.",
            rating: 5,
            hoverBg: "from-green-600 to-green-800"
        },
        {
            id: 4,
            name: "Emily Rodriguez",
            company: "InnovateTech",
            role: "Founder",
            image: "/images/client4.jpg",
            content:
                "Sheikh Nabeel's business strategy expertise helped us pivot during a challenging market period. His insights and guidance were instrumental in our successful rebranding and market repositioning.",
            rating: 5,
            hoverBg: "from-red-600 to-red-800"
        },
        {
            id: 5,
            name: "David Kim",
            company: "NextGen Apps",
            role: "CTO",
            image: "/images/client5.jpg",
            content:
                "The team management systems implemented by Sheikh Nabeel have dramatically improved our productivity and collaboration. Our project delivery times have decreased by 35% since working with him.",
            rating: 5,
            hoverBg: "from-orange-600 to-orange-800"
        },
        {
            id: 6,
            name: "Lisa Thompson",
            company: "Digital Dynamics",
            role: "Product Manager",
            image: "/images/client6.jpg",
            content:
                "Sheikh Nabeel's expertise in product strategy and digital innovation helped us launch our flagship product ahead of schedule. His insights into user experience design resulted in a 50% increase in user engagement.",
            rating: 5,
            hoverBg: "from-teal-600 to-teal-800"
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="min-h-screen pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 xl:px-4 pb-8 sm:pb-12 lg:pb-16 bg-[#151515] flex flex-col">
            <div className="flex-grow max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h1
                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase text-white mb-4 sm:mb-6 lg:mb-8 leading-tight"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.02em",
                        }}
                    >
                        CLIENT <span className="text-[#FFEA00]">TESTIMONIALS</span>
                    </h1>

                    {/* Sliding background highlight like About page */}
                    <div className="relative inline-block mx-auto mb-4 sm:mb-6">
                        <span
                            className="absolute top-0 left-0 h-full bg-[#FFEA00] inline-block"
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
                            SUCCESS STORIES
                        </span>
                    </div>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
                    <div className="bg-[#252525] rounded-lg p-4 sm:p-6 lg:p-8 xl:p-12 relative border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 overflow-hidden">
                        {/* Background pattern */}
                        <div
                            className="absolute inset-0 opacity-5"
                            style={{
                                backgroundImage:
                                    'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
                                backgroundSize: "60px 60px",
                            }}
                        ></div>

                        <Quote className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#02B600]/20 z-10" />

                        <div className="text-center mb-4 sm:mb-6 lg:mb-8 relative z-10">
                            <div className="flex justify-center mb-3 sm:mb-4">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#FFEA00] fill-current"
                                    />
                                ))}
                            </div>
                            <p
                                className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#e0f7fa] italic leading-relaxed px-2 sm:px-4"
                                style={{
                                    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                &ldquo;{testimonials[currentIndex].content}&rdquo;
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-3 sm:gap-4 relative z-10">
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-[#02B600]">
                                <Image
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                                />
                            </div>
                            <div>
                                <h3
                                    className="text-base sm:text-lg lg:text-xl font-bold text-white"
                                    style={{
                                        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                    }}
                                >
                                    {testimonials[currentIndex].name}
                                </h3>
                                <p
                                    className="text-[#FFEA00] text-sm sm:text-base"
                                    style={{
                                        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                    }}
                                >
                                    {testimonials[currentIndex].role},{" "}
                                    {testimonials[currentIndex].company}
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-2 sm:left-3 lg:left-4 top-1/2 transform -translate-y-1/2 bg-[#02B600] p-1.5 sm:p-2 rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 z-20"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-2 sm:right-3 lg:right-4 top-1/2 transform -translate-y-1/2 bg-[#02B600] p-1.5 sm:p-2 rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 z-20"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                        </button>

                        {/* Carousel indicators */}
                        <div className="flex justify-center mt-4 sm:mt-5 lg:mt-6 gap-1.5 sm:gap-2 relative z-10">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-[#FFEA00] scale-125"
                                        : "bg-gray-600 hover:bg-[#02B600]"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Testimonials Grid with Enhanced Slide-Up Effects */}
                <div className="mb-8 sm:mb-12 lg:mb-16">
                    <h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 lg:mb-12 text-center uppercase"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.05em",
                        }}
                    >
                        More Client Feedback
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="relative bg-[#252525] rounded-lg border border-gray-700 hover:border-white transition-all duration-200 group cursor-pointer overflow-hidden h-64 sm:h-72 lg:h-80 shadow-lg hover:shadow-2xl"
                            >
                                {/* Default State - Shows Name, Role, Company */}
                                <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center text-center transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-gray-600 mb-4 sm:mb-5 lg:mb-6 transition-all duration-500">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                                        />
                                    </div>
                                    <h3
                                        className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3"
                                        style={{
                                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        {testimonial.name}
                                    </h3>
                                    <p
                                        className="text-[#FFEA00] font-semibold uppercase tracking-wider text-sm sm:text-base lg:text-lg mb-1 sm:mb-2"
                                        style={{
                                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                                        }}
                                    >
                                        {testimonial.role}
                                    </p>
                                    <p
                                        className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide"
                                        style={{
                                            fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                        }}
                                    >
                                        {testimonial.company}
                                    </p>
                                </div>

                                {/* Hover State - Content slides up from bottom */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.hoverBg} p-4 sm:p-5 lg:p-6 transition-all duration-300 ease-out transform translate-y-full group-hover:translate-y-0 flex flex-col justify-center`}>
                                    <div className="text-center">
                                        <div className="flex justify-center mb-3 sm:mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-300 fill-current mx-0.5"
                                                />
                                            ))}
                                        </div>
                                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white/30 mb-3 sm:mb-4 mx-auto" />
                                        <p
                                            className="text-white text-xs sm:text-sm leading-relaxed italic font-light px-1 max-h-32 sm:max-h-36 lg:max-h-40 overflow-y-auto"
                                            style={{
                                                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                            }}
                                        >
                                            &ldquo;{testimonial.content}&rdquo;
                                        </p>
                                    </div>
                                </div>

                                {/* Hover indicator bar */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-700 delay-200"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-[#252525] rounded-lg p-6 sm:p-8 lg:p-10 xl:p-12 text-center border border-gray-700 relative overflow-hidden">
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
                        <h2
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 uppercase"
                            style={{
                                fontFamily: '"Bebas Neue", Arial, sans-serif',
                                letterSpacing: "0.05em",
                            }}
                        >
                            Ready to Join Our Success Stories?
                        </h2>
                        <p
                            className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#e0f7fa] mb-6 sm:mb-7 lg:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
                            style={{
                                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                            }}
                        >
                            Transform your business like our satisfied clients. Let&apos;s discuss
                            your project and create your success story.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link href="/contact">
                                <button
                                    className="border-2 border-[#FFEA00] text-[#FFEA00] px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 font-bold uppercase tracking-wider rounded-lg hover:bg-[#FFEA00] hover:text-black transition-colors text-sm sm:text-base"
                                    style={{
                                        fontFamily: '"Bebas Neue", Arial, sans-serif',
                                    }}
                                >
                                    Contact Me
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Keyframes */}
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

export default Testimonials;