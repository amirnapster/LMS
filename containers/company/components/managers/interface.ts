import type { components } from 'types/Companies'

export type CompanyManager = components['schemas']['CompanyPeople']
export type CompanyManagerItems = components['schemas']['CompanyPersonPosition']

export interface IOpen {
  id: number
  status: boolean
}

export interface CollapsibleTableProps {
  row: CompanyManagerItems
  open: IOpen
  openItemHandler: (id: number) => void
}

export interface ISort {
  order: 'ascend' | 'descend' | ''
}

export type SortType = 'ascend' | 'descend' | ''

export type CompanyManagerKeyType = keyof Pick<
  CompanyManager,
  'companyInspectors' | 'companyDirectors'
>
export type CompanyManagerItemsType = CompanyManagerItems[]
