import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { usePopper } from 'react-popper'
import Portal from 'components/portal'
import cn from 'classnames'

import type { TooltipProps } from './interface'
import styles from './tooltip.module.scss'

const Tooltip = ({
  children,
  content,
  placement,
  position,
  className,
  ...restProps
}: TooltipProps) => {
  const [active, setActive] = useState(false)
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null)
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null)

  const style = useSpring({
    opacity: active ? 1 : 0,
    config: { duration: 250 },
  })

  const { styles: popperStyles, attributes } = usePopper(
    elementRef,
    tooltipRef,
    {
      placement: placement ?? 'bottom-end',
      strategy: position ?? 'absolute',
    }
  )

  const checkProps = (): string => {
    if (placement === 'bottom') return styles['tooltip__content--bottom']
    if (placement === 'right') return styles['tooltip__content--right']
    if (placement === 'left') return styles['tooltip__content--left']
    return styles['tooltip__content--top']
  }

  const toggleToolTip = () => setActive((prev) => !prev)

  return (
    <div
      ref={setElementRef}
      className={styles['tooltip']}
      onMouseEnter={toggleToolTip}
      onMouseLeave={toggleToolTip}
      {...restProps}
    >
      {children}
      <Portal root='tooltip-root' visible={active}>
        <animated.div
          ref={setTooltipRef}
          style={{ ...style, ...popperStyles.popper }}
          className={cn(styles['tooltip__content'], checkProps(), className)}
          {...attributes.popper}
        >
          {content}
        </animated.div>
      </Portal>
    </div>
  )
}

export default Tooltip
