'use client'

import { useEffect, useRef } from 'react'

// ─── Data ──────────────────────────────────────────────────────────────────────

const TOOLS = [
  {
    name: 'Trusty Translate',
    tagline: 'AI-powered translation for global businesses — fast, accurate, and context-aware.',
    ctaLabel: 'Get it',
    ctaHref: '#', // TODO: replace with purchase URL
    githubHref: 'https://github.com/hacode-solutions/trusty-translate',
    badge: 'Live',
  },
]

const DEVSPECS = [
  {
    name: 'DevSpec Starter Bundle',
    tagline:
      'Complete AI development specification with the exact prompts to build your first AI tool using Claude Code or Cursor.',
    ctaLabel: 'Get DevSpec',
    ctaHref: '#', // TODO: replace with purchase URL
    badge: 'Popular',
  },
  {
    name: 'Ops Automation Playbook',
    tagline:
      'Step-by-step guide for building smart, AI-powered operations and automation systems for your business.',
    ctaLabel: 'Get Playbook',
    ctaHref: '#', // TODO: replace with purchase URL
    badge: null,
  },
  {
    name: 'Prompt Pack Pro',
    tagline:
      '50+ battle-tested AI prompts for development workflows, code reviews, and system architecture — ready to paste.',
    ctaLabel: 'Get Prompts',
    ctaHref: '#', // TODO: replace with purchase URL
    badge: 'New',
  },
]

// ─── GitHub icon ───────────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

// ─── Card components ───────────────────────────────────────────────────────────

function ToolCard({
  name,
  tagline,
  ctaLabel,
  ctaHref,
  githubHref,
  badge,
}: typeof TOOLS[0]) {
  return (
    <article className="service-card card-hover relative flex flex-col gap-5 p-6 rounded-2xl bg-[#0f1629] border border-[#1e293b]">
      {badge && (
        <span className="absolute top-5 right-5 font-jetbrains text-[0.6rem] tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#00e5a0]/12 text-[#00e5a0] border border-[#00e5a0]/20">
          {badge}
        </span>
      )}
      <div className="w-10 h-10 rounded-xl bg-[#00e5a0]/10 border border-[#00e5a0]/20 flex items-center justify-center" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#00e5a0]" fill="none">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="font-syne font-bold text-[1.05rem] text-[#e2e8f0] mb-2">{name}</h3>
        <p className="text-sm text-[#64748b] leading-relaxed">{tagline}</p>
      </div>
      <div className="flex items-center gap-2 pt-1">
        <a
          href={ctaHref}
          className="flex-1 text-center font-syne font-bold text-sm py-2.5 px-4 rounded-lg bg-[#00e5a0] text-[#060810] hover:bg-[#00ffb3] hover:shadow-[0_0_16px_rgba(0,229,160,0.4)] transition-all duration-200"
        >
          {ctaLabel}
        </a>
        {githubHref && (
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} GitHub repository`}
            className="p-2.5 rounded-lg border border-[#1e293b] text-[#64748b] hover:text-[#e2e8f0] hover:border-[#475569] transition-all duration-200"
          >
            <GitHubIcon />
          </a>
        )}
      </div>
    </article>
  )
}

function SpecCard({
  name,
  tagline,
  ctaLabel,
  ctaHref,
  badge,
}: typeof DEVSPECS[0]) {
  return (
    <article className="service-card card-hover relative flex flex-col gap-5 p-6 rounded-2xl bg-[#0f1629] border border-[#1e293b]">
      {badge && (
        <span className="absolute top-5 right-5 font-jetbrains text-[0.6rem] tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
          {badge}
        </span>
      )}
      <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#38bdf8]" fill="none">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="font-syne font-bold text-[1.05rem] text-[#e2e8f0] mb-2">{name}</h3>
        <p className="text-sm text-[#64748b] leading-relaxed">{tagline}</p>
      </div>
      <a
        href={ctaHref}
        className="text-center font-syne font-bold text-sm py-2.5 px-4 rounded-lg border border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/60 transition-all duration-200"
      >
        {ctaLabel}
      </a>
    </article>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────

export default function Services() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (noMotion) return

    let ctx: { revert: () => void } | undefined

    const run = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.set('.services-heading', { opacity: 0, y: 25 })
        gsap.set('.service-card', { opacity: 0, y: 30 })

        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top 82%',
          once: true,
          onEnter: () => {
            gsap.to('.services-heading', {
              opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            })
            gsap.to('.service-card', {
              opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out', delay: 0.1,
            })
          },
        })
      }, ref)
    }

    run()
    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-24 px-6"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="services-heading text-center mb-16">
          <p className="font-jetbrains text-[0.65rem] tracking-[0.2em] text-[#00e5a0] uppercase mb-3">Products &amp; Services</p>
          <h2 id="services-heading" className="font-syne font-extrabold text-[2rem] md:text-[2.6rem] text-[#f0f6fc] leading-tight mb-4">
            Buy the tool. Or get the specs<br className="hidden md:block" /> to build it yourself.
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto text-[0.95rem] leading-relaxed">
            HACODE SOLUTIONS packages 13 years of engineering expertise into ready-to-use AI tools
            and the exact DevSpecs that power them.
          </p>
        </div>

        {/* Ready-to-Use Tools */}
        <div className="mb-16">
          <h2 className="font-syne font-bold text-[1.1rem] text-[#e2e8f0] mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-[#00e5a0]" aria-hidden="true" />
            Ready-to-Use AI Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map((t) => <ToolCard key={t.name} {...t} />)}
          </div>
        </div>

        {/* DevSpecs */}
        <div>
          <h2 className="font-syne font-bold text-[1.1rem] text-[#e2e8f0] mb-2 flex items-center gap-3">
            <span className="w-6 h-px bg-[#38bdf8]" aria-hidden="true" />
            DevSpecs, Prompts &amp; Playbooks
          </h2>
          <p className="text-[#64748b] text-sm mb-6 ml-9">
            Expert specs, prompt packs, and step-by-step guides — replicate our AI workflows yourself.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEVSPECS.map((s) => <SpecCard key={s.name} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
