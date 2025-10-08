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
    <div className="min-h-screen bg-background dark:bg-white text-foreground dark:text-black">
      {/* Services Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <SlidingHighlight text="SPECIALIZATIONS" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-foreground dark:text-black mb-4 sm:mb-6 leading-tight">
              MY <span className="text-[#0fb8af]">EXPERTISE</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-light dark:text-gray-700 max-w-3xl mx-auto px-4">
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
                  <div className="bg-gray-dark dark:bg-gray-100 border border-gray-800 dark:border-gray-300 rounded-xl overflow-hidden hover:border-[#0fb8af] transition-colors group cursor-pointer h-full flex flex-col">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground dark:text-black group-hover:text-[#0fb8af] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-light dark:text-gray-700 text-sm sm:text-base flex-1">
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

      {/* Latest Launches - Changed to solid white background */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SlidingHighlight text="LATEST LAUNCHES" />

            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-black">
              NEW <span className="text-[#0fb8af]">RELEASES</span>
            </h2>
          </div>

          {/* Updates list */}
          <div className="space-y-16">
            {latestUpdates.slice(0, visible).map((update, index) => (
              <FadeSlide key={update.id} delay={index * 0.25} direction="up">
                <div
                  className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* Image */}
                  <div className="lg:flex-1 w-full">
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                      <Image
                        src={update.image}
                        alt={update.title}
                        fill
                        className="object-cover"
                      />
                      <div
                        className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold uppercase"
                        style={{
                          backgroundColor: "#0fb8af",
                          color: "black",
                        }}
                      >
                        {update.status}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:flex-1">
                    <div
                      className="inline-block px-2 py-1 mb-3 text-xs font-bold uppercase"
                      style={{
                        backgroundColor: "#0fb8af",
                        color: "black",
                      }}
                    >
                      {update.category}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight text-black">
                      {update.title}
                    </h3>

                    <p className="text-gray-700 mb-6 text-base">
                      {update.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {update.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#0fb8af] flex-shrink-0" />
                          <span className="text-sm text-black">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-6 gap-3">
                      <div className="text-2xl lg:text-3xl font-black text-[#0fb8af]">
                        {update.price}
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {update.date}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href={`/learnmore/${update.id}`}
                        className="border-2 border-[#0fb8af] text-[#0fb8af] px-5 py-3 uppercase transition-all duration-300 transform hover:scale-105 text-sm text-center font-semibold"
                        style={{
                          letterSpacing: "0.08em",
                        }}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeSlide>
            ))}
          </div>

          {/* Load More */}
          {visible < latestUpdates.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisible((prev) => prev + 1)}
                className="px-6 py-3 bg-[#0fb8af] text-black uppercase transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
                style={{
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