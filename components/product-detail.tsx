import { Check, Clock, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/page-hero'
import { ContactCTA } from '@/components/sections/contact-cta'
import { company, productFeatureIcons, type Product } from '@/lib/site-data'

type ProductDetailProps = {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const Icon = product.icon
  const interestMailto = `mailto:${company.email}?subject=${encodeURIComponent(
    `Tenho interesse no ${product.name}`,
  )}&body=${encodeURIComponent(
    `Olá, equipe Code Solution!\n\nGostaria de receber novidades sobre o ${product.name} (${product.segment}).\n\n`,
  )}`

  return (
    <>
      <PageHero
        eyebrow={product.segment}
        title={product.name}
        description={product.description}
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Produtos', href: '/produtos' },
          { label: product.name },
        ]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-accent px-3 py-1 text-xs font-semibold text-navy">
                  <Clock className="size-3.5 text-primary" aria-hidden="true" />
                  Em desenvolvimento
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-bold text-navy">Sobre a plataforma</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{product.description}</p>

              <h3 className="mt-10 text-xl font-bold text-navy">Recursos planejados</h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.features.map((feature, i) => {
                  const FeatureIcon = productFeatureIcons[i % productFeatureIcons.length]
                  return (
                    <li
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
                    >
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                        <FeatureIcon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium text-foreground/90">{feature}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy">Status do produto</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  O {product.name} está em desenvolvimento. Em breve compartilharemos novidades
                  sobre disponibilidade e funcionalidades.
                </p>

                <ul className="mt-5 space-y-2.5">
                  {['Planejamento e requisitos', 'Desenvolvimento em andamento', 'Evolução contínua'].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>

                <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                  <Button
                    size="lg"
                    disabled
                    aria-disabled="true"
                    className="h-11 w-full cursor-not-allowed bg-muted text-muted-foreground"
                  >
                    Conhecer em breve
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-11 w-full border-primary/30 text-primary hover:bg-accent hover:text-primary"
                    render={<a href={interestMailto} />}
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    Tenho interesse
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Sem contratação. Apenas registre seu interesse por e-mail.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
