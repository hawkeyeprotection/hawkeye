import { useState } from 'react'
import styles from './SurveySection.module.css'

const STEP_NAMES = ['THE SITE', 'WHAT YOU NEED', 'YOUR DETAILS']

/** The Home survey panel, exactly as in Hawk Eye Home.dc.html. */
export function HomeSurveyForm() {
  const [step, setStep] = useState(1)
  const [sent, setSent] = useState(false)

  const next = () => setStep((s) => Math.min(3, s + 1))
  const prev = () => setStep((s) => Math.max(1, s - 1))

  if (sent) {
    return (
      <div className={styles.confirmation}>
        <p className={styles.confirmationTitle}>Request logged</p>
        <p className={styles.confirmationBody}>
          A supervisor will call to fix a survey time. Urgent requirement — call 011-46267000 now.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className={styles.stepHeader}>
        <p className={styles.stepLabel}>STEP {step} / 3</p>
        <p className={styles.stepName}>{STEP_NAMES[step - 1]}</p>
      </div>

      <div className={styles.progress}>
        <span className={`${styles.segment} ${styles.segmentActive}`} />
        <span className={`${styles.segment} ${step >= 2 ? styles.segmentActive : ''}`} />
        <span className={`${styles.segment} ${step >= 3 ? styles.segmentActive : ''}`} />
      </div>

      {step === 1 && (
        <div className={styles.fieldset}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>SITE TYPE</span>
            <select name="siteType" className={styles.select}>
              <option>Office / corporate campus</option>
              <option>Hospital</option>
              <option>Retail or restaurant</option>
              <option>Residential society</option>
              <option>Showroom</option>
              <option>Event</option>
            </select>
          </label>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>CITY / LOCALITY</span>
            <input name="city" placeholder="e.g. Nehru Place" className={styles.input} />
          </label>
          <button
            type="button"
            onClick={next}
            className={`${styles.buttonPrimary} ${styles.buttonStart}`}
          >
            Next: what you need &rarr;
          </button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.fieldset}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>SERVICE</span>
            <select name="service" className={styles.select}>
              <option>Manned guarding</option>
              <option>Gunman / armed guard</option>
              <option>PSO / personal protection</option>
              <option>Bouncers &amp; event security</option>
              <option>Mobile patrol</option>
              <option>Housekeeping &amp; helpers</option>
            </select>
          </label>
          <div className={styles.fieldRow}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>HEADCOUNT</span>
              <input name="count" inputMode="numeric" placeholder="6" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>START DATE</span>
              <input name="start" type="date" className={styles.input} />
            </label>
          </div>
          <div className={styles.actions}>
            <button type="button" onClick={prev} className={styles.buttonSecondary}>
              &larr; Back
            </button>
            <button type="button" onClick={next} className={styles.buttonPrimary}>
              Next: your details &rarr;
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.fieldset}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>NAME</span>
            <input name="name" required className={styles.input} />
          </label>
          <div className={styles.fieldRow}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>COMPANY</span>
              <input name="company" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>PHONE</span>
              <input name="phone" required inputMode="tel" className={styles.input} />
            </label>
          </div>
          <div className={styles.actions}>
            <button type="button" onClick={prev} className={styles.buttonSecondary}>
              &larr; Back
            </button>
            <button type="submit" className={styles.buttonSubmit}>
              Send request &rarr;
            </button>
          </div>
          <p className={styles.demoNote}>Demo form — nothing is submitted yet.</p>
        </div>
      )}
    </form>
  )
}
