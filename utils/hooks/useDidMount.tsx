import { useEffect, useRef } from 'react'

// @ts-ignore
const useDidMountEffect = (callback, dependencies) => {
  const mounted = useRef(true)

  useEffect(() => {
    if (mounted.current) {
      mounted.current = false
      return
    }
    return callback()
  }, dependencies)
}

export default useDidMountEffect
