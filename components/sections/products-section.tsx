import { SectionTitle } from '@/components/section-title'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/site-data'

export function ProductsSection() {
  return (
    <section id="produtos" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Produtos"
          title="Produtos em desenvolvimento"
          description="Estamos construindo soluções voltadas para segmentos que necessitam de organização, segurança, produtividade e centralização de informações."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
