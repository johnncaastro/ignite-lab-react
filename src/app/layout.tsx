import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ApolloContext } from 'contexts/ApolloContext'

import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Ignite Lab | Inscrição',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <ApolloContext>{children}</ApolloContext>
      </body>
    </html>
  )
}
