import { Compass, Eye, Gem } from 'lucide-react'
import { SectionTitle } from '@/components/section-title'
import { values } from '@/lib/site-data'

const pillars = [
  {
    title: 'Missão',
    icon: Compass,
    text: 'Desenvolver soluções digitais que simplifiquem processos, aumentem a produtividade e gerem valor para empresas e profissionais.',
  },
  {
    title: 'Visão',
    icon: Eye,
    text: 'Construir uma empresa reconhecida pela qualidade de seus produtos, pela inovação contínua e pela capacidade de desenvolver plataformas confiáveis, modernas e sustentáveis.',
  },
]

export function MissionVisionValues() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Nossos pilares" title="Missão, Visão e Valores" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-navy text-white">
              <Gem className="size-6" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-bold text-navy">Valores</h3>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <li
                  key={v.title}
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary/60 p-4 transition-colors hover:border-primary/30 hover:bg-accent/50"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-foreground/90">{v.title}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
