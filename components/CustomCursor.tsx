'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -100, y: -100 })
  const hovRef = useRef(false)
  const rafRef = useRef<number>(0)

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
        dot.style.opacity = hovRef.current ? '0.55' : '1'
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
