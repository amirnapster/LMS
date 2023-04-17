export interface EditCompanyData {
  nameEn: string
  taxNumber: string
  picture: string
  history: string
  phone: string
  fax: string
  webSite: string
  email: string
  instagram: string
  linkedIn: string
  twitter: string
  lat: number
  lng: number
}

type FormValues =
  | 'webSite'
  | 'picture'
  | 'taxNumber'
  | 'lat'
  | 'lng'
  | 'fax'
  | 'email'
  | 'nameEn'
  | 'history'
  | 'phone'
  | 'instagram'
  | 'linkedIn'
  | 'twitter'

export interface MapModalProps {
  setValue: (value: [number, number]) => void
  onClose: () => void
}
