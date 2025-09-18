// src/app/testimonials/page.tsx
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
            content: "Sheikh Nabeel transformed our digital infrastructure completely. His strategic approach to digital transformation helped us increase efficiency by 40% and reduce operational costs significantly.",
            rating: 5
        },
        {
            id: 2,
            name: "Sarah Williams",
            company: "GrowthLabs",
            role: "Marketing Director",
            image: "/images/client2.jpg",
            content: "Working with Sheikh Nabeel was a game-changer for our marketing strategy. His expertise in digital funnels and growth marketing helped us triple our lead generation in just 3 months.",
            rating: 5
        },
        {
            id: 3,
            name: "Michael Chen",
            company: "Global Solutions",
            role: "Operations Manager",
            image: "/images/client3.jpg",
            content: "The CRM implementation and automation systems designed by Sheikh Nabeel have revolutionized our client management process. We've seen a 60% improvement in client satisfaction scores.",
            rating: 5
        },
        {
            id: 4,
            name: "Emily Rodriguez",
            company: "InnovateTech",
            role: "Founder",
            image: "/images/client4.jpg",
            content: "Sheikh Nabeel's business strategy expertise helped us pivot during a challenging market period. His insights and guidance were instrumental in our successful rebranding and market repositioning.",
            rating: 5
        },
        {
            id: 5,
            name: "David Kim",
            company: "NextGen Apps",
            role: "CTO",
            image: "/images/client5.jpg",
            content: "The team management systems implemented by Sheikh Nabeel have dramatically improved our productivity and collaboration. Our project delivery times have decreased by 35% since working with him.",
            rating: 5
        }
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
        <div className="min-h-screen pt-20 pb-16 px-40 bg-[#151515]">
            <div className="max-w-7xl mx-auto lg:mr-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-8 leading-tight"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.02em"
                        }}>
                        CLIENT <span className="text-[#FFEA00]">TESTIMONIALS</span>
                    </h1>
                    <div className="inline-block bg-[#FFEA00] text-black px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6"
                        style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        SUCCESS STORIES
                    </div>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto mb-20">
                    <div className="bg-[#252525] rounded-lg p-8 md:p-12 relative border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 overflow-hidden">
                        {/* Background pattern */}
                        <div
                            className="absolute inset-0 opacity-5"
                            style={{
                                backgroundImage:
                                    'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
                                backgroundSize: "60px 60px",
                            }}
                        ></div>

                        <Quote className="absolute top-6 left-6 w-12 h-12 text-[#02B600]/20 z-10" />

                        <div className="text-center mb-8 relative z-10">
                            <div className="flex justify-center mb-4">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 text-[#FFEA00] fill-current" />
                                ))}
                            </div>
                            <p className="text-xl text-[#e0f7fa] italic leading-relaxed"
                                style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                "{testimonials[currentIndex].content}"
                            </p>
                        </div>

                        <div className="flex items-center justify-center gap-4 relative z-10">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#02B600]">
                                <Image
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white"
                                    style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                    {testimonials[currentIndex].name}
                                </h3>
                                <p className="text-[#FFEA00]"
                                    style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#02B600] p-2 rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 z-20"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#02B600] p-2 rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 z-20"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>

                        {/* Carousel indicators */}
                        <div className="flex justify-center mt-6 gap-2 relative z-10">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-[#FFEA00] scale-125'
                                        : 'bg-gray-600 hover:bg-[#02B600]'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Testimonials Grid */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase"
                        style={{
                            fontFamily: '"Bebas Neue", Arial, sans-serif',
                            letterSpacing: "0.05em"
                        }}>
                        More Client Feedback
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-[#252525] p-6 rounded-lg border border-gray-700 hover:border-[#FFEA00] transition-all duration-300 group cursor-pointer">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-[#02B600] transition-colors">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white group-hover:text-[#e0f7fa] transition-colors"
                                                style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-sm text-[#FFEA00] group-hover:text-[#02B600] transition-colors"
                                                style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-[#FFEA00] fill-current group-hover:text-[#02B600] transition-colors" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-[#e0f7fa] italic"
                                    style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                                    "{testimonial.content}"
                                </p>
                                <div className="mt-3 h-1 w-0 bg-[#02B600] group-hover:w-full transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-[#252525] rounded-lg p-12 text-center border border-gray-700 relative overflow-hidden">
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
                            Ready to Join Our Success Stories?
                        </h2>
                        <p className="text-xl text-[#e0f7fa] mb-8 max-w-2xl mx-auto"
                            style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}>
                            Transform your business like our satisfied clients. Let's discuss your project and create your success story.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#FFEA00] text-black px-8 py-3 font-bold uppercase tracking-wider rounded-lg hover:bg-yellow-300 transition-colors"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                                Start Your Project
                            </button>
                            <Link href="/contact">
                                <button className="border-2 border-[#FFEA00] text-[#FFEA00] px-8 py-3 font-bold uppercase tracking-wider rounded-lg hover:bg-[#FFEA00] hover:text-black transition-colors"
                                    style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                                    Contact Me
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;