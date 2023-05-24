import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '../styles/circle-style.css'



import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component     {...pageProps} />
    </ThemeProvider>
  )
}
