import type { ReactNode } from 'react'

export interface CollapseProps {
  className?: string
  children: ReactNode
  accordion?: boolean
  defaultActiveKey?: string[] | number[]
  onChange?: (key: string) => void
}
