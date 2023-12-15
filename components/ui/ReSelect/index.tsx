import  CloseOutlined  from '@mui/icons-material/CloseOutlined'
import Select from 'react-select'
import cn from 'classnames'

import type {
  FieldValues,
  Path,
  PathValue,
  UseFormSetValue,
} from 'react-hook-form'
import type { ReSelectProps } from './interface'
import styles from './reSelect.module.scss'

const ReSelect = <
  TFieldValues extends FieldValues,
  TSetValue extends UseFormSetValue<TFieldValues>
>({
  label,
  error,
  field,
  clearInput,
  options,
  setValue,
  required,
  ...restProps
}: ReSelectProps<TFieldValues, TSetValue>) => {
  const message = error?.message
  const id = field?.name || restProps?.id

  const fieldStatus = (): string => {
    if (field.value) return styles['reSelect--selected']
    if (error) return styles['reSelect--error']
    return ''
  }

  return (
    <div>
      <div className={cn(styles['reSelect'], fieldStatus())}>
        <label
          htmlFor={id}
          data-selector={required ? 'field-required' : 'field-not-required'}
        >
          {label}
        </label>
        <Select
          {...field}
          value={options.find((a) => a.value === field.value) || ''}
          // @ts-ignore
          onChange={(option) =>
            setValue(
              field.name as Path<TFieldValues>,
              (option as { value: string })?.value as PathValue<
                TFieldValues,
                Path<TFieldValues>
              >
            )
          }
          className={styles['reSelect__search']}
          classNamePrefix={field.value ? 'rc-select--active' : 'rc-select'}
          // @ts-ignore
          options={options}
          placeholder={label}
          {...restProps}
        />
        {field.value && (
          <CloseOutlined
            onClick={() => clearInput?.(field.name)}
            className={styles['reSelect--clearIcon']}
          />
        )}
      </div>
      {message && (
        <span className={styles['reSelect--error--message']}>{message}</span>
      )}
    </div>
  )
}

export default ReSelect
