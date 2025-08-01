import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Chat Connect - web extension with AI chat assistant',
  description:
    'Chat Connect is a web extension with AI chat assistant. It is a tool that allows you to chat and write with AI assistant on any website.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={clsx('bg-gray-50 antialiased', inter.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
