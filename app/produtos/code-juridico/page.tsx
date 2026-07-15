import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductDetail } from '@/components/product-detail'
import { products } from '@/lib/site-data'

const product = products.find((p) => p.slug === 'code-juridico')

export const metadata: Metadata = {
  title: 'Code Jurídico',
  description:
    'Code Jurídico: plataforma SaaS em desenvolvimento para escritórios de advocacia, equipes jurídicas e filiais.',
}

export default function CodeJuridicoPage() {
  if (!product) notFound()
  return <ProductDetail product={product} />
}
