import { Link } from 'react-router-dom'
import directorSukhbir from '../../assets/images/brand/director-sukhbir.png'
import directorTejbir from '../../assets/images/brand/director-tejbir.png'
import styles from './About.module.css'

const HERO_IMAGE =
  'https://images.pexels.com/photos/34954627/pexels-photo-34954627.jpeg?auto=compress&cs=tinysrgb&w=1800'

const LEDGER = [
  { label: 'INCORPORATED', value: '1991', mono: false },
  { label: 'CIN', value: 'U74899DL1991\nPTC043290', mono: true },
  { label: 'LICENCE', value: 'PSARA 2005', mono: false },
  { label: 'STATUTORY', value: 'EPF · ESIC', mono: false },
]

const CLAUSES = [
  {
    n: '01',
    title: 'Registers stay open',
    body: 'Wage sheets, EPF ECRs, ESIC challans, muster rolls and audit findings are issued to you monthly, in full. Nothing about your own deployment is ours to keep.',
  },
  {
    n: '02',
    title: 'Somebody is named',
    body: 'Every post sits under a supervisor, and every supervisor under an operations manager reachable at the control desk. The escalation tree is on your wall with names on it.',
  },
  {
    n: '03',
    title: 'Guards who stay',
    body: 'We go the extra mile with our own people, because a site that keeps its faces is a site where visitors are recognised at the gate. On anything affecting staff, management reaches consensus first.',
  },
]

const DIRECTORS = [
  {
    img: directorTejbir,
    role: 'FOUNDER · DIN 00002797',
    name: 'Mr. Tejbir Singh',
    bio: 'B.A., LL.B., PGDSM. Wrote the selection criterion the company still runs on.',
  },
  {
    img: directorSukhbir,
    role: 'ADMINISTRATION · DIN 03569684',
    name: 'Mr. Sukhbir Singh Grewal',
    bio: 'B.Com., PGDSM. Runs deployment and compliance since October 2010.',
  },
]

export function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img className={styles.heroImg} src={HERO_IMAGE} alt="" />
        </div>
        <div className={styles.heroScrim} />
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>
            HAWK EYE PROTECTION SERVICES PVT. LTD. · 27.02.1991
          </p>
          <h1 className={styles.heroTitle}>We are the company that answers for the post</h1>
        </div>
      </section>

      <section className={styles.ledger}>
        <div className={styles.ledgerGrid}>
          {LEDGER.map((cell) => (
            <div key={cell.label} className={styles.ledgerCell}>
              <p className={styles.ledgerLabel}>{cell.label}</p>
              <p className={cell.mono ? styles.ledgerValueMono : styles.ledgerValue}>
                {cell.value.split('\n').map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.areSection}>
        <div className={styles.areGrid}>
          <div data-reveal="" className={styles.areCard}>
            <p className={styles.areTagLight}>WHAT WE ARE</p>
            <p className={styles.areTitleLight}>A security management company</p>
            <p className={styles.areBodyLight}>
              High-grade recruitment, three weeks of training by ex-servicemen, and deployment
              under command and control you are welcome to audit. Value-driven services and
              modular solutions written against a site survey.
            </p>
          </div>
          <div data-reveal="" className={styles.areCardDark}>
            <p className={styles.areTagDark}>WHAT WE ARE NOT</p>
            <p className={styles.areTitleDark}>A body-supply contractor</p>
            <p className={styles.areBodyDark}>
              We do not quote a per-guard rate before walking your perimeter, do not post an
              untrained man to fill a gap, and do not summarise the paperwork instead of handing
              it over.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.vision}>
        <div className={styles.visionInner}>
          <p data-reveal="" className={styles.visionLabel}>
            VISION
          </p>
          <p data-reveal="" className={styles.visionText}>
            The most professional, ethical and highest-quality security company in the industry.
          </p>
        </div>
      </section>

      <section className={styles.clauses}>
        <div className={styles.clausesInner}>
          <p data-reveal="" className={styles.clausesLabel}>
            HOW WE HOLD OURSELVES TO IT
          </p>
          <div className={styles.clauseList}>
            {CLAUSES.map((clause) => (
              <div data-reveal="" key={clause.n} className={styles.clause}>
                <p className={styles.clauseTitle}>
                  <span className={styles.clauseIndex}>{clause.n}</span> {clause.title}
                </p>
                <p className={styles.clauseBody}>{clause.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.directors}>
        <div className={styles.directorsInner}>
          <p data-reveal="" className={styles.directorsLabel}>
            SIGNED OFF BY
          </p>
          <div className={styles.directorsGrid}>
            {DIRECTORS.map((director) => (
              <figure data-reveal="" key={director.name} className={styles.director}>
                <img className={styles.directorImg} src={director.img} alt={director.name} />
                <figcaption className={styles.directorCaption}>
                  <p className={styles.directorRole}>{director.role}</p>
                  <p className={styles.directorName}>{director.name}</p>
                  <p className={styles.directorBio}>{director.bio}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p data-reveal="" className={styles.licensedIn}>
            LICENSED IN DELHI · CHANDIGARH · UTTAR PRADESH · HARYANA · HIMACHAL PRADESH
          </p>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeading}>A supervisor walks your site before we quote</h2>
          <Link className={styles.ctaButton} to="/contact">
            Request a site survey
          </Link>
        </div>
      </section>
    </>
  )
}
