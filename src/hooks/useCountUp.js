import { useEffect, useRef, useState } from 'react'

/** Animation is skipped entirely when the user opts out, or when IO is absent. */
function shouldSkipAnimation() {
  if (typeof window === 'undefined') return true
  if (typeof IntersectionObserver === 'undefined') return true
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

/**
 * §07 bento: one tile counts up from 0 when it scrolls into view. Returns a ref
 * to attach and the current display value; lands exactly on `target`.
 */
export function useCountUp(target, { duration = 1400 } = {}) {
  const ref = useRef(null)
  const skip = shouldSkipAnimation()
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el || skip) return undefined

    let raf = 0
    let start = 0

    const tick = (now) => {
      if (!start) start = now
      const progress = Math.min(1, (now - start) / duration)
      // ease-out cubic, so the number decelerates onto its final value
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          io.unobserve(entry.target)
          raf = requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 },
    )

    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration, skip])

  return [ref, skip ? target : value]
}
