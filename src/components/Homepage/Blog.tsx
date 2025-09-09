'use client';

import React from 'react';
import { Calendar, Clock, ArrowRight, Bookmark, Share2, Eye, Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: "SHEIKH NABEEL ON THE RISE OF DIGITAL TRANSFORMATION: IT WILL TRANSFORM MULTIPLE INDUSTRIES",
    excerpt: "A comprehensive look at how digital transformation principles are revolutionizing modern commerce and creating sustainable value for businesses worldwide. Discover how businesses are leveraging AI, automation, and data-driven strategies to achieve unprecedented growth.",
    category: "DIGITAL TRANSFORMATION",
    readTime: "8 min read",
    date: "March 15, 2025",
    image: "/images/featured-post.jpg",
    views: "15.2K",
    likes: "892",
    comments: "156",
    slug: "rise-of-digital-transformation"
  };

  const blogPosts = [
    {
      id: 2,
      title: "The Future of CRM Systems in Global Markets",
      excerpt: "Exploring how CRM solutions are gaining mainstream acceptance and driving business innovation across various industries.",
      category: "CRM SYSTEMS",
      readTime: "6 min read",
      date: "March 12, 2025",
      image: "/images/crm-future.jpg",
      views: "8.5K",
      likes: "443",
      comments: "89",
      slug: "future-of-crm-systems"
    },
    {
      id: 3,
      title: "Building Authentic Leadership in Digital Organizations",
      excerpt: "Leadership principles derived from digital transformation that create lasting positive impact in modern organizations.",
      category: "LEADERSHIP",
      readTime: "5 min read",
      date: "March 10, 2025",
      image: "/images/digital-leadership.jpg",
      views: "12.1K",
      likes: "678",
      comments: "124",
      slug: "authentic-leadership-digital"
    },
    {
      id: 4,
      title: "Automation: Beyond Efficiency to Business Transformation",
      excerpt: "Understanding how automation can be leveraged as a tool for business empowerment and operational excellence.",
      category: "AUTOMATION",
      readTime: "7 min read",
      date: "March 8, 2025",
      image: "/images/automation.jpg",
      views: "9.8K",
      likes: "521",
      comments: "97",
      slug: "automation-business-transformation"
    },
    {
      id: 5,
      title: "Technology Ethics Through Business Lens",
      excerpt: "Navigating the intersection of business values and emerging technologies like AI and blockchain.",
      category: "TECHNOLOGY",
      readTime: "9 min read",
      date: "March 5, 2025",
      image: "/images/tech.jpg",
      views: "11.3K",
      likes: "634",
      comments: "108",
      slug: "technology-ethics-business"
    },
    {
      id: 6,
      title: "Business Building in the Digital Age",
      excerpt: "Strategies for strengthening businesses through digital platforms and virtual engagement.",
      category: "BUSINESS STRATEGY",
      readTime: "4 min read",
      date: "March 3, 2025",
      image: "/images/digital-business.jpg",
      views: "7.2K",
      likes: "389",
      comments: "72",
      slug: "digital-business-strategy"
    }
  ];

  const categories = ["ALL", "DIGITAL TRANSFORMATION", "CRM SYSTEMS", "LEADERSHIP", "AUTOMATION", "TECHNOLOGY", "BUSINESS STRATEGY"];

  return (
    <div className="min-h-screen bg-[#151515] text-white">
      {/* Featured Article */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-1 rounded-lg mb-12">
            <div className="bg-[#151515] rounded-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase rounded">
                    FEATURED
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
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
                      <Bookmark className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
                      <Share2 className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition-colors" />
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="bg-yellow-400 text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-yellow-300 transition-colors flex items-center gap-2 w-max">
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
            <button key={category} className="px-4 py-2 border border-gray-600 text-gray-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors font-semibold text-sm">
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group cursor-pointer">
              <div className="bg-[#151515] border border-gray-800 overflow-hidden transition-all duration-300 hover:border-yellow-400 hover:scale-105">
                <div className="relative h-100 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 text-xs font-bold uppercase rounded">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold uppercase rounded">{post.category}</span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors">{post.title}</h3>
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
