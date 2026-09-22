import { useEffect, useState } from 'react'

function computeOpenState() {
  const d = new Date()
  const day = d.getDay()
  const mins = d.getHours() * 60 + d.getMinutes()
  if (day === 0) return 'CLOSED SUNDAY'
  const lastSat = day === 6 && d.getDate() + 7 > new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
  const close = lastSat ? 840 : 1080
  return mins >= 570 && mins < close ? 'OPEN NOW' : 'CONTROL DESK 24/7'
}

/** Live control-desk status label, re-evaluated every minute. */
export function useOpenState() {
  const [openState, setOpenState] = useState(computeOpenState)

  useEffect(() => {
    const id = setInterval(() => setOpenState(computeOpenState()), 60_000)
    return () => clearInterval(id)
  }, [])

  return openState
}
