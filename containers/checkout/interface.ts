import type { Apply_Discount_Response } from 'libs/redux/services/pricing/interface'

export interface PlanItemProps {
  title: string
  icon: JSX.Element
  price: number
  isSelected: boolean
  planId: number
  isEnabled: boolean
}

export interface PayableProps {
  discountPrice?: number
  discount?: number
  price?: number
}
