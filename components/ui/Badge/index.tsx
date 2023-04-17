import cn from 'classnames'
import { renderContent } from './helper'

import type { BadgeProps } from './interface'
import styles from './badge.module.scss'

const Badge = ({
  style,
  className,
  count,
  title,
  children,
  color,
  text,
  ripple,
  overflowCount,
  showZero,
  offset,
  ribbon,
  placement,
  lock,
  ...restProps
}: BadgeProps) =>
  !lock ? (
    <span
      className={cn(className, styles['badge'])}
      style={style}
      {...restProps}
    >
      {renderContent({
        count,
        title,
        children,
        color,
        text,
        ripple,
        overflowCount,
        showZero,
        offset,
        ribbon,
        placement,
        lock,
      })}
    </span>
  ) : (
    children
  )

Badge.defaultProps = {
  className: '',
  lock: false,
}

export default Badge
