import Header from '../components/Header/Header'
import Link from '../components/Link/Link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Link />
       <Component {...pageProps} />
    </>
  )
}

export default MyApp
