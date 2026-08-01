'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const LOGO_URL     = 'https://hacodesolutions.s3.us-east-1.amazonaws.com/trusty_translate_logo.jpg'
const CARD_BG_URL  = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&fit=crop'
const CARD2_BG_URL = 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=900&q=80&fit=crop'

/* ─── Aurora background ─────────────────────────────────────────────────────── */
function AuroraBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 overflow-hidden pointer-events-none select-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 20%, #111114 0%, transparent 60%), ' +
            'radial-gradient(ellipse 60% 50% at 75% 35%, #0D0D10 0%, transparent 55%), ' +
            'radial-gradient(ellipse 50% 70% at 50% 80%, #16161A 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="aurora-ribbon-1 absolute"
        style={{
          top: '-120px', left: '50%', transform: 'translateX(-50%)',
          width: '760px', height: '480px',
          background: 'radial-gradient(ellipse 65% 55% at 50% 45%, rgba(255,255,255,0.065) 0%, rgba(220,220,228,0.03) 50%, transparent 80%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="aurora-ribbon-2 absolute"
        style={{
          top: '-60px', left: '-80px',
          width: '520px', height: '420px',
          background: 'radial-gradient(ellipse 60% 50% at 55% 40%, rgba(200,200,210,0.055) 0%, rgba(180,180,195,0.02) 55%, transparent 80%)',
          filter: 'blur(110px)',
        }}
      />
      <div
        className="aurora-ribbon-3 absolute"
        style={{
          top: '80px', right: '-100px',
          width: '460px', height: '360px',
          background: 'radial-gradient(ellipse 55% 60% at 45% 45%, rgba(230,230,240,0.045) 0%, transparent 75%)',
          filter: 'blur(100px)',
        }}
      />
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.038 }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  )
}

/* ─── Tech stack data ────────────────────────────────────────────────────────── */
const TECH = [
  {
    name: 'Claude Code',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <rect x="2" y="3.5" width="20" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6 9.5l3.5 3-3.5 3M13 15.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Cursor',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <path d="M5 3l14 9-7 2-3 7L5 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.4"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 12 12)"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.75 14.25L8.5 7.5H7v9h1.5v-7l6.5 8.5h.75v-9H14.25v6.25z"/>
      </svg>
    ),
  },
  {
    name: 'Supabase',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <path d="M13.5 2L4 14h8.5V22L21 10h-8.5L13.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'AWS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <path d="M6.5 14.5c-1.5.8-2.5 1.2-2.5 2.5 0 1 .8 1.5 2 1.5 1.5 0 3-.8 4-2M17.5 14.5c1.5.8 2.5 1.2 2.5 2.5 0 1-.8 1.5-2 1.5-1.5 0-3-.8-4-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M12 5v4M9 7l3-2 3 2M7 12h10M9 17l3 2 3-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Azure',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <path d="M13 3L4 14h6l-2 7 11-11h-6l3-7-3 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 10h8M12 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <path d="M6.5 10c.5-2 2-3 3.5-3 2 0 3 1.5 4 1.5s2-.5 2.5-1.5M6.5 16c.5-2 2-3 3.5-3 2 0 3 1.5 4 1.5s2-.5 2.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M12 2v20M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <ellipse cx="12" cy="7" rx="7" ry="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M5 7v10c0 1.66 3.13 3 7 3s7-1.34 7-3V7" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
        <path d="M12 2L2 20h20L12 2z"/>
      </svg>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <path d="M4 14c0 2.5 2 4 5 4h6c3 0 5-1.5 5-4 0-1-.4-2-1-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <rect x="6" y="8" width="3" height="3" rx=".5" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="10" y="8" width="3" height="3" rx=".5" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="10" y="4" width="3" height="3" rx=".5" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="14" y="8" width="3" height="3" rx=".5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M19 11.5c1 0 2-.5 2-1.5 0-.8-.6-1.4-1.5-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Stripe',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
        <rect x="2" y="5" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6 15h4M15 15h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
]

