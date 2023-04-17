import type { HTMLAttributes, ReactNode } from 'react'

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  header: ReactNode
  icon?: JSX.Element | JSX.Element[]
  className?: string
  children?: ReactNode
  onToggle?: () => void
}
