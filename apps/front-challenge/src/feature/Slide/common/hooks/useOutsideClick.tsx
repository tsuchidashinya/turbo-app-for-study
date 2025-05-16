import { useEffect, useRef } from "react"

const useOutsideClick = ({ callback }: { callback: () => void }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!ref.current?.contains(e.target as Node)) {
        callback()
      }
    })
    // eslint-disable-next-line
  }, [])

  return { ref }
}

export { useOutsideClick }
