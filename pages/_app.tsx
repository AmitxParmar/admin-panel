
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)
  return getLayout(<Component {...pageProps} />)
}
