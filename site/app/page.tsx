import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import SocialSection from '@/components/SocialSection'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import JsonLd from '@/components/JsonLd'

export default function Home() {
  return (
    <>
      <JsonLd />
      <SmoothScrollProvider>
        <ScrollProgress />
        <Header />
        <main id="main-content">
          <Hero />
          <TechMarquee />
          <Services />
          <FAQ />
          <SocialSection />
        </main>
        <Footer />
      </SmoothScrollProvider>
    </>
  )
}
