import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroVisual } from '@/components/sections/hero-visual'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-secondary"
      aria-labelledby="hero-title"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 60% at 85% 0%, rgba(32,184,230,0.12), transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(11,94,215,0.08), transparent 60%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(102,112,133,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(102,112,133,0.10) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(70% 70% at 50% 40%, black, transparent)',
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-28 lg:px-8">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary shadow-sm">
            <span className="size-1.5 rounded-full bg-cyan" aria-hidden="true" />
            Tecnologia que transforma ideias em soluções
          </span>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold tracking-tight text-balance text-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            Transformamos ideias em soluções digitais preparadas para crescer.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            A Code Solution desenvolve plataformas e sistemas modernos para empresas que desejam
            organizar processos, aumentar a produtividade e evoluir por meio da tecnologia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 bg-primary px-6 text-base text-primary-foreground hover:bg-primary/90"
              render={<Link href="/#sobre" />}
            >
              Conheça a Code Solution
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-navy/20 px-6 text-base text-navy hover:bg-background"
              render={<Link href="/#contato" />}
            >
              <Mail className="size-4" aria-hidden="true" />
              Fale conosco
            </Button>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
