import { globalStyles } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { DefaultSeo } from 'next-seo'
import { queryClient } from '@/lib/react-query'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../store'
import type { AppProps } from 'next/app'
import { Header } from '@/components/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://www.galactic.com.br',
            siteName: 'Galactic Connection',
          }}
        />
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ReduxProvider>
  )
}
