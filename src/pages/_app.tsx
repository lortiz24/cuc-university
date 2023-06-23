import { useLayoutEffect } from 'react';
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
import './i18n'



import type { AppProps } from 'next/app'
import { store } from '@/store/store'
import { loadLanguageLocalStorage } from '@/helpers/Language-helpers';
import { useTranslation } from 'react-i18next';

export default function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation()

  useLayoutEffect(() => {
    const language = loadLanguageLocalStorage()
    i18n.changeLanguage(language)
  }, [])


  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Provider store={store}>
        <Component     {...pageProps} />
      </Provider>
      <GoogleAnalytics measurementId='G-BZMLF94FJW' />
    </ThemeProvider>
  )
}
