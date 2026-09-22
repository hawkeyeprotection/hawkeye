import { Link } from 'react-router-dom'
import { useSurveyCta } from '../../../hooks/useSurveyCta'
import styles from './CtaBand.module.css'

/** Closing band on every subpage — survey request, phone, and one side link. */
export function CtaBand({ eyebrow = 'NEXT STEP', title, body, link }) {
  const requestSurvey = useSurveyCta()

  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.body}>{body}</p>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.primary} onClick={requestSurvey}>
            Request a site survey <span aria-hidden="true">&rarr;</span>
          </button>
          <a className={styles.phone} href="tel:01146267000">
            011-46267000
          </a>
          {link && (
            <Link className={styles.sideLink} to={link.to}>
              {link.label} &rarr;
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
