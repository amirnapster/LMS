import type { DataConsistencyType } from 'libs/redux/services/v3'

export interface IFollowModalProps {
  type: DataConsistencyType
  entityId: number
}
