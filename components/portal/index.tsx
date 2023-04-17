import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import type { ModalProps } from './interface'

const Portal = ({ children, visible, root }: ModalProps) => {
  const [mounted, setMount] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  const isMobile = false

  useEffect(() => {
    ref.current = document.querySelector(`#${root}`)
    if (visible && (root === 'modal-root' || root === 'dropdown-root')) {
      document.body.classList.add('stop-scrolling')
      if (!isMobile) document.body.classList.add('scrollbar-width')
    } else if (
      (root === 'modal-root' ||
        root === 'drawer-root' ||
        root === 'dropdown-root') &&
      !visible
    ) {
      document.body.classList.remove('stop-scrolling', 'scrollbar-width')
    }
  }, [visible])

  useEffect(() => {
    setMount(true)
    return () => {
      setMount(false)
    }
  }, [])

  return mounted && ref.current && visible
    ? createPortal(children, ref.current)
    : null
}

export default Portal
