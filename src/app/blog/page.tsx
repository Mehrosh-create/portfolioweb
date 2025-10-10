'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Heart } from "lucide-react";

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
    excerpt: "Digital transformation is reshaping industries globally with AI.",
    contents: [
      "Digital transformation is reshaping industries globally with AI.",
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
    excerpt: "Automation in CRM enhances efficiency while driving customer satisfaction.",
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
    title: "Business Building in the Digital Age of 2025",
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
    title: "Building a Thriving Business in the Digital Age of 2025",
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
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>(() => {
    const initialCounts: { [key: string]: number } = {};
    articles.forEach(article => {
      initialCounts[article.slug] = parseInt(article.likes) || 0;
    });
    return initialCounts;
  });

  const filteredArticles = selectedCategory === "ALL"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const featuredPost = articles[0];

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Featured Article */}
      <div className="py-5 xs:py-6 sm:py-8 md:py-10 lg:py-14 xl:py-18 2xl:py-20 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="p-0.5 sm:p-1 rounded-lg mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12"
            style={{ background: "linear-gradient(to right, #0fb8af, #0fb8af)" }}>
            <div className="bg-background rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Featured Image - PERFECTLY ADJUSTED */}
                <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] bg-gray-800 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 375px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 text-[10px] xs:text-xs font-bold uppercase rounded"
                    style={{ backgroundColor: "#0fb8af", color: "#000" }}>
                    FEATURED
                  </div>
                </div>

                {/* Featured Content - Optimized spacing */}
                <div className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 2xl:p-12 flex flex-col justify-center">
                  <span
                    className="inline-block px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 text-[10px] xs:text-xs font-bold uppercase tracking-wider mb-2 xs:mb-3 sm:mb-4 w-fit"
                    style={{ backgroundColor: "#0fb8af", color: "#000" }}
                  >
                    {featuredPost.category}
                  </span>
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-foreground">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-light mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-xs xs:text-sm sm:text-base lg:text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-[10px] xs:text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                      <span className="whitespace-nowrap">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                      <span className="whitespace-nowrap">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:opacity-90 flex items-center justify-center sm:justify-start gap-1.5 xs:gap-2 w-full sm:w-auto rounded"
                    style={{ backgroundColor: "#0fb8af", color: "#000" }}
                  >
                    <span>Read Full Article</span> <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter - Optimized for small screens */}
      <div className="py-3 xs:py-4 sm:py-5 md:py-6 lg:py-8 px-3 xs:px-4 sm:px-5 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-1.5 xs:gap-2 sm:gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-2 xs:px-2.5 sm:px-3 md:px-4 py-1 xs:py-1.5 sm:py-2 border text-[10px] xs:text-xs sm:text-sm font-semibold transition-all hover:shadow-md whitespace-nowrap rounded"
              style={{
                backgroundColor: selectedCategory === category ? "#0fb8af" : "transparent",
                color: selectedCategory === category ? "#000" : "#D1D5DB",
                borderColor: selectedCategory === category ? "#0fb8af" : "#4B5563"
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.backgroundColor = "#0fb8af";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.borderColor = "#0fb8af";
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

      {/* Blog Grid - Optimized for all screen sizes */}
      <div className="py-4 xs:py-5 sm:py-6 md:py-8 lg:py-12 xl:py-16 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-10 xl:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          {filteredArticles.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group cursor-pointer block">
              <div
                className="bg-background border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col h-full rounded-lg"
                style={{ borderColor: "#1F2937" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#0fb8af")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1F2937")}
              >
                {/* Card Image - PERFECTLY ADJUSTED */}
                <div className="relative w-full aspect-[4/3] bg-gray-800 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 375px) 100vw, (max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div
                    className="absolute top-2 xs:top-3 left-2 xs:left-3 px-1.5 xs:px-2 py-0.5 xs:py-1 text-[10px] xs:text-xs font-bold uppercase rounded"
                    style={{ backgroundColor: "#0fb8af", color: "#000" }}
                  >
                    NEW
                  </div>
                </div>

                {/* Card Content - Optimized padding and spacing */}
                <div className="p-3 xs:p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 xs:gap-2 mb-2 xs:mb-3 flex-wrap">
                    <span
                      className="px-1.5 xs:px-2 py-0.5 xs:py-1 text-[10px] xs:text-xs font-bold uppercase rounded whitespace-nowrap"
                      style={{ backgroundColor: "#0fb8af", color: "#000" }}
                    >
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-[10px] xs:text-xs whitespace-nowrap">{post.readTime}</span>
                  </div>
                  <h3
                    className="text-sm xs:text-base sm:text-lg md:text-xl font-bold mb-1.5 xs:mb-2 sm:mb-3 line-clamp-2 transition-colors text-foreground min-h-[2.5rem] xs:min-h-[3rem] sm:min-h-[3.5rem]"
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0fb8af")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-light text-[11px] xs:text-xs sm:text-sm mb-2 xs:mb-3 sm:mb-4 line-clamp-3 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[10px] xs:text-xs text-gray-500 mt-auto pt-2 border-t border-gray-800">
                    <div className="flex items-center gap-0.5 xs:gap-1">
                      <Calendar className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                      <span className="hidden xs:inline">{post.date}</span>
                      <span className="xs:hidden">{post.date.split(' ').slice(0, 2).join(' ')}</span>
                    </div>
                    <button
                      onClick={(e) => handleLikeClick(post.slug, e)}
                      className="flex items-center gap-0.5 xs:gap-1 transition-transform hover:scale-110 p-1 rounded"
                    >
                      <Heart
                        className={`w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 ${likedPosts.has(post.slug) ? 'fill-red-500 text-red-500' : 'text-gray-500'
                          }`}
                      />
                      <span className="text-[10px] xs:text-xs">{likeCounts[post.slug]}</span>
                    </button>
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