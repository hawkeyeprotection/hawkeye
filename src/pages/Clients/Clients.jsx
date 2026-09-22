import { useState } from 'react'
import { Link } from 'react-router-dom'
import atdc from '../../assets/images/clients/client-atdc.png'
import bikanervala from '../../assets/images/clients/client-bikanervala.png'
import biotech from '../../assets/images/clients/client-biotech.png'
import bombayMercantile from '../../assets/images/clients/client-bombay-mercantile.png'
import galaxyToyota from '../../assets/images/clients/client-galaxy-toyota.png'
import itl from '../../assets/images/clients/client-itl.png'
import mcdonalds from '../../assets/images/clients/client-mcdonalds.png'
import mpJewellers from '../../assets/images/clients/client-mp-jewellers.png'
import wipro from '../../assets/images/clients/client-wipro.png'
import { CLIENTS } from '../../data/clients'
import styles from './Clients.module.css'

const LOGOS = {
  'client-wipro': wipro,
  'client-mcdonalds': mcdonalds,
  'client-bikanervala': bikanervala,
  'client-mp-jewellers': mpJewellers,
  'client-galaxy-toyota': galaxyToyota,
  'client-itl': itl,
  'client-bombay-mercantile': bombayMercantile,
  'client-atdc': atdc,
  'client-biotech': biotech,
}

const REASONS = [
  {
    n: '01',
    title: 'The same faces',
    body: 'Low turnover on a post means members and staff are recognised, and a stranger stands out without anyone checking a list.',
  },
  {
    n: '02',
    title: 'Audits we call on ourselves',
    body: 'Surprise field checks by a team independent of the site supervisor, with findings written to the client rather than filed internally.',
  },
  {
    n: '03',
    title: 'Paperwork that lands early',
    body: 'Wage registers, EPF and ESIC records and muster rolls issued monthly, so a compliance review is a formality.',
  },
]

export function Clients() {
  const [i, setI] = useState(0)
  const active = CLIENTS[i]
  const logo = active.logo ? LOGOS[active.logo] : null

  return (
    <div className={styles.page}>
      <section className={styles.title}>
        <div className={styles.titleInner}>
          <p className={styles.eyebrow}>THE POSTING BOARD · DELHI NCR</p>
          <h1 className={styles.heading}>Every name here is a gate we hold</h1>
        </div>
      </section>

      <section className={styles.board}>
        <div className={styles.boardInner}>
          <div className={styles.plateCol}>
            <div key={active.name} className={styles.plate}>
              <div className={styles.plateMark}>
                {logo ? (
                  <img className={styles.plateLogo} src={logo} alt={active.name} />
                ) : (
                  <p className={styles.plateWordmark}>{active.name}</p>
                )}
              </div>
              <div className={styles.plateBody}>
                <p className={styles.plateSector}>{active.sector}</p>
                <p className={styles.plateText}>{active.body}</p>
                <div className={styles.plateMeta}>
                  <div className={styles.plateRow}>
                    <span className={styles.plateLabel}>ON POST</span>
                    <span className={styles.plateValue}>{active.deployment}</span>
                  </div>
                  <div className={styles.plateRow}>
                    <span className={styles.plateLabel}>THE HARD PART</span>
                    <span className={styles.plateValue}>{active.hard}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rows}>
            {CLIENTS.map((c, idx) => {
              const on = idx === i
              return (
                <button
                  key={c.name}
                  type="button"
                  className={on ? styles.rowOn : styles.row}
                  onClick={() => setI(idx)}
                  onMouseEnter={() => setI(idx)}
                  aria-pressed={on}
                >
                  <span className={styles.rowName}>{c.name}</span>
                  <span className={on ? styles.rowSectorOn : styles.rowSector}>{c.sector}</span>
                </button>
              )
            })}
            <p className={styles.hint}>HOVER OR TAP A NAME TO SEE THE POSTING</p>
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div className={styles.whyInner}>
          <div className={styles.whyHead}>
            <h2 data-reveal="" className={styles.whyHeading}>
              Why the contracts run long
            </h2>
            <p data-reveal="" className={styles.whyLede}>
              Nobody renews a security contract because of a brochure. They renew because the same
              faces turn up, the registers are readable, and the paperwork arrives before the
              auditor asks.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {REASONS.map((r) => (
              <div data-reveal="" key={r.n} className={styles.whyCard}>
                <p className={styles.whyIndex}>{r.n}</p>
                <p className={styles.whyTitle}>{r.title}</p>
                <p className={styles.whyBody}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeading}>Call one of them before you call us</h2>
          <div>
            <p className={styles.ctaBody}>
              We will give you the facility manager&rsquo;s name and number for a site like yours,
              then step out of the conversation. Ask them about absenteeism, audits, and what
              happens at two in the morning.
            </p>
            <Link className={styles.ctaButton} to="/contact">
              Request a reference
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
