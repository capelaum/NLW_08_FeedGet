import { type AppType } from 'next/app'
import { globalStyles } from '~/styles/globals'
import { api } from '~/utils/api'

globalStyles()

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default api.withTRPC(MyApp)
