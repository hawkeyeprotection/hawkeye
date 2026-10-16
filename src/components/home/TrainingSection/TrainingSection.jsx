import bannerBriefing from '../../../assets/images/banners/banner-briefing.png'
import { useAutoplay } from '../../../hooks/useAutoplay'
import styles from './TrainingSection.module.css'

export function TrainingSection() {
  const videoRef = useAutoplay()

  return (
    <section className={styles.section}>
      <video
        ref={videoRef}
        className={styles.bgVideo}
        src="https://videos.pexels.com/video-files/12761921/12761921-hd_1920_1080_25fps.mp4"
        poster={bannerBriefing}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className={styles.overlay} />

      <p className={styles.recTag} aria-hidden="true">
        <span className={styles.recDot} />
        TRAINING GROUND · REC
      </p>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p data-reveal="" className={styles.eyebrow}>
            03 — WHO TRAINS THEM
          </p>
          <h2 data-reveal="" className={styles.heading}>
            Trained by men who served the nation, to protect you
          </h2>
          <p data-reveal="" className={styles.lede}>
            Rigorous pre-induction indoor and outdoor training before the guard reaches your gates —
            pre-induction training builds the basics; on-site training builds familiarity,
            discipline and response.
          </p>
          <p data-reveal="" className={`${styles.lede} ${styles.ledeStrong}`}>
            Guards learn the procedures, protocols and responsibilities that matter where they are
            actually deployed.
          </p>
        </div>
      </div>
    </section>
  )
}
