'use client';

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Heart, MessageCircle, ArrowLeft, Bookmark, Share2 } from "lucide-react";

// Article data moved inline (same as the articles.ts file)
const articles = [
  // DIGITAL TRANSFORMATION
  {
    slug: "rise-of-digital-transformation",
    title: "Sheikh Nabeel on the Rise of Digital Transformation",
    category: "DIGITAL TRANSFORMATION",
    readTime: "8 min read",
    date: "March 15, 2025",
    image: "/images/featured-post.jpg",
    author: "Sheikh Nabeel",
    likes: "892",
    comments: "156",
    excerpt: "Digital transformation is reshaping industries globally with AI, automation, and innovation.",
    contents: [
      "Digital transformation is reshaping industries globally with AI, automation, and innovation.",
      "Businesses leveraging digital strategies are seeing unprecedented growth and efficiency.",
      "The future of commerce is digital-first, and organizations must adapt quickly."
    ]
  },
  {
    slug: "ai-in-digital-transformation",
    title: "AI in Digital Transformation: The Game Changer",
    category: "DIGITAL TRANSFORMATION",
    readTime: "7 min read",
    date: "March 14, 2025",
    image: "/images/ai-digital.jpg",
    author: "Emily White",
    likes: "540",
    comments: "92",
    excerpt: "AI is now integral to digital transformation strategies across sectors.",
    contents: [
      "AI is now integral to digital transformation strategies across sectors.",
      "Smart automation tools are enabling businesses to optimize operations.",
      "Data-driven decision making is at the heart of modern digital initiatives."
    ]
  },

  // CRM SYSTEMS
  {
    slug: "future-of-crm-systems",
    title: "The Future of CRM Systems in Global Markets",
    category: "CRM SYSTEMS",
    readTime: "6 min read",
    date: "March 12, 2025",
    image: "/images/crm-future.jpg",
    author: "Jane Doe",
    likes: "443",
    comments: "89",
    excerpt: "CRM systems are becoming more intelligent with AI-driven insights.",
    contents: [
      "CRM systems are becoming more intelligent with AI-driven insights.",
      "Companies are optimizing customer experiences through data-driven CRM solutions.",
      "The future of CRM integrates automation, personalization, and analytics seamlessly."
    ]
  },
  {
    slug: "crm-automation-benefits",
    title: "Benefits of Automation in CRM Systems",
    category: "CRM SYSTEMS",
    readTime: "5 min read",
    date: "March 11, 2025",
    image: "/images/crm-automation.jpg",
    author: "Michael Brown",
    likes: "376",
    comments: "47",
    excerpt: "Automation enhances efficiency and satisfaction in CRM.",
    contents: [
      "Automation improves response times and customer satisfaction in CRM.",
      "Sales teams can focus on high-value interactions rather than repetitive tasks.",
      "AI-based automation enhances lead scoring and follow-up efficiency."
    ]
  },

  // LEADERSHIP
  {
    slug: "authentic-leadership-digital",
    title: "Building Authentic Leadership in Digital Organizations",
    category: "LEADERSHIP",
    readTime: "5 min read",
    date: "March 10, 2025",
    image: "/images/digital-leadership.jpg",
    author: "John Smith",
    likes: "678",
    comments: "124",
    excerpt: "Leadership in the digital age requires adaptability and empathy.",
    contents: [
      "Leadership in the digital age requires adaptability and empathy.",
      "Digital leaders inspire teams through transparency and trust.",
      "Balancing technology adoption with human values is key to authentic leadership."
    ]
  },
  {
    slug: "leadership-strategies-for-remote-teams",
    title: "Leadership Strategies for Remote Teams",
    category: "LEADERSHIP",
    readTime: "6 min read",
    date: "March 9, 2025",
    image: "/images/remote-leadership.jpg",
    author: "Sarah Lee",
    likes: "512",
    comments: "85",
    excerpt: "Remote leadership emphasizes communication and clarity.",
    contents: [
      "Remote leadership emphasizes communication and clarity.",
      "Trust and accountability are vital for high-performing remote teams.",
      "Digital collaboration tools make leadership more effective across distances."
    ]
  },

  // AUTOMATION
  {
    slug: "automation-business-transformation",
    title: "Automation: Beyond Efficiency to Business Transformation",
    category: "AUTOMATION",
    readTime: "7 min read",
    date: "March 8, 2025",
    image: "/images/automation.jpg",
    author: "David Clark",
    likes: "521",
    comments: "97",
    excerpt: "Automation drives efficiency and creates new business opportunities.",
    contents: [
      "Automation drives efficiency and creates new business opportunities.",
      "Companies use automation to streamline repetitive processes and reduce errors.",
      "Integrating automation with AI enables smarter workflows and better insights."
    ]
  },
  {
    slug: "robotic-process-automation",
    title: "Robotic Process Automation in Modern Enterprises",
    category: "AUTOMATION",
    readTime: "6 min read",
    date: "March 7, 2025",
    image: "/images/rpa.jpg",
    author: "Laura Adams",
    likes: "398",
    comments: "56",
    excerpt: "RPA tools reduce manual effort and improve consistency across operations.",
    contents: [
      "RPA tools reduce manual effort and improve consistency across operations.",
      "Enterprises adopt RPA for finance, HR, and supply chain processes.",
      "RPA combined with AI analytics maximizes operational performance."
    ]
  },

  // TECHNOLOGY
  {
    slug: "technology-ethics-business",
    title: "Technology Ethics Through Business Lens",
    category: "TECHNOLOGY",
    readTime: "9 min read",
    date: "March 5, 2025",
    image: "/images/tech.jpg",
    author: "Olivia Green",
    likes: "634",
    comments: "108",
    excerpt: "Ethical considerations are critical in AI and blockchain adoption.",
    contents: [
      "Ethical considerations are critical in AI and blockchain adoption.",
      "Businesses must balance innovation with responsibility and transparency.",
      "Technology ethics ensures trust and sustainable growth in organizations."
    ]
  },
  {
    slug: "emerging-tech-trends",
    title: "Emerging Tech Trends Shaping  Future",
    category: "TECHNOLOGY",
    readTime: "8 min read",
    date: "March 4, 2025",
    image: "/images/emerging-tech.jpg",
    author: "Henry Wilson",
    likes: "512",
    comments: "76",
    excerpt: "AI, IoT, and blockchain are transforming business landscapes.",
    contents: [
      "AI, IoT, and blockchain are transforming business landscapes.",
      "Staying ahead of tech trends is crucial for competitive advantage.",
      "Innovation-driven companies are embracing sustainable technologies."
    ]
  },

  // BUSINESS STRATEGY
  {
    slug: "digital-business-strategy",
    title: "Business Building in the Digital Age",
    category: "BUSINESS STRATEGY",
    readTime: "4 min read",
    date: "March 3, 2025",
    image: "/images/digital-business.jpg",
    author: "William Turner",
    likes: "389",
    comments: "72",
    excerpt: "Digital platforms enable new ways of engaging with customers.",
    contents: [
      "Digital platforms enable new ways of engaging with customers.",
      "Businesses are building stronger brands through online presence.",
      "Strategic adoption of digital tools drives growth and sustainability."
    ]
  },
  {
    slug: "growth-strategies-for-startups",
    title: "Growth Strategies for Startups ",
    category: "BUSINESS STRATEGY",
    readTime: "5 min read",
    date: "March 2, 2025",
    image: "/images/startup-growth.jpg",
    author: "Sophia Martinez",
    likes: "421",
    comments: "68",
    excerpt: "Startups must focus on product-market fit and scalability.",
    contents: [
      "Startups must focus on product-market fit and scalability.",
      "Leveraging digital marketing accelerates growth in competitive markets.",
      "Data-driven decision making is key to startup success."
    ]
  }
];

