import { SectionTitle } from '@/components/section-title'

const paragraphs = [
  'A Code Solution é uma empresa de tecnologia dedicada à criação de soluções digitais modernas, seguras e preparadas para evoluir.',
  'Nosso propósito é compreender os desafios de empresas e profissionais e transformá-los em sistemas que simplifiquem rotinas, organizem informações e apoiem decisões.',
  'Mais do que desenvolver software, buscamos construir soluções capazes de gerar valor real, melhorar processos e acompanhar o crescimento dos nossos clientes.',
]

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Sobre a Code Solution"
          title="Tecnologia desenvolvida com propósito"
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-5">
          {paragraphs.map((text) => (
            <p key={text} className="text-lg leading-relaxed text-pretty text-foreground/80">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
