export interface CodeInputProps {
  length: number
  getValue: (value: string) => void
  disabled?: boolean
  onChange?: (value: string) => void
}

export type CodeInputValue = string | null

export type InputType = HTMLInputElement | null
