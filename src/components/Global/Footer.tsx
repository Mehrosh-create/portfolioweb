// components/Footer/Footer.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting email:', email)
    setEmail('')
    // Add your newsletter signup logic here
  }

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Signup Section */}
      <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            SIGN UP FOR MY WEEKLY NEWSLETTER
          </h3>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-gray-600 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-white text-center sm:text-left"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors font-medium"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © Gary Vee IP, LLC {new Date().getFullYear()}
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>

          {/* Footer Social Icons */}
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            {/* Discord */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-7 h-7" fill="#5865F2" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-7 h-7" fill="#1877F2" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-7 h-7" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </linearGradient>
                </defs>
                <path fillRule="evenodd" d="M12.017 0C8.396 0 7.955.01 6.729.054 2.281.179 0 2.513 0 6.729v10.538C0 21.487 2.513 24 6.729 24h10.538C21.487 24 24 21.487 24 17.267V6.729C24 2.513 21.487 0 17.267 0H12.017zm0 2.25c3.637 0 4.065.014 5.5.075 3.363.061 4.5 1.175 4.5 4.5v10.35c0 3.325-1.137 4.439-4.5 4.5h-10.35c-3.363-.061-4.5-1.175-4.5-4.5V6.825c.061-3.363 1.175-4.5 4.5-4.5h5.35zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" clipRule="evenodd" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-7 h-7" fill="#0A66C2" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Pinterest */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-7 h-7" fill="#BD081C" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.101-1.876 4.241-1.451 1.688-3.573 2.619-5.692 2.619-.946 0-1.876-.194-2.692-.543-.227-.097-.424-.244-.573-.429.584-.056 1.14-.286 1.638-.686.142-.114.265-.246.368-.393-.413-.02-.798-.238-1.036-.598-.124-.188-.2-.4-.228-.618.199.027.4.041.604.041.22 0 .438-.021.652-.062-.528-.134-.960-.513-1.204-1.019-.133-.275-.185-.571-.152-.863.207.097.431.158.665.172-.428-.26-.719-.713-.797-1.227-.048-.319-.014-.647.099-.943.624.677 1.425 1.192 2.314 1.45.89.259 1.833.268 2.729.025.179-.048.348-.12.504-.212.679-.403 1.076-1.146 1.076-1.943 0-.409-.107-.796-.299-1.136-.384-.679-1.124-1.134-1.944-1.134-.663 0-1.26.297-1.67.784-.409.487-.599 1.131-.534 1.786.33.327.134.64.291.916.039.069.083.134.132.195-.114.441-.398.831-.784 1.084-.193.126-.413.207-.644.237.408-.417.651-.992.651-1.618 0-.477-.151-.929-.416-1.314C13.746 7.027 12.896 6.8 12 6.8c-.896 0-1.746.227-2.334.627-.265.385-.416.837-.416 1.314 0 .626.243 1.201.651 1.618-.231-.03-.451-.111-.644-.237-.386-.253-.67-.643-.784-1.084.049-.061.093-.126.132-.195.157-.276.258-.589.291-.916.065-.655-.125-1.299-.534-1.786-.41-.487-1.007-.784-1.67-.784-.82 0-1.56.455-1.944 1.134-.192.34-.299.727-.299 1.136 0 .797.397 1.54 1.076 1.943.156.092.325.164.504.212.896.243 1.839.234 2.729-.025.889-.258 1.69-.773 2.314-1.45.113.296.147.624.099.943-.078.514-.369.967-.797 1.227.234-.014.458-.075.665-.172.033.292-.019.588-.152.863-.244.506-.676.885-1.204 1.019.214.041.432.062.652.062.204 0 .405-.014.604-.041-.028.218-.104.43-.228.618-.238.36-.623.578-1.036.598.103.147.226.279.368.393.498.4 1.054.63 1.638.686-.149.185-.346.332-.573.429-.816.349-1.746.543-2.692.543-2.119 0-4.241-.931-5.692-2.619-.98-1.14-1.707-2.383-1.876-4.241-.085-.928.014-1.885.295-2.785.564-1.801 1.632-3.369 3.068-4.415C5.886.8 8.819.179 12 .179s6.114.621 8.632 1.776c1.436 1.046 2.504 2.614 3.068 4.415.281.9.38 1.857.295 2.785z"/>
              </svg>
            </a>

            {/* Twitter/X */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-7 h-7" fill="#000000" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-7 h-7" fill="#FF0000" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Snapchat */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-7 h-7" fill="#FFFC00" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 7.955.01 6.729.054 2.281.179 0 2.513 0 6.729v10.538C0 21.487 2.513 24 6.729 24h10.538C21.487 24 24 21.487 24 17.267V6.729C24 2.513 21.487 0 17.267 0H12.017zm0 2.25c3.637 0 4.065.014 5.5.075 3.363.061 4.5 1.175 4.5 4.5v10.35c0 3.325-1.137 4.439-4.5 4.5h-10.35c-3.363-.061-4.5-1.175-4.5-4.5V6.825c.061-3.363 1.175-4.5 4.5-4.5h5.35z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-7 h-7" fill="#000000" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer