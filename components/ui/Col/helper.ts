import type { Breakpoint } from 'utils/helpers/responsiveObserve'
import type { ColProps } from './interface'

export const checkProps = (props: ColProps): string => {
  const styles: string[] = []

  Object.keys(props).forEach((key) => {
    if (props[key as keyof ColProps] === undefined) return
    if (key === 'span' && props.span) styles.push(`col-${props[key]}`)
    else styles.push(`col-${key}-${props[key as Breakpoint]}`)
  })
  return styles.join(' ')
}
