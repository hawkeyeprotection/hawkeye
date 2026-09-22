import { Link } from 'react-router-dom'
import logo from '../../../assets/images/brand/logo-hawkeye-cut.png'
import { useOpenState } from '../../../hooks/useOpenState'
import { ROUTES } from '../../../routes'
import styles from './Footer.module.css'

const PAGE_LINKS = ROUTES.filter((route) => route.path !== '/')

export function Footer() {
  const openState = useOpenState()

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Hawk Eye Protection Services" />
          </Link>
          <p className={styles.blurb}>
            Hawk Eye Protection Services Pvt. Ltd. Guards, supervisors, gunmen and PSOs across
            Delhi NCR since 1991.
          </p>
        </div>

        <div>
          <p className={styles.columnTitle}>PAGES</p>
          <div className={styles.linkList}>
            {PAGE_LINKS.map((route) => (
              <Link key={route.path} className={styles.link} to={route.path}>
                {route.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.columnTitle}>REGISTRATION</p>
          <p className={styles.registration}>
            CIN U74899DL1991PTC043290
            <br />
            PSARA 2005 · 5 STATES
            <br />
            EPF &amp; ESIC REGISTERED
          </p>
        </div>

        <div>
          <p className={styles.columnTitle}>LICENSED IN</p>
          <p className={styles.licensedIn}>
            Delhi · Chandigarh
            <br />
            Uttar Pradesh · Haryana
            <br />
            Himachal Pradesh
          </p>
        </div>

        <div>
          <p className={styles.columnTitle}>REACH US</p>
          <p className={styles.reachAddress}>
            109, 1st Floor, CSC DDA Market No. 1,
            <br />
            Chittaranjan Park, New Delhi 110019
          </p>
          <p className={styles.reachContact}>
            <a className={styles.reachLink} href="tel:01146267000">
              011-46267000
            </a>{' '}
            · <a className={styles.reachLink} href="tel:9958093720">
              99580 93720
            </a>
          </p>
          <p className={styles.reachContact}>
            <a className={styles.reachLink} href="mailto:security@hawkeyeprotection.in">
              security@hawkeyeprotection.in
            </a>
          </p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; 2026 HAWK EYE PROTECTION SERVICES PRIVATE LIMITED</p>
        <p>MON–SAT 09:30–18:00 · {openState}</p>
      </div>
    </footer>
  )
}
