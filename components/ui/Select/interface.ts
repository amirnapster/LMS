import type { HTMLAttributes, ReactNode } from 'react'
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export interface SelectProps<TFieldValues, TOptions>
  extends HTMLAttributes<HTMLSelectElement> {
  label?: string
  suffix?: ReactNode
  error?: FieldError
  watch?: string | number
  clearInput?: (name?: string) => void
  required?: boolean
  children?: ReactNode
  options?: TOptions[]
  field?: TFieldValues
  disabled?: boolean
  register?: UseFormRegisterReturn<string>
}
