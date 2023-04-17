import {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import responsiveObserve, {
  responsiveArray,
  type Breakpoint,
  type ScreenMap,
} from 'utils/helpers/responsiveObserve'
import cn from 'classnames'
import { handleAlignment, handleJustify } from './helper'
import RowContext from './RowContext'

import type { GapType, RowProps } from './interface'

const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const {
    children,
    align = undefined,
    justify = undefined,
    gap,
    gutter,
    wrap = false,
    className = '',
    direction = 'row',
    ...restProps
  } = props

  const gutterRef = useRef<RowProps['gutter']>(gutter)
  const [screens, setScreens] = useState<ScreenMap>({
    xxs: true,
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
  })

  useEffect(() => {
    const token = responsiveObserve.subscribe((screen) => {
      const currentGutter = gutterRef.current || 0
      if (
        (!Array.isArray(currentGutter) && typeof currentGutter === 'object') ||
        (Array.isArray(currentGutter) &&
          (typeof currentGutter[0] === 'object' ||
            typeof currentGutter[1] === 'object'))
      ) {
        setScreens(screen)
      }
    })
    return () => responsiveObserve.unsubscribe(token)
  }, [])

  const checkProps = (): string => {
    const styles: string[] = []
    if (align) styles.push(handleAlignment(align))
    if (justify) styles.push(handleJustify(justify))
    if ((gap || gap === 0) && !gutter) styles.push(`gap-${gap}`)
    if (wrap) styles.push('flex-wrap')
    if (className) styles.push(className)
    if (direction !== 'row') styles.push(`flex-${direction}`)

    return cn('d-flex', styles.join(' '))
  }

  const getGutter = (): [GapType, GapType] => {
    const results: [GapType, GapType] = [undefined, undefined]
    const normalizedGutter = Array.isArray(gutter)
      ? gutter
      : [gutter, undefined]

    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object') {
        // eslint-disable-next-line
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint: Breakpoint = responsiveArray[i]
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint] as number
            break
          }
        }
      } else {
        results[index] = g
      }
    })
    return results
  }

  const gutters = getGutter()

  const rowStyle: CSSProperties = {}
  const horizontalGutter =
    gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined
  const verticalGutter =
    gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined

  if (horizontalGutter) {
    rowStyle.marginInlineEnd = horizontalGutter
    rowStyle.marginInlineStart = horizontalGutter
  }

  if (verticalGutter) {
    rowStyle.marginBlockStart = verticalGutter
    rowStyle.marginBlockEnd = verticalGutter
  }

  const [gutterH, gutterV] = gutters
  const rowContext = useMemo(
    () => ({ gutter: [gutterH, gutterV] as [number, number] }),
    [gutterH, gutterV]
  )

  return (
    <RowContext.Provider value={rowContext}>
      <div
        ref={ref}
        style={{ ...rowStyle }}
        className={checkProps()}
        {...restProps}
      >
        {children}
      </div>
    </RowContext.Provider>
  )
})

export default Row
