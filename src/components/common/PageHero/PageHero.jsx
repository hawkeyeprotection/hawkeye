import styles from './PageHero.module.css'

/**
 * Dark masthead shared by every page below Home: an indexed eyebrow, a display
 * headline, a lede, and an optional strip of figures along the bottom edge.
 */
export function PageHero({ eyebrow, title, lede, stats, backdrop }) {
  return (
    <section className={styles.hero}>
      {backdrop && <img className={styles.backdrop} src={backdrop} alt="" />}
      <div className={styles.overlay} />
      <div className={styles.scanlines} />

      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        {lede && <p className={styles.lede}>{lede}</p>}

        {stats && (
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCell}>
                <p className={styles.statValue}>
                  {stat.value} {stat.unit && <span className={styles.statUnit}>{stat.unit}</span>}
                </p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
