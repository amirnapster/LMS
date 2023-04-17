import type { CompanyContract } from 'libs/redux/services/allv3'

export interface List {
  price: string
  id: number
}

export type CheckedList = List[] | []

export interface CollapsibleTableProps {
  row: CompanyContract
  setCheckedList: any
  checkedList: CheckedList
}

export interface ISort {
  type: 'date' | 'price' | ''
  order: 'ascend' | 'descend' | ''
}

export type CompanyContractType = CompanyContract[] | []
