import { Inter } from 'next/font/google'
import InventoryContext from '../store/InventoryContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InventoryContext.Provider>{children}</InventoryContext.Provider>
        </body>
    </html>
  )
}
