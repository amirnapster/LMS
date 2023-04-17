import { forwardRef } from 'react'
import { CircularProgress } from '@mui/material'
import { LockSvg } from 'assets/icons'
import Link from 'next/link'
import cn from 'classnames'
import {
  btnTypeClassName,
  createRippleEffect,
  removeRippleEffect,
} from './helper'
import Badge from '../Badge'

import type { ButtonProps } from './interface'
import styles from './button.module.scss'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      onClick = undefined,
      children,
      type = 'button',
      disabled = false,
      btnType,
      bgColor,
      color,
      loading = false,
      href = '',
      target = '_self',
      rel = '',
      id = undefined,
      size = undefined,
      lock = false,
      form,
      ripple = false,
      ...restProps
    },
    ref
  ) => (
    // @ts-ignore
    <Badge
      className={styles['button--lock']}
      count={<img src={LockSvg} alt='' />}
      lock={!lock}
    >
      <button
        ref={ref}
        className={cn(
          className,
          styles['button'],
          size ? styles[`button--${size}`] : '',
          disabled ? styles['button--disabled'] : '',
          loading ? styles['button--loading'] : '',
          btnTypeClassName(btnType, bgColor, color)
        )}
        id={id}
        form={form}
        onClick={onClick}
        onMouseDown={ripple ? createRippleEffect : undefined}
        onAnimationEnd={(e) => ripple && removeRippleEffect(e.currentTarget)}
        type={type}
        disabled={disabled}
        {...restProps}
      >
        {children}
        {loading && (
          <CircularProgress className={styles['button--spinner']} size={15} />
        )}
        {href && (
          <Link prefetch={false} href={href as string}>
            <a target={target} rel={rel} href={href as string}>
              {' '}
            </a>
          </Link>
        )}
      </button>
    </Badge>
  )
)

export default Button
