export default function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://hacode.solutions/#organization',
    name: 'HACODE SOLUTIONS',
    url: 'https://hacode.solutions',
    logo: {
      '@type': 'ImageObject',
      url: 'https://hacodesolutions.s3.us-east-1.amazonaws.com/trusty_translate_logo.jpg',
    },
    description:
      'HACODE SOLUTIONS builds DevSpecs — expert development specifications engineered to run on AI — plus ready-to-use AI tools and smart operations systems, backed by 13 years of professional software development experience.',
    areaServed: 'Worldwide',
    knowsAbout: [
      'AI development specifications',
      'DevSpecs for AI',
      'AI automation',
      'Software development',
      'Prompt engineering',
      'Claude Code',
      'Cursor',
    ],
    sameAs: [
      'https://github.com/hacode-solutions',
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
            name: 'DevSpec Starter Bundle',
            description:
              'Complete AI development specification with prompts to build your first AI tool using Claude Code or Cursor.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ops Automation Playbook',
            description:
              'Step-by-step guide for building smart, AI-powered operations and automation systems for your business.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prompt Pack Pro',
            description:
              '50+ battle-tested AI prompts for development workflows, code reviews, and system architecture.',
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
          text: 'HACODE SOLUTIONS is an AI-native software company that builds ready-to-use AI tools and DevSpecs — expert development specifications engineered to run on AI. Founded on 13 years of professional software development experience, we serve businesses and developers worldwide who want to leverage AI to build faster and smarter.',
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
        name: 'What AI tools can I buy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HACODE SOLUTIONS currently offers Trusty Translate — an AI-powered translation tool for global businesses. More tools are in development. Each tool is production-ready, immediately deployable, and built on the same engineering principles behind our DevSpecs.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do the prompt packs and playbooks work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our prompt packs and playbooks are structured guides containing the exact AI prompts, workflow steps, and architectural context needed to replicate our AI-powered systems. You buy the playbook, load the prompts into your preferred AI coding tool (Claude Code, Cursor, etc.), and follow the step-by-step guide to build the system yourself.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need technical skills?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on what you are building. Ready-to-use AI tools require minimal technical knowledge. For DevSpecs and playbooks, basic familiarity with web development concepts and AI coding tools like Claude Code or Cursor is helpful. Our guides are intentionally detailed enough that motivated non-experts can follow them.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get started?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Browse the Services section on this page to find the product that fits your needs. If you want something working immediately, buy one of our ready-to-use AI tools. If you want to build your own AI system, purchase a DevSpec bundle and use your preferred AI coding tool to execute it step by step.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
