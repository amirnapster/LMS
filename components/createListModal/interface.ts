import type { DataConsistencyType } from 'libs/redux/services/v3'

export interface ICreateListModalInitialValue {
  title: string
  description: string
  type: DataConsistencyType
}

export interface ICreateListModalProps {
  type: DataConsistencyType
  entityId: number
}
