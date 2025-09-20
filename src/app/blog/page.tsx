'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Bookmark, Share2, Heart, MessageCircle } from "lucide-react";

// Article data moved inline
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
    title: "Emerging Tech Trends Shaping the Future",
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
    title: "Growth Strategies for Startups in 2025",
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

const categories = ["ALL", "DIGITAL TRANSFORMATION", "CRM SYSTEMS", "LEADERSHIP", "AUTOMATION", "TECHNOLOGY", "BUSINESS STRATEGY"];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredArticles = selectedCategory === "ALL"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const featuredPost = articles[0]; // First article as featured

  return (
    <div className="min-h-screen bg-[#151515] text-white">
      {/* Featured Article */}
      <div className="py-20 px-40">
        <div className="max-w-7xl mx-auto lg:mr-8">
          <div className="p-1 rounded-lg mb-12" style={{ background: "linear-gradient(to right, #FFEA00, #FFEA00)" }}>
            <div className="bg-[#151515] rounded-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase rounded"
                    style={{ backgroundColor: "#FFEA00", color: "#000" }}>
                    FEATURED
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span
                    className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4"
                    style={{ backgroundColor: "#FFEA00", color: "#000" }}
                  >
                    {featuredPost.category}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-8 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredPost.date}</div>
                      <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredPost.readTime}</div>
                    </div>
                    <div className="flex gap-3">
                      <Bookmark className="w-5 h-5 text-gray-400 hover:text-[#FFEA00] transition-colors" />
                      <Share2 className="w-5 h-5 text-gray-400 hover:text-[#FFEA00] transition-colors" />
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="px-6 py-3 font-bold uppercase tracking-wider transition-colors flex items-center gap-2 w-max"
                    style={{ backgroundColor: "#FFEA00", color: "#000" }}
                  >
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-4 py-2 border text-sm font-semibold transition-colors"
              style={{
                backgroundColor: selectedCategory === category ? "#FFEA00" : "transparent",
                color: selectedCategory === category ? "#000" : "#D1D5DB",
                borderColor: selectedCategory === category ? "#FFEA00" : "#4B5563"
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.backgroundColor = "#FFEA00";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.borderColor = "#FFEA00";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#D1D5DB";
                  e.currentTarget.style.borderColor = "#4B5563";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group cursor-pointer">
              <div
                className="bg-[#151515] border overflow-hidden transition-all duration-300 hover:scale-105"
                style={{ borderColor: "#1F2937" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#FFEA00")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1F2937")}
              >
                <div className="relative h-100 flex items-center justify-center">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
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
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 line-clamp-2 transition-colors"
                    style={{ color: "white" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFEA00")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1"><Heart className="w-3 h-3" /> {post.likes}</div>
                      <div className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {post.comments}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;