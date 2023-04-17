import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  title?: string
  subtitle?: string
  hasSource?: boolean
  hasMore?: boolean
  hasEdit?: boolean
  hasNews?: boolean
  info?: string
  className?: string
  onShow?: () => void
  count?: number
  baseCount?: number
}
