import '../app/globals.css'
import { ReactNode } from 'react'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
