import { SectionTitle } from '@/components/section-title'
import { commitment } from '@/lib/site-data'

export function CommitmentSection() {
  return (
    <section id="compromisso" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nosso compromisso"
          title="Construir com responsabilidade, evoluir com consistência"
          description="Nosso compromisso é desenvolver produtos confiáveis, fáceis de utilizar e preparados para evoluir junto com nossos clientes. Cada solução é construída considerando organização, segurança, qualidade e experiência do usuário."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitment.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
