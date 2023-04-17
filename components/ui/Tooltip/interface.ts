import type { HTMLAttributes, ReactElement } from 'react'

type TooltipDirections =
  | 'top'
  | 'bottom'
  | 'right'
  | 'left'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end'
  | 'auto'
  | 'auto-start'
  | 'auto-end'

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: string | ReactElement
  content: string | ReactElement
  placement?: TooltipDirections
  position?: 'fixed' | 'absolute'
  className?: string
}
