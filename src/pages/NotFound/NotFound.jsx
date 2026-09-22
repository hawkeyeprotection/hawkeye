import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'
import styles from './NotFound.module.css'

export function NotFound() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>404 — NO SUCH POST</p>
        <h1 className={styles.title}>
          Nothing is
          <br />
          manned here
        </h1>
        <p className={styles.lede}>
          That page is not on the roster. Try one of these, or call the control desk on{' '}
          <a className={styles.phone} href="tel:01146267000">
            011-46267000
          </a>
          .
        </p>

        <div className={styles.links}>
          {ROUTES.map((route) => (
            <Link key={route.path} className={styles.link} to={route.path}>
              {route.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
