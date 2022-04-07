import '../styles/globals.css'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
    </>
  )
}

