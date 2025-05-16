import { useEffect, useRef } from 'react'

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: Event) => {
      if (!ref.current?.contains(e.target as Node)) {
        callback()
      }
    }
    document.addEventListener('click', handleKeyDown)
  }, [])

  return { ref }
}

export { useOutsideClick }
