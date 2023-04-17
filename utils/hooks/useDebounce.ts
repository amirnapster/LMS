import { useState } from 'react'

type Timer = ReturnType<typeof setTimeout>
type SomeFunction = (...args: any[]) => void

/**
 *
 * @param func The original, non debounced function (You can pass any number of args to it)
 * @param delay The delay (in ms) for the function to return
 * @returns The debounced function, which will run only if the debounced function has not been called in the last (delay) ms
 */
const useDebounce = <Func extends SomeFunction>(func: Func, delay = 1000) => {
  const [timer, setTimer] = useState<Timer>()

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args)
    }, delay)
    clearTimeout(timer)
    setTimer(newTimer)
  }) as Func

  return debouncedFunction
}

export default useDebounce
