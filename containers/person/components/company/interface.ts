import type { PersonCompanySummary } from 'libs/redux/services/v3'

export interface IOpen {
  id: number
  status: boolean
}

export interface CollapsibleTableProps {
  row: PersonCompanySummary
  open: IOpen
  openItemHandler: (id: number) => void
}

export type SortType = 'ascend' | 'descend' | ''

export interface ISort {
  order: SortType
}

export type PersonCompanyItemsType = PersonCompanySummary[]
