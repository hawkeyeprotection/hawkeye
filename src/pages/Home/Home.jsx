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

  return (
    <>
      <Hero onRequestSurvey={requestSurvey} />
      <ClientMarquee />
      <TheWatch />
      <ServicesLedger onRequestSurvey={requestSurvey} />
      <TrainingSection />
      <IndustriesSection />
      <SurveySection openState={openState} />
    </>
  )
}
