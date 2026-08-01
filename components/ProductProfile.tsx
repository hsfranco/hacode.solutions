'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/products'

/* ─── Section wrapper ─────────────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="w-full flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="font-jetbrains text-[0.55rem] text-[#3A3A40] tracking-[0.18em] uppercase select-none">
          $&nbsp;./
        </span>
        <h2 className="font-jetbrains text-[0.7rem] tracking-[0.14em] uppercase text-[#525258]">{title}</h2>
        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
      </div>
      {children}
    </section>
  )
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function ProductProfile({ product }: { product: Product }) {
  const [mounted, setMounted] = useState(false)
  const [buyOpen, setBuyOpen] = useState<'full' | 'specs' | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  return (
    <div
      ref={rootRef}
      style={{ backgroundColor: '#0A0A0B', color: '#EDEDED', minHeight: '100vh' }}
    >
      {/* ── Aurora background ── */}
      <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div className="aurora-ribbon-1" style={{
          position: 'absolute', top: '-20%', left: '-10%',
          width: '70%', height: '60%',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
        }} />
        <div className="aurora-ribbon-2" style={{
          position: 'absolute', bottom: '10%', right: '-15%',
          width: '60%', height: '55%',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 70%)',
        }} />
        {/* dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[860px] mx-auto px-6 py-14 flex flex-col gap-16">

        {/* ── Back nav ── */}
        <nav>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-jetbrains text-[0.65rem] tracking-[0.1em] text-[#525258] hover:text-[#EDEDED] transition-colors duration-200"
          >
            <span>←</span>
            <span>~/hacode.solutions</span>
          </Link>
        </nav>

        {/* ── Hero ── */}
        <header className="flex flex-col gap-4">
          <span className="font-jetbrains text-[0.55rem] tracking-[0.18em] uppercase text-[#3A3A40]">
            ~/products/{product.slug}
          </span>

          {/* Background image strip */}
          <div className="relative w-full overflow-hidden rounded-xl" style={{ height: 180 }}>
            <Image
              src={product.bgUrl}
              alt=""
              fill
              sizes="860px"
              priority
              style={{ objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(1)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.72)' }} />
            <div className="absolute inset-0 flex flex-col justify-end p-7 gap-1">
              <h1 className="font-jetbrains font-semibold text-white text-[1.6rem] tracking-wide leading-none">
                {product.name}
              </h1>
              <p className="font-inter text-[0.82rem] text-[#A1A1A6] leading-snug max-w-[520px]">
                {product.tagline}
              </p>
            </div>
          </div>
        </header>

        {/* ── Metrics bar ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {product.metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col gap-1 px-4 py-4 rounded-xl"
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
            >
              <span className="font-cormorant text-[2rem] font-light text-white leading-none">{m.value}</span>
              <span className="font-jetbrains text-[0.55rem] tracking-[0.08em] uppercase text-[#525258]">{m.label}</span>
              <span className="font-inter text-[0.65rem] text-[#3A3A40] mt-0.5">{m.sub}</span>
            </div>
          ))}
        </div>

        {/* ── What it does ── */}
        <Section title="What it does">
          <p className="font-inter text-[0.88rem] text-[#A1A1A6] leading-[1.8]">
            {product.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
            {product.features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-1.5 px-4 py-4 rounded-lg"
                style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.015)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-jetbrains text-[0.5rem] text-[#3A3A40] select-none">▸</span>
                  <span className="font-inter text-[0.78rem] font-medium text-[#EDEDED]">{f.title}</span>
                </div>
                <p className="font-inter text-[0.72rem] text-[#525258] leading-relaxed pl-4">{f.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Tech stack ── */}
        <Section title="Tech stack">
          <div className="flex flex-wrap gap-2">
            {product.stack.map((s) => (
              <div
                key={s.name}
                className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg"
                style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.02)' }}
              >
                <span className="font-jetbrains text-[0.65rem] text-[#EDEDED] tracking-wide">{s.name}</span>
                <span className="font-inter text-[0.6rem] text-[#3A3A40]">{s.role}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Delivery timeline ── */}
        <Section title="Delivery timeline">
          <div className="flex flex-col gap-0">
            {product.timeline.map((phase, i) => (
              <div key={phase.phase} className="flex gap-4">
                {/* line + dot */}
                <div className="flex flex-col items-center" style={{ width: 20, flexShrink: 0 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%', marginTop: 4, flexShrink: 0,
                    background: '#EDEDED',
                    boxShadow: '0 0 0 3px rgba(237,237,237,0.08)',
                  }} />
                  {i < product.timeline.length - 1 && (
                    <div style={{ flex: 1, width: 1, background: 'rgba(255,255,255,0.08)', marginTop: 4 }} />
                  )}
                </div>
                {/* content */}
                <div className="flex flex-col gap-1.5 pb-8">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-inter text-[0.8rem] font-medium text-[#EDEDED]">{phase.phase}</span>
                    <span className="font-jetbrains text-[0.55rem] text-[#3A3A40] tracking-[0.1em]">{phase.duration}</span>
                  </div>
                  <ul className="flex flex-col gap-0.5">
                    {phase.tasks.map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <span className="font-jetbrains text-[0.5rem] text-[#3A3A40] select-none">–</span>
                        <span className="font-inter text-[0.7rem] text-[#525258]">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Cost of operations ── */}
        <Section title="Cost of operations">
          <div className="flex flex-col gap-2">
            {product.costs.map((c) => (
              <div
                key={c.label}
                className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg"
                style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.015)' }}
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-inter text-[0.78rem] text-[#EDEDED]">{c.label}</span>
                  <span className="font-inter text-[0.65rem] text-[#3A3A40]">{c.note}</span>
                </div>
                <span className="font-jetbrains text-[0.7rem] text-[#A1A1A6] shrink-0">{c.range}</span>
              </div>
            ))}
          </div>
          <p className="font-inter text-[0.65rem] text-[#3A3A40] leading-relaxed">
            Estimates based on moderate production load. Actual costs scale with usage volume.
          </p>
        </Section>

        {/* ── Buy CTA ── */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <span className="font-jetbrains text-[0.55rem] text-[#3A3A40] tracking-[0.12em] uppercase">acquire</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Implementation */}
            <div
              className="flex flex-col gap-4 px-6 py-6 rounded-xl"
              style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="flex flex-col gap-1">
                <span className="font-jetbrains text-[0.55rem] text-[#3A3A40] tracking-[0.12em] uppercase">01</span>
                <h3 className="font-inter text-[0.95rem] font-semibold text-white">Full Implementation</h3>
                <p className="font-inter text-[0.72rem] text-[#525258] leading-relaxed">
                  We scope, build, and ship the entire system. Cloud infrastructure, AI integrations, billing — fully operational in {product.timeline[product.timeline.length - 1]?.duration ?? '8 weeks'}.
                </p>
              </div>
              <ul className="flex flex-col gap-1">
                {['Complete source code', 'Production deployment', 'AWS / infra setup', '30-day support window'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="font-jetbrains text-[0.5rem] text-[#525258]">✓</span>
                    <span className="font-inter text-[0.7rem] text-[#A1A1A6]">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hallanfranco@gmail.com?subject=Full Implementation — ${product.name}"
                className="inline-flex items-center justify-center gap-2 font-jetbrains text-[0.7rem] tracking-[0.08em] uppercase px-4 py-2.5 rounded-lg transition-all duration-200"
                style={{ background: '#FFFFFF', color: '#0A0A0B' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.88)')}
                onMouseLeave={e => (e.currentTarget.style.background = '#FFFFFF')}
              >
                Get a quote →
              </a>
            </div>

            {/* DevSpecs Only */}
            <div
              className="flex flex-col gap-4 px-6 py-6 rounded-xl"
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.015)' }}
            >
              <div className="flex flex-col gap-1">
                <span className="font-jetbrains text-[0.55rem] text-[#3A3A40] tracking-[0.12em] uppercase">02</span>
                <h3 className="font-inter text-[0.95rem] font-semibold text-white">DevSpecs Only</h3>
                <p className="font-inter text-[0.72rem] text-[#525258] leading-relaxed">
                  Get the full prompt blueprints, architecture decisions, and step-by-step specs. Build it yourself with any AI coding tool.
                </p>
              </div>
              <ul className="flex flex-col gap-1">
                {['Full prompt library', 'Architecture diagrams', 'Environment & config guide', 'AI tool instructions'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="font-jetbrains text-[0.5rem] text-[#525258]">✓</span>
                    <span className="font-inter text-[0.7rem] text-[#A1A1A6]">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:hallanfranco@gmail.com?subject=DevSpecs — ${product.name}`}
                className="inline-flex items-center justify-center gap-2 font-jetbrains text-[0.7rem] tracking-[0.08em] uppercase px-4 py-2.5 rounded-lg transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#EDEDED' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                Buy DevSpecs →
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/" className="font-jetbrains text-[0.6rem] text-[#3A3A40] hover:text-[#525258] transition-colors duration-200">
            ← back to hacode.solutions
          </Link>
          <a href={product.liveUrl} target="_blank" rel="noopener noreferrer"
            className="font-jetbrains text-[0.6rem] text-[#3A3A40] hover:text-[#525258] transition-colors duration-200">
            {product.liveUrl.replace('https://', '')} ↗
          </a>
        </footer>

      </div>
    </div>
  )
}
