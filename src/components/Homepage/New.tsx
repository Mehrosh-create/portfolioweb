"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Play,
  Users,
  TrendingUp,
  Lightbulb,
  BarChart,
  Activity,
  Layers,
  Network,
} from "lucide-react";
import Image from "next/image";
import GravWrap from "@/components/Common/GravWrap";
import { motion } from "framer-motion";
import ParallaxWrapper from "@/components/Common/ParallaxWrapper";
import { useInView } from "react-intersection-observer";

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
      className="relative inline-block mx-auto mb-6 overflow-hidden"
    >
      <span
        className={`absolute top-0 left-0 h-full w-0 bg-[#FFEA00] transition-all duration-700 ease-out ${inView ? "w-full" : "w-0"
          }`}
      ></span>

      <span
        className="relative z-10 text-black font-bold tracking-wider uppercase whitespace-nowrap px-4 sm:px-6 py-2 sm:py-3 inline-block"
        style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontWeight: 700,
          fontSize: "1.2rem",
          letterSpacing: "0.08em",
        }}
      >
        {text}
      </span>
    </div>
  );
};

const NewPage: React.FC = () => {
  const services = [
    {
      title: "Digital Transformation & Automation",
      description:
        "Complete digital overhaul services to modernize your business operations and implement cutting-edge automation solutions.",
      icon: <Layers className="w-8 h-8" />,
      image: "/images/digital-transformation.jpg",
    },
    {
      title: "CRM Systems Implementation",
      description:
        "End-to-end CRM solutions tailored to your business needs, from selection to implementation and training.",
      icon: <Network className="w-8 h-8" />,
      image: "/images/crm-implementation.jpg",
    },
    {
      title: "Project & Operations Management",
      description:
        "Streamline your operations with expert project management methodologies and operational efficiency improvements.",
      icon: <Activity className="w-8 h-8" />,
      image: "/images/project-management.jpg",
    },
    {
      title: "Growth Marketing & Funnel Strategy",
      description:
        "Data-driven marketing strategies and sales funnel optimization to accelerate your business growth.",
      icon: <TrendingUp className="w-8 h-8" />,
      image: "/images/growth-marketing.jpg",
    },
    {
      title: "Brand Building & Market Positioning",
      description:
        "Develop a powerful brand identity and strategic market positioning to stand out from competitors.",
      icon: <BarChart className="w-8 h-8" />,
      image: "/images/brand-building.jpg",
    },
    {
      title: "Client Experience & Account Management",
      description:
        "Enhance customer satisfaction and retention through optimized client experience strategies.",
      icon: <Users className="w-8 h-8" />,
      image: "/images/client-experience.jpg",
    },
    {
      title: "Business Strategy & Consulting",
      description:
        "Comprehensive business consulting services to develop strategies for long-term success and scalability.",
      icon: <Lightbulb className="w-8 h-8" />,
      image: "/images/business-strategy.jpg",
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
        "Updated toolkit with 50+ templates, frameworks, and automation scripts for complete CRM transformation",
      category: "RESOURCE UPDATE",
      date: "March 15, 2025",
      status: "UPDATED",
      type: "toolkit",
      price: "FREE",
      features: [
        "50+ Templates",
        "Automation Scripts",
        "Process Frameworks",
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

  const [visible, setVisible] = useState(2);

  return (
    <div className="min-h-screen bg-[#151515] text-white">
      {/* Services Section */}
      <div className="py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SlidingHighlight text="SPECIALIZATIONS" />

            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-6">
              MY <span className="text-[#FFEA00]">EXPERTISE</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              With over 7 years of experience, I specialize in transforming
              businesses through digital innovation and strategic growth
            </p>
          </div>

          {/* Services grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <ParallaxWrapper strength={40}>
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#FFEA00] transition-colors group">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-[#FFEA00] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </ParallaxWrapper>
              </FadeSlide>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Latest Launches */}
      <div className="py-20 px-4 sm:px-8 lg:px-12 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SlidingHighlight text="LATEST LAUNCHES" />

            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-6">
              NEW <span className="text-[#FFEA00]">RELEASES</span>
            </h2>
          </div>

          {/* Updates list */}
          <div className="space-y-20">
            {latestUpdates.slice(0, visible).map((update, index) => (
              <FadeSlide key={index} delay={index * 0.25} direction="up">
                <div
                  className={`grid gap-10 items-center lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                      <GravWrap strength={40}>
                        <Image
                          src={update.image}
                          alt={update.title}
                          fill
                          className="object-cover"
                        />
                      </GravWrap>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                      </div>
                      {/* Status */}
                      <div
                        className="absolute top-3 left-3 px-2 py-1 rounded text-xs sm:text-sm"
                        style={{
                          backgroundColor: "#FFEA00",
                          fontFamily: '"Bebas Neue", sans-serif',
                          fontWeight: 700,
                          color: "black",
                          textTransform: "uppercase",
                        }}
                      >
                        {update.status}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div
                      className="inline-block px-2 py-1 mb-3 text-xs sm:text-sm"
                      style={{
                        backgroundColor: "#FFEA00",
                        fontFamily: '"Bebas Neue", sans-serif',
                        fontWeight: 700,
                        color: "black",
                        textTransform: "uppercase",
                      }}
                    >
                      {update.category}
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      {update.title}
                    </h3>

                    <p className="text-gray-300 mb-6 text-base sm:text-lg">
                      {update.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {update.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#FFEA00] flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                      <div className="text-2xl sm:text-3xl font-black text-[#FFEA00]">
                        {update.price}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {update.date}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        className="bg-[#FFEA00] text-black px-5 py-2 sm:px-6 sm:py-3 uppercase transition-all duration-300 flex items-center gap-2 transform hover:scale-105 text-sm sm:text-base"
                        style={{
                          fontFamily: '"Bebas Neue", sans-serif',
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {update.type === "course"
                          ? "Enroll Now"
                          : update.type === "toolkit"
                            ? "Download"
                            : "Join Program"}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        className="border-2 border-[#FFEA00] text-[#FFEA00] px-5 py-2 sm:px-6 sm:py-3 uppercase transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                        style={{
                          fontFamily: '"Bebas Neue", sans-serif',
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </FadeSlide>
            ))}
          </div>

          {/* Load More */}
          {visible < latestUpdates.length && (
            <div className="text-center mt-14">
              <button
                onClick={() => setVisible((prev) => prev + 1)}
                className="px-5 py-2 sm:px-6 sm:py-3 bg-[#FFEA00] text-black uppercase transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewPage;
