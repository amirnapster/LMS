import type { RowProps } from './interface'

export const handleAlignment = (alignment: RowProps['align']): string => {
  switch (alignment) {
    case 'top':
      return 'items-flex-start'
    case 'middle':
      return 'items-center'
    case 'bottom':
      return 'items-flex-end'
    default:
      return 'items-stretch'
  }
}

export const handleJustify = (justify: RowProps['justify']): string => {
  switch (justify) {
    case 'end':
      return 'justify-flex-end'
    case 'start':
      return 'justify-flex-start'
    default:
      return `justify-${justify}`
  }
}
