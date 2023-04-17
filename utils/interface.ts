/** Document types */
export type Config = {
  _id: string
  __url: null
  type: 'Config'
  favicon?: string
}
export type HeaderSection = {
  type: 'HeaderSection'
  header: string
  body: string
}

export type AboutUsEmployee = {
  type: 'AboutUsEmployee'
  name: string
  role: string
  url: string
  src: string
}
export type AboutUsDescription = {
  type: 'AboutUsDescription'
  title: string
  subtitle: string
  description: string
  reverse: boolean
  image: string
}
export type AboutUs = {
  type: 'AboutUs'
  title: string
  video: string
  height: string
  descriptions?: AboutUsDescription[]
  employees?: AboutUsEmployee[]
}

export type Section = HeaderSection | AboutUs

export type Page = {
  _id: string
  __url: string
  type: 'Page'
  title: string
  sections?: Section[]
  body?: string
}

export type StackbitObjectId = {
  'data-sb-object-id'?: string
}

export type StackbitFieldPath = {
  'data-sb-field-path'?: string
}
export type Document = Config | Page
export type DocumentTypeNames = 'Config' | 'Page'
