import React, { type ForwardedRef } from 'react'
import { useIntl } from 'react-intl'
import  CloseOutlined  from '@mui/icons-material/CloseOutlined'
import PasswordVisibility from 'components/passwordVisibility'
import cn from 'classnames'

import type { InputProps } from './interface'
import styles from './input.module.scss'

declare module 'react' {
  function forwardRef<T, P = unknown>(
    render: (props: P, ref: Ref<T>) => ReactElement | null
  ): (props: P & RefAttributes<T>) => ReactElement | null
}

const InputInner = <TFieldValues extends { value: string; name: string }>(
  props: InputProps<TFieldValues>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const {
    label,
    field,
    register,
    autoComplete,
    className,
    placeholder,
    prefix,
    suffix,
    type,
    error,
    readOnly,
    defaultValue,
    required,
    clearInput,
    onBlur,
    onFocus,
    maxLength,
    ...restProps
  } = props

  const intl = useIntl()
  const id = field?.name || register?.name || restProps?.id
  const message = error?.message

  const fieldStatus = (): string => {
    if (readOnly) return styles['input__wrapper--readonly']
    if (error) return styles['input__wrapper--error']
    return ''
  }

  return (
    <div className={cn(styles['input'], className)}>
      {label && (
        <label
          data-selector={required ? 'field-required' : 'field-not-required'}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className={cn(styles['input__wrapper'], fieldStatus())}>
        {prefix && <div data-selector='prefix'>{prefix}</div>}
        <input 
          ref={ref}
          {...(field ? { ...field } : { ...register })}
          type={type}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          id={id}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          {...restProps}
        />
        {clearInput && field?.value && !(suffix || prefix) && (
          <CloseOutlined
            onClick={() => clearInput?.(field?.name)}
            className={styles['input--clearIcon']}
          />
        )}
        {(suffix || type === 'password') && (
          <div data-selector='suffix'>
            {suffix || <PasswordVisibility id={id} />}
          </div>
        )}
      </div>
      {message && (
        <span className={styles['input--error']}>
          {intl.formatMessage({ id: message })}
        </span>
      )}
    </div>
  )
}

const Input = React.forwardRef(InputInner)

InputInner.defaultProps = {
  field: undefined,
  register: undefined,
  label: '',
  autoComplete: 'off',
  className: '',
  placeholder: '',
  prefix: undefined,
  suffix: undefined,
  type: 'text',
  error: undefined,
  readOnly: false,
  defaultValue: undefined,
}

export default Input
