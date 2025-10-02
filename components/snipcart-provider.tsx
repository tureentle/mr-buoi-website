'use client'

import { useEffect } from 'react'

export function SnipcartProvider() {
  useEffect(() => {
    // Ensure the Snipcart container exists only once and is not managed by React
    if (!document.getElementById('snipcart')) {
      const container = document.createElement('div')
      container.id = 'snipcart'
      container.hidden = true
      const apiKey = process.env.NEXT_PUBLIC_SNIPCART_API_KEY || ''
      if (apiKey) container.setAttribute('data-api-key', apiKey)
      container.setAttribute('data-currency', 'usd')
      container.setAttribute('data-config-modal-style', 'side')
      document.body.appendChild(container)
    }
  }, [])

  return null
}


