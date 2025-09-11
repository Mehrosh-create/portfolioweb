"use client";

import Hero from "@/components/Homepage/Hero";
import CounterSection from "@/components/Homepage/Counter";
import Footer from "@/components/Global/Footer";
import Spacer from "@/components/Global/Spacer";
import New from "@/components/Homepage/New";
import Blog from "@/components/Homepage/Blog";

export default function Home() {
  const handleVideoPlay = () => {
    console.log("Video play triggered");
  };

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <section id="home">
          <Hero onVideoPlay={handleVideoPlay} />
        </section>

        <Spacer height={2} />

        <section id="counter">
          <CounterSection />
        </section>

        <Spacer height={2} />

        <section id="new">
          <New />
        </section>

        <Spacer height={2} />

        <section id="blog">
          <Blog />
        </section>

        <Spacer height={2} />
      </div>
      <Footer />
    </main>
  );
}