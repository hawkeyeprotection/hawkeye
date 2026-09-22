import bannerBriefing from '../../../assets/images/banners/banner-briefing.png'
import bannerDrill from '../../../assets/images/banners/banner-drill.png'
import { TRAINER_RANKS } from '../../../data/ranks'
import { useAutoplay } from '../../../hooks/useAutoplay'
import styles from './TrainingSection.module.css'

export function TrainingSection() {
  const videoRef = useAutoplay()

  return (
    <section className={styles.section}>
      <img className={styles.backdropImg} src={bannerBriefing} alt="" />
      <div className={styles.backdropOverlay} />

      <div className={styles.grid}>
        <div>
          <p data-reveal="" className={styles.eyebrow}>
            03 — WHO TRAINS THEM
          </p>
          <h2 data-reveal="" className={styles.heading}>
            Taught by men
            <br />
            who did it
            <br />
            in uniform
          </h2>
          <p data-reveal="" className={styles.lede}>
            Three weeks of daily indoor and outdoor work before a guard reaches your gate — drill,
            fire, evacuation, bomb-scare search, register discipline, and social responsibility as
            a module, not an afterthought.
          </p>
          <ul data-reveal="" className={styles.ranks}>
            {TRAINER_RANKS.map((rank) => (
              <li key={rank.index} className={styles.rank}>
                <span
                  className={`${styles.rankIndex} ${rank.highlight ? styles.rankIndexHighlight : ''}`}
                >
                  {rank.index}
                </span>
                <span
                  className={`${styles.rankName} ${rank.highlight ? styles.rankNameHighlight : ''}`}
                >
                  {rank.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="" className={styles.videoCard}>
          <video
            ref={videoRef}
            className={styles.videoCardMedia}
            src="https://www.pexels.com/download/video/10476428/"
            poster={bannerDrill}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
          <span className={styles.videoCardTagLeft}>PERIMETER · REC</span>
          <span className={styles.videoCardDot} />
        </div>
      </div>
    </section>
  )
}
