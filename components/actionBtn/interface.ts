import type { ReactNode } from 'react'
import type { LinkTarget } from 'utils/interfaces'

export interface ActionBtnProps {
  onClick?: () => void
  icon: ReactNode
  title: string
  href?: string | (() => string) | false
  target?: LinkTarget
}
