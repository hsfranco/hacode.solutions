import type { Metadata } from 'next'
import { Syne, Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const LOGO_URL = 'https://hacodesolutions.s3.us-east-1.amazonaws.com/trusty_translate_logo.jpg'
const SITE_URL = 'https://hacode.solutions'

export const metadata: Metadata = {
  title: 'HACODE SOLUTIONS — DevSpecs for AI Development',
  description:
    'AI tools and DevSpecs built on 13 years of software expertise. Buy ready-to-use AI automation tools or get the exact specs and prompts to build them yourself.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  keywords: [
    'DevSpecs for AI',
    'AI development specifications',
    'AI automation solutions',
    'AI-ready specs',
    'build with AI',
    'AI business automation',
  ],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'HACODE SOLUTIONS',
    title: 'HACODE SOLUTIONS — DevSpecs for AI Development',
    description:
      'AI tools and DevSpecs built on 13 years of software expertise. Buy ready-to-use AI automation tools or get the exact specs and prompts to build them yourself.',
    images: [{ url: LOGO_URL, width: 1200, height: 630, alt: 'HACODE SOLUTIONS — DevSpecs for AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HACODE SOLUTIONS — DevSpecs for AI Development',
    description:
      'AI tools and DevSpecs built on 13 years of software expertise. Buy ready-to-use AI automation tools or get the exact specs and prompts to build them yourself.',
    images: [LOGO_URL],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable} ${jetbrains.variable}`}>
      <body className="font-outfit bg-void text-[#e2e8f0] antialiased">
        {children}
      </body>
    </html>
  )
}
