import type { KeyboardEvent } from 'react'
import type { CodeInputValue, InputType } from './interface'

export const handleCodeInput = (e: KeyboardEvent): CodeInputValue => {
  const { name, value: oldValue } = e.target as HTMLInputElement
  const fieldIndex = name.split('-')[1]
  const fieldIntIndex = parseInt(fieldIndex, 10)
  const value: CodeInputValue = null
  if (e.key === 'Backspace' && oldValue === '') {
    const prevField: InputType = document.querySelector(
      `input[name=code-${fieldIntIndex - 1}]`
    )
    if (fieldIntIndex !== 1) prevField?.focus()
  }

  return value
}
