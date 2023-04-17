import type { components } from 'types/Search'
import type { RootObject } from 'libs/redux/services/home/interface'

export interface StatisticsProps {
  data?: RootObject
}
export interface GraphButtonProps {
  id: number | string | null | undefined
  isTypeCompany: boolean
}

export interface MostViewedProps {
  data?: {
    id: number
    title: string
    pictureUrl?: string
  }[]
  type: 'companies' | 'persons'
}
export interface SearchComponentProps {
  data: components['schemas']['ElasticSearchAllModel']
}
