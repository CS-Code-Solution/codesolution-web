import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { mailto } from '@/lib/site-data'

export function ContactCTA() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center text-navy-foreground shadow-xl sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                'radial-gradient(50% 60% at 50% 0%, rgba(32,184,230,0.22), transparent 60%), radial-gradient(40% 60% at 100% 100%, rgba(11,94,215,0.25), transparent 60%)',
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Tem uma ideia ou precisa melhorar seus processos?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-white/70">
              Converse com a Code Solution e descubra como a tecnologia pode ajudar a transformar
              sua operação.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                className="h-12 bg-cyan px-6 text-base font-semibold text-navy hover:bg-cyan/90"
                render={<a href={mailto} />}
              >
                <Mail className="size-4" aria-hidden="true" />
                Entrar em contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
