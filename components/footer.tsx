import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'
import { company, mailto, nav } from '@/lib/site-data'

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {company.slogan}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Links rápidos
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-cyan focus-visible:text-cyan focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Contato</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={mailto}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-cyan focus-visible:text-cyan focus-visible:outline-none"
                >
                  <Mail className="size-4 shrink-0 text-cyan" aria-hidden="true" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="size-4 shrink-0 text-cyan" aria-hidden="true" />
                {company.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Code Solution. Todos os direitos reservados.</p>
          <p className="text-white/70">Tecnologia que transforma ideias em soluções.</p>
        </div>
      </div>
    </footer>
  )
}
