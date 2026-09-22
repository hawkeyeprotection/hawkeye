import { useEffect } from 'react'

/**
 * Ports the dc-runtime scroll-reveal behaviour: elements tagged [data-reveal]
 * fade+rise into view the first time they cross into the viewport, with a
 * timed backstop so nothing stays invisible if IO or scroll timing misbehaves.
 *
 * `resetKey` re-arms the observer — pass the current route so a client-side
 * navigation re-scans the page that just mounted instead of leaving its
 * [data-reveal] elements unobserved.
 */
export function useReveal(resetKey) {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return
          entry.target.style.animation = `heFade .8s cubic-bezier(.2,.9,.2,1) ${i * 0.07}s both`
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    const vh = () => window.innerHeight || 800

    const scan = () => {
      document.querySelectorAll('[data-reveal]:not([data-seen])').forEach((el) => {
        el.setAttribute('data-seen', '1')
        if (el.getBoundingClientRect().top > vh() * 0.92) {
          el.style.opacity = '0'
          io.observe(el)
        }
      })
    }

    const revealAll = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (el.style.opacity === '0') {
          el.style.animation = 'heFade .6s ease-out both'
          io.unobserve(el)
        }
      })
    }

    scan()
    const t1 = setTimeout(scan, 600)
    const t2 = setTimeout(revealAll, 4000)

    const onScroll = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (el.style.opacity !== '0') return
        const r = el.getBoundingClientRect()
        if (r.top < vh() * 0.9) {
          el.style.animation = 'heFade .7s cubic-bezier(.2,.9,.2,1) both'
          io.unobserve(el)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [resetKey])
}
