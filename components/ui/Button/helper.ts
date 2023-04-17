import { MouseEvent } from 'react'

import styles from './button.module.scss'
import type { ButtonProps } from './interface'

export const removeRippleEffect = (element: HTMLButtonElement) => {
  const rippleSpan = element.querySelector(`.${styles['button--ripple']}`)
  if (rippleSpan) rippleSpan.remove()
}

export const createRippleEffect = (event: MouseEvent<HTMLButtonElement>) => {
  const button = event.currentTarget

  const btnRect = button.getBoundingClientRect()
  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2

  circle.style.width = `${diameter}px`
  circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - btnRect.left - radius}px`
  circle.style.top = `${event.clientY - btnRect.top - radius}px`
  circle.classList.add(styles['button--ripple'])

  button.appendChild(circle)
}

export const btnTypeClassName = (
  type?: ButtonProps['btnType'],
  bgColor?: ButtonProps['bgColor'],
  color?: ButtonProps['color']
): string => {
  const className = styles[`button--${type}`] ?? ''
  const currentColor = color || 'primary'

  if (type === undefined) return ''

  if (type === 'primary') {
    const primaryColor = color || 'simple-white'
    const primaryBgColor = bgColor || 'primary'

    if (bgColor?.includes('gradient')) {
      return `${className} btn-bg-${bgColor} color-${primaryColor}`
    }
    return `${className} btn-bg-color-${primaryBgColor} color-${primaryColor}`
  }

  if (type === 'link' || type === 'ghost') {
    return `${className} btn-bg-color-transparent color-${currentColor}`
  }

  return `${className} btn-bg-color-transparent color-${currentColor}`
}
