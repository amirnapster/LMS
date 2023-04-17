import { useState, useEffect, type MutableRefObject } from 'react'

const useOutsideRef = (ref: MutableRefObject<null | HTMLDivElement>) => {
  const [isOutside, setIsOutside] = useState(false)

  const clickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOutside(true)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside)
    return () => {
      document.removeEventListener('mousedown', clickOutside)
    }
  }, [ref])

  return isOutside
}

export default useOutsideRef
