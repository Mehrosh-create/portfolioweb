'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Focus on search input when component mounts
    const searchInput = document.getElementById('search-input')
    if (searchInput) {
      searchInput.focus()
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Searching for:', searchQuery)
    // You can redirect to search results or perform search action here
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      router.back()
    } else if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8"># SEARCH</h1>
      
      <div className="relative mb-12">
        <input
          id="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Hit enter to search or ESC to close ______."
          className="w-full bg-transparent border-b border-black py-2 px-1 text-black placeholder-gray-500 focus:outline-none text-lg"
          autoFocus
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">Search results will appear here...</p>
      </div>
    </div>
  )
}