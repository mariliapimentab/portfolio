import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { LangProvider } from '@/context/LangContext'
import { CustomCursor } from '@/components/ui/CustomCursor'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Marilia Pimenta — Product Designer',
  description:
    'Marilia Pimenta is a Product Designer crafting clear, thoughtful digital experiences that help products grow.',
  openGraph: {
    title: 'Marilia Pimenta — Product Designer',
    description: 'Designing clear, thoughtful digital experiences that help products grow.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>
        <LangProvider>
          <CustomCursor />
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
