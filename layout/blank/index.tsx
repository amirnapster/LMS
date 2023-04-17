import useReturnToTop from 'utils/hooks/useReturnToTop'
import cn from 'classnames'
import { BlankFooter, BlankHeader, TempBlankLayout } from './helper'

import type { BlankLayoutProps } from './interface'
import styles from './blank.module.scss'

const BlankLayout = ({ className, children }: BlankLayoutProps) => {
  const { returnToTop } = useReturnToTop()
  return (
    <>
      <div className={cn(styles['blank'], 'container', className)}>
        <BlankHeader />
        <main>{children}</main>
        <TempBlankLayout />
        <BlankFooter />
      </div>
      {returnToTop}
    </>
  )
}

export default BlankLayout

BlankLayout.defaultProps = {
  className: '',
}
