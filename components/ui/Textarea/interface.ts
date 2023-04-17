import type { HTMLAttributes } from 'react'
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

// @ts-ignore
export interface TextareaProps<TFieldValues>
  extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string
  field?: TFieldValues
  register?: UseFormRegisterReturn<string>
  className?: string
  placeholder?: string
  error?: FieldError
  readOnly?: boolean
  defaultValue?: string | number
  required?: boolean
  clearInput?: (name?: string) => void
  onFocus?: () => void
  onBlur?: () => void
}
