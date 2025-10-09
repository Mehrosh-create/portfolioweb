"use client";

import React, { useState } from "react";
import { Calendar, ArrowRight, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { blogArticles } from "@/data/blogArticles";
import { useTheme } from "@/contexts/ThemeContext";

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
            className="relative inline-block mx-auto mb-4 sm:mb-6 overflow-hidden"
        >
            <span
                className={`absolute top-0 left-0 h-full w-0 bg-[#0fb8af] transition-all duration-700 ease-out ${inView ? "w-full" : "w-0"
                    }`}
            ></span>
            <span
                className="relative z-10 text-black font-bold tracking-wider uppercase whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 inline-block text-sm sm:text-base md:text-lg"
                style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                }}
            >
                {text}
            </span>
        </div>
    );
};

const Blog = () => {
    const featuredArticles = blogArticles;
    const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
    const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>(() => {
        const initialCounts: { [key: string]: number } = {};
        blogArticles.forEach(article => {
            initialCounts[article.slug] = parseInt(article.likes) || 0;
        });
        return initialCounts;
    });

    const handleLikeClick = (slug: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const newLikedPosts = new Set(likedPosts);
        const isCurrentlyLiked = newLikedPosts.has(slug);

        if (isCurrentlyLiked) {
            newLikedPosts.delete(slug);
            setLikeCounts(prev => ({
                ...prev,
                [slug]: prev[slug] - 1
            }));
        } else {
            newLikedPosts.add(slug);
            setLikeCounts(prev => ({
                ...prev,
                [slug]: prev[slug] + 1
            }));
        }
        setLikedPosts(newLikedPosts);
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <SlidingHighlight text="LATEST INSIGHTS" />
                    <FadeSlide delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase text-foreground mb-4 sm:mb-6 leading-tight">
                            STAY <span className="text-[#0fb8af]">UPDATED</span>
                        </h2>
                    </FadeSlide>
                    <FadeSlide delay={0.2}>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-light max-w-3xl mx-auto px-4">
                            Explore expert perspectives on digital transformation, leadership,
                            CRM systems, and business innovation shaping the future.
                        </p>
                    </FadeSlide>
                </div>

                {/* Featured Articles Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
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
                                className="group cursor-pointer block"
                            >
                                <div
                                    className="bg-background border overflow-hidden transition-all duration-300 hover:scale-105 h-full flex flex-col"
                                    style={{ borderColor: "#1F2937" }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.borderColor = "#0fb8af")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.borderColor = "#1F2937")
                                    }
                                >
                                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        />
                                        <div
                                            className="absolute top-3 left-3 px-2 py-1 text-xs font-bold uppercase rounded"
                                            style={{ backgroundColor: "#0fb8af", color: "#000" }}
                                        >
                                            NEW
                                        </div>
                                    </div>
                                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap">
                                            <span
                                                className="px-2 py-1 text-xs font-bold uppercase rounded"
                                                style={{ backgroundColor: "#0fb8af", color: "#000" }}
                                            >
                                                {article.category}
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <h3
                                            className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2 transition-colors flex-1 text-foreground"
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.color = "#0fb8af")
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.color = "var(--foreground)")
                                            }
                                        >
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-light text-sm mb-3 sm:mb-4 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                <span className="hidden sm:inline">{article.date}</span>
                                                <span className="sm:hidden">{article.date.split(' ')[0]}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={(e) => handleLikeClick(article.slug, e)}
                                                    className="flex items-center gap-1"
                                                >
                                                    <Heart
                                                        className={`w-3 h-3 ${likedPosts.has(article.slug)
                                                            ? 'fill-red-500 text-red-500'
                                                            : 'text-gray-500'
                                                            }`}
                                                    />
                                                    {likeCounts[article.slug]}
                                                </button>
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
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-wider transition-colors text-sm sm:text-base"
                            style={{ backgroundColor: "#0fb8af", color: "#000" }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor = "#00b89f")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor = "#0fb8af")
                            }
                        >
                            View All Articles <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                    </div>
                </FadeSlide>
            </div>
        </section>
    );
};

export default Blog;