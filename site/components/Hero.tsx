'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (noMotion) return

    let ctx: { revert: () => void } | undefined

    const run = async () => {
      const { gsap } = await import('gsap')
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.15 })

        gsap.set(['.hero-tag', '.hero-h1', '.hero-sub', '.hero-ctas', '.hero-strip'], {
          opacity: 0,
        })
        gsap.set(['.hero-tag', '.hero-h1', '.hero-sub', '.hero-ctas'], { y: 30 })

        tl.to('.hero-tag', { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' })
          .to('.hero-h1',  { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.3')
          .to('.hero-sub', { opacity: 1, y: 0, duration: 0.6,  ease: 'power3.out' }, '-=0.4')
          .to('.hero-ctas',{ opacity: 1, y: 0, duration: 0.5,  ease: 'power3.out' }, '-=0.35')
          .to('.hero-strip',{ opacity: 1,       duration: 0.65, ease: 'power2.out' }, '-=0.25')
      }, ref)
    }

    run()
    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
      aria-labelledby="hero-heading"
    >
      {/* Ambient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[540px] h-[540px] rounded-full bg-[#00e5a0]/5 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[420px] h-[420px] rounded-full bg-[#38bdf8]/5 blur-[110px]" />
        <div className="absolute top-2/3 right-1/5 w-52 h-52 rounded-full bg-[#00e5a0]/4 blur-[70px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20 pb-36">
        {/* Eyebrow tag */}
        <div className="hero-tag inline-flex items-center gap-2.5 font-jetbrains text-xs text-[#00e5a0] bg-[#00e5a0]/8 border border-[#00e5a0]/20 rounded-full px-5 py-2 mb-10 tracking-[0.14em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5a0] animate-pulse" aria-hidden="true" />
          13 Years of Expertise · Now AI-Powered
        </div>

        {/* H1 */}
        <h1
          id="hero-heading"
          className="hero-h1 font-syne font-extrabold leading-[1.04] tracking-[-0.02em] text-[#f0f6fc] mb-7"
          style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.25rem)' }}
        >
          We turned{' '}
          <span className="text-[#00e5a0]">13 years of code</span>
          <br className="hidden sm:block" />
          {' '}into specs{' '}
          <span className="relative inline-block">
            AI can build.
            <svg
              aria-hidden="true"
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 5 Q75 1 150 5 Q225 9 298 5"
                stroke="url(#ul)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="ul" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00e5a0" />
                  <stop offset="1" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub text-[1.1rem] md:text-[1.22rem] text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-12">
          HACODE SOLUTIONS delivers ready-to-use AI tools <em>and</em> the exact DevSpecs,
          prompts, and playbooks to replicate them yourself — backed by senior-level engineering.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="group inline-flex items-center gap-2.5 bg-[#00e5a0] text-[#060810] font-syne font-bold px-8 py-3.5 rounded-xl text-[0.95rem] tracking-wide hover:bg-[#00ffb3] hover:shadow-[0_0_30px_rgba(0,229,160,0.5)] transition-all duration-200 hover:scale-[1.025]"
          >
            Explore DevSpecs
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#faq"
            className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#e2e8f0] font-medium px-7 py-3.5 rounded-xl border border-[#1e293b] hover:border-[#00e5a0]/35 hover:bg-[#00e5a0]/5 transition-all duration-200 text-sm"
          >
            How it works
          </a>
        </div>
      </div>

      {/* Credibility strip */}
      <div className="hero-strip absolute bottom-0 left-0 right-0 border-t border-[#1e293b]/80">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
          {[
            '13+ years of development experience',
            'AI-native systems',
            'Tools + DevSpecs',
          ].map((item, i, arr) => (
            <span key={item} className="flex items-center">
              <span className="flex items-center gap-2 font-jetbrains text-xs text-[#64748b] px-5">
                <span className="text-[#00e5a0] text-[0.55rem]" aria-hidden="true">◆</span>
                {item}
              </span>
              {i < arr.length - 1 && (
                <span className="hidden sm:block text-[#1e293b] select-none" aria-hidden="true">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
