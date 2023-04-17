import { useMemo } from 'react'
import cn from 'classnames'
import CollapseContext from './CollapseContext'

import type { CollapseProps } from './interface'
import styles from './collapse.module.scss'

const Collapse = ({ accordion, className, children }: CollapseProps) => {
  const collapseContext = useMemo(() => ({ accordion }), [accordion])

  return (
    <CollapseContext.Provider value={collapseContext}>
      <div className={cn(className, styles['collapse'])}>{children}</div>
    </CollapseContext.Provider>
  )
}

Collapse.defaultProps = {
  className: '',
}

export default Collapse
