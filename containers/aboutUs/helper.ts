import { type MutableRefObject } from 'react'

export const handleScroll = (
  scrollRef: MutableRefObject<null>,
  containerRef: MutableRefObject<null>
) => {
  document.onscroll = () => {
    if (scrollRef.current && containerRef.current) {
      const ref = scrollRef.current as HTMLDivElement
      const containRef = containerRef.current as HTMLDivElement
      ref.scrollBy({
        left: containRef.offsetTop - window.scrollY - ref.scrollLeft,
      })
    }
  }
}
