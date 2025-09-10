'use client'

import { useState } from 'react'
import Link from 'next/link'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setError('At least one field must be filled out.')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    // If we get here, the email is valid
    console.log('Submitting email:', email)
    setEmail('')
    setError('')
  }

  return (
    <footer className="text-white" style={{ backgroundColor: '#292526' }}>
      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-6 flex items-center justify-center gap-2">
            SHEIKH NABEEL
            <span className="text-green-500"></span>
          </h2>
          <p className="text-xl font-semibold mb-8 text-gray-300 max-w-md mx-auto leading-tight">
            SIGN UP FOR MY WEEKLY NEWSLETTER
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto"
          >
            <div className="text-left mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2 text-gray-200"
              >
                EMAIL
              </label>
            </div>
            <div className="flex gap-4">
              <input
                id="input_5_3"
                type="email"
                required
                aria-invalid="false"
                className={`large flex-1 w-full px-6 py-4 rounded bg-neutral-800 text-white 
  focus:outline-none focus:ring-2 focus:ring-white text-lg ${email ? 'font-bold' : ''}`}
                name="input_3"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  // Clear error when user starts typing
                  if (error) setError('')
                }}
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </div>

            {/* Error message */}
            {error && (
              <div
                id="validation_message"
                className="text-red-500 text-sm mt-2 text-left"
                style={{ fontSize: '14px', marginTop: '8px' }}
              >
                {error}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-6 py-12">
        {/* Discord */}
        <a
          href="#"
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#5865F2' }}
        >
          <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="#"
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#1877F2' }}
        >
          <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.597 0 0 .6 0 1.333v21.333C0 
            23.4.597 24 1.325 24h11.5v-9.333H9.692V11.2h3.133V8.422c0-3.1 
            1.894-4.789 4.659-4.789 1.325 0 2.464.098 
            2.797.142v3.24h-1.92c-1.505 0-1.795.716-1.795 
            1.764V11.2h3.59l-.467 3.467h-3.123V24h6.117C23.403 
            24 24 23.4 24 22.667V1.333C24 
            .6 23.403 0 22.675 0z"/>
          </svg>
        </a>

        {/* Instagram Gradient */}
        <a href="#" className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
          <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.8-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#0A66C2' }}
        >
          <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
            0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.477-.9 
            1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 
            4.267 5.455v6.286zM5.337 7.433a2.062 2.062 
            0 1 1 0-4.124 2.062 2.062 0 0 1 0 
            4.124zM6.954 20.452H3.72V9h3.234v11.452z"/>
          </svg>
        </a>

        {/* Pinterest */}
        <a
          href="#"
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#E60023' }}
        >
          <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 
            0 12c0 4.99 3.657 9.128 8.438 
            10.146-.117-.86-.223-2.185.047-3.13.242-.827 
            1.562-5.27 1.562-5.27s-.398-.796-.398-1.975c0-1.85 
            1.073-3.23 2.404-3.23 1.135 0 1.683.85 1.683 
            1.87 0 1.138-.725 2.84-1.098 4.418-.312 
            1.324.664 2.404 1.973 2.404 2.368 0 
            3.968-3.045 3.968-6.642 0-2.737-1.844-4.787-5.195-4.787-3.787 
            0-6.145 2.828-6.145 5.982 0 1.085.418 2.25.943 
            2.88.104.126.12.236.09.364-.098.4-.324 
            1.27-.367 1.447-.057.23-.185.28-.43.17-1.596-.74-2.588-3.065-2.588-4.937 
            0-4.017 2.92-7.708 8.418-7.708 4.418 0 
            7.85 3.154 7.85 7.37 0 4.394-2.77 7.93-6.607 
            7.93-1.29 0-2.502-.67-2.915-1.46l-.793 
            3.018c-.287 1.105-1.07 2.49-1.597 
            3.335C9.717 23.79 10.846 24 12 24c6.627 
            0 12-5.373 12-12S18.627 0 12 0z"/>
          </svg>
        </a>

        {/* Twitter / X */}
        <a
          href="#"
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#000000' }}
        >
          <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 
            8.26 8.502 11.24H16.17l-5.214-6.817-5.976 
            6.817H1.67l7.73-8.817L1.254 
            2.25H8.08l4.713 6.231 5.451-6.231z"/>
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="#"
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#FF0000' }}
        >
          <svg className="w-11 h-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
          href="#"
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#FFFC00' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 h-11"
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
          href="#"
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#000000' }}
        >
          <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-base text-gray-400 pb-10">
        © {new Date().getFullYear()} SHEIKH NABEEL. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer