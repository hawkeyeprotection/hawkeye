import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/brand/logo-hawkeye-cut.png'
import { useOpenState } from '../../../hooks/useOpenState'
import { useSurveyCta } from '../../../hooks/useSurveyCta'
import { ROUTES } from '../../../routes'
import styles from './Header.module.css'

export function Header() {
  const openState = useOpenState()
  const requestSurvey = useSurveyCta()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logoLink}>
          <img className={styles.logo} src={logo} alt="Hawk Eye Protection Services" />
        </NavLink>

        <nav className={styles.nav}>
          {ROUTES.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              end={route.path === '/'}
              className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}
            >
              {route.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <span className={styles.status}>
            <span className={styles.statusDot} />
            {openState}
          </span>
          <a className={styles.callLink} href="tel:01146267000">
            011-46267000
          </a>
          <button type="button" className={styles.surveyButton} onClick={requestSurvey}>
            Request a site survey
          </button>
        </div>
      </div>
    </header>
  )
}
