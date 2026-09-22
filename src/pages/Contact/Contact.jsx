import { useState } from 'react'
import { SURVEY_HASH } from '../../routes'
import styles from './Contact.module.css'

const OFFICE_IMAGE =
  'https://images.pexels.com/photos/27299956/pexels-photo-27299956.jpeg?auto=compress&cs=tinysrgb&w=1200'

const STEP_NAMES = ['THE SITE', 'WHAT YOU NEED', 'YOUR DETAILS']

function SurveyForm() {
  const [step, setStep] = useState(1)
  const [sent, setSent] = useState(false)

  const next = () => setStep((s) => Math.min(3, s + 1))
  const prev = () => setStep((s) => Math.max(1, s - 1))

  if (sent) {
    return (
      <div className={styles.done}>
        <p className={styles.doneTitle}>Request logged</p>
        <p className={styles.doneBody}>
          A supervisor will call to fix a survey time. If the requirement is urgent, call
          011-46267000 now rather than waiting for us.
        </p>
        <button
          type="button"
          className={styles.buttonGhost}
          onClick={() => {
            setSent(false)
            setStep(1)
          }}
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className={styles.stepHead}>
        <p className={styles.stepLabel}>STEP {step} / 3</p>
        <p className={styles.stepName}>{STEP_NAMES[step - 1]}</p>
      </div>

      <div className={styles.progress}>
        <span className={styles.segOn} />
        <span className={step >= 2 ? styles.segOn : styles.seg} />
        <span className={step >= 3 ? styles.segOn : styles.seg} />
      </div>

      {step === 1 && (
        <div className={styles.fields}>
          <label className={styles.field}>
            <span className={styles.label}>SITE TYPE</span>
            <select name="siteType" className={styles.select}>
              <option>Office / corporate campus</option>
              <option>Hospital</option>
              <option>Retail or restaurant</option>
              <option>Residential society</option>
              <option>Showroom</option>
              <option>School or institute</option>
              <option>Bank or ATM</option>
              <option>Event</option>
            </select>
          </label>
          <div className={styles.fieldRow}>
            <label className={styles.field}>
              <span className={styles.label}>CITY / LOCALITY</span>
              <input name="city" placeholder="e.g. Nehru Place" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>STATE</span>
              <select name="state" className={styles.select}>
                <option>Delhi</option>
                <option>Haryana</option>
                <option>Uttar Pradesh</option>
                <option>Chandigarh</option>
                <option>Himachal Pradesh</option>
              </select>
            </label>
          </div>
          <label className={styles.field}>
            <span className={styles.label}>WHAT PROMPTED THE ENQUIRY</span>
            <select name="reason" className={styles.select}>
              <option>New site or new posts</option>
              <option>Replacing the current agency</option>
              <option>Audit or compliance finding</option>
              <option>An incident on site</option>
              <option>One-off event cover</option>
            </select>
          </label>
          <button type="button" onClick={next} className={styles.buttonNext}>
            Next: what you need
          </button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.fields}>
          <label className={styles.field}>
            <span className={styles.label}>SERVICE</span>
            <select name="service" className={styles.select}>
              <option>Security guards</option>
              <option>Lady guards</option>
              <option>Supervisors</option>
              <option>Gunman / armed guard</option>
              <option>PSO / close protection</option>
              <option>Bouncers &amp; event crew</option>
              <option>Mobile patrol</option>
              <option>Surveillance support</option>
              <option>Housekeeping &amp; helpers</option>
            </select>
          </label>
          <div className={styles.fieldRowTight}>
            <label className={styles.field}>
              <span className={styles.label}>HEADCOUNT</span>
              <input name="count" inputMode="numeric" placeholder="6" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>SHIFT PATTERN</span>
              <select name="shift" className={styles.select}>
                <option>Three shifts, round the clock</option>
                <option>Two shifts of twelve hours</option>
                <option>Day shift only</option>
                <option>Night shift only</option>
              </select>
            </label>
            <label className={styles.field}>
              <span className={styles.label}>START DATE</span>
              <input name="start" type="date" className={styles.input} />
            </label>
          </div>
          <label className={styles.field}>
            <span className={styles.label}>ANYTHING WE SHOULD KNOW</span>
            <textarea
              name="notes"
              rows="3"
              placeholder="Problem posts, audit findings, existing agency…"
              className={styles.textarea}
            />
          </label>
          <div className={styles.actions}>
            <button type="button" onClick={prev} className={styles.buttonGhost}>
              Back
            </button>
            <button type="button" onClick={next} className={styles.buttonNext}>
              Next: your details
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.fields}>
          <label className={styles.field}>
            <span className={styles.label}>NAME</span>
            <input name="name" required className={styles.input} />
          </label>
          <div className={styles.fieldRow}>
            <label className={styles.field}>
              <span className={styles.label}>COMPANY</span>
              <input name="company" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>PHONE</span>
              <input name="phone" required inputMode="tel" className={styles.input} />
            </label>
          </div>
          <label className={styles.field}>
            <span className={styles.label}>BEST TIME FOR THE SURVEY</span>
            <select name="when" className={styles.select}>
              <option>Weekday morning</option>
              <option>Weekday afternoon</option>
              <option>Saturday morning</option>
              <option>After hours, to see the night shift</option>
            </select>
          </label>
          <div className={styles.actions}>
            <button type="button" onClick={prev} className={styles.buttonGhost}>
              Back
            </button>
            <button type="submit" className={styles.buttonSubmit}>
              Send request
            </button>
          </div>
          <p className={styles.demoNote}>Demo form — nothing is submitted yet.</p>
        </div>
      )}
    </form>
  )
}

