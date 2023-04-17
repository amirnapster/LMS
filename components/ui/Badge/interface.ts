import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import type { PresetColorType } from 'utils/interfaces'

type OffsetTypes = 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'

type PlacementTypes = 'start' | 'end'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  /** Number to show in badge */
  count?: ReactNode
  showZero?: boolean
  /** Max count to show */
  overflowCount?: number
  /** Wether to show ribbon or not */
  ribbon?: boolean
  /** Placement of the ribbon */
  placement?: PlacementTypes
  offset?: OffsetTypes
  style?: CSSProperties
  className?: string
  color?: PresetColorType
  text?: ReactNode
  title?: string
  children?: ReactNode
  ripple?: boolean
  /** If we want to use badge as lock for buttons */
  lock?: boolean
}
