'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Bookmark, Share2, Heart, MessageCircle } from "lucide-react";
import { articles } from "@/data/articles";

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
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-1 rounded-lg mb-12">
            <div className="bg-[#151515] rounded-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase rounded">
                    FEATURED
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">{featuredPost.title}</h2>
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
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 border font-semibold text-sm transition-colors ${selectedCategory === category
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "border-gray-600 text-gray-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group cursor-pointer">
              <div className="bg-[#151515] border border-gray-800 overflow-hidden transition-all duration-300 hover:border-yellow-400 hover:scale-105">
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
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
