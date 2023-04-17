import type { ReactNode } from 'react'

export interface IFAQItem {
  answer: string
  question?: ReactNode
}

export type FAQItemsType = Record<string, IFAQItem[]>

export interface PricingFeatureItem {
  icon: JSX.Element
  title: string
  description: string
  route: string
}

export type PricingFeatureItems = PricingFeatureItem[]

type Price = {
  price?: number | undefined
  originalPrice?: number | undefined
  numberOfUser?: number | undefined
}

export type PlanItem = {
  svg: JSX.Element
  title: string
  description: string
  price: string[]
  yearly: boolean
  users?: number[]
  step: number
  btnText: string
  preFactor: boolean
  attributes: string[]
  customers: { customerName: string; url: string }[]
  link: string
  isEnabled: boolean | undefined
  isUpgrade: boolean | undefined
  isExtend: boolean | undefined
  validUntil: string | undefined
  pricing?: Price[] | null | undefined
  id: number
}
