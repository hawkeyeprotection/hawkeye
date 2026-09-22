import { useState } from 'react'
import { Link } from 'react-router-dom'
import bannerDrill from '../../assets/images/banners/banner-drill.png'
import { blockLabel, DAYS } from '../../data/days'
import styles from './Training.module.css'

const GROUND_A =
  'https://images.pexels.com/photos/9373697/pexels-photo-9373697.jpeg?auto=compress&cs=tinysrgb&w=1400'
const GROUND_B =
  'https://images.pexels.com/photos/35173036/pexels-photo-35173036.jpeg?auto=compress&cs=tinysrgb&w=1400'

const RANKS = ['Naib Subedar', 'Subedar', 'Subedar Major', 'Honorary Lieutenant']

export function Training() {
  const [d, setD] = useState(0)
  const day = DAYS[d]

  const weekClass = (i) => (i < 7 ? styles.w1 : i < 14 ? styles.w2 : styles.w3)

  return (
    <>
      <section className={styles.hero}>
        <img className={styles.heroImg} src={bannerDrill} alt="" />
        <div className={styles.heroScrim} />
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>
            TRAINING · TWENTY-ONE DAYS, TAUGHT BY EX-SERVICEMEN
          </p>
          <h1 className={styles.heroTitle}>
            Nobody
            <br />
            reaches your
            <br />
            <span className={styles.heroAccent}>gate untested</span>
          </h1>
        </div>
      </section>

      <section className={styles.calendar}>
        <div className={styles.calendarInner}>
          <div className={styles.calendarHead}>
            <h2 data-reveal="" className={styles.calendarHeading}>
              Pick a day of the course
            </h2>
            <p data-reveal="" className={styles.calendarLede}>
              Twenty-one days of indoor and outdoor work before a first shift. Tap a square to see
              what a recruit is doing on it — and who is standing over him.
            </p>
          </div>

          <div className={styles.calendarBody}>
            <div className={styles.gridCol}>
              <div className={styles.dayGrid}>
                {DAYS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`${styles.day} ${i === d ? styles.dayOn : weekClass(i)}`}
                    onClick={() => setD(i)}
                    onMouseEnter={() => setD(i)}
                    aria-pressed={i === d}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <div className={styles.legend}>
                <span className={styles.legendRow}>
                  <span className={`${styles.swatch} ${styles.w1}`} />
                  WEEK 1 · FOUNDATION
                </span>
                <span className={styles.legendRow}>
                  <span className={`${styles.swatch} ${styles.w2}`} />
                  WEEK 2 · EMERGENCY
                </span>
                <span className={styles.legendRow}>
                  <span className={`${styles.swatch} ${styles.w3}`} />
                  WEEK 3 · ON-SITE
                </span>
              </div>
            </div>

            <div className={styles.dayPanel}>
              <p className={styles.dayPanelTag}>
                DAY {d + 1} · {blockLabel(d)}
              </p>
              <p className={styles.dayPanelTitle}>{day.title}</p>
              <p className={styles.dayPanelBody}>{day.body}</p>
              <p className={styles.dayPanelInstructor}>INSTRUCTOR · {day.instructor}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trainers}>
        <div className={styles.trainersInner}>
          <p data-reveal="" className={styles.trainersLabel}>
            THE INSTRUCTORS RETIRED AS
          </p>
          <div data-reveal="" className={styles.rankRow}>
            {RANKS.map((rank) => (
              <span key={rank} className={styles.rank}>
                {rank}
              </span>
            ))}
            <span className={styles.rankTop}>Honorary Captain</span>
          </div>
          <p data-reveal="" className={styles.trainersNote}>
            Indoor work is delivered inside the company. Outdoor work runs with partner institutes
            registered under the PSAR Act, 2005 — Skill Development Academy in Delhi, Delhi
            Institute of Security &amp; Management in Uttar Pradesh, and International College for
            Security Studies in Gurgaon.
          </p>
        </div>
      </section>

      <section className={styles.ground}>
        <div className={styles.groundInner}>
          <p data-reveal="" className={styles.groundLabel}>
            FROM THE TRAINING GROUND
          </p>
          <div className={styles.groundGrid}>
            <div data-reveal="" className={styles.groundSlot}>
              <img className={styles.groundImg} src={GROUND_A} alt="Live extinguisher drill" />
            </div>
            <div data-reveal="" className={styles.groundSlot}>
              <img className={styles.groundImg} src={GROUND_B} alt="Morning turnout inspection" />
            </div>
          </div>
          <p data-reveal="" className={styles.groundNote}>
            Every recruit discharges a live extinguisher and runs a hose line himself. Failures
            repeat the week rather than move on — which is why a Hawk Eye guard stands differently
            at your gate.
          </p>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeading}>Sit in on a training day before you sign</h2>
          <Link className={styles.ctaButton} to="/contact">
            Arrange a visit
          </Link>
        </div>
      </section>
    </>
  )
}
