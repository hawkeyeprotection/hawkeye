import bannerBriefing from '../../../assets/images/banners/banner-briefing.png'
import bannerDrill from '../../../assets/images/banners/banner-drill.png'
import bannerHoseCarry from '../../../assets/images/banners/banner-hose-carry.png'
import bannerHoseUnroll from '../../../assets/images/banners/banner-hose-unroll.png'
import { useAutoplay } from '../../../hooks/useAutoplay'
import styles from './TheWatch.module.css'

export function TheWatch() {
  const gateVideoRef = useAutoplay()
  const nightVideoRef = useAutoplay()
  const vaultVideoRef = useAutoplay()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.introRow}>
          <div>
            <p data-reveal="" className={styles.eyebrow}>
              01 — THE WATCH
            </p>
            <h2 data-reveal="" className={styles.heading}>
              Every post has a person.
              <br />
              Every person has a&nbsp;responsibility.
            </h2>
          </div>
          <p data-reveal="" className={styles.lede}>
            From the gate to the patrol, every assignment is planned, every shift is documented
            and every post has a designated person accountable for it.
          </p>
        </div>

        <div className={styles.row}>
          <figure data-reveal="" className={`${styles.tile} ${styles.tileWide}`}>
            <video
              ref={gateVideoRef}
              className={`${styles.tileMedia} ${styles.filterGate}`}
              src="https://www.pexels.com/download/video/32803390/"
              poster={bannerDrill}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <figcaption className={styles.tileCaption}>
              <p className={styles.tileTag}>GATE &amp; BARRIER · LIVE</p>
              <p className={`${styles.tileTitle} ${styles.tileTitleLarge}`}>
                Every vehicle logged, every pass checked
              </p>
            </figcaption>
          </figure>

          <figure data-reveal="" className={`${styles.tile} ${styles.tileNarrow}`}>
            <video
              ref={nightVideoRef}
              className={`${styles.tileMedia} ${styles.filterNight}`}
              src="https://www.pexels.com/download/video/34700170/"
              poster={bannerHoseUnroll}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
            <figcaption className={styles.tileCaption}>
              <p className={styles.tileTag}>NIGHT BEAT</p>
              <p className={`${styles.tileTitle} ${styles.tileTitleSmall}`}>
                When the light goes out, the watch continues
              </p>
            </figcaption>
          </figure>
        </div>

        <div className={`${styles.row} ${styles.rowSecondary}`}>
          <figure data-reveal="" className={`${styles.tile} ${styles.tileSquare}`}>
            <img
              className={`${styles.tileMedia} ${styles.filterDrill}`}
              src={bannerHoseCarry}
              alt="Hawk Eye guards running a fire-hose drill"
            />
            <figcaption className={`${styles.tileCaption} ${styles.tileCaptionCompact}`}>
              <p className={styles.tileTag}>OUR TRAINING GROUND</p>
              <p className={`${styles.tileTitle} ${styles.tileTitleCompact}`}>
                Prepared for on-ground realities
              </p>
            </figcaption>
          </figure>

          <figure data-reveal="" className={`${styles.tile} ${styles.tileSquare}`}>
            <video
              ref={vaultVideoRef}
              className={`${styles.tileMedia} ${styles.filterVault}`}
              src="https://videos.pexels.com/video-files/7713910/7713910-hd_1280_720_30fps.mp4"
              poster={bannerBriefing}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
            <figcaption className={`${styles.tileCaption} ${styles.tileCaptionCompact}`}>
              <p className={styles.tileTag}>CASH &amp; STRONG ROOM</p>
              <p className={`${styles.tileTitle} ${styles.tileTitleCompact}`}>
                Armed cover where the float sits
              </p>
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  )
}
