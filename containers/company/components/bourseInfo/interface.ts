import type { GridColumns } from 'components/ui/Col/interface'
import type { CompanySummary } from 'libs/redux/services/allv3'

export type BourseInfoSchemaType = {
  title: string
  text: string | null | undefined | number | JSX.Element
  size: {
    sm?: GridColumns
    md?: GridColumns
    lg?: GridColumns
  }
  copyable: boolean
}[]

export type BourseInfoDataBuilderType = CompanySummary | undefined
