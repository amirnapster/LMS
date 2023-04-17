import type { HTMLAttributes } from 'react'
import type { PresetColorType } from 'utils/interfaces'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  bgColor?: PresetColorType
  textColor?: PresetColorType
  borderColor?: PresetColorType
}
