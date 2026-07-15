import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductDetail } from '@/components/product-detail'
import { products } from '@/lib/site-data'

const product = products.find((p) => p.slug === 'bitclin')

export const metadata: Metadata = {
  title: 'BitClin',
  description:
    'BitClin: plataforma SaaS em desenvolvimento para clínicas, consultórios e equipes de atendimento.',
}

export default function BitClinPage() {
  if (!product) notFound()
  return <ProductDetail product={product} />
}
