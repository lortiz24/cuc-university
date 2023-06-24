import '@/styles/globals.css'
import { lightTheme } from '@/themes'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '@/styles/AlumsImage-style.css'
import '@/styles/circle-style.css'
import '@/styles/footer.style.css'
import '@/styles/Navbar-style.css'
import '@/styles/ComponentImage-style.css'
import { Provider } from 'react-redux';

import GoogleAnalytics from '@bradgarropy/next-google-analytics'




import type { AppProps } from 'next/app'
import { store } from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Provider store={store}>
        <Component     {...pageProps} />
      </Provider>
      <GoogleAnalytics measurementId='G-MD4VTYYHVH'/>
    </ThemeProvider>
  )
}
