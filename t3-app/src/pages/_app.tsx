import { Inter } from '@next/font/google'
import { type AppType } from 'next/app'
import { globalStyles } from '~/styles/globals'
import { api } from '~/utils/api'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

globalStyles()

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default api.withTRPC(MyApp)
