import { type AppType } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { ThemeProvider } from '~/contexts/ThemeContext'
import { globalStyles } from '~/styles/globals'
import { api } from '~/utils/api'

globalStyles()

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default api.withTRPC(MyApp)
