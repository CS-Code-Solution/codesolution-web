import { SectionTitle } from '@/components/section-title'
import { technologyFeatures } from '@/lib/site-data'

export function TechnologySection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(50% 50% at 80% 10%, rgba(32,184,230,0.18), transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(11,94,215,0.22), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-cyan uppercase">
            Tecnologia
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Tecnologia moderna aplicada a problemas reais
          </h2>
          <div className="mt-5 space-y-4 text-white/70">
            <p className="leading-relaxed text-pretty">
              Utilizamos recursos modernos, boas práticas de desenvolvimento e processos
              organizados para criar soluções confiáveis, intuitivas e preparadas para crescer.
            </p>
            <p className="leading-relaxed text-pretty">
              Cada produto é pensado considerando qualidade, segurança, desempenho, facilidade de
              uso e evolução contínua.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-cyan/40 hover:bg-white/[0.07]"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-cyan/15 text-cyan">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-white">{feature.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
