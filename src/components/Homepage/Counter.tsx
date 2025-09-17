"use client";

import { useEffect, useState, useRef } from "react";

const CounterSection = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-[#151515] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Change this line: Add lg:mr-8 for right margin */}
      <div ref={ref} className="container mx-auto px-4 relative z-10 lg:mr-8">
        {/* Quote section */}
        <div className="text-center mb-16">
          <h2
            className="text-white font-black leading-tight mb-8"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              lineHeight: 1.1,
              fontFamily: '"Bebas Neue", sans-serif',
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            "LEGACY IS GREATER THAN <br />
            <span className="block text-center">CURRENCY."</span>
          </h2>

          <div
            className="inline-block text-black font-bold tracking-wider uppercase whitespace-nowrap px-3 py-1"
            style={{
              backgroundColor: "#FFEA00",
              fontFamily: '"Bebas Neue", sans-serif',
              fontWeight: 700,
              fontSize: "1.6rem",
              letterSpacing: "0.08em",
            }}
          >
            SHEIKH NABEEL
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD COMPONENT */}
          {[
            {
              name: "VICE",
              description: "builds businesses",
              img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            },
            {
              name: "FRIENDS",
              description: "creates meaningful IP",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            },
            {
              name: "ACT",
              description: "day trades attention",
              img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            },
          ].map((card) => (
            <div
              key={card.name}
              className="group text-center p-0 border-2 rounded-lg transition-all duration-300 cursor-pointer h-96 flex flex-col relative overflow-hidden border-gray-700" // Removed hover:scale-105 and hover:border-[#02B600]
            >
              {/* Pulsating green effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[#02B600]/30 animate-pulse z-20"></div>
                <div className="absolute inset-0 bg-gradient-radial from-[#02B600]/40 via-[#02B600]/20 to-transparent animate-ping"></div>
                <div
                  className="absolute inset-0 bg-[#02B600]/10 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              <div className="relative z-10 w-full h-full flex flex-col">
                <div className="flex-1 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-black/80 backdrop-blur-sm">
                  <h3
                    className="text-2xl font-semibold text-white mb-2 uppercase tracking-wide"
                    style={{
                      fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                      fontWeight: 900,
                    }}
                  >
                    {card.name}
                  </h3>
                  <p
                    className="text-sm text-gray-300"
                    style={{
                      fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;