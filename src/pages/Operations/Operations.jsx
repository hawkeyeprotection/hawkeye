import { useState } from 'react'
import { Link } from 'react-router-dom'
import bannerBriefing from '../../assets/images/banners/banner-briefing.png'
import { STAGES } from '../../data/stages'
import { useAutoplay } from '../../hooks/useAutoplay'
import styles from './Operations.module.css'

const DRILL_IMAGE =
  'https://images.pexels.com/photos/8285775/pexels-photo-8285775.jpeg?auto=compress&cs=tinysrgb&w=1400'

const HORIZON = [
  { when: 'DAY 14', hot: true, body: 'Posts manned, registers opened, escalation tree on the wall.' },
  { when: '3–4 MONTHS', hot: false, body: 'SOPs settled and the first drills run on your floor plan.' },
  { when: '7–9 MONTHS', hot: false, body: 'Surprise field audits, reported to you in writing.' },
  { when: '9+ MONTHS', hot: false, body: 'A process manual specific enough to brief a new guard from.' },
]

const PILLARS = [
  {
    title: 'Own training ground',
    body: 'Drill, fire and evacuation are rehearsed on our ground, and a reserve pool fills leave and absence from strength rather than borrowing.',
  },
  {
    title: 'Named command',
    body: 'A supervisor per shift on your escalation tree in writing, a control desk awake at all hours, and audit checks by a team independent of the site.',
  },
  {
    title: 'Paperwork first',
    body: 'Wage registers, EPF ECRs, ESIC challans, muster rolls and bonus sheets issued monthly — your auditors have them before they ask.',
  },
]

export function Operations() {
  const [s, setS] = useState(0)
  const stage = STAGES[s]
  const videoRef = useAutoplay()

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>OPERATIONS · CALL TO TAKEOVER</p>
          <h1 className={styles.heroTitle}>
            Fourteen
            <br />
            days you
            <br />
            <span className={styles.heroAccent}>can audit</span>
          </h1>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.timelineInner}>
          <p data-reveal="" className={styles.timelineLabel}>
            DRAG THE MARKER, OR STEP THROUGH
          </p>

          <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={s}
            onChange={(e) => setS(Number(e.target.value))}
            aria-label="Deployment stage"
            className={styles.range}
          />

          <div className={styles.tabs}>
            {STAGES.map((st, i) => (
              <button
                key={st.label}
                type="button"
                className={i === s ? styles.tabOn : styles.tab}
                onClick={() => setS(i)}
                aria-pressed={i === s}
              >
                <span className={styles.tabDay}>{st.day}</span>
                <span className={styles.tabLabel}>{st.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.stageGrid}>
            <div>
              <h2 className={styles.stageTitle}>{stage.title}</h2>
              <p className={styles.stageBody}>{stage.body}</p>
            </div>
            <div className={styles.stageMeta}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>OWNER</span>
                <span className={styles.metaValue}>{stage.owner}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>YOU RECEIVE</span>
                <span className={styles.metaValue}>{stage.doc}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>TYPICAL</span>
                <span className={styles.metaValue}>{stage.dur}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pillars}>
        <div className={styles.pillarsInner}>
          <p data-reveal="" className={styles.pillarsLabel}>
            BEHIND THE POST
          </p>
          <div className={styles.pillarGrid}>
            {PILLARS.map((p) => (
              <div data-reveal="" key={p.title} className={styles.pillar}>
                <p className={styles.pillarTitle}>{p.title}</p>
                <p className={styles.pillarBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.deskBand}>
        <div className={styles.deskInner}>
          <video
            ref={videoRef}
            className={styles.deskVideo}
            src="https://www.pexels.com/download/video/7255101/"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className={styles.deskOverlay}>
            <div>
              <p className={styles.deskTag}>CONTROL DESK · AWAKE AT ALL HOURS</p>
              <p className={styles.deskTitle}>Monitoring is a shift, not a screensaver</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.drills}>
        <div className={styles.drillsInner}>
          <div className={styles.drillsHead}>
            <h2 data-reveal="" className={styles.drillsHeading}>
              Drills run on your site, not ours
            </h2>
            <p data-reveal="" className={styles.drillsLede}>
              Mock fire, evacuation and a bomb-scare search on your actual floor plan within the
              first three months — then again on a calendar you keep a copy of.
            </p>
          </div>

          <div className={styles.drillGrid}>
            <figure data-reveal="" className={styles.drillFigure}>
              <img
                className={styles.drillImg}
                src={bannerBriefing}
                alt="Shift briefing before takeover"
              />
              <figcaption className={styles.drillCaption}>
                <p className={styles.drillTag}>DAY 14 · BRIEFING BEFORE TAKEOVER</p>
              </figcaption>
            </figure>
            <div data-reveal="" className={styles.drillSlot}>
              <img
                className={styles.drillImg}
                src={DRILL_IMAGE}
                alt="Evacuation drill at a client site"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.horizon}>
        <div className={styles.horizonInner}>
          <p data-reveal="" className={styles.horizonLabel}>
            WHAT TO EXPECT, AND WHEN
          </p>
          <div className={styles.horizonGrid}>
            {HORIZON.map((h) => (
              <div data-reveal="" key={h.when} className={styles.horizonCard}>
                <p className={h.hot ? styles.horizonWhenHot : styles.horizonWhen}>{h.when}</p>
                <p className={styles.horizonBody}>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeading}>Start the clock with a site survey</h2>
          <Link className={styles.ctaButton} to="/contact">
            Request a site survey
          </Link>
        </div>
      </section>
    </>
  )
}
