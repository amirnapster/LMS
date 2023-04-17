import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'

export type GridColumns =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24

export interface ColumnBreakpoints {
  /** < 360px */
  xxs?: GridColumns
  /** between 360px to 576px */
  xs?: GridColumns
  /** between 576px to 768px */
  sm?: GridColumns
  /** between 768px to 992px */
  md?: GridColumns
  /** between 992px to 1200px */
  lg?: GridColumns
  /** between 1200px to 1366px */
  xl?: GridColumns
  /** > 1366px */
  xxl?: GridColumns
}

export interface ColProps
  extends ColumnBreakpoints,
    HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  span?: GridColumns
  flex?: string | number
  className?: string
  style?: CSSProperties
}
