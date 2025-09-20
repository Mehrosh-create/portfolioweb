"use client";

import React from "react";
import { Calendar, ArrowRight, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// 👇 Fade + slide animation wrapper
const FadeSlide = ({
    children,
    delay = 0,
    direction = "up",
}: {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: { opacity: 1, x: 0, y: 0 },
    };
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

// 👇 Sliding highlight label
const SlidingHighlight = ({ text }: { text: string }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div
            ref={ref}
            className="relative inline-block mx-auto mb-6 overflow-hidden"
        >
            <span
                className={`absolute top-0 left-0 h-full w-0 bg-[#FFEA00] transition-all duration-700 ease-out ${inView ? "w-full" : "w-0"
                    }`}
            ></span>
            <span
                className="relative z-10 text-black font-bold tracking-wider uppercase whitespace-nowrap px-6 py-3 inline-block"
                style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    letterSpacing: "0.08em",
                }}
            >
                {text}
            </span>
        </div>
    );
};

const Blog = () => {
    const featuredArticles = [
        {
            slug: "rise-of-digital-transformation",
            title: "Sheikh Nabeel on the Rise of Digital Transformation",
            category: "DIGITAL TRANSFORMATION",
            readTime: "8 min read",
            date: "March 15, 2025",
            image: "/images/featured-post.jpg",
            likes: "892",
            comments: "156",
            excerpt:
                "Digital transformation is reshaping industries globally with AI, automation, and innovation.",
        },
        {
            slug: "future-of-crm-systems",
            title: "The Future of CRM Systems in Global Markets",
            category: "CRM SYSTEMS",
            readTime: "6 min read",
            date: "March 12, 2025",
            image: "/images/crm-future.jpg",
            likes: "443",
            comments: "89",
            excerpt:
                "CRM systems are becoming more intelligent with AI-driven insights.",
        },
        {
            slug: "authentic-leadership-digital",
            title: "Building Authentic Leadership in Digital Organizations",
            category: "LEADERSHIP",
            readTime: "5 min read",
            date: "March 10, 2025",
            image: "/images/digital-leadership.jpg",
            likes: "678",
            comments: "124",
            excerpt:
                "Leadership in the digital age requires adaptability and empathy.",
        },
    ];

    return (
        <section className="py-20 px-6 bg-[#151515] text-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <SlidingHighlight text="LATEST INSIGHTS" />
                    <FadeSlide delay={0.1}>
                        <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-6">
                            STAY <span className="text-[#FFEA00]">UPDATED</span>
                        </h2>
                    </FadeSlide>
                    <FadeSlide delay={0.2}>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Explore expert perspectives on digital transformation, leadership,
                            CRM systems, and business innovation shaping the future.
                        </p>
                    </FadeSlide>
                </div>

                {/* Featured Articles Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {featuredArticles.map((article, index) => (
                        <FadeSlide key={article.slug} delay={index * 0.2}>
                            <Link
                                href={`/blog/${article.slug}`}
                                className="group cursor-pointer"
                            >
                                <div
                                    className="bg-[#151515] border overflow-hidden transition-all duration-300 hover:scale-105"
                                    style={{ borderColor: "#1F2937" }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.borderColor = "#FFEA00")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.borderColor = "#1F2937")
                                    }
                                >
                                    <div className="relative h-56 md:h-64 lg:h-72">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             33vw"
                                        />
                                        <div
                                            className="absolute top-3 left-3 px-2 py-1 text-xs font-bold uppercase rounded"
                                            style={{ backgroundColor: "#FFEA00", color: "#000" }}
                                        >
                                            NEW
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span
                                                className="px-2 py-1 text-xs font-bold uppercase rounded"
                                                style={{ backgroundColor: "#FFEA00", color: "#000" }}
                                            >
                                                {article.category}
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <h3
                                            className="text-xl font-bold mb-3 line-clamp-2 transition-colors"
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.color = "#FFEA00")
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.color = "white")
                                            }
                                        >
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" /> {article.date}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1">
                                                    <Heart className="w-3 h-3" /> {article.likes}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MessageCircle className="w-3 h-3" />{" "}
                                                    {article.comments}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </FadeSlide>
                    ))}
                </motion.div>

                {/* View All Button */}
                <FadeSlide delay={0.5}>
                    <div className="text-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wider transition-colors"
                            style={{ backgroundColor: "#FFEA00", color: "#000" }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor = "#FFD700")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor = "#FFEA00")
                            }
                        >
                            View All Articles <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </FadeSlide>
            </div>
        </section>
    );
};

export default Blog;
