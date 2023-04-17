import type { GridColumns } from 'components/ui/Col/interface'
import type { CompanySummary } from 'libs/redux/services/allv3'
import { ReactNode } from 'react'

export type BaseInfoSchemaType = {
  title: string
  text: string | null | undefined | number | ReactNode
  size: {
    sm?: GridColumns
    md?: GridColumns
    lg?: GridColumns
  }
  copyable: boolean
}[]

export type BaseInfoDataBuilderType = CompanySummary | undefined
