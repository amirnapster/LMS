import { useLayoutEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { usePopper } from 'react-popper'
import Portal from 'components/portal'

import type { DropdownTypes, DropdownProps } from './interface'

const Dropdown = ({
  children,
  menu,
  id,
  placement,
  position,
  className,
}: DropdownProps) => {
  const [isOverMenu, setIsOverMenu] = useState<boolean>(false)
  const [isOverList, setIsOverList] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<string>('')

  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(elementRef, dropdownRef, {
    placement: placement ?? 'bottom-end',
    strategy: position ?? 'absolute',
  })

  const transition = useTransition(isOpen === id, {
    from: { opacity: 0, zIndex: 8 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  })

  const toggleDropDown = (type: DropdownTypes) => {
    if (type === 'menu') setIsOverMenu((prev) => !prev)
    else setIsOverList((prev) => !prev)
    setIsOpen((prev) => (!prev ? id : id))
  }

  useLayoutEffect(() => {
    if (isOpen === id && !isOverList && !isOverMenu) {
      setIsOpen('')
    } else if (!isOpen && (isOverList || isOverMenu)) setIsOpen(id)
  }, [isOverList, isOverMenu])

  return (
    <>
      <div
        ref={setElementRef}
        className={className}
        onMouseEnter={() => toggleDropDown('menu')}
        onMouseLeave={() => toggleDropDown('menu')}
      >
        {menu}
      </div>
      <Portal root='dropdown-root' visible={isOpen === id}>
        {transition(
          (style, item) =>
            item && (
              <animated.div
                ref={setDropdownRef}
                style={{ ...style, ...styles.popper }}
                onMouseEnter={() => toggleDropDown('list')}
                onMouseLeave={() => toggleDropDown('list')}
                {...attributes.popper}
              >
                {children}
              </animated.div>
            )
        )}
      </Portal>
    </>
  )
}

export default Dropdown
