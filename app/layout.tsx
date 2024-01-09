import type { Metadata } from 'next'
import './globals.css'
import { quicksand } from '@/components/fonts'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Movies',
  description: 'Generated by create next app'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className}   antialiased  `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
