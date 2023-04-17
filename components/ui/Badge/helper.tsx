import cn from 'classnames'

import type { BadgeProps } from './interface'
import styles from './badge.module.scss'

export const renderContent = ({
  count,
  title,
  children,
  color,
  text,
  ripple,
  overflowCount,
  showZero,
  offset = 'topLeft',
  ribbon = false,
  placement = 'end',
  lock,
}: BadgeProps) => {
  const checkOverflowCount = () => {
    if (!count && !showZero) return null
    if ((count || count === 0) && (!overflowCount || overflowCount >= count))
      return count
    return `${overflowCount}+`
  }

  // ribbon with text
  if (ribbon && text) {
    return (
      <div className={styles['ribbon--wrapper']}>
        {children}
        <div
          className={cn(
            styles['ribbon'],
            styles[`ribbon__placement--${placement}`],
            `bg-color-${color || 'primary'}`,
            `color-${color || 'primary'}`
          )}
        >
          <span>{text}</span>
          <div className={styles['ribbon--corner']} />
        </div>
      </div>
    )
  }
  // text with dot badge without children
  if (!count && !title && !children) {
    return (
      <>
        <span
          className={cn(
            styles['badge--dot'],
            ripple ? styles['badge--dot--ripple'] : '',
            `bg-color-${color || 'primary'}`,
            `color-${color || 'primary'}`
          )}
        />
        {text && <span className={styles['badge--text']}>{text}</span>}
      </>
    )
  }
  // count with offset and children
  if (count || showZero || offset) {
    return (
      <>
        {children}
        <sup
          className={cn(
            styles['badge__count'],
            styles[`badge__count--${offset}`]
          )}
          title={!lock ? '' : title || String(count)}
        >
          {title || checkOverflowCount()}
        </sup>
      </>
    )
  }

  return children
}
