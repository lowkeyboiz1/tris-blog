import { Providers } from '@/providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tris Ielts',
  description: 'Tris Ielts'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi'>
      <body className={inter.className}>
        <Providers>
          {children}
          {/* <ScrollToTop /> */}
        </Providers>
      </body>
    </html>
  )
}
