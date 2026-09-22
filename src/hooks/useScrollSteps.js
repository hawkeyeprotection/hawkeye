import { useEffect, useRef, useState } from 'react'

/**
 * §07 "How we take over your site": a pinned panel whose steps advance as the
 * section scrolls past. Above the pinning breakpoint the section is taller than
 * the viewport and `active` tracks scroll depth; below it the caller stacks the
 * steps instead and this stays inert.
 */
export function useScrollSteps(count, enabled = true) {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) {
      setActive(0)
      return undefined
    }

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const rect = el.getBoundingClientRect()
        const scrollable = rect.height - window.innerHeight
        if (scrollable <= 0) return
        const progress = Math.min(1, Math.max(0, -rect.top / scrollable))
        setActive(Math.min(count - 1, Math.floor(progress * count)))
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [count, enabled])

  return [ref, active]
}
