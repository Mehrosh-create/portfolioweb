"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!email) {
      setError("At least one field must be filled out.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Subscription failed");

      setSuccessMessage(
        "Thank you for subscribing! Check your email for confirmation."
      );
      setEmail("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to subscribe. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "discord", url: "https://discord.com", size: 60 },
    { name: "facebook", url: "https://www.facebook.com/sheikh.nabeel.ali.2025/about/?_rdr", size: 60 },
    { name: "linkedin", url: "https://pk.linkedin.com/in/sheikhnabeelofficial", size: 60 },
    { name: "twitter", url: "https://twitter.com/sheikhnabeel", size: 60 },
    { name: "youtube", url: "https://www.youtube.com/@EurosHub", size: 60 },
    { name: "tik-tok", url: "https://www.tiktok.com/@sheikhnabeel.official", size: 60 },
    { name: "instagram", url: "https://www.instagram.com/sheikhnabeel.official/?hl=en", size: 60 },
    { name: "upwork", url: "https://www.upwork.com/freelancers/sheikhnabeelofficial", size: 63.5},
  ];

  return (
    <footer
      className="text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/Home_Newsletter_Background-2-scaled.jpg')",
      }}
    >
      {/* Newsletter Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-10 lg:ml-64 text-center border-b border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide mb-2 sm:mb-3">
            SHEIKH NABEEL
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8 text-gray-300 max-w-md mx-auto leading-tight px-4">
            SIGN UP FOR MY WEEKLY NEWSLETTER
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto px-4 sm:px-0">
            <div className="text-left mb-2 sm:mb-3">
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 text-gray-200"
              >
                EMAIL
              </label>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
              <input
                id="input_5_3"
                type="email"
                required
                className={`flex-1 w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 rounded bg-neutral-800 text-white text-xs sm:text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-white ${email ? "font-semibold" : ""
                  }`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                  if (successMessage) setSuccessMessage("");
                }}
                placeholder="Enter your email"
                style={{ backgroundColor: "#353535" }}
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0fb8af] text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-lg hover:bg-[#0fb8af] disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
              >
                {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
              </button>
            </div>

            {error && (
              <div className="text-red-500 text-xs sm:text-sm mt-2 sm:mt-3 text-left">{error}</div>
            )}
            {successMessage && (
              <div className="text-green-400 text-xs sm:text-sm mt-2 sm:mt-3 text-left">
                {successMessage}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-4 sm:gap-5 py-6 sm:py-8 px-4 lg:ml-64">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <div 
              className="flex items-center justify-center"
              style={{ width: `${social.size}px`, height: `${social.size}px` }}
            >
              <Image
                src={`/icons/${social.name}.png`}
                alt={social.name}
                width={social.size}
                height={social.size}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 pb-5 sm:pb-7 px-4 lg:ml-64">
        <p className="mb-2 sm:mb-3">© Sheikh Nabeel {new Date().getFullYear()}</p>
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 mt-1">
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors text-xs sm:text-sm md:text-base"
          >
            Privacy Policy
          </Link>
          <span className="text-xs sm:text-sm md:text-base">|</span>
          <Link
            href="/terms-of-use"
            className="hover:text-white transition-colors text-xs sm:text-sm md:text-base"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;