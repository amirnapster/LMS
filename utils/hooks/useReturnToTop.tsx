import { useEffect } from 'react'
import { debounce } from 'utils/helpers/global'
import ReturnToTop from 'components/returnToTop'
import styles from 'components/returnToTop/returntotop.module.scss'

const useReturnToTop = () => {
  const scrollFunction = debounce((element: HTMLElement | null) => {
    if (window.scrollY > 300) {
      element?.classList.add(styles['returnToTop--show'])
    } else element?.classList.remove(styles['returnToTop--show'])
  }, 100)

  useEffect(() => {
    const element = document.getElementById('return-to-top')
    window.addEventListener('scroll', () => scrollFunction(element))

    return () => {
      window.removeEventListener('scroll', () => scrollFunction(element))
    }
  }, [])

  return {
    returnToTop: <ReturnToTop />,
  }
}

export default useReturnToTop
