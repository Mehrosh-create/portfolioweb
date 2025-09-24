// src/components/Global/Footer.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')



  return (
    <footer
      className="text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/Home_Newsletter_Background-2-scaled.jpg')" }}
    >
      {/* content unchanged */}
    </footer>
  )
}

export default Footer
