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
        threshold: 0.3
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

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (cardName: string) => {
    setActiveCard(cardName === activeCard ? null : cardName);
  };

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Quote section - Updated with all caps and proper font */}
        <div className="text-center mb-16">
          <h2 
            className="text-white font-black leading-tight mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              lineHeight: 1.1,
              textAlign: 'center',
              fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.02em'
            }}
          >
            "LEGACY IS GREATER THAN CURRENCY."
          </h2>
         
          <div 
            className="inline-block px-6 py-2 text-black font-bold text-xl tracking-wide uppercase"
            style={{ 
              backgroundColor: "#FFFC01",
              fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
              fontWeight: 900
            }}
          >
            SHEIKH NABEEL
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* VICE Card - Card Number 1 */}
          <div 
            className={`text-center p-0 border-2 rounded-lg transition-all duration-300 cursor-pointer h-96 flex flex-col relative overflow-hidden ${
              activeCard === 'vice' 
                ? 'bg-[#02B600] border-[#02B600] transform scale-105' 
                : 'bg-black border-gray-700 hover:border-gray-500 hover:transform hover:scale-102'
            }`}
            onClick={() => handleCardClick('vice')}
          >
            {/* Enhanced pulsating light effect in green */}
            {activeCard === 'vice' && (
              <div className="absolute inset-0 bg-[#02B600]/30 animate-pulse z-20">
                <div className="absolute inset-0 bg-gradient-radial from-[#02B600]/40 via-[#02B600]/20 to-transparent animate-ping"></div>
                <div className="absolute inset-0 bg-[#02B600]/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            )}
            
            <div className="relative z-10 w-full h-full flex flex-col">
              <div className="flex-1 w-full overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="VICE Business Building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-black/80 backdrop-blur-sm">
                <h3 
                  className="text-2xl font-semibold text-white mb-2 uppercase tracking-wide"
                  style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', fontWeight: 900 }}
                >
                  VICE
                </h3>
                <p 
                  className="text-sm text-gray-300"
                  style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                >
                  builds businesses
                </p>
              </div>
            </div>
          </div>

          {/* FRIENDS Card - Card Number 2 */}
          <div 
            className={`text-center p-0 border-2 rounded-lg transition-all duration-300 cursor-pointer h-96 flex flex-col relative overflow-hidden ${
              activeCard === 'friends' 
                ? 'bg-[#02B600] border-[#02B600] transform scale-105' 
                : 'bg-black border-gray-700 hover:border-gray-500 hover:transform hover:scale-102'
            }`}
            onClick={() => handleCardClick('friends')}
          >
            {/* Enhanced pulsating light effect in green */}
            {activeCard === 'friends' && (
              <div className="absolute inset-0 bg-[#02B600]/30 animate-pulse z-20">
                <div className="absolute inset-0 bg-gradient-radial from-[#02B600]/40 via-[#02B600]/20 to-transparent animate-ping"></div>
                <div className="absolute inset-0 bg-[#02B600]/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            )}
            
            <div className="relative z-10 w-full h-full flex flex-col">
              <div className="flex-1 w-full overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="FRIENDS Team Collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-black/80 backdrop-blur-sm">
                <h3 
                  className="text-2xl font-semibold text-white mb-2 uppercase tracking-wide"
                  style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', fontWeight: 900 }}
                >
                  FRIENDS
                </h3>
                <p 
                  className="text-sm text-gray-300"
                  style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                >
                  creates meaningful IP
                </p>
              </div>
            </div>
          </div>

          {/* ACT Card - Card Number 3 */}
          <div 
            className={`text-center p-0 border-2 rounded-lg transition-all duration-300 cursor-pointer h-96 flex flex-col relative overflow-hidden ${
              activeCard === 'act' 
                ? 'bg-[#02B600] border-[#02B600] transform scale-105' 
                : 'bg-black border-gray-700 hover:border-gray-500 hover:transform hover:scale-102'
            }`}
            onClick={() => handleCardClick('act')}
          >
            {/* Enhanced pulsating light effect in green */}
            {activeCard === 'act' && (
              <div className="absolute inset-0 bg-[#02B600]/30 animate-pulse z-20">
                <div className="absolute inset-0 bg-gradient-radial from-[#02B600]/40 via-[#02B600]/20 to-transparent animate-ping"></div>
                <div className="absolute inset-0 bg-[#02B600]/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            )}
            
            <div className="relative z-10 w-full h-full flex flex-col">
              <div className="flex-1 w-full overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="ACT Trading Attention" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-black/80 backdrop-blur-sm">
                <h3 
                  className="text-2xl font-semibold text-white mb-2 uppercase tracking-wide"
                  style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', fontWeight: 900 }}
                >
                  ACT
                </h3>
                <p 
                  className="text-sm text-gray-300"
                  style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                >
                  day trades attention
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;