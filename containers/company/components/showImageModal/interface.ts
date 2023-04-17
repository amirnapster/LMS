import type { ProductLineItemsType } from 'libs/redux/slices/companyProductLine/interface'

export type ChangeMode = 'increment' | 'decrement'

export interface ShowImageModalType {
  visible: boolean
  closeModal: () => void
  currentImageIndex: number
  allImageCategory: ProductLineItemsType
  handleChangeCurrent: (type: ChangeMode) => void
  title: string
}
