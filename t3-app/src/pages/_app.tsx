import { type AppType } from 'next/app'
import { ThemeProvider } from '~/contexts/ThemeContext'
import { globalStyles } from '~/styles/globals'
import { api } from '~/utils/api'

globalStyles()

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default api.withTRPC(MyApp)
