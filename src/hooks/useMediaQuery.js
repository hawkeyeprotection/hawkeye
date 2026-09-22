import { useCallback, useSyncExternalStore } from 'react'

/**
 * Drives the §08 rule that scroll pinning is disabled under 768px.
 * useSyncExternalStore is the right primitive here — matchMedia is an external
 * store, so there is no effect and no re-render cascade on mount.
 */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query])

  // Server render has no viewport; assume the stacked (unpinned) layout.
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
