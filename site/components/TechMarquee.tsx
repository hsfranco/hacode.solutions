// Tech stack marquee — pure CSS animation, no carousel library.
// Duplicate row creates seamless loop. Reduced-motion shows static grid.

const ITEMS = [
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2.1" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.3" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.3" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.3" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M9 8.5v7l3 1.5 3-1.5V10l-3-1.5L9 10" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Express',
    color: '#ffffff',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <path d="M3 7.5h14M3 12h10M3 16.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Python',
    color: '#3776AB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <path
          d="M11.5 2C8.5 2 7 3.5 7 5.5V8h5v1H4.5C3 9 2 10 2 12s1 3 2.5 3H5v-2.5C5 10.5 6.5 9 8.5 9h7C17 9 18 8 18 6.5V5.5C18 3.5 16.5 2 13.5 2H11.5zM10.5 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
          fill="currentColor" opacity="0.85"
        />
        <path
          d="M12.5 22C15.5 22 17 20.5 17 18.5V16h-5v-1h7.5C21 15 22 14 22 12s-1-3-2.5-3H19v2.5C19 13.5 17.5 15 15.5 15h-7C7 15 6 16 6 17.5v1C6 20.5 7.5 22 10.5 22H12.5zM13.5 18.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          fill="currentColor" opacity="0.6"
        />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    color: '#ffffff',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    color: '#FF9900',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <path d="M5 14c-1.5.8-3 1-3 2.5 0 1 .8 1.5 2 1.5 1.5 0 2.5-.5 3.5-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M9.5 8C8 8 7 9 7 10.5S8 13 9.5 13h5c1.5 0 2.5-1 2.5-2.5S16 8 14.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M17 14c1.5.8 3 1 3 2.5 0 1-.8 1.5-2 1.5-1.5 0-2.5-.5-3.5-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M5.5 16.5C7 18 9 19 12 19s5-1 6.5-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Claude Code',
    color: '#D4A96A',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <rect x="2" y="3.5" width="20" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6 9.5l3.5 3-3.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 15.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Cursor',
    color: '#ffffff',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
        <path d="M5 3l14 9-7 1.5L9 21z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function MarqueeItem({ name, icon, color }: typeof ITEMS[0]) {
  return (
    <span
      className="group inline-flex items-center gap-2.5 px-6 py-3 text-[#64748b] hover:text-white transition-colors duration-300 cursor-default select-none"
      style={{ ['--item-color' as string]: color }}
    >
      <span className="transition-colors duration-300 group-hover:text-[var(--item-color)]">
        {icon}
      </span>
      <span className="font-jetbrains text-sm font-medium tracking-wide whitespace-nowrap group-hover:text-[var(--item-color)] transition-colors duration-300">
        {name}
      </span>
    </span>
  )
}

export default function TechMarquee() {
  return (
    <section
      aria-label="Our AI-native tech stack"
      className="relative py-6 border-y border-[#1e293b] overflow-hidden bg-[#0c1020]/50"
    >
      {/* Section label */}
      <p className="text-center font-jetbrains text-[0.65rem] tracking-[0.2em] text-[#475569] uppercase mb-4">
        Our AI-native stack
      </p>

      {/* Gradient edge fades */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#0c1020]/90 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#0c1020]/90 to-transparent" />

      {/* Scrolling track — duplicated for seamless loop */}
      <div className="marquee-wrapper overflow-hidden">
        <div className="marquee-track inline-flex">
          {/* First copy */}
          {ITEMS.map((item) => (
            <MarqueeItem key={`a-${item.name}`} {...item} />
          ))}
          {/* Duplicate for seamless loop */}
          {ITEMS.map((item) => (
            <MarqueeItem key={`b-${item.name}`} {...item} />
          ))}
        </div>
      </div>

      {/* Reduced-motion static grid (hidden by default, shown via CSS media query) */}
      <div
        className="marquee-reduced hidden flex-wrap justify-center gap-2 px-6"
        aria-label="Tech stack"
      >
        {ITEMS.map((item) => (
          <span
            key={item.name}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e293b] text-[#64748b] font-jetbrains text-xs"
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.name}
          </span>
        ))}
      </div>
    </section>
  )
}
