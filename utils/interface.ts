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

export type Section = HeaderSection

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