export function Contact() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>CONTACT · CONTROL DESK &amp; SITE SURVEYS</p>
          <h1 className={styles.heroTitle}>
            Tell us about
            <br />
            <span className={styles.heroAccent}>the post</span>
          </h1>
          <p className={styles.heroLede}>
            No quote before the walk. A supervisor reads the perimeter, the posts and the shift
            pattern, writes the scope, then prices against it — usually inside two working days.
          </p>

          <div className={styles.tiles}>
            <a className={styles.tile} href="tel:01146267000">
              <p className={styles.tileLabel}>CONTROL DESK · 24 HOURS</p>
              <p className={styles.tileValue}>011-46267000</p>
            </a>
            <a className={styles.tileMid} href="tel:9958093720">
              <p className={styles.tileLabel}>MOBILE</p>
              <p className={styles.tileValue}>99580 93720</p>
            </a>
            <a className={styles.tileEnd} href="mailto:security@hawkeyeprotection.in">
              <p className={styles.tileLabel}>EMAIL</p>
              <p className={styles.tileEmail}>
                security@
                <br />
                hawkeyeprotection.in
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.mainInner}>
          <div id={SURVEY_HASH} className={styles.formCard}>
            <SurveyForm />
          </div>

          <div className={styles.side}>
            <div className={styles.urgent}>
              <p className={styles.urgentLabel}>URGENT REQUIREMENT</p>
              <p className={styles.urgentTitle}>Guard needed today?</p>
              <p className={styles.urgentBody}>
                Call rather than filling the form. Emergency cover comes from the reserve pool and
                can be posted the same day wherever we hold a licence.
              </p>
              <a className={styles.urgentCta} href="tel:01146267000">
                Call the control desk
              </a>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>REGISTERED OFFICE</p>
              <p className={styles.infoAddress}>
                109, 1st Floor, CSC DDA Market No. 1, Chittaranjan Park, New Delhi 110019
              </p>
              <p className={styles.infoHours}>
                Office hours Mon–Sat, 09:30–18:00.
                <br />
                Control desk answers 24 hours.
              </p>
            </div>

            <div className={styles.officeSlot}>
              <img className={styles.officeImg} src={OFFICE_IMAGE} alt="The C.R. Park office" />
            </div>

            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>LOOKING FOR WORK?</p>
              <p className={styles.workTitle}>Guards and ex-servicemen</p>
              <p className={styles.workBody}>
                Walk in with Aadhaar, address proof, discharge book if you have one, and two
                photographs. Selection boards sit on weekday mornings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
