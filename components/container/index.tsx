import cn from 'classnames'

import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import styles from './container.module.scss'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  contain?: CSSProperties['contain']
}

const Container = ({
  children,
  className,
  contain = 'none',
  ...restProps
}: ContainerProps) => (
  <div className={cn('w-100', className)} {...restProps}>
    <div className={cn(styles['container'], `contain-${contain} w-100`)}>
      {children}
    </div>
  </div>
)

Container.defaultProps = {
  className: '',
  contain: 'none',
}

export default Container
