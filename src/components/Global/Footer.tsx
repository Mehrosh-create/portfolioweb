"use client";
import { useState } from "react";
import Link from "next/link";
import { SocialIcon } from 'react-social-icons';

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
    { url: "https://discord.com", network: "discord" },
    { url: "https://www.facebook.com/sheikh.nabeel.ali.2025/about/?_rdr", network: "facebook" },
    { url: "https://pk.linkedin.com/in/sheikhnabeelofficial", network: "linkedin" },
    { url: "https://www.upwork.com/freelancers/sheikhnabeelofficial", network: "upwork" },
    { url: "https://twitter.com", network: "x" },
    { url: "https://www.youtube.com/@EurosHub", network: "youtube" },
    { url: "https://snapchat.com/add/sheikhnabeel.official", network: "snapchat" },
    { url: "https://www.tiktok.com/@sheikhnabeel.official", network: "tiktok" },
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
          <SocialIcon
            key={social.network}
            url={social.url}
            network={social.network}
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 60, width: 60 }}
            className="hover:scale-110 transition-transform duration-200"
          />
        ))}
        
        {/* Custom Instagram Gradient Icon */}
        <a
          href="https://www.instagram.com/sheikhnabeel.official/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[60px] h-[60px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-transform duration-200"
        >
          <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.8-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
          </svg>
        </a>
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