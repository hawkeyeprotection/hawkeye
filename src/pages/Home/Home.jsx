import { startTransition, useEffect, useState } from 'react'
import { ClientMarquee } from '../../components/home/ClientMarquee/ClientMarquee'
import { Hero } from '../../components/home/Hero/Hero'
import { IndustriesSection } from '../../components/home/IndustriesSection/IndustriesSection'
import { ServicesLedger } from '../../components/home/ServicesLedger/ServicesLedger'
import { SurveySection } from '../../components/home/SurveySection/SurveySection'
import { TheWatch } from '../../components/home/TheWatch/TheWatch'
import { TrainingSection } from '../../components/home/TrainingSection/TrainingSection'
import { useOpenState } from '../../hooks/useOpenState'
import { useSurveyCta } from '../../hooks/useSurveyCta'

/** Section order exactly as in Hawk Eye Home.dc.html. */
export function Home() {
  const openState = useOpenState()
  const requestSurvey = useSurveyCta()
  const [showBelowFold, setShowBelowFold] = useState(false)

  // Rendering every section in one pass held the hero's first paint (and so its
  // intro animation) back until the whole page was built. Paint the hero alone,
  // then build the rest on the next frame as interruptible work so it can't
  // stall the intro.
  useEffect(() => {
    const id = requestAnimationFrame(() => startTransition(() => setShowBelowFold(true)))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <>
      <Hero onRequestSurvey={requestSurvey} />
      {showBelowFold && (
        <>
          <ClientMarquee />
          <TheWatch />
          <ServicesLedger onRequestSurvey={requestSurvey} />
          <TrainingSection />
          <IndustriesSection />
          <SurveySection openState={openState} />
        </>
      )}
    </>
  )
}
