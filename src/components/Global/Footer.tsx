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

    console.log('Submitting email:', email)
    setEmail('')
    setError('')
  }

  return (
    <footer
      className="text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/Home_Newsletter_Background-2-scaled.jpg')" }}
    >
      {/* Newsletter Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-4xl font-bold tracking-wide mb-2 flex items-center justify-center gap-2">
            SHEIKH NABEEL
            <span className="text-green-500"></span>
          </h2>
          <p className="text-xl font-bold mb-7 text-gray-300 max-w-md mx-auto leading-tight">
            SIGN UP FOR MY WEEKLY NEWSLETTER
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="text-left mb-4">
              <label
                htmlFor="email"
                className="block text-base font-bold mb-1 text-gray-200"
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
                className={`large flex-1 w-full px-5 py-3.5 rounded bg-neutral-800 text-white 
                focus:outline-none focus:ring-2 focus:ring-white text-base ${email ? 'font-bold' : ''}`}
                name="input_3"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error) setError('')
                }}
                placeholder="Enter your email"
                style={{ backgroundColor: '#353535' }}
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-green-600 transition-colors whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </div>

            {error && (
              <div
                id="validation_message"
                className="text-red-500 text-sm mt-2 text-left"
                style={{ fontSize: '13px', marginTop: '7px' }}
              >
                {error}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-4 py-8">
        {/* Social icons code remains the same */}
      </div>

      {/* Copyright - Centered */}
      <div className="text-center text-base text-gray-400 pb-5 mx-auto max-w-7xl lg:ml-72 lg:mr-8">
        <p>
          © Sheikh Nabeel {new Date().getFullYear()}
        </p>
        <div className="flex justify-center gap-3 mt-1">
          <Link href="/privacy-policy" className="hover:text-white transition-colors text-sm">
            Privacy Policy
          </Link>
          <span className="text-sm">|</span>
          <Link href="/terms-of-use" className="hover:text-white transition-colors text-sm">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer