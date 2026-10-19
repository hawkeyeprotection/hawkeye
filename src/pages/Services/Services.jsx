import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROLES } from '../../data/roles'
import styles from './Services.module.css'

const BAND_IMAGE =
  'https://images.pexels.com/photos/18313627/pexels-photo-18313627.jpeg?auto=compress&cs=tinysrgb&w=1800'

export function Services() {
  const [active, setActive] = useState(0)
  const role = ROLES[active]

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>SERVICES · ELEVEN ROLES, ONE STANDARD</p>
          <h1 className={styles.heroTitle}>
            A post to
            <br />
            strengthen <span className={styles.heroAccent}>every point</span>
          </h1>
        </div>
      </section>

      <section className={styles.explorer}>
        <div className={styles.explorerInner}>
          <div className={styles.rail}>
            <p className={styles.railLabel}>SELECT A ROLE</p>
            <div className={styles.railList}>
              {ROLES.map((r, i) => {
                const on = i === active
                return (
                  <button
                    key={r.title}
                    type="button"
                    className={on ? styles.railRowOpen : styles.railRow}
                    onClick={() => setActive(i)}
                  >
                    <span className={styles.railIndex}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.railTitle}>{r.title}</span>
                    <span className={styles.railMark}>{on ? '−' : '+'}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className={styles.panelWrap}>
            <div className={styles.panel}>
              <p className={styles.panelTag}>{role.tag}</p>
              <h2 className={styles.panelTitle}>{role.title}</h2>
              <p className={styles.panelIntro}>{role.intro}</p>

              <div className={styles.panelCards}>
                <div className={styles.panelCard}>
                  <p className={styles.panelCardLabel}>WHAT THEY DO</p>
                  <p className={styles.panelCardBody}>{role.duties}</p>
                </div>
                <div className={styles.panelCard}>
                  <p className={styles.panelCardLabel}>TYPICAL SITES</p>
                  <p className={styles.panelCardBody}>{role.sites}</p>
                </div>
                <div className={styles.panelCardAlt}>
                  <p className={styles.panelCardLabelAlt}>SHIFT MODEL</p>
                  <p className={styles.panelCardBody}>{role.shifts}</p>
                </div>
              </div>

              <div className={styles.quote}>
                <p className={styles.quoteText}>Get a quote for {role.title}</p>
                <Link className={styles.quoteCta} to="/contact">
                  Request a site survey
                </Link>
                <a className={styles.quotePhone} href="tel:01146267000">
                  011-46267000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.band}>
        <div className={styles.bandInner}>
          <img className={styles.bandImg} src={BAND_IMAGE} alt="" />
        </div>
      </section>

    </>
  )
}
