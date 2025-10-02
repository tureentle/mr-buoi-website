'use client'

import { useState, useCallback, KeyboardEvent } from 'react'
import Image from 'next/image'

type ProductImageGalleryProps = {
  images: string[]
  alt: string
}

export default function ProductImageGallery({ images, alt }: ProductImageGalleryProps) {
  const safeImages = images && images.length > 0 ? images : ['/placeholder.svg']
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleThumbActivate = useCallback((index: number) => {
    setSelectedIndex(index)
  }, [])

  const onThumbKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        setSelectedIndex(index)
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % safeImages.length)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length)
      }
    },
    [safeImages.length],
  )

  return (
    <div>
      <div className="relative w-full aspect-[4/3] mb-4">
        <Image
          key={safeImages[selectedIndex]}
          src={safeImages[selectedIndex]}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {safeImages.length > 1 && (
        <div className="flex items-center gap-3">
          {safeImages.map((src, index) => {
            const isSelected = index === selectedIndex
            return (
              <button
                key={src + index}
                type="button"
                aria-label={`View image ${index + 1}`}
                aria-pressed={isSelected}
                className={`relative h-20 w-20 rounded-md overflow-hidden ring-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isSelected ? 'ring-2 ring-ring' : 'ring-0'
                }`}
                onClick={() => handleThumbActivate(index)}
                onKeyDown={(e) => onThumbKeyDown(e, index)}
              >
                <Image src={src} alt={`${alt} thumbnail ${index + 1}`} fill sizes="80px" className="object-cover" />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}


