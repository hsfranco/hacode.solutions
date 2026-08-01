const SITE_URL = 'https://hacode.solutions'
const LOGO_URL = 'https://hacodesolutions.s3.us-east-1.amazonaws.com/trusty_translate_logo.jpg'

const org = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: 'HACODE SOLUTIONS',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: LOGO_URL },
  description:
    'HACODE SOLUTIONS builds DevSpecs — expert development specifications engineered to run on AI — plus ready-to-use AI tools and smart operations systems, backed by 13 years of professional software development experience.',
  areaServed: 'Worldwide',
  knowsAbout: [
    'AI development specifications',
    'DevSpecs for AI',
    'AI automation',
    'Software development',
    'Claude Code',
    'Cursor',
  ],
  sameAs: [
    'https://github.com/HACODE-SOLUTIONS',
    'https://www.instagram.com/hacodesolutions/',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HACODE SOLUTIONS Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Trusty Translate',
          description: 'AI-powered translation for global businesses — fast, accurate, context-aware.',
          applicationCategory: 'BusinessApplication',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'DevSpec Bundles',
          description:
            'Expert development specifications engineered by HACODE SOLUTIONS to be executed by AI, based on 13 years of professional software development.',
        },
      },
    ],
  },
}

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does HACODE SOLUTIONS do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HACODE SOLUTIONS is an AI-native software company that builds ready-to-use AI tools and DevSpecs — expert development specifications engineered to run on AI. Founded on 13 years of professional software development experience, HACODE SOLUTIONS serves businesses and developers worldwide who want to leverage AI to build faster and smarter.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are DevSpecs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DevSpecs are expert development specifications engineered by HACODE SOLUTIONS to be executed by AI, based on 13 years of professional software development. A DevSpec is a comprehensive document containing the exact prompts, architecture decisions, implementation steps, and operational context an AI coding tool needs to build a complete, production-ready software system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI tools does HACODE SOLUTIONS offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HACODE SOLUTIONS offers ready-to-use AI tools including Trusty Translate, an AI-powered translation solution for global businesses. Additional tools and DevSpec bundles are available at hacode.solutions.',
      },
    },
  ],
}

export default function JsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  )
}
