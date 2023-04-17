import type { HTMLAttributes } from 'react'
import type {
  ControllerRenderProps,
  FieldError,
  FieldValues,
} from 'react-hook-form'

export interface ReSelectProps<TFieldValues extends FieldValues, TSetValue>
  extends HTMLAttributes<HTMLDivElement> {
  label: string
  error?: FieldError
  field: ControllerRenderProps<TFieldValues, any>
  id?: string
  clearInput?: (name?: string) => void
  options: { value: string; label: string }[]
  setValue: TSetValue
  required?: boolean
}
