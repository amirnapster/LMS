import type { HTMLAttributes, MouseEvent, ReactNode } from 'react'
import type { PresetColorType, LinkTarget } from 'utils/interfaces'

type BtnType = 'primary' | 'secondary' | 'link' | 'ghost'
type BtnSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
  type?: 'submit' | 'button' | 'reset' | undefined
  disabled?: boolean
  loading?: boolean
  href?: string | (() => string) | false
  target?: LinkTarget
  rel?: string
  id?: string
  ripple?: boolean
  form?: string
  btnType?: BtnType
  bgColor?: PresetColorType
  color?: PresetColorType
  lock?: boolean
  size?: BtnSize
}
