import { useEffect, useRef } from 'react'

/**
 * React sets the `muted` IDL property after the `autoplay` attribute has
 * already landed on the element, so browsers' native autoplay gate can see
 * an (as far as it's concerned) unmuted video and silently block it. Forcing
 * `.play()` once the ref is attached sidesteps that race.
 */
export function useAutoplay() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.muted = true
    const playPromise = el.play()
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {})
    }
  }, [])

  return ref
}
