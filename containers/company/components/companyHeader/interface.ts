export interface IHeaderMenu {
  companyId: number | undefined
  closeMenu: () => void
  anchorEl: HTMLElement | null | undefined
  open: boolean
  isAuth: boolean
}
