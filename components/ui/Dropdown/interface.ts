import type { ReactElement } from 'react'

type PlacementType =
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

type PositionType = 'absolute' | 'fixed'

export interface DropdownProps {
  children: ReactElement
  menu: JSX.Element
  id: string
  placement?: PlacementType
  position?: PositionType
  fullWidth?: boolean
  className?: string
}

export type DropdownTypes = 'list' | 'menu'
