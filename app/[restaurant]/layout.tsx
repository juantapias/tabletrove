import { Inter } from 'next/font/google'

import { AppStateProvider } from '@/context/AppStateContext'

import Footer from '@/components/app/base/Footer'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Applayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AppStateProvider>
        {children}
        <Footer />
      </AppStateProvider>
    </>
  )
}
