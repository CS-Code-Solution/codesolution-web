import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { AboutSection } from '@/components/sections/about-section'
import { MissionVisionValues } from '@/components/sections/mission-vision-values'
import { WorkProcess } from '@/components/sections/work-process'
import { ContactCTA } from '@/components/sections/contact-cta'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a Code Solution: uma empresa de tecnologia dedicada à criação de soluções digitais modernas, seguras e preparadas para evoluir.',
}

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Tecnologia desenvolvida com propósito"
        description="Compreendemos os desafios de empresas e profissionais e os transformamos em sistemas que simplificam rotinas, organizam informações e apoiam decisões."
        breadcrumbs={[{ label: 'Início', href: '/' }, { label: 'Sobre' }]}
      />
      <AboutSection />
      <MissionVisionValues />
      <WorkProcess />
      <ContactCTA />
    </>
  )
}
