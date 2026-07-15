import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactSection } from '@/components/sections/contact-section'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Code Solution por e-mail. Localização: Brasileira – Piauí. Atendimento inicial por e-mail.',
}

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu próximo projeto"
        description="Converse com a Code Solution e descubra como a tecnologia pode ajudar a transformar sua operação."
        breadcrumbs={[{ label: 'Início', href: '/' }, { label: 'Contato' }]}
      />
      <ContactSection />
    </>
  )
}
