import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

type PageHeroProps = {
  title: string
  description?: string
  eyebrow?: string
  breadcrumbs?: Crumb[]
}

export function PageHero({ title, description, eyebrow, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(50% 60% at 85% 0%, rgba(32,184,230,0.20), transparent 60%), radial-gradient(50% 60% at 0% 100%, rgba(11,94,215,0.22), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Trilha de navegação" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/60">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-cyan focus-visible:text-cyan focus-visible:outline-none"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <ChevronRight className="size-3.5" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-cyan uppercase">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-white/70">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
