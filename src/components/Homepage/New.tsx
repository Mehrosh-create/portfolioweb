"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  CheckCircle,
  Users,
  TrendingUp,
  Lightbulb,
  BarChart,
  Activity,
  Layers,
  Network,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import GravWrap from "@/components/Common/GravWrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/contexts/ThemeContext";

// 👇 Reusable fade+slide wrapper
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
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// 👇 Reusable sliding highlight label
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
        className="relative z-10 text-black font-bold tracking-wider uppercase whitespace-nowrap px-3 sm:px-4 py-1 sm:py-2 inline-block text-sm sm:text-base"
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

const NewPage: React.FC = () => {
  const { theme } = useTheme();
  const services = [
    {
      title: "Digital Transformation",
      description:
        "Complete digital overhaul services to modernize your business operations and implement cutting-edge automation solutions.",
      icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/images/digital-transformation.jpg",
    },
    {
      title: "CRM Systems Implementation",
      description:
        "End-to-end CRM solutions tailored to your business needs, from selection to implementation and training.",
      icon: <Network className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/images/crm-implementation.jpg",
    },
    {
      title: "Project & Operations Management",
      description:
        "Streamline your operations with expert project management methodologies and operational efficiency improvements.",
      icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/images/project-management.jpg",
    },
    {
      title: "Growth Marketing",
      description:
        "Data-driven marketing strategies and sales funnel optimization to accelerate your business growth.",
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/images/growth-marketing.jpg",
    },
    {
      title: "Brand Building",
      description:
        "Develop a powerful brand identity and strategic market positioning to stand out from competitors.",
      icon: <BarChart className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/images/brand-building.jpg",
    },
    {
      title: "Client Success",
      description:
        "Enhance customer satisfaction and retention through optimized client experience strategies.",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/images/client-experience.jpg",
    },
    {
      title: "Business Strategy & Consulting",
      description:
        "Comprehensive business consulting services to develop strategies for long-term success and scalability.",
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/images/business-strategy.jpg",
    },
    {
      title: "AI & Data Analytics",
      description:
        "Leverage artificial intelligence and advanced analytics to gain actionable insights and drive smarter business decisions.",
      icon: <BarChart className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/images/ai-analytics.jpg",
    },
    {
      title: "Cloud Solutions & Infrastructure",
      description:
        "Implement scalable cloud systems and infrastructure management to ensure security, flexibility, and performance.",
      icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8" />,
      image: "/images/cloud-solutions.jpg",
    },
  ];

  const latestUpdates = [
    {
      id: 1,
      title: "Digital Transformation Masterclass",
      description:
        "Complete 12-week program covering advanced digital transformation strategies that scale businesses",
      category: "COURSE LAUNCH",
      date: "March 20, 2025",
      status: "NEW",
      type: "course",
      price: "$1,997",
      features: [
        "12 Live Sessions",
        "Private Community",
        "Templates & Tools",
        "1-on-1 Support",
      ],
      image: "/images/digital-masterclass.jpg",
    },
    {
      id: 2,
      title: "CRM Implementation Toolkit 3.0",
      description:
        "Polarised toolkit with 50+ templates, frameworks, and automation scripts for complete CRM transformation",
      category: "RESOURCE UPDATE",
      date: "March 15, 2025",
      status: "UPDATED",
      type: "toolkit",
      price: "FREE",
      features: [
        "50+ Templates",
        "Process Frameworks",
        "Automation Scripts",
        "Video Tutorials",
      ],
      image: "/images/crmm-toolkit.jpg",
    },
    {
      id: 3,
      title: "Growth Marketing Accelerator Program",
      description:
        "6-month intensive program to master growth marketing and funnel optimization strategies",
      category: "PROGRAM LAUNCH",
      date: "March 10, 2025",
      status: "LAUNCHING SOON",
      type: "program",
      price: "$4,997",
      features: [
        "6 Months Coaching",
        "Weekly Group Calls",
        "Done-with-You Funnels",
        "Marketing Automation",
      ],
      image: "/images/growth-accelerator.jpg",
    },
  ];

  const [visible, setVisible] = useState(1); // Start with only first item

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Services Section */}
      <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <SlidingHighlight text="SPECIALIZATIONS" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black uppercase text-foreground mb-3 md:mb-4 lg:mb-6 leading-tight">
              MY <span className="text-[#0fb8af]">EXPERTISE</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-light max-w-2xl lg:max-w-3xl mx-auto px-2 md:px-4">
              With over 7 years of experience, I specialize in transforming
              businesses through digital innovation and strategic growth
            </p>
          </div>

          {/* Services grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.25 } },
            }}
          >
            {services.map((service, index) => (
              <FadeSlide key={index} delay={index * 0.15}>
                <GravWrap>
                  <div className="bg-gray-dark border border-gray-800 rounded-xl overflow-hidden hover:border-[#0fb8af] transition-colors group cursor-pointer h-full flex flex-col">
                    {/* Image container - adjusted to fit container without cropping */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      {/* Hover overlay with icon */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-[#0fb8af] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-light text-sm sm:text-base flex-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </GravWrap>
              </FadeSlide>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Latest Launches Section */}
      <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <SlidingHighlight text="LATEST LAUNCHES" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight text-foreground">
              NEW <span className="text-[#0fb8af]">RELEASES</span>
            </h2>
          </div>

          {/* Updates list */}
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {latestUpdates.slice(0, visible).map((update, index) => (
              <FadeSlide key={update.id} delay={index * 0.25} direction="up">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-start">
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                      <Image
                        src={update.image}
                        alt={update.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 flex flex-col h-full">
                    {/* Category Badge - STYLED LIKE LATEST LAUNCHES */}
                    <div className="relative inline-block mb-3 md:mb-4 overflow-hidden">
                      <span className="absolute top-0 left-0 h-30 w-30 bg-[#0fb8af]"></span>
                      <span
                        className="relative z-10 text-black font-bold tracking-wider uppercase whitespace-nowrap px-3 py-1 inline-block text-xs"
                        style={{
                          fontFamily: '"Bebas Neue", sans-serif',
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {update.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 md:mb-4 leading-tight text-foreground">
                      {update.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 md:mb-5 lg:mb-6 text-sm md:text-base text-gray-light leading-relaxed flex-1">
                      {update.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-5 lg:mb-6">
                      {update.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 md:gap-3">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#0fb8af] flex-shrink-0" />
                          <span className="text-xs md:text-sm text-foreground leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price and Date */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4 mb-4 md:mb-5 lg:mb-6">
                      <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-[#0fb8af]">
                        {update.price}
                      </div>
                      <div className="text-xs md:text-sm flex items-center gap-2 text-gray-light">
                        <Calendar className="w-4 h-4" />
                        <span className="whitespace-nowrap">{update.date}</span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      <Link
                        href={`/learnmore/${update.id}`}
                        className="border-2 border-[#0fb8af] text-[#0fb8af] px-4 md:px-5 lg:px-6 py-2 md:py-3 uppercase transition-all duration-300 transform hover:scale-105 hover:bg-[#0fb8af] hover:text-black text-xs md:text-sm text-center font-semibold whitespace-nowrap flex items-center justify-center gap-2"
                        style={{
                          letterSpacing: "0.08em",
                        }}
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeSlide>
            ))}
          </div>

          {/* Load More Button */}
          {visible < latestUpdates.length && (
            <div className="text-center mt-8 md:mt-12 lg:mt-16">
              <button
                onClick={() => setVisible(latestUpdates.length)}
                className="px-6 md:px-8 py-2 md:py-3 lg:py-4 bg-[#0fb8af] text-black uppercase transition-all duration-300 transform hover:scale-105 text-xs md:text-sm font-semibold"
                style={{
                  letterSpacing: "0.08em",
                }}
              >
                <strong>Load More</strong>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewPage;