import type { ReactNode } from 'react'

export interface DrawerProps {
  children: ReactNode
  onClose?: () => void
  className?: string
}