const BlogArticlePage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#151515] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article not found</h1>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wider transition-colors"
            style={{ backgroundColor: "#0fb8af", color: "#000" }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#151515] text-white">
      {/* Header Section */}
      <div className="py-20 px-6 md:px-40">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0fb8af] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <span
              className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded mb-4"
              style={{ backgroundColor: "#0fb8af", color: "#000" }}
            >
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 border-b border-gray-700 pb-6">
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-400 text-sm mb-4 md:mb-0">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  {article.likes}
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  {article.comments}
                </div>
              </div>
              <div className="flex gap-3">
                <button className="w-5 h-5 text-gray-400 hover:text-[#0fb8af] transition-colors cursor-pointer">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="w-5 h-5 text-gray-400 hover:text-[#0fb8af] transition-colors cursor-pointer">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(to bottom right, #0fb8af, #0fb8af)" }}>
                <span className="text-black font-bold text-lg">
                  {article.author ? article.author.charAt(0) : "A"}
                </span>
              </div>
              <div>
                <p className="text-white font-semibold">By {article.author || "Unknown Author"}</p>
                <p className="text-gray-400 text-sm">Digital Transformation Expert</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 lg:h-[500px] mb-12 rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Article Content */}
          <div className="max-w-none">
            <div className="text-lg md:text-xl text-gray-300 mb-8 font-medium leading-relaxed">
              {article.excerpt}
            </div>

            {article.contents && article.contents.length > 0 ? (
              article.contents.map((paragraph, idx) => (
                <p key={idx} className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Content coming soon...
              </p>
            )}
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-400">Share this article:</span>
                <div className="flex gap-3">
                  <button className="p-2 border border-gray-600 rounded hover:border-[#0fb8af] hover:text-[#0fb8af] transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 border border-gray-600 rounded hover:border-[#0fb8af] hover:text-[#0fb8af] transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wider transition-colors"
                style={{ backgroundColor: "#0fb8af", color: "#000" }}
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticlePage;