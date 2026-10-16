import { Link } from 'react-router-dom'
import { SERVICES } from '../../../data/services'
import styles from './ServicesLedger.module.css'

export function ServicesLedger({ onRequestSurvey }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p data-reveal="" className={styles.eyebrow}>
          02 — WHAT WE PUT ON YOUR SITE
        </p>
        <h2 data-reveal="" className={styles.heading}>
          The Hawkeye Standard
        </h2>
        <p data-reveal="" className={styles.lede}>
          Trained security personnel and professionally managed security solution for business,
          institutions and individuals across North India
        </p>

        <ul className={styles.roles}>
          {SERVICES.map((service, index) => (
            <li key={service.title} className={styles.role}>
              <span className={styles.roleIndex}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.roleTitle}>{service.title}</span>
            </li>
          ))}
        </ul>
        <Link to="/services" className={styles.moreLink}>
          See every role in detail &rarr;
        </Link>

        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Deployment</p>
            <p className={styles.cardBody}>
              Survey, key requirement areas, selection and induction, site-specific training, then
              takeover — with pre-planned audits after.
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Statutory compliances</p>
            <p className={styles.cardBody}>
              Need-based, on-request compliance documents available.
            </p>
          </div>
          <div className={styles.cardCta}>
            <p className={styles.cardTitle}>Not sure what the post needs?</p>
            <button type="button" className={styles.cardCtaButton} onClick={onRequestSurvey}>
              Book the survey &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
