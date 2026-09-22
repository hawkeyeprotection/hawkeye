import bannerDrill from '../../../assets/images/banners/banner-drill.png'
import { useAutoplay } from '../../../hooks/useAutoplay'
import styles from './Hero.module.css'

const STATS = [
  { value: '35', unit: 'yrs', label: 'CONTINUOUS OPERATION' },
  { value: '5', unit: 'states', label: 'PSARA 2005 LICENSED' },
  { value: '3', unit: 'weeks', label: 'TRAINING BEFORE FIRST SHIFT' },
  { value: '24/7', unit: null, label: 'POSTS MANNED & SUPERVISED' },
]

export function Hero({ onRequestSurvey }) {
  const videoRef = useAutoplay()

  return (
    <section className={styles.hero}>
      <div className={styles.mediaLayer}>
        <video
          ref={videoRef}
          className={styles.heroVideo}
          src="https://www.pexels.com/download/video/38779098/"
          poster={bannerDrill}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className={styles.gradientOverlay} />
        <div className={styles.scanlineOverlay} />
        <div className={styles.scanBeam} />
      </div>

      <div className={styles.shutter} aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className={styles.shutterSlat}
            data-origin={i % 2 === 0 ? 'top' : 'bottom'}
          />
        ))}
      </div>

      <div className={styles.reticle} aria-hidden="true">
        <span className={styles.reticleCorner} data-pos="tl" />
        <span className={styles.reticleCorner} data-pos="tr" />
        <span className={styles.reticleCorner} data-pos="bl" />
        <span className={styles.reticleCorner} data-pos="br" />
        <span className={styles.reticleTick} data-pos="top" />
        <span className={styles.reticleTick} data-pos="bottom" />
        <span className={styles.reticleLabel}>FOCUS · LOCKED</span>
      </div>

      <div className={styles.content}>
        <div className={styles.eyebrowWrap}>
          <p className={styles.eyebrow}>PRIVATE SECURITY · NEW DELHI · SINCE 27.02.1991</p>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.headlineLineMask}>
            <span className={`${styles.headlineLine} ${styles.headlineLine1}`}>Somebody</span>
          </span>
          <span className={styles.headlineLineMask}>
            <span className={`${styles.headlineLine} ${styles.headlineLine2}`}>is always</span>
          </span>
          <span className={styles.headlineLineMask}>
            <span className={`${styles.headlineLine} ${styles.headlineLine3} ${styles.headlineAccent}`}>
              awake.
            </span>
          </span>
        </h1>

        <div className={styles.subRow}>
          <p className={styles.lede}>
            Guards, supervisors, gunmen and PSOs on post across Delhi NCR — selected on a rigid
            criterion, trained three weeks by ex-servicemen, and run under command &amp; control
            you are welcome to audit.
          </p>
          <div className={styles.ctaRow}>
            <button type="button" className={styles.primaryCta} onClick={onRequestSurvey}>
              Request a site survey <span className={styles.primaryCtaArrow}>&rarr;</span>
            </button>
            <a className={styles.secondaryCta} href="tel:01146267000">
              Call the control desk
            </a>
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.statsGrid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statCell}>
              <p className={styles.statValue}>
                {stat.value} {stat.unit && <span className={styles.statUnit}>{stat.unit}</span>}
              </p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
