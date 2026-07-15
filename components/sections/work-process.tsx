import { SectionTitle } from '@/components/section-title'
import { workProcess } from '@/lib/site-data'

export function WorkProcess() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Como trabalhamos" title="Um processo claro, do problema à evolução" />

        <div className="relative mt-14">
          {/* connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {workProcess.map((step) => {
              const Icon = step.icon
              return (
                <li key={step.step} className="relative flex flex-col items-start">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-3xl font-extrabold text-primary/25">{step.step}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
