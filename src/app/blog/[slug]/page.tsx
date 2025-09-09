'use client';

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Heart, MessageCircle } from "lucide-react";
import { articles } from "@/data/articles";

const BlogArticlePage = () => {
  const params = useParams();
  const { slug } = params;

  const article = articles.find(a => a.slug === slug);

  if (!article) return <div className="min-h-screen text-white flex items-center justify-center">Article not found</div>;

  return (
    <div className="min-h-screen bg-[#151515] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase rounded">{article.category}</span>
          <h1 className="text-4xl font-bold mt-4 mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {article.date}</div>
            <div className="flex items-center gap-1"><Clock className="w-4 h-4"/> {article.readTime}</div>
            <div className="flex items-center gap-1"><Heart className="w-4 h-4"/> {article.likes}</div>
            <div className="flex items-center gap-1"><MessageCircle className="w-4 h-4"/> {article.comments}</div>
          </div>
        </div>

        <div className="relative h-96 mb-8">
          <Image src={article.image} alt={article.title} fill className="object-cover rounded-lg"/>
        </div>

        <div className="prose prose-invert max-w-full text-gray-300 mb-12">
          {article.contents.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <Link href="/blog" className="inline-block bg-yellow-400 text-black px-6 py-3 font-bold uppercase hover:bg-yellow-300 transition-colors">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogArticlePage;
