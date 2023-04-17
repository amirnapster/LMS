export type PolicyItemsType = Record<string, string>

export type ProductLineItemsType = {
  src: string
  imageLink: string
  title: string
  desc: string
}[]

export interface ICompanyWebsiteItems {
  type?: 'rate' | 'supportTel' | 'supportEmail'
  title: string
  emptyState: string
}

export type CompanyActiveItemsType =
  | 'واردکننده'
  | 'تولیدکننده'
  | 'خدمت‌دهنده'
  | 'توزیع‌کننده'
  | 'صادرکننده'

export type CompanyHeaderSubTabItemsType = {
  subTitle: string
  link: string
}[]

export type contractItemsType = Record<string, string>
