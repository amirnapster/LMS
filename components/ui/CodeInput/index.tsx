import { regex } from 'utils/helpers/validations'
import { type KeyboardEvent, useEffect, useState, ChangeEvent } from 'react'
import type { CodeInputProps, CodeInputValue, InputType } from './interface'

import styles from './codeInput.module.scss'
import { handleCodeInput } from './helper'

const CodeInput = ({
  length,
  getValue,
  onChange,
  disabled = false,
}: CodeInputProps) => {
  const loopThrough = Array(length).fill(0)
  const initialValues = Object.assign(
    {},
    ...loopThrough.map((_, index) => ({ [`code-${index + 1}`]: '' }))
  )
  const [values, setValues] = useState<Record<string, string>>(initialValues)

  const handleKeyUp = (e: KeyboardEvent) => {
    const { name } = e.target as HTMLInputElement
    const inputValue: CodeInputValue = handleCodeInput(e)
    if (inputValue !== null)
      setValues((prev) => ({ ...prev, [name]: inputValue }))
  }

  useEffect(() => {
    const valuesObj = Object.keys(values)
    const returnedValue = valuesObj.map((key) => values[key]).join('')

    if (returnedValue.length === length) getValue(returnedValue)
    if (onChange) onChange(returnedValue)
  }, [values, length])

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { target } = e
    let { value } = target
    if (value === '') {
      const prevField: InputType = document.querySelector(
        `input[name=code-${index - 1}]`
      )
      prevField?.focus()
      setValues((prev) => ({ ...prev, [target.name]: '' }))
      return
    }
    if (!value.match(regex['numberOnly'])) value = ''

    const nextField: InputType = document.querySelector(
      `input[name=code-${index + value.length}]`
    )

    if (index + value.length - 1 !== length) nextField?.focus()
    const a = { ...values }
    for (let i = 0; i < value.length; i++) {
      a[`code-${index + i}`] = value.substring(i, i + 1)
    }

    setValues(a)
  }

  return (
    <>
      {loopThrough.map((_, index) => (
        <input
          autoComplete='off'
          /* eslint-disable */
          autoFocus={!index}
          className={styles['codeInput']}
          name={`code-${index + 1}`}
          onKeyUp={handleKeyUp}
          onChange={(e) => handleChange(e, index + 1)}
          value={values[`code-${index + 1}`]}
          disabled={disabled}
          /* eslint-disable */
          key={index}
          type='number'
        />
      ))}
    </>
  )
}

export default CodeInput
