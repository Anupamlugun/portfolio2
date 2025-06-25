"use client"

import { useEffect, useRef, useState } from "react"

export function useIntersectionObserver({ threshold = 0.1, rootMargin = "0px", triggerOnce = true } = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        setIsIntersecting(isElementIntersecting)

        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, hasIntersected])

  return {
    ref,
    isIntersecting: triggerOnce ? hasIntersected : isIntersecting,
  }
}
