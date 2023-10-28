import '../styles/globals.css'
import { InventoryContextProvider } from '@/store/InventoryContext'

export default function App({ Component, pageProps }) {
    return(
      <InventoryContextProvider>
      <Component {...pageProps} />
      </InventoryContextProvider>
  
    )
  }