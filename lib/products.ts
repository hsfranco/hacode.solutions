export type Product = {
  slug: string
  name: string
  tagline: string
  description: string
  liveUrl: string
  bgUrl: string

  metrics: { label: string; value: string; sub: string }[]

  features: { title: string; body: string }[]

  stack: { name: string; role: string }[]

  timeline: { phase: string; duration: string; tasks: string[] }[]

  costs: { label: string; range: string; note: string }[]
}

export const PRODUCTS: Record<string, Product> = {
  'trusty-translate': {
    slug: 'trusty-translate',
    name: 'Trusty Translate',
    tagline: 'AI-powered document translation for global businesses.',
    description:
      'Trusty Translate automates the entire document translation pipeline. Users upload PDFs, images, or DOCX files; AWS Textract extracts the content; an AI engine translates and formats it; and the result lands in the client\'s inbox within minutes. Stripe handles subscription billing, Telegram sends real-time status updates, and every file is stored and version-tracked on S3.',
    liveUrl: 'https://trustytranslate.com',
    bgUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&fit=crop',

    metrics: [
      { label: 'Time saved per document', value: '95%', sub: '2–5 days → ~15 min' },
      { label: 'Monthly ops cost', value: '$180', sub: 'at 500 docs/mo' },
      { label: 'Delivery timeline', value: '6–8 wks', sub: 'full implementation' },
      { label: 'Uptime target', value: '99.9%', sub: 'AWS-hosted' },
    ],

    features: [
      { title: 'Document ingestion', body: 'Accepts PDF, DOCX, and image uploads. AWS Textract handles OCR for scanned files automatically.' },
      { title: 'AI translation engine', body: 'Multi-language support with context-aware translation that preserves formatting, tables, and document structure.' },
      { title: 'Automated delivery', body: 'Translated files delivered via email (AWS SES) with a Telegram bot notification for real-time status.' },
      { title: 'Subscription billing', body: 'Stripe integration for tiered plans — pay-per-document or monthly volume subscriptions.' },
      { title: 'Admin dashboard', body: 'Full audit trail, per-client usage reports, and manual override for edge cases.' },
      { title: 'Secure file storage', body: 'All source and output files stored on S3 with signed URLs and automatic expiry.' },
    ],

    stack: [
      { name: 'Express.js', role: 'API server & routing' },
      { name: 'MySQL', role: 'Relational data & audit logs' },
      { name: 'AWS S3', role: 'File storage' },
      { name: 'AWS Textract', role: 'OCR & document parsing' },
      { name: 'AWS SES', role: 'Transactional email' },
      { name: 'Telegram Bot API', role: 'Real-time notifications' },
      { name: 'Stripe', role: 'Billing & subscriptions' },
      { name: 'Tailwind CSS', role: 'Frontend UI' },
    ],

    timeline: [
      { phase: 'Discovery & architecture', duration: '1 week', tasks: ['Requirements mapping', 'Data model design', 'AWS environment setup'] },
      { phase: 'Core pipeline', duration: '2 weeks', tasks: ['File upload flow', 'Textract integration', 'AI translation connector'] },
      { phase: 'Billing & notifications', duration: '1 week', tasks: ['Stripe plans & webhooks', 'SES email templates', 'Telegram bot'] },
      { phase: 'Admin & dashboard', duration: '1 week', tasks: ['Usage reports', 'Client management panel', 'Audit logging'] },
      { phase: 'QA & launch', duration: '1–3 weeks', tasks: ['Load testing', 'Security review', 'Production deploy'] },
    ],

    costs: [
      { label: 'AWS Textract', range: '$30–$120/mo', note: 'Per-page pricing, scales with volume' },
      { label: 'AWS S3 + SES', range: '$10–$40/mo', note: 'Storage + email delivery' },
      { label: 'Server / hosting', range: '$20–$60/mo', note: 'EC2 or equivalent Node host' },
      { label: 'AI translation API', range: '$40–$180/mo', note: 'Token-based, scales per word count' },
      { label: 'Stripe fees', range: '2.9% + $0.30', note: 'Per successful transaction' },
    ],
  },

  'findus-br': {
    slug: 'findus-br',
    name: 'FindUs BR',
    tagline: 'The largest Brazilian marketplace in the USA.',
    description:
      'FindUs BR is a community-first marketplace connecting Brazilian businesses, services, and consumers across the United States. Listings span food, beauty, legal services, real estate, and more. Transactions are settled via tokenized payments for fast cross-border transfers, and the platform handles geolocation search, verified seller profiles, and escrow-style trust mechanics.',
    liveUrl: 'https://findusbr.com',
    bgUrl: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1200&q=80&fit=crop',

    metrics: [
      { label: 'Time to find trusted vendor', value: '90%', sub: 'Hours of search → minutes' },
      { label: 'Monthly ops cost', value: '$320', sub: 'at 1k active listings' },
      { label: 'Delivery timeline', value: '10–14 wks', sub: 'full implementation' },
      { label: 'Transaction speed', value: '<2 min', sub: 'token settlement' },
    ],

    features: [
      { title: 'Geo-based discovery', body: 'Smart search by city, state, or ZIP code. Sellers appear ranked by proximity and community rating.' },
      { title: 'Token transactions', body: 'Payments settled via tokenized balance — fast, low-fee cross-border transfers without wire delays.' },
      { title: 'Verified seller profiles', body: 'KYC-light verification flow with document upload and automated identity checks.' },
      { title: 'Category marketplace', body: 'Food, beauty, legal, real estate, events — structured categories with rich listing templates.' },
      { title: 'Escrow trust layer', body: 'Funds held in escrow until buyer confirms delivery. Dispute resolution built in.' },
      { title: 'Community ratings', body: 'Star ratings and written reviews with moderation queue for seller accountability.' },
    ],

    stack: [
      { name: 'Next.js', role: 'Frontend & SSR' },
      { name: 'Node.js / Express', role: 'API & business logic' },
      { name: 'PostgreSQL', role: 'Relational data & search' },
      { name: 'Token / blockchain layer', role: 'Payment settlement' },
      { name: 'AWS S3', role: 'Media & document storage' },
      { name: 'Stripe / on-ramp', role: 'Fiat-to-token conversion' },
      { name: 'Algolia / pgvector', role: 'Search & recommendations' },
      { name: 'Tailwind CSS', role: 'Frontend UI' },
    ],

    timeline: [
      { phase: 'Discovery & architecture', duration: '1–2 weeks', tasks: ['Marketplace data model', 'Token flow design', 'Auth & KYC strategy'] },
      { phase: 'Core marketplace', duration: '3 weeks', tasks: ['Listings CRUD', 'Geo search', 'Seller & buyer profiles'] },
      { phase: 'Payments & escrow', duration: '2 weeks', tasks: ['Token wallet integration', 'Escrow logic', 'Fiat on-ramp'] },
      { phase: 'Trust & moderation', duration: '2 weeks', tasks: ['KYC flow', 'Ratings & reviews', 'Dispute system'] },
      { phase: 'QA & launch', duration: '2–3 weeks', tasks: ['Security audit', 'Performance tuning', 'Production deploy'] },
    ],

    costs: [
      { label: 'Hosting (frontend + API)', range: '$60–$150/mo', note: 'Vercel + Node server' },
      { label: 'Database (PostgreSQL)', range: '$20–$80/mo', note: 'Managed DB, scales with rows' },
      { label: 'AWS S3 + CDN', range: '$15–$50/mo', note: 'Media storage + delivery' },
      { label: 'Search (Algolia)', range: '$0–$100/mo', note: 'Free tier covers early stage' },
      { label: 'Token infrastructure', range: '$50–$200/mo', note: 'Node RPC + gas costs' },
    ],
  },
}

export function getProduct(slug: string): Product | null {
  return PRODUCTS[slug] ?? null
}
