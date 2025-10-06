"use client";
import { useState } from "react";
import Link from "next/link";

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
      <div className="flex justify-center flex-wrap gap-3 sm:gap-4 py-6 sm:py-8 px-4 lg:ml-64">
        {/* Discord */}
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#5865F2' }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="white" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        </a>
        {/* Facebook */}
        <a
          href="https://www.facebook.com/sheikh.nabeel.ali.2025/about/?_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#1877F2' }} // Blue background
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="white" // “f” logo color white
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H296V6.26S259.5 0 225.36 0C141.09 0 
    89.09 54.42 89.09 153.12v68.22H0v92.66h89.09V512h107.77V288z"/>
          </svg>
        </a>
        {/* Instagram Gradient */}
        <a
          href="https://www.instagram.com/sheikhnabeel.official/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="white" viewBox="0 0 24 24">
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.8-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://pk.linkedin.com/in/sheikhnabeelofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#0A66C2' }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="white" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853
            0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.477-.9
            1.637-1.85 3.37-1.85 3.601 0 4.267 2.37
            4.267 5.455v6.286zM5.337 7.433a2.062 2.062
            0 1 1 0-4.124 2.062 2.062 0 0 1 0
            4.124zM6.954 20.452H3.72V9h3.234v11.452z"/>
          </svg>
        </a>
        {/* Upwork */}
        <a
          href="https://www.upwork.com/freelancers/sheikhnabeelofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#6fda44' }} // Upwork green
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256" // Expanded viewBox to fix cropping
            fill="white"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          >
            <path d="M164.5 64c-26.3 0-47.5 21.2-47.5 47.5v9.2c-9.6-13.5-17.8-29.5-23.7-48H64v61.2c0 11.5-9.3 20.8-20.8 20.8S22.5 145.4 22.5 133.9V64H0v69.9c0 23.8 19.4 43.1 43.2 43.1s43.2-19.3 43.2-43.1v-11.1c6.1 9.6 13.4 18.5 21.6 26.2 17.8 16.5 41.6 26 66.5 26 46.2 0 83.8-37.6 83.8-83.8S210.7 64 164.5 64zm0 134c-7.4 0-14.6-1.1-21.4-3.1-9.6-2.9-18.3-7.6-26.2-13.6 10.3-13.9 16.5-31.1 16.5-49.7V97.9h38.5c19.1 0 34.5 15.4 34.5 34.5s-15.4 34.5-34.5 34.5c-5.5 0-10.5-1.3-15.1-3.6l-7.6 27.7c6.3 1.9 12.9 2.9 19.7 2.9 37.9 0 68.8-30.9 68.8-68.8S202.4 64 164.5 64z" />
          </svg>
        </a>
        {/* Twitter / X */}
        <a
          href="https://twitter.com" target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#000000' }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="white" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227
            8.26 8.502 11.24H16.17l-5.214-6.817-5.976
            6.817H1.67l7.73-8.817L1.254
            2.25H8.08l4.713 6.231 5.451-6.231z"/>
          </svg>
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@EurosHub"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#FF0000' }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M23.498 6.186a2.974 2.974 0 0 0-2.094-2.103C19.691
              3.6 12 3.6 12 3.6s-7.691 0-9.404.483a2.974 2.974
              0 0 0-2.094 2.103C0 7.91 0 12 0 12s0 4.09.502
              5.814a2.974 2.974 0 0 0 2.094 2.103C4.309 20.4
              12 20.4 12 20.4s7.691 0 9.404-.483a2.974 2.974
              0 0 0 2.094-2.103C24 16.09 24 12 24
              12s0-4.09-.502-5.814zM9.75 15.568V8.432L15.818
              12 9.75 15.568z"
            />
          </svg>
        </a>
        {/* Snapchat */}
        <a
          href="https://snapchat.com/add/sheikhnabeel.official"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#FFFC00' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
            viewBox="0 0 512 512"
            fill="white"
            stroke="black"
            strokeWidth="18"
          >
            <path d="M256 96c-70 0-112 48-112 128 0 80-16 96-48 112 24 8 40 24 56 40-16 8-32 16-56 16 40 32 96 48 160 48s120-16 160-48c-24 0-40-8-56-16 16-16 32-32 56-40-32-16-48-32-48-112 0-80-42-128-112-128z" />
          </svg>
        </a>
        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@sheikhnabeel.official"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#000000' }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="white" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
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