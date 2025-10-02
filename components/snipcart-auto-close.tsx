'use client'

import * as React from 'react'

export function SnipcartAutoClose() {
  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      // Ignore clicks happening inside Snipcart UI
      const inSnipcart = !!(target.closest('#snipcart'))
      if (inSnipcart) return

      // Find nearest anchor
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      const isInternal = href.startsWith('/') || href.startsWith('#')
      if (!isInternal) return

      const snipcart: any = (globalThis as any).Snipcart
      const isOpen =
        document.documentElement.classList.contains('snipcart-cart--opened') ||
        document.body.classList.contains('snipcart-cart--opened')
      if (snipcart && isOpen) {
        try { snipcart.api.theme.cart.close() } catch {}
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return null
}


