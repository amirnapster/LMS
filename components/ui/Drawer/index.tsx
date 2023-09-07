import { type MouseEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTransition, animated } from 'react-spring'
import { toggleDrawer, toggleTransition } from 'libs/redux/slices/navbar'
import Portal from 'components/portal'
import cn from 'classnames'

import type { RootState } from 'libs/redux/store'
import type { DrawerProps } from './interface'
import styles from './drawer.module.scss'

const Drawer = ({ children, className }: DrawerProps) => {
  const dispatch = useDispatch()
  const { IsTransitioning, drawerStatus } = useSelector(
    (state: RootState) => state.navbar
  )
  const transition = useTransition(IsTransitioning, {
    from: { insetInlineEnd: '450px', insetInlineStart: '-150px' },
    enter: { insetInlineEnd: '100px', insetInlineStart: '0' },
    leave: { insetInlineEnd: '450px', insetInlineStart: '-150px' },
    config: { duration: 250 },
  })

  const clickOutside = (event: MouseEvent<HTMLElement>) => {
    const element = document.querySelector(`.${styles['drawer']}`)
    if (!element?.contains(event.target as Node))
      dispatch(toggleTransition(false))
  }

  useEffect(() => {
    const container = document.querySelector('.container')
    if (drawerStatus) {
      // @ts-ignore
      document.addEventListener('mousedown', clickOutside)
      //document.body.classList.add('stop-scrolling')
      container?.classList.add('blur-bg')
    } else {
      //document.body.classList.remove('stop-scrolling')
      container?.classList.remove('blur-bg')
    }
    return () => {
      // @ts-ignore
      document.removeEventListener('mousedown', clickOutside)
    }
  }, [drawerStatus])

  useEffect(() => {
    if (IsTransitioning) dispatch(toggleDrawer(true))
    else setTimeout(() => dispatch(toggleDrawer(false)), 200)
  }, [IsTransitioning])

  return (
    <Portal root='drawer-root' visible={drawerStatus}>
      {transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className={cn(styles['drawer'], className)}
            >
              {children}
            </animated.div>
          )
      )}
    </Portal>
  )
}

export default Drawer
