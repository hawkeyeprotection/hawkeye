import { INDUSTRIES } from '../../../data/industries'
import styles from './IndustriesSection.module.css'

export function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p data-reveal="" className={styles.eyebrow}>
          04 — WHERE WE ALREADY STAND
        </p>
        <h2 data-reveal="" className={styles.heading}>
          Posts we know
          <br />
          by heart
        </h2>

        <div className={styles.grid}>
          {INDUSTRIES.map((industry) => (
            <div key={industry.tag} className={styles.card}>
              <p className={styles.cardTag}>{industry.tag}</p>
              <p className={styles.cardTitle}>{industry.title}</p>
              <p className={styles.cardBody}>{industry.body}</p>
              <p className={styles.cardClient}>{industry.client}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