/* ─── Tech marquee ───────────────────────────────────────────────────────────── */
function TechMarquee() {
  const items = [...TECH, ...TECH]
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
      <p className="font-jetbrains text-[0.55rem] text-[#3A3A40] tracking-[0.18em] uppercase text-center mb-3">
        Built with these technologies
      </p>
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: 'linear-gradient(to right, #0A0A0B, transparent)' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: 'linear-gradient(to left, #0A0A0B, transparent)' }}
          aria-hidden="true"
        />
        <div className="marquee-track flex gap-3 w-max">
          {items.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 font-jetbrains text-[0.65rem] tracking-[0.1em] uppercase shrink-0"
              style={{
                color: '#3A3A40',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                padding: '5px 10px',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── GitHub icon ────────────────────────────────────────────────────────────── */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

/* ─── Tech stamps for Trusty Translate ──────────────────────────────────────── */
const TRUSTY_TECH = [
  'Express.js', 'MySQL', 'AWS S3', 'AWS Textract',
  'AWS SES', 'Telegram', 'Tailwind', 'Stripe',
]

/* ─── Business phases ────────────────────────────────────────────────────────── */
const PHASES = [
  'Digital Software House',
  'AI-Powered Development',
  'Cloud Solutions at Scale',
  'DevSpecs for the AI Era',
  'Ship in Days, Not Months',
]

/* ─── Custom cursor ─────────────────────────────────────────────────────────── */
function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const posRef   = useRef({ x: -100, y: -100 })
  const hovRef   = useRef(false)
  const rafRef   = useRef<number>(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const HOVER_SELECTORS = 'a, button, [role="button"], article, label, input, .marquee-track'

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      const el = document.elementFromPoint(e.clientX, e.clientY)
      hovRef.current = !!(el?.closest(HOVER_SELECTORS))
    }

    const tick = () => {
      const dot = dotRef.current
      if (dot) {
        dot.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%) scale(${hovRef.current ? 2.2 : 1})`
        dot.style.opacity   = hovRef.current ? '0.55' : '1'
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '8px', height: '8px',
        borderRadius: '50%',
        background: '#FFFFFF',
        pointerEvents: 'none',
        zIndex: 99999,
        willChange: 'transform',
        transition: 'transform 0.12s cubic-bezier(0.22,1,0.36,1), opacity 0.15s ease',
        mixBlendMode: 'difference',
      }}
    />
  )
}

/* ─── Loading screen ─────────────────────────────────────────────────────────── */
function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting]   = useState(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    let current = 0
    const total  = 1600
    const steps  = 100
    const delay  = total / steps

    const id = setInterval(() => {
      current += 1
      setProgress(current)
      if (current >= steps) {
        clearInterval(id)
        setTimeout(() => {
          setExiting(true)
          setTimeout(() => onDoneRef.current(), 700)
        }, 250)
      }
    }, delay)

    return () => clearInterval(id)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#0A0A0B',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
        transition: exiting ? 'transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
      }}
    >
      {/* Logo */}
      <div style={{
        width: 64, height: 64, borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Image src={LOGO_URL} alt="" width={50} height={50} priority className="rounded-full object-cover" />
      </div>

      {/* Brand */}
      <span style={{
        fontFamily: 'var(--font-poppins), sans-serif',
        fontWeight: 700, fontSize: '0.85rem',
        letterSpacing: '0.14em', color: '#FFFFFF',
        marginTop: '20px', textTransform: 'uppercase',
      }}>
        HACODE SOLUTIONS
      </span>

      {/* Counter */}
      <span className="font-jetbrains" style={{
        fontSize: '0.6rem', color: '#3A3A40',
        letterSpacing: '0.12em', marginTop: '10px',
      }}>
        {String(progress).padStart(3, '0')}
      </span>

      {/* Progress bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '1px', background: 'rgba(255,255,255,0.05)',
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'rgba(255,255,255,0.25)',
          transition: 'width 0.06s linear',
        }} />
      </div>
    </div>
  )
}

/* ─── Main component ─────────────────────────────────────────────────────────── */
export default function LandingPage() {
  const rootRef  = useRef<HTMLDivElement>(null)
  const logoRef  = useRef<HTMLDivElement>(null)
  const gsapRef  = useRef<{ to: (...args: unknown[]) => void } | null>(null)
  const audioCtxRef    = useRef<AudioContext | null>(null)
  const audioBufferRef = useRef<AudioBuffer | null>(null)
  const [hoveredCard, setHoveredCard]   = useState<number | null>(null)
  const [phaseIdx, setPhaseIdx]         = useState(0)
  const [phaseVisible, setPhaseVisible] = useState(true)
  const [ready, setReady]               = useState(false)

  /* ── Fetch + decode audio into memory on mount ── */
  useEffect(() => {
    const load = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const AC = window.AudioContext ?? (window as any).webkitAudioContext
        if (!AC) return
        const ctx = new AC()
        audioCtxRef.current = ctx
        const res = await fetch(
          'https://hacodesolutions.s3.us-east-1.amazonaws.com/mixkit-single-classic-click-1116.wav',
          { cache: 'force-cache' }
        )
        const raw = await res.arrayBuffer()
        audioBufferRef.current = await ctx.decodeAudioData(raw)
      } catch { /* fail silently */ }
    }
    load()
  }, [])

  /* ── Click sound — zero latency from decoded buffer ── */
  const playClick = () => {
    try {
      const ctx = audioCtxRef.current
      const buf = audioBufferRef.current
      if (!ctx || !buf) return
      if (ctx.state === 'suspended') ctx.resume()
      const src  = ctx.createBufferSource()
      const gain = ctx.createGain()
      src.buffer = buf
      gain.gain.value = 0.5
      src.connect(gain)
      gain.connect(ctx.destination)
      src.start(0)
    } catch { /* fail silently */ }
  }

  /* ── Logo hover ── */
  const handleLogoEnter = () => {
    if (!gsapRef.current || !logoRef.current) return
    gsapRef.current.to(logoRef.current, { scale: 1.18, duration: 0.38, ease: 'back.out(2.5)' })
  }
  const handleLogoLeave = () => {
    if (!gsapRef.current || !logoRef.current) return
    gsapRef.current.to(logoRef.current, { scale: 1, duration: 0.65, ease: 'elastic.out(1, 0.45)' })
  }

  /* ── Entrance animation — runs after loading screen exits ── */
  useEffect(() => {
    if (!ready || !rootRef.current) return
    const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (noMotion) return

    let ctx: { revert: () => void } | undefined

    const run = async () => {
      const { gsap } = await import('gsap')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      gsapRef.current = gsap as any

      ctx = gsap.context(() => {
        gsap.set('.anim-logo',    { opacity: 0, scale: 0.9 })
        gsap.set('.anim-about',   { opacity: 0, y: 18 })
        gsap.set('.anim-marquee', { opacity: 0 })
        gsap.set('.anim-card',    { opacity: 0, y: 28 })
        gsap.set('.anim-footer',  { opacity: 0 })

        const tl = gsap.timeline({ delay: 0.1 })
        tl.to('.anim-logo',    { opacity: 1, scale: 1, duration: 0.95, ease: 'power2.out' })
          .to('.anim-about',   { opacity: 1, y: 0,     duration: 0.80, ease: 'power2.out' }, '-=0.45')
          .to('.anim-marquee', { opacity: 1,            duration: 0.70, ease: 'power2.out' }, '-=0.35')
          .to('.anim-card',    { opacity: 1, y: 0,     duration: 0.85, ease: 'power2.out' }, '-=0.40')
          .to('.anim-footer',  { opacity: 1,            duration: 0.65, ease: 'power2.out' }, '-=0.35')
      }, rootRef)
    }

    run()
    return () => ctx?.revert()
  }, [ready])

  /* ── Phase rotation ── */
  useEffect(() => {
    const noMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (noMotion) return
    const id = setInterval(() => {
      setPhaseVisible(false)
      setTimeout(() => {
        setPhaseIdx(i => (i + 1) % PHASES.length)
        setPhaseVisible(true)
      }, 380)
    }, 3400)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <CustomCursor />
      {!ready && <LoadingScreen onDone={() => setReady(true)} />}
    <div ref={rootRef} className="relative min-h-screen flex flex-col">
      <AuroraBackground />

      <div className="relative z-10 flex flex-col items-center gap-10 px-6 py-16 w-full max-w-[1040px] mx-auto">

        {/* ── Logo + brand ── */}
        <header className="anim-logo flex items-center gap-4">
          <div
            ref={logoRef}
            onMouseEnter={handleLogoEnter}
            onMouseLeave={handleLogoLeave}
            style={{ cursor: 'default', display: 'inline-block', flexShrink: 0 }}
          >
            <div
              className="relative flex items-center justify-center"
              style={{
                width: 64, height: 64,
                borderRadius: '50%',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.14), 0 0 0 6px rgba(255,255,255,0.03)',
                background: 'rgba(255,255,255,0.06)',
              }}
            >
              <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.2)' }} aria-hidden="true" />
              <Image
                src={LOGO_URL}
                alt="HACODE SOLUTIONS"
                width={50}
                height={50}
                priority
                className="rounded-full object-cover"
              />
            </div>
          </div>

          {/* Brand text */}
          <div className="flex flex-col gap-1">
            <span
              className="text-white leading-none uppercase tracking-[0.12em]"
              style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 700, fontSize: '1.0rem' }}
            >
              HACODE SOLUTIONS
            </span>
            <span
              className="font-jetbrains text-[#525258] text-[0.58rem] uppercase tracking-[0.14em] leading-none"
              style={{
                opacity: phaseVisible ? 1 : 0,
                transform: phaseVisible ? 'translateY(0)' : 'translateY(4px)',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
              }}
              aria-live="polite"
            >
              {PHASES[phaseIdx]}
            </span>
          </div>
        </header>

        {/* ── Description ── */}
        <div className="anim-about w-full max-w-[980px] flex flex-col gap-4">
          <p className="font-inter text-[#A1A1A6] text-[0.9rem] leading-[1.75] text-center">
            We build web solutions using{' '}
            <span className="text-[#EDEDED]">Cloud services</span> and{' '}
            <span className="text-[#EDEDED]">AI</span> — turning what used to take months
            into days. Every system we deliver is engineered for speed, clarity, and scale.
          </p>
          <div className="flex items-center gap-3 justify-center">
            <span className="h-px flex-1 max-w-[60px]" style={{ background: 'rgba(255,255,255,0.08)' }} aria-hidden="true" />
            <p className="font-jetbrains text-[0.65rem] text-[#525258] tracking-[0.12em] text-center">
              Ready-to-use AI tools &nbsp;·&nbsp; DevSpecs to build it yourself
            </p>
            <span className="h-px flex-1 max-w-[60px]" style={{ background: 'rgba(255,255,255,0.08)' }} aria-hidden="true" />
          </div>
        </div>

        {/* ── Tech marquee ── */}
        <div className="anim-marquee w-full flex justify-center">
          <TechMarquee />
        </div>

        {/* ── Cards ── */}
        <main className="anim-card w-full max-w-[980px]">
          <section aria-label="Products">
            <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Card 1 — Trusty Translate */}
              <li>
                <article
                  onMouseEnter={() => { setHoveredCard(0); playClick() }}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: '14px',
                    border: `1px solid ${hoveredCard === 0 ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.11)'}`,
                    boxShadow: hoveredCard === 0
                      ? '0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)'
                      : '0 8px 32px rgba(0,0,0,0.5)',
                    transform: hoveredCard === 0 ? 'translateY(-4px)' : 'translateY(0)',
                    transition: 'border-color 0.3s ease, box-shadow 0.35s ease, transform 0.38s cubic-bezier(0.22,1,0.36,1)',
                    cursor: 'default',
                    minHeight: '210px',
                  }}
                >
                  <div aria-hidden="true" style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${CARD_BG_URL})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    filter: 'grayscale(1)',
                    transform: hoveredCard === 0 ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.65s cubic-bezier(0.22,1,0.36,1)',
                  }} />
                  <div aria-hidden="true" style={{
                    position: 'absolute', inset: 0,
                    background: hoveredCard === 0 ? 'rgba(0,0,0,0.60)' : 'rgba(0,0,0,0.76)',
                    transition: 'background 0.35s ease',
                  }} />
                  <div className="relative z-10 flex flex-col justify-between h-full p-7 gap-6" style={{ minHeight: '210px' }}>
                    <div className="flex items-center justify-between">
                      <span className="font-jetbrains text-[0.55rem] text-[#525258] tracking-[0.18em] uppercase">~/products/trusty-translate</span>
                      <div className="flex gap-1.5" aria-hidden="true">
                        <span className="w-2 h-2 rounded-full" style={{ background: hoveredCard === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.14)', transition: 'background 0.3s ease' }} />
                        <span className="w-2 h-2 rounded-full bg-white/[0.07]" />
                        <span className="w-2 h-2 rounded-full bg-white/[0.07]" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-baseline gap-2 font-jetbrains text-[0.7rem] text-[#3A3A40]">
                        <span>$</span><span className="text-[#525258]">./launch</span>
                      </div>
                      <h2 className="font-jetbrains font-semibold text-white text-[1.1rem] tracking-wide leading-none">Trusty Translate</h2>
                      <p className="font-jetbrains text-[0.7rem] text-[#525258] leading-snug">
                        <span className="text-[#2E2E34]">// </span>AI-powered translation for global businesses.
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {TRUSTY_TECH.map(tech => (
                          <span key={tech} className="font-jetbrains text-[0.5rem] tracking-[0.08em] uppercase"
                            style={{
                              padding: '2px 6px',
                              border: '1px solid rgba(255,255,255,0.12)',
                              borderRadius: '3px',
                              color: '#3E3E44',
                              background: 'rgba(255,255,255,0.03)',
                            }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <a href="https://trustytranslate.com" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-jetbrains text-[0.75rem] group"
                        aria-label="Open Trusty Translate"
                        onFocus={() => setHoveredCard(0)} onBlur={() => setHoveredCard(null)}
                        style={{ outline: 'none' }}
                      >
                        <span className="text-[#525258] select-none">&gt;</span>
                        <span className="text-[#EDEDED] group-hover:text-white transition-colors duration-200"
                          style={{ borderBottom: hoveredCard === 0 ? '1px solid rgba(255,255,255,0.35)' : '1px solid transparent', transition: 'border-color 0.25s ease', paddingBottom: '1px' }}>
                          get-it
                        </span>
                        {hoveredCard === 0 && <span className="cursor-blink text-[#EDEDED] select-none">_</span>}
                      </a>
                    </div>
                  </div>
                </article>
              </li>

              {/* Card 2 — FindUs BR */}
              <li>
                <article
                  onMouseEnter={() => { setHoveredCard(1); playClick() }}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: '14px',
                    border: `1px solid ${hoveredCard === 1 ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.11)'}`,
                    boxShadow: hoveredCard === 1
                      ? '0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)'
                      : '0 8px 32px rgba(0,0,0,0.5)',
                    transform: hoveredCard === 1 ? 'translateY(-4px)' : 'translateY(0)',
                    transition: 'border-color 0.3s ease, box-shadow 0.35s ease, transform 0.38s cubic-bezier(0.22,1,0.36,1)',
                    cursor: 'default',
                    minHeight: '210px',
                  }}
                >
                  <div aria-hidden="true" style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${CARD2_BG_URL})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    filter: 'grayscale(1)',
                    transform: hoveredCard === 1 ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.65s cubic-bezier(0.22,1,0.36,1)',
                  }} />
                  <div aria-hidden="true" style={{
                    position: 'absolute', inset: 0,
                    background: hoveredCard === 1 ? 'rgba(0,0,0,0.60)' : 'rgba(0,0,0,0.76)',
                    transition: 'background 0.35s ease',
                  }} />
                  <div className="relative z-10 flex flex-col justify-between h-full p-7 gap-6" style={{ minHeight: '210px' }}>
                    <div className="flex items-center justify-between">
                      <span className="font-jetbrains text-[0.55rem] text-[#525258] tracking-[0.18em] uppercase">~/products/findus-br</span>
                      <div className="flex gap-1.5" aria-hidden="true">
                        <span className="w-2 h-2 rounded-full" style={{ background: hoveredCard === 1 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.14)', transition: 'background 0.3s ease' }} />
                        <span className="w-2 h-2 rounded-full bg-white/[0.07]" />
                        <span className="w-2 h-2 rounded-full bg-white/[0.07]" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-baseline gap-2 font-jetbrains text-[0.7rem] text-[#3A3A40]">
                        <span>$</span><span className="text-[#525258]">./launch</span>
                      </div>
                      <h2 className="font-jetbrains font-semibold text-white text-[1.1rem] tracking-wide leading-none">FindUs BR</h2>
                      <p className="font-jetbrains text-[0.7rem] text-[#525258] leading-snug">
                        <span className="text-[#2E2E34]">// </span>Brazilian marketplace in the USA · token transactions.
                      </p>
                    </div>
                    <div>
                      <a href="https://findusbr.com" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-jetbrains text-[0.75rem] group"
                        aria-label="Open FindUs BR"
                        onFocus={() => setHoveredCard(1)} onBlur={() => setHoveredCard(null)}
                        style={{ outline: 'none' }}
                      >
                        <span className="text-[#525258] select-none">&gt;</span>
                        <span className="text-[#EDEDED] group-hover:text-white transition-colors duration-200"
                          style={{ borderBottom: hoveredCard === 1 ? '1px solid rgba(255,255,255,0.35)' : '1px solid transparent', transition: 'border-color 0.25s ease', paddingBottom: '1px' }}>
                          get-it
                        </span>
                        {hoveredCard === 1 && <span className="cursor-blink text-[#EDEDED] select-none">_</span>}
                      </a>
                    </div>
                  </div>
                </article>
              </li>

            </ul>
          </section>
        </main>

        {/* ── Footer ── */}
        <footer className="anim-footer">
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '16px' }}
          >
            <p className="font-inter text-[0.7rem] text-[#6E6E73] tracking-wide">
              &copy; {new Date().getFullYear()} HACODE SOLUTIONS
            </p>
            <span className="hidden sm:block text-[#2C2C2E] select-none" aria-hidden="true">·</span>
            <nav aria-label="Social media links" className="flex items-center gap-4">
              <a href="https://github.com/HACODE-SOLUTIONS" target="_blank" rel="noopener noreferrer"
                aria-label="GitHub" className="text-[#6E6E73] hover:text-[#EDEDED] transition-colors duration-300">
                <GitHubIcon className="w-[1rem] h-[1rem]" />
              </a>
              <a href="https://www.instagram.com/hacodesolutions/" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram" className="text-[#6E6E73] hover:text-[#EDEDED] transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1rem] h-[1rem]" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </nav>
          </div>
        </footer>

      </div>
    </div>
    </>
  )
}
