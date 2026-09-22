import { HomeSurveyForm } from './HomeSurveyForm'
import styles from './SurveySection.module.css'

export function SurveySection({ openState }) {
  return (
    <section id="survey" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>05 — START HERE</p>
          <h2 className={styles.heading}>
            A supervisor
            <br />
            walks your site
            <br />
            first
          </h2>
          <p className={styles.lede}>
            No quote before the walk. We look at the perimeter, the posts and the shift pattern,
            write the scope, and price against it — usually inside two working days.
          </p>

          <div className={styles.contactBlock}>
            <div>
              <p className={styles.contactLabel}>OFFICE</p>
              <p className={styles.contactValue}>
                109, 1st Floor, CSC DDA Market No. 1,
                <br />
                Chittaranjan Park, New Delhi 110019
              </p>
            </div>
            <div>
              <p className={styles.contactLabel}>CONTROL DESK · {openState}</p>
              <p className={styles.contactValue}>
                <a href="tel:01146267000">011-46267000</a> &nbsp;·&nbsp;{' '}
                <a href="tel:9958093720">99580 93720</a>
              </p>
              <p className={styles.contactValue}>
                <a href="mailto:security@hawkeyeprotection.in">security@hawkeyeprotection.in</a>
              </p>
            </div>
          </div>

        </div>

        <div className={styles.panel}>
          <HomeSurveyForm />
        </div>
      </div>
    </section>
  )
}
