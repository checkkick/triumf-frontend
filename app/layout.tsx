import Header from '@/components/Header/Header'
import './globals.scss'
import type { Metadata } from 'next'
import Footer from '@/components/Footer/Footer'
import { LogoBackground } from '@/components/LogoBackground'

export const metadata: Metadata = {
  title: 'Triumf',
  description: 'Ваша возможность сделать свой бизнес высокотехнологичным',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <LogoBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
