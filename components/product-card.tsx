import Link from 'next/link'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { type Product } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type ProductCardProps = {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const Icon = product.icon

  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-8',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-navy text-white">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-accent px-3 py-1 text-xs font-semibold text-navy">
          <Clock className="size-3.5 text-primary" aria-hidden="true" />
          Em desenvolvimento
        </span>
      </div>

      <p className="mt-5 text-xs font-semibold tracking-wide text-primary uppercase">
        {product.segment}
      </p>
      <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-navy">{product.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {product.shortDescription}
      </p>

      <div className="mt-6">
        <p className="text-xs font-semibold tracking-wide text-foreground/70 uppercase">
          Recursos planejados
        </p>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
        <Button
          size="lg"
          disabled
          aria-disabled="true"
          className="cursor-not-allowed bg-muted text-muted-foreground"
        >
          Conhecer em breve
        </Button>
        <Button
          variant="ghost"
          size="lg"
          className="text-primary hover:bg-accent hover:text-primary"
          render={<Link href={`/produtos/${product.slug}`} />}
        >
          Saber mais
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </article>
  )
}
