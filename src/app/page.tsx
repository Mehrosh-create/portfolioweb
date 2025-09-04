// app/page.tsx
"use client"
import { useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Hero from '@/components/Homepage/Hero';
import CounterSection from '@/components/Homepage/Counter';
import Footer from '@/components/Global/Footer';
import Spacer from '@/components/Global/Spacer';

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);

  const handleVideoPlay = () => {
    console.log("Video play triggered");
    // You can add any additional logic here
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  return (
    <main className="min-h-screen flex">
      <Sidebar onSearchClick={handleSearchClick} />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:ml-0">
        <div className="flex-grow">
          <Hero 
            onVideoPlay={handleVideoPlay} 
            showSearch={showSearch}
            onSearchClose={handleSearchClose}
          />
          <Spacer height={2} />
          <CounterSection />
          <Spacer height={2} />
          {/* Additional sections would go here */}
        </div>
        <Footer />
      </div>
    </main>
  );
}