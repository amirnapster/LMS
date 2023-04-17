import type { ReactNode } from 'react'

export type ServiceType =
  | 'authentication'
  | 'marketing-research'
  | 'find-customers'
  | 'product-development'
  | 'investment-opportunities'

export type SolutionCompanyManagementItemType =
  | 'start-authentication'
  | 'company-national-id'
  | 'ceo-authentication'

export interface ISolutionHeaderItem {
  icon: ReactNode
  subTitle: string
  title: string
}

export interface ISolutionDescriptionItem {
  title: string
  content: string
  img: ReactNode
}

export interface ISolutionGuideItem {
  title: string
  content: string
}

export interface IFeatures {
  title: string
  content: {
    title: string
    icon: ReactNode
    link: string
  }[]
}

export interface ISolutionCompanyDescriptionItem {
  title: string
  content: string
  img: ReactNode
}

interface ISolutionCompanyComparisonHeader {
  title?: ReactNode
}

export type solutionFeatureItemsDataType = Record<ServiceType, IFeatures>

export type solutionHeaderItemsDataType = Record<
  ServiceType,
  ISolutionHeaderItem
>

export type solutionGuideItemsDataType = Record<ServiceType, ISolutionGuideItem>

export type solutionDescriptionItemsDataType = Record<
  ServiceType,
  ISolutionDescriptionItem[]
>

export type SolutionCompanyManagementItemsType = Record<
  SolutionCompanyManagementItemType,
  string
>

export type SolutionCompanyDescriptionItemsDataType =
  ISolutionCompanyDescriptionItem[]

export type SolutionCompanyComparisonHeaderType =
  ISolutionCompanyComparisonHeader[]

export type SolutionCompanyComparisonBodyType = [string, boolean, boolean][]
