export interface IHeaderMenu {
  personId: number | undefined
  closeMenu: () => void
  anchorEl: HTMLElement | null | undefined
  open: boolean
}
