import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProduct, PRODUCTS } from '@/lib/products'
import ProductProfile from '@/components/ProductProfile'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return Object.keys(PRODUCTS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct(params.slug)
  if (!product) return {}
  return {
    title: `${product.name} — HACODE SOLUTIONS`,
    description: product.tagline,
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug)
  if (!product) notFound()
  return <ProductProfile product={product} />
}
