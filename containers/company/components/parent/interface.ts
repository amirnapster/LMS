import type { ParentCompanyInfo } from 'libs/redux/services/allv3'

export interface IOpen {
  id: number
  status: boolean
}

export interface CollapsibleTableProps {
  row: ParentCompanyInfo
  open: IOpen
  openItemHandler: (id: number) => void
}

export type SortType = 'ascend' | 'descend' | ''

export interface ISort {
  order: SortType
}

export type CompanyParentItemsType = ParentCompanyInfo[]
