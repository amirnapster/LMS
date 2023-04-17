import { ReactNode } from 'react'

export type ServiceType =
  | 'graph'
  | 'advanced-search'
  | 'ads'
  | 'persons'
  | 'companies'
  | 'industry'
  | 'api'

interface IHeaderStatics {
  title: string
  className: string
  icon: ReactNode
  subtitle: ReactNode
}

interface IGuidesStatics {
  description: string
  note: string
  features: string[]
  video: string
  link: {
    text: string
    url: string
  }
  image: ReactNode
  btn: string
  download: {
    text: string
    url: string
  }
}

export interface IContactUsStatics {
  description: string
  icon: ReactNode
  action: {
    title: string
    url: string
  }
}

interface ICustomerLogo {
  src?: string
  alt?: string
}

interface ISubscriptionPlansHeader {
  title?: string
  description?: string
}

interface ISubscriptionPlansBody {
  [index: string]: {
    [index: string]: {
      title: string
      description: string
    }[]
  }
}
interface IDescription {
  title?: string
  subtitle?: string
  arrowDown?: boolean
  list?: {
    title: string
    items: string[]
  }
  questions?: {
    title: string
    items: string[]
  }
  answers?: {
    title: string
    item: ReactNode
  }
}
export interface IOtherService {
  service: string
  title: string
  icon: ReactNode
  link: string
}

export interface StaticPageWebServiceItem {
  title: string
  icon: string
}

export interface ICodeSample {
  code: string
  imgSrc?: string
}

export type StaticsHeaderDataType = Record<ServiceType, IHeaderStatics>

export type StaticsGuidesDataType = Record<ServiceType, IGuidesStatics>

export type StaticsContactUsDataType = Record<ServiceType, IContactUsStatics>
export type StaticsCustomersDataType = Record<ServiceType, ICustomerLogo[]>

export type StaticsSubscriptionPlansHeaderType = ISubscriptionPlansHeader[]
export type StaticsSubscriptionPlansBodyType = ISubscriptionPlansBody
export type DescriptionDataType = Record<ServiceType, IDescription>

export type StaticPageWebServiceItemsType = StaticPageWebServiceItem[]
export type StaticsOtherServiceDataType = IOtherService[]

export type CodeSampleLanguages = 'php' | 'python' | 'c#' | 'go'

export type CodeSampleItems = Record<CodeSampleLanguages, ICodeSample>
