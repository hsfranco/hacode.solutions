import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import HoverSound from '@/components/HoverSound'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const LOGO_URL = '/logo.webp'
const SITE_URL = 'https://hacode.solutions'
const TITLE    = 'HACODE SOLUTIONS — DevSpecs for AI'
const DESC     = 'AI tools and DevSpecs built on 13 years of engineering. Buy ready-to-use AI tools or the exact specs to build them yourself.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  keywords: ['DevSpecs for AI', 'AI development specifications', 'AI automation solutions', 'AI tools for business'],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'HACODE SOLUTIONS',
    title: TITLE,
    description: DESC,
    images: [{ url: LOGO_URL, width: 1200, height: 630, alt: 'HACODE SOLUTIONS — DevSpecs for AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [LOGO_URL],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: LOGO_URL,
    shortcut: LOGO_URL,
    apple: LOGO_URL,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body
        className="font-inter antialiased overflow-x-hidden"
        style={{ backgroundColor: '#0A0A0B', color: '#EDEDED' }}
      >
        <CustomCursor />
        <HoverSound />
        {children}
      </body>
    </html>
  )
}
