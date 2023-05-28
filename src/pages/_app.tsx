import '@/styles/globals.css'
import {  lightTheme } from '@/themes'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '@/styles/AlumsImage-style.css'
import '@/styles/circle-style.css'
import '@/styles/footer.style.css'
import '@/styles/Navbar-style.css'




import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component     {...pageProps} />
    </ThemeProvider>
  )
}
