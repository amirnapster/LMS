import type { ReactNode } from 'react'

export interface ModalProps {
  children: ReactNode
  visible: boolean
  root: 'modal-root' | 'dropdown-root' | 'tooltip-root' | 'drawer-root'
}
