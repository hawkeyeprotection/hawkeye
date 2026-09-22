import { Outlet, useLocation } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { ScrollToTop } from '../ScrollToTop'
import styles from './Layout.module.css'

export function Layout() {
  const { pathname } = useLocation()
  useReveal(pathname)

  return (
    <div className={styles.shell}>
      <ScrollToTop />
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
