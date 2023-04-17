export interface EditPersonData {
  id?: number
  events?: null
  personId?: number | undefined
  title: string
  gender: boolean
  tagline?: string
  picture: string
  address?: string
  postalCode?: string
  lat?: number
  lng?: number
  tel: string
  fax?: string
  webSite: string
  instagram: string
  linkedIn: string
  twitter: string
  mobile: string
  email: string
  description: string
  note?: string
  statusID?: number
  suggestionCheckDate?: string
  suggestingUser?: number
  adminChecker?: number
}
