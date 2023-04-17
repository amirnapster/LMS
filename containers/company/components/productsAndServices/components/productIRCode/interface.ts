export type Products = {
  id: number
  titleFa: string
}

export interface ProductType {
  id: number
  products: Products[]
  title: string
  type: number
}
export interface ProductIrCodeModalType {
  data: ProductType | undefined
  onClose: () => void
}
