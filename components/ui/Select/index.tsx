import  CloseOutlined  from '@mui/icons-material/CloseOutlined'
import cn from 'classnames'

import type { ReactNode } from 'react'
import type { SelectProps } from './interface'
import styles from './select.module.scss'

const Select = <
  TFieldValues extends { value: string; name: string },
  TOptions extends ReactNode[]
>({
  label,
  suffix,
  error,
  watch,
  clearInput,
  required,
  children,
  options,
  field,
  register,
  disabled,
  ...restProps
}: SelectProps<TFieldValues, TOptions>) => {
  const id = field?.name || register?.name || restProps?.id
  const value = watch || field?.value
  const message = error?.message

  const fieldStatus = (): string => {
    if (clearInput && value) return styles['select--selected--clear']
    if (value) return styles['select--selected']
    if (error) return styles['select--error']
    return ''
  }

  return (
    <>
      <div className={cn(styles['select'], fieldStatus())}>
        {label && (
          <label
            data-selector={required ? 'field-required' : 'field-not-required'}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <select
          id={id}
          {...(field ? { ...field } : { ...register })}
          {...restProps}
          disabled={disabled}
        >
          <option value='' selected={!!restProps?.placeholder} disabled hidden>
            {restProps?.placeholder}
          </option>
          {options || children}
        </select>
        {value && clearInput && (
          <CloseOutlined
            onClick={() => clearInput?.(id)}
            className={styles['select--clearIcon']}
          />
        )}
        {suffix && <div className={styles['select--suffix']}>{suffix}</div>}
      </div>
      {message && (
        <span className={styles['select--error--message']}> {message} </span>
      )}
    </>
  )
}

export default Select
