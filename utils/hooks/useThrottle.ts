import { useCallback, useEffect, useRef } from 'react'

// @ts-ignore
const useThrottle = (callback, delay?: number, deps?: any) => {
  const timeoutRef = useRef()
  const callbackRef = useRef(callback)
  const lastCalledRef = useRef(0)
  const delayTime = delay || 500

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => window.clearTimeout(timeoutRef.current), [delayTime])
  // @ts-ignore
  return useCallback((...args) => {
    window.clearTimeout(timeoutRef.current)

    function invoke() {
      callbackRef.current(...args)
      lastCalledRef.current = Date.now()
    }

    const elapsed = Date.now() - lastCalledRef.current

    if (elapsed >= delayTime) {
      invoke()
    } else {
      // @ts-ignore
      timeoutRef.current = window.setTimeout(invoke, delayTime - elapsed)
    }
  }, deps)
}

export default useThrottle
