import { Hero } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about-section'
import { MissionVisionValues } from '@/components/sections/mission-vision-values'
import { ServicesSection } from '@/components/sections/services-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { ProductsSection } from '@/components/sections/products-section'
import { CommitmentSection } from '@/components/sections/commitment-section'
import { WorkProcess } from '@/components/sections/work-process'
import { ContactCTA } from '@/components/sections/contact-cta'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MissionVisionValues />
      <ServicesSection />
      <TechnologySection />
      <ProductsSection />
      <CommitmentSection />
      <WorkProcess />
      <ContactCTA />
      <ContactSection />
    </>
  )
}
