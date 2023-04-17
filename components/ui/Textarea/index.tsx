import { useIntl } from 'react-intl'
import cn from 'classnames'

import type { TextareaProps } from './interface'
import styles from './textarea.module.scss'

const TextArea = <TFieldValues extends { value: string; name: string }>({
  label,
  field,
  register,
  className,
  placeholder,
  error,
  readOnly,
  defaultValue,
  required,
  onBlur,
  onFocus,
  ...restProps
}: TextareaProps<TFieldValues>) => {
  const intl = useIntl()
  const id = field?.name || register?.name || restProps?.id
  const message = error?.message

  const fieldStatus = (): string => {
    if (readOnly) return styles['textarea__field--readonly']
    if (error) return styles['textarea__field--error']
    return ''
  }

  return (
    <div className={cn(styles['textarea'], className)}>
      {label && (
        <label
          data-selector={required ? 'field-required' : 'field-not-required'}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <textarea
        className={cn(styles['textarea__field'], fieldStatus())}
        {...(field ? { ...field } : { ...register })}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        {...restProps}
      />
      {message && (
        <div className={styles['textarea--error']}>
          {intl.formatMessage({ id: message })}
        </div>
      )}
    </div>
  )
}

export default TextArea
