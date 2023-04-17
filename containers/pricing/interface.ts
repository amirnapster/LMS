import type { ButtonProps } from 'components/ui/Button/interface'
import { PresetColorType } from 'utils/interfaces'
import type { PlanItem } from 'utils/statics/pricingStatics/interface'

export interface PlanItemProps {
  plan: PlanItem
}

type FeatureItemData = {
  title: string
  free: boolean | string
  personal: boolean | string
  company: boolean | string
  organization: boolean | string
  info?: string
}
export interface FeatureItem {
  title: string
  data: FeatureItemData[]
}

export interface FeatureComponentProps {
  isMobile: boolean
}

export interface IBtnAttribute {
  'data-selector': string
  color: PresetColorType
  btnType?: ButtonProps['btnType']
  bgColor?: ButtonProps['bgColor']
}
