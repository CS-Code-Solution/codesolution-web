import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ProductCard } from '@/components/product-card'
import { ContactCTA } from '@/components/sections/contact-cta'
import { products } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Produtos',
  description:
    'Produtos em desenvolvimento da Code Solution: Code Jurídico, plataforma para escritórios de advocacia, e BitClin, plataforma para clínicas e consultórios.',
}

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        eyebrow="Produtos"
        title="Produtos em desenvolvimento"
        description="Estamos construindo soluções voltadas para segmentos que necessitam de organização, segurança, produtividade e centralização de informações."
        breadcrumbs={[{ label: 'Início', href: '/' }, { label: 'Produtos' }]}
      />

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
