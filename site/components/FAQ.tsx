'use client'

import { useEffect, useRef, useState } from 'react'

const FAQS = [
  {
    q: 'What does HACODE SOLUTIONS do?',
    a: `HACODE SOLUTIONS is an AI-native software company that builds ready-to-use AI tools and DevSpecs — expert development specifications engineered to run on AI. We operate worldwide, serving businesses and developers who want to use AI to build faster and smarter.

We deliver two categories of product: production-ready AI tools you can buy and deploy immediately, and DevSpecs with the exact prompts and playbooks to build those same systems yourself using AI coding tools like Claude Code or Cursor — all backed by 13 years of professional software development experience.`,
  },
  {
    q: 'What are DevSpecs?',
    a: `DevSpecs are expert development specifications engineered by HACODE SOLUTIONS to be executed by AI, based on 13 years of professional software development. A DevSpec is a comprehensive document containing the exact prompts, architecture decisions, implementation steps, and operational context an AI coding tool needs to build a complete, production-ready software system.

Think of a DevSpec as the distilled expertise of a senior developer — encoded in a format AI can execute. You hand the DevSpec to Claude Code, Cursor, or any AI coding assistant, and it builds the system for you step by step.`,
  },
  {
    q: 'What AI tools can I buy?',
    a: `HACODE SOLUTIONS currently offers Trusty Translate — an AI-powered translation tool designed for global businesses that need fast, accurate, context-aware translations. More tools are in active development.

Each tool is production-ready and immediately deployable. When you buy a tool, you get a working product. When you buy the corresponding DevSpec, you get the full blueprint to build it yourself with AI.`,
  },
  {
    q: 'How do the prompt packs and playbooks work?',
    a: `Our prompt packs and playbooks are structured guides containing the exact AI prompts, workflow steps, and architectural context needed to replicate our AI-powered systems. You buy the playbook, load the prompts into your preferred AI coding tool (Claude Code, Cursor, ChatGPT, etc.), and follow the step-by-step guide to build the system yourself.

Each playbook includes: the precise prompts for each stage, the correct order to run them, what to verify before proceeding, and how to customise the output for your use case. It is senior-level engineering know-how, packaged for AI execution.`,
  },
  {
    q: 'Do I need technical skills?',
    a: `It depends on what you are building. Our ready-to-use AI tools require minimal technical knowledge — purchase, configure credentials if needed, and deploy using the provided documentation.

For DevSpecs and playbooks, basic familiarity with web development concepts and AI coding tools like Claude Code or Cursor is helpful. Our guides are intentionally detailed enough that motivated non-experts can follow them. If you can describe what you want to build, our DevSpecs give you the exact instructions to make AI build it.`,
  },
  {
    q: 'How do I get started?',
    a: `Getting started is straightforward. Browse the Services section on this page to find the product that fits your needs.

If you want something working immediately, buy one of our ready-to-use AI tools and deploy it today. If you want to build your own AI system, purchase a DevSpec bundle and use your preferred AI coding tool to execute it step by step. Have questions? Reach out via the contact links below — we respond quickly.`,
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item border-b border-[#1e293b] last:border-0`}>
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-btn-${index}`}
        aria-controls={`faq-body-${index}`}
      >
        <span className="font-syne font-semibold text-[0.95rem] text-[#e2e8f0] group-hover:text-[#00e5a0] transition-colors duration-200 leading-snug">
          {q}
        </span>
        <span
          className={`faq-arrow flex-shrink-0 w-5 h-5 text-[#64748b] group-hover:text-[#00e5a0] transition-colors duration-200 mt-0.5 ${open ? 'open' : ''}`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-body-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        className={`faq-body ${open ? 'open' : ''}`}
      >
        <div>
          <div className="pb-5 pr-8">
            {a.split('\n\n').map((para, i) => (
              <p key={i} className={`text-[0.9rem] text-[#94a3b8] leading-relaxed ${i > 0 ? 'mt-3' : ''}`}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
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
        gsap.set('.faq-heading', { opacity: 0, y: 25 })
        gsap.set('.faq-item', { opacity: 0, y: 20 })

        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top 82%',
          once: true,
          onEnter: () => {
            gsap.to('.faq-heading', {
              opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            })
            gsap.to('.faq-item', {
              opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.1,
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
      id="faq"
      className="relative py-24 px-6 border-t border-[#1e293b]"
      aria-labelledby="faq-heading"
    >
      {/* Subtle bg glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#38bdf8]/3 blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="faq-heading text-center mb-14">
          <p className="font-jetbrains text-[0.65rem] tracking-[0.2em] text-[#38bdf8] uppercase mb-3">FAQ</p>
          <h2 id="faq-heading" className="font-syne font-extrabold text-[2rem] md:text-[2.5rem] text-[#f0f6fc] leading-tight mb-4">
            Questions? Answered.
          </h2>
          <p className="text-[#64748b] text-[0.95rem]">
            Everything you need to know about HACODE SOLUTIONS, DevSpecs, and our AI tools.
          </p>
        </div>

        <div className="rounded-2xl bg-[#0f1629] border border-[#1e293b] px-6 divide-y divide-[#1e293b]">
          {FAQS.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
