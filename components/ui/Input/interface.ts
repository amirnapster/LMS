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
  type?: 'text' | 'number' | 'password' | 'tel'
  error?: FieldError
  readOnly?: boolean
  defaultValue?: string | number
  required?: boolean
  maxLength?: number
  clearInput?: (name?: string) => void
  onFocus?: () => void
  onBlur?: () => void
}
