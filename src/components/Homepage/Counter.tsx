"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CounterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    services: 0,
    years: 0,
  });

  const targetCounts = {
    projects: 42,
    clients: 28,
    services: 8,
    years: 5,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000; // ms
      const interval = 20; // ms
      const steps = duration / interval;

      const incrementCounts = () => {
        setCounts((prev) => ({
          projects: Math.min(
            prev.projects + Math.ceil(targetCounts.projects / steps),
            targetCounts.projects
          ),
          clients: Math.min(
            prev.clients + Math.ceil(targetCounts.clients / steps),
            targetCounts.clients
          ),
          services: Math.min(
            prev.services + Math.ceil(targetCounts.services / steps),
            targetCounts.services
          ),
          years: Math.min(
            prev.years + Math.ceil(targetCounts.years / steps),
            targetCounts.years
          ),
        }));
      };

      const timer = setInterval(() => {
        if (
          counts.projects >= targetCounts.projects &&
          counts.clients >= targetCounts.clients &&
          counts.services >= targetCounts.services &&
          counts.years >= targetCounts.years
        ) {
          clearInterval(timer);
        } else {
          incrementCounts();
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView, counts, targetCounts]);

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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            By the Numbers
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A track record of delivering exceptional results and creating value
            for clients and partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Projects Counter */}
          <div className="text-center p-6 bg-black border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {counts.projects}+
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Projects</h3>
            <p className="text-sm text-gray-300">
              Successful ventures launched
            </p>
          </div>

          {/* Clients Counter */}
          <div className="text-center p-6 bg-black border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {counts.clients}+
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Clients</h3>
            <p className="text-sm text-gray-300">Satisfied businesses served</p>
          </div>

          {/* Services Counter */}
          <div className="text-center p-6 bg-black border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {counts.services}+
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Services</h3>
            <p className="text-sm text-gray-300">Expert solutions offered</p>
          </div>

          {/* Years Counter */}
          <div className="text-center p-6 bg-black border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {counts.years}+
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Years</h3>
            <p className="text-sm text-gray-300">
              Of entrepreneurial experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
