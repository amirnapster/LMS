import type {
  NavbarDropdownContent,
  NavbarDropdownProps,
} from 'utils/statics/navbarStatics/interface'

export interface LogoProps {
  className?: string
  src: string
  title?: string
  shouldUpdate?: boolean
}

export interface MobileNavItemProps {
  content?: NavbarDropdownContent[]
  navKey: string
}

export type NavKeyItem = NavbarDropdownProps

export interface NavbarDropdownSideProps {
  image?: JSX.Element
  title: string
  subtitle?: string
  items?: NavbarDropdownContent[]
}

export interface NavbarSearchProps {
  cancelSearch?: () => void
}

export interface NavbarDrawerProps {
  login?: () => void
}
