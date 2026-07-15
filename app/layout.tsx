import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const siteUrl = 'https://codesolution.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Code Solution | Tecnologia que transforma ideias em soluções',
    template: '%s | Code Solution',
  },
  description:
    'A Code Solution desenvolve plataformas SaaS, sistemas de gestão e soluções digitais modernas para empresas que desejam evoluir com tecnologia.',
  keywords: [
    'Code Solution',
    'desenvolvimento de software',
    'sistemas SaaS',
    'sistemas empresariais',
    'plataforma jurídica',
    'sistema para clínicas',
    'tecnologia',
    'software em Brasileira Piauí',
  ],
  authors: [{ name: 'Code Solution' }],
  creator: 'Code Solution',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Code Solution',
    title: 'Code Solution | Tecnologia que transforma ideias em soluções',
    description:
      'Plataformas SaaS, sistemas de gestão e soluções digitais modernas para empresas que desejam evoluir com tecnologia.',
    images: [{ url: '/logo.png', width: 1260, height: 1260, alt: 'Code Solution' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Solution | Tecnologia que transforma ideias em soluções',
    description:
      'Plataformas SaaS, sistemas de gestão e soluções digitais modernas para empresas que desejam evoluir com tecnologia.',
    images: ['/logo.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#071a2f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Ir para o conteúdo
        </a>
        <div className="flex min-h-dvh flex-col">
          <Header />
          <main id="conteudo" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
