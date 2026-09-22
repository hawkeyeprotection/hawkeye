import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SURVEY_HASH } from '../routes'

/**
 * "Request a site survey" is one button in three places. On Home the form is
 * already on the page, so scroll to it; anywhere else it lives on Contact.
 */
export function useSurveyCta() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return useCallback(() => {
    if (pathname === '/') {
      const el = document.getElementById(SURVEY_HASH)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({ top, behavior: 'smooth' })
        return
      }
    }
    navigate('/contact')
  }, [navigate, pathname])
}
