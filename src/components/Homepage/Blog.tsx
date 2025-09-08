import React from 'react';
import { Calendar, Clock, ArrowRight, Bookmark, Share2, Eye, Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: "SHEIKH NABEEL ON THE RISE OF DIGITAL TRANSFORMATION: IT WILL TRANSFORM MULTIPLE INDUSTRIES",
    excerpt: "A comprehensive look at how digital transformation principles are revolutionizing modern commerce and creating sustainable value for businesses worldwide. Discover how businesses are leveraging AI, automation, and data-driven strategies to achieve unprecedented growth.",
    category: "DIGITAL TRANSFORMATION",
    readTime: "8 min read",
    date: "March 15, 2024",
    image: "/images/blog/featured-post.jpg",
    views: "15.2K",
    likes: "892",
    comments: "156",
    author: "Sheikh Nabeel",
    authorImage: "/images/authors/sheikh-nabeel.jpg"
  };

  const blogPosts = [
    {
      id: 2,
      title: "The Future of CRM Systems in Global Markets",
      excerpt: "Exploring how CRM solutions are gaining mainstream acceptance and driving business innovation across various industries.",
      category: "CRM SYSTEMS",
      readTime: "6 min read",
      date: "March 12, 2024",
      image: "/images/blog/crm-future.jpg",
      views: "8.5K",
      likes: "443",
      comments: "89"
    },
    {
      id: 3,
      title: "Building Authentic Leadership in Digital Organizations",
      excerpt: "Leadership principles derived from digital transformation that create lasting positive impact in modern organizations.",
      category: "LEADERSHIP",
      readTime: "5 min read",
      date: "March 10, 2024",
      image: "/images/blog/digital-leadership.jpg",
      views: "12.1K",
      likes: "678",
      comments: "124"
    },
    {
      id: 4,
      title: "Automation: Beyond Efficiency to Business Transformation",
      excerpt: "Understanding how automation can be leveraged as a tool for business empowerment and operational excellence.",
      category: "AUTOMATION",
      readTime: "7 min read",
      date: "March 8, 2024",
      image: "/images/blog/automation.jpg",
      views: "9.8K",
      likes: "521",
      comments: "97"
    },
    {
      id: 5,
      title: "Technology Ethics Through Business Lens",
      excerpt: "Navigating the intersection of business values and emerging technologies like AI and blockchain.",
      category: "TECHNOLOGY",
      readTime: "9 min read",
      date: "March 5, 2024",
      image: "/images/blog/tech-ethics.jpg",
      views: "11.3K",
      likes: "634",
      comments: "108"
    },
    {
      id: 6,
      title: "Business Building in the Digital Age",
      excerpt: "Strategies for strengthening businesses through digital platforms and virtual engagement.",
      category: "BUSINESS STRATEGY",
      readTime: "4 min read",
      date: "March 3, 2024",
      image: "/images/blog/digital-business.jpg",
      views: "7.2K",
      likes: "389",
      comments: "72"
    }
  ];

  const categories = ["ALL", "DIGITAL TRANSFORMATION", "CRM SYSTEMS", "LEADERSHIP", "AUTOMATION", "TECHNOLOGY", "BUSINESS STRATEGY"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Featured Article */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 p-1 rounded-lg mb-12">
            <div className="bg-black rounded-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Eye className="w-8 h-8 text-blue-600" />
                      </div>
                      <p className="text-white text-sm">Featured Article</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase rounded">
                    FEATURED
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {featuredPost.views}
                    </div>
                    <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {featuredPost.likes}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="inline-block bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                    {featuredPost.category}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-8 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                        <Bookmark className="w-5 h-5" />
                      </button>
                      <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <button className="bg-yellow-400 text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-yellow-300 transition-colors flex items-center gap-2">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 border border-gray-600 text-gray-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors font-semibold text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="bg-gray-900 border border-gray-800 overflow-hidden transition-all duration-300 hover:border-yellow-400 hover:transform hover:scale-105">
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold mb-2">{post.category}</div>
                      <div className="text-sm opacity-75">Featured Article</div>
                    </div>
                    <div className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 text-xs font-bold uppercase rounded">
                      NEW
                    </div>
                    <div className="absolute bottom-3 right-3 flex gap-2 text-xs">
                      <div className="bg-black bg-opacity-50 px-2 py-1 rounded flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold uppercase rounded">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="bg-yellow-400 text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-yellow-300 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;