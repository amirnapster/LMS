import type { HTMLAttributes } from 'react'

export interface QuoteProps extends HTMLAttributes<HTMLDivElement> {
  user: string
  quote: string
  userRole?: string
  className?: string
}
