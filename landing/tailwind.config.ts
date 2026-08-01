import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        jetbrains: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        base: '#0A0A0B',
        'text-primary': '#FFFFFF',
        'text-body': '#EDEDED',
        'text-secondary': '#A1A1A6',
        'text-muted': '#6E6E73',
        'border-hairline': 'rgba(255,255,255,0.14)',
        'border-active': 'rgba(255,255,255,0.26)',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
    },
  },
  plugins: [],
}

export default config
