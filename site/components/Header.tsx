'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const LOGO_URL = 'https://hacodesolutions.s3.us-east-1.amazonaws.com/trusty_translate_logo.jpg'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#social' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#060810]/90 backdrop-blur-md border-b border-[#1e293b]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group" aria-label="HACODE SOLUTIONS — home">
          <div className="w-9 h-9 rounded-lg bg-white/95 p-0.5 flex items-center justify-center overflow-hidden shadow-[0_0_12px_rgba(0,229,160,0.12)] group-hover:shadow-[0_0_22px_rgba(0,229,160,0.32)] transition-shadow duration-300">
            <Image
              src={LOGO_URL}
              alt="HACODE SOLUTIONS logo"
              width={36}
              height={36}
              className="object-contain w-full h-full rounded"
              priority
            />
          </div>
          <span className="font-syne font-bold text-[0.9rem] tracking-[0.18em] text-[#e2e8f0] uppercase">
            HACODE<span className="text-[#00e5a0]">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
          {NAV.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-[#94a3b8] hover:text-[#e2e8f0] rounded-lg hover:bg-[#1e293b]/60 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#services"
            className="ml-3 px-5 py-2 text-sm font-syne font-bold text-[#060810] bg-[#00e5a0] rounded-lg hover:bg-[#00ffb3] hover:shadow-[0_0_18px_rgba(0,229,160,0.45)] transition-all duration-200 hover:scale-[1.02]"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#94a3b8] hover:text-[#e2e8f0] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#1e293b] bg-[#060810]/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1"
        >
          {NAV.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-sm font-medium text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#1e293b]/60 rounded-lg transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="mt-2 px-3 py-3 text-sm font-syne font-bold text-center text-[#060810] bg-[#00e5a0] rounded-lg"
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  )
}
