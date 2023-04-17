import { type CSSProperties, forwardRef } from 'react'
import cn from 'classnames'

import styles from './tag.module.scss'
import type { TagProps } from './interface'

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      bgColor,
      textColor,
      borderColor,
      children,
      className,
      style,
      ...restProps
    },
    ref
  ) => {
    const tagClassName = (): string => {
      const output = []
      if (bgColor) {
        if (bgColor.endsWith('gradient')) output.push(`bg-${bgColor}`)
        else output.push(`bg-color-${bgColor}`)
      }
      if (borderColor) output.push(`border-color-${borderColor}`)
      if (textColor) output.push(`color-${textColor}`)
      return output.join(' ')
    }

    const combineStyles = (): CSSProperties => {
      if (borderColor) return { border: '2px solid' }
      return {}
    }

    return (
      <span
        ref={ref}
        className={cn(styles['tag'], className, tagClassName())}
        style={{ ...combineStyles(), ...style }}
        {...restProps}
      >
        {children}
      </span>
    )
  }
)

export default Tag
