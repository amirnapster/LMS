import type { HTMLAttributes, ReactNode } from 'react'
import type { Breakpoint } from 'utils/helpers/responsiveObserve'

export type GutterType = number | Partial<Record<Breakpoint, number>>

export type GapType = number | undefined

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  align?: 'top' | 'middle' | 'bottom'
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  gap?: 0 | 1 | 2 | 3 | 4 | 5
  gutter?: GutterType | [GutterType, GutterType]
  wrap?: boolean
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  className?: string
}
