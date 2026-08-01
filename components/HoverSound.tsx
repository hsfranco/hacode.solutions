'use client'

import { useEffect, useRef } from 'react'

export default function HoverSound() {
  const audioCtxRef    = useRef<AudioContext | null>(null)
  const audioBufferRef = useRef<AudioBuffer | null>(null)
  const fallbackRef    = useRef<HTMLAudioElement | null>(null)
  const playRef        = useRef<() => void>(() => {})

  /* ── Load audio ── */
  useEffect(() => {
    const URL = '/click.wav'
    const load = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const AC = window.AudioContext ?? (window as any).webkitAudioContext
        if (!AC) return
        const ctx = new AC()
        audioCtxRef.current = ctx
        const res = await fetch(URL, { cache: 'force-cache' })
        const raw = await res.arrayBuffer()
        audioBufferRef.current = await ctx.decodeAudioData(raw)
      } catch {
        try {
          const el = new Audio('/click.wav')
          el.volume = 0.5
          el.preload = 'auto'
          fallbackRef.current = el
        } catch { /* fail silently */ }
      }
    }
    load()
  }, [])

  /* ── Play function ── */
  useEffect(() => {
    playRef.current = () => {
      try {
        const ctx = audioCtxRef.current
        const buf = audioBufferRef.current
        if (ctx && buf) {
          if (ctx.state === 'suspended') ctx.resume()
          const src  = ctx.createBufferSource()
          const gain = ctx.createGain()
          src.buffer = buf
          gain.gain.value = 0.5
          src.connect(gain)
          gain.connect(ctx.destination)
          src.start(0)
        } else if (fallbackRef.current) {
          fallbackRef.current.currentTime = 0
          fallbackRef.current.play().catch(() => {})
        }
      } catch { /* fail silently */ }
    }
  })

  /* ── Global hover listener ── */
  useEffect(() => {
    const SELECTOR = 'a, button, article, [role="button"], .marquee-track > div, .path-icon-wrap'
    let lastEl: Element | null = null

    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest(SELECTOR)
      if (target && target !== lastEl) {
        lastEl = target
        playRef.current()
      }
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(SELECTOR) === lastEl) lastEl = null
    }

    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout',  onOut,  { passive: true })
    return () => {
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
    }
  }, [])

  return null
}
