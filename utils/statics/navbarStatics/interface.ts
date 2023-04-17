import type { ReactElement, ReactNode } from 'react'

export type NavbarDropdownKeys =
  | 'solutions'
  | 'services'
  | 'about'
  // | 'pricing'
  | 'industry'

export interface NavbarDropdownContent {
  title: string
  description?: string
  icon?: ReactElement
  route?: string
}

export interface NavbarDropdownContentProps {
  isSimple?: boolean
  content: NavbarDropdownContent[]
  id: string
}

export interface NavItemType {
  isSimple?: boolean
  content?: NavbarDropdownContent[]
  route?: string
}

export interface NavbarDropdownProps {
  item: NavItemType
  id: string
}

export type NavItemsType = Record<NavbarDropdownKeys, NavItemType>

export interface IProfileNavItem {
  title: string
  icon: ReactNode
  hasBadge?: boolean
  route?: string
}

export type ProfileNavItemsType = Record<string, IProfileNavItem>
