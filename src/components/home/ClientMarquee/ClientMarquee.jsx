import { Link } from 'react-router-dom'
import { CLIENT_ROW } from '../../../data/clients'
import atdc from '../../../assets/images/clients/client-atdc.png'
import bikanervala from '../../../assets/images/clients/client-bikanervala.png'
import biotech from '../../../assets/images/clients/client-biotech.png'
import bombayMercantile from '../../../assets/images/clients/client-bombay-mercantile.png'
import galaxyToyota from '../../../assets/images/clients/client-galaxy-toyota.png'
import itl from '../../../assets/images/clients/client-itl.png'
import mcdonalds from '../../../assets/images/clients/client-mcdonalds.png'
import mpJewellers from '../../../assets/images/clients/client-mp-jewellers.png'
import wipro from '../../../assets/images/clients/client-wipro.png'
import styles from './ClientMarquee.module.css'

const CLIENT_LOGOS = {
  wipro,
  mcdonalds,
  bikanervala,
  'galaxy-toyota': galaxyToyota,
  'mp-jewellers': mpJewellers,
  itl,
  'bombay-mercantile': bombayMercantile,
  atdc,
  biotech,
}

function ClientCell({ client, decorative }) {
  if (client.kind === 'text') {
    return (
      <div className={styles.cell}>
        <p className={styles.cellText}>{client.label}</p>
      </div>
    )
  }
  return (
    <div className={styles.cell}>
      <img
        className={styles.cellImg}
        src={CLIENT_LOGOS[client.key]}
        alt={decorative ? '' : client.alt}
      />
    </div>
  )
}

export function ClientMarquee() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>ON POST ACROSS DELHI NCR</p>
        <Link className={styles.seeLink} to="/clients">
          SEE THE POSTINGS &rarr;
        </Link>
      </div>

      <div className={styles.track}>
        <div className={styles.trackGroup}>
          {CLIENT_ROW.map((client) => (
            <ClientCell key={client.key} client={client} />
          ))}
        </div>
        <div className={styles.trackGroup} aria-hidden="true">
          {CLIENT_ROW.map((client) => (
            <ClientCell key={`${client.key}-dup`} client={client} decorative />
          ))}
        </div>
      </div>
    </section>
  )
}
