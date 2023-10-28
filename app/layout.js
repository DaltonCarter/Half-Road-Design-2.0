'use client'

import { Inter } from 'next/font/google'
import {InventoryContextProvider} from '../store/InventoryContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InventoryContextProvider>{children}</InventoryContextProvider>
        </body>
    </html>
  )
}
