import { useState } from 'react'
import { SERVICES } from '../../../data/services'
import styles from './ServicesLedger.module.css'

export function ServicesLedger({ onRequestSurvey }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p data-reveal="" className={styles.eyebrow}>
          02 — WHAT WE PUT ON YOUR SITE
        </p>
        <h2 data-reveal="" className={styles.heading}>
          Eleven roles.
          <br />
          One standard.
        </h2>

        <div className={styles.ledger}>
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index
            return (
              <button
                key={service.title}
                type="button"
                className={`${styles.row} ${isOpen ? styles.rowOpen : ''}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className={styles.rowIndex}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.rowTitle}>{service.title}</span>
                <span className={styles.rowNote}>{isOpen ? service.note : ''}</span>
                <span className={styles.rowMark}>{isOpen ? '−' : '+'}</span>
              </button>
            )
          })}
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Deployed in about 2 weeks</p>
            <p className={styles.cardBody}>
              Survey, key requirement areas, selection and induction, site-specific training, then
              takeover — with pre-planned audits after.
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Statutory pack, monthly</p>
            <p className={styles.cardBody}>
              Wage registers, EPF ECRs, ESIC challans, muster rolls and bonus sheets — issued
              privately, per client, every month.
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
