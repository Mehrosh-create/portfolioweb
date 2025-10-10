'use client';

import React, { useState } from "react";
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
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const article = articles.find(a => a.slug === slug);

  // Initialize like count from article data
  React.useEffect(() => {
    if (article) {
      setLikeCount(parseInt(article.likes) || 0);
    }
  }, [article]);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section - Improved responsive padding */}
      <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0fb8af] transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-6 sm:mb-8">
            <span
              className="inline-block px-2 xs:px-3 py-1 text-xs font-bold uppercase tracking-wider rounded mb-3 sm:mb-4"
              style={{ backgroundColor: "#0fb8af", color: "#000" }}
            >
              {article.category}
            </span>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-foreground">
              {article.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8 border-b border-gray-700 pb-4 sm:pb-6">
              <div className="flex flex-wrap items-center gap-3 xs:gap-4 md:gap-6 text-gray-400 text-xs xs:text-sm mb-3 md:mb-0">
                <div className="flex items-center gap-1 xs:gap-2">
                  <Calendar className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1 xs:gap-2">
                  <Clock className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-1 xs:gap-2">
                  <button
                    onClick={handleLikeClick}
                    className="flex items-center gap-1 xs:gap-2 hover:text-red-500 transition-colors"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 xs:w-4 xs:h-4 ${isLiked
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                        }`}
                    />
                    {likeCount}
                  </button>
                </div>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 xs:gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(to bottom right, #0fb8af, #0fb8af)" }}>
                <span className="text-black font-bold text-sm xs:text-lg">
                  {article.author ? article.author.charAt(0) : "A"}
                </span>
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm xs:text-base">By {article.author || "Unknown Author"}</p>
                <p className="text-gray-400 text-xs xs:text-sm">Digital Transformation Expert</p>
              </div>
            </div>
          </div>

          {/* Featured Image - FIXED: Shows complete image without cropping */}
          <div className="relative w-full h-auto min-h-[200px] xs:min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] mb-8 sm:mb-10 md:mb-12 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
            <div className="relative w-full h-full max-w-4xl mx-auto">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={450}
                className="w-full h-full object-contain"
                priority
                sizes="(max-width: 320px) 100vw, (max-width: 375px) 100vw, (max-width: 425px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1440px) 100vw, 1200px"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          {/* Article Content */}
          <div className="max-w-none">
            <div className="text-base xs:text-lg sm:text-xl text-gray-light mb-6 sm:mb-8 font-medium leading-relaxed">
              {article.excerpt}
            </div>

            {article.contents && article.contents.length > 0 ? (
              article.contents.map((paragraph, idx) => (
                <p key={idx} className="text-gray-light text-sm xs:text-base sm:text-lg leading-relaxed mb-4 xs:mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-gray-light text-sm xs:text-base sm:text-lg leading-relaxed mb-4 xs:mb-6">
                Content coming soon...
              </p>
            )}
          </div>

          {/* Article Footer */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <button
                    onClick={handleLikeClick}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:border-[#0fb8af] transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${isLiked
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                        }`}
                    />
                    <span className="text-sm">{likeCount}</span>
                  </button>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 xs:px-6 py-2 xs:py-3 text-xs xs:text-sm font-bold uppercase tracking-wider transition-colors rounded"
                style={{ backgroundColor: "#0fb8af", color: "#000" }}
              >
                <ArrowLeft className="w-3.5 h-3.5 xs:w-4 xs:h-4" /> Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticlePage;