import type { HTMLAttributes, ReactNode } from 'react'
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

// @ts-ignore
export interface InputProps<TFieldValues>
  extends HTMLAttributes<HTMLInputElement> {
  label?: string
  field?: TFieldValues
  register?: UseFormRegisterReturn<string>
  autoComplete?: string
  className?: string
  placeholder?: string
  prefix?: ReactNode
  suffix?: ReactNode
  type?: 'text' | 'number' | 'password'
  error?: FieldError
  readOnly?: boolean
  defaultValue?: string | number
  required?: boolean
  clearInput?: (name?: string) => void
  onFocus?: () => void
  onBlur?: () => void
}
