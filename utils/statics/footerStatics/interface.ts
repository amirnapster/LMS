import type { ReactNode } from 'react'
import type { LinkTarget } from 'utils/interfaces'

type FooterItems = {
  text: string
  route: string
  target?: LinkTarget
  tag?: string
}

export interface IFooterSigns {
  imgSource: string
  link?: {
    url: string
    type: string
    options: string
  }
}

export interface IFooterSocials {
  icon: ReactNode
  label: string
  link: string
}

export interface IFooterLinks {
  contactUs: FooterItems[]
}

export interface IFooterInfo {
  key: string
  title?: string
  text: string[]
}
