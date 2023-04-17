import cn from 'classnames'

import styles from './divider.module.scss'

interface Divider {
  className?: string
  vertical?: boolean
  dashed?: boolean
}

const Divider = ({ className, vertical, dashed }: Divider) => {
  const checkBorderDirection = () => {
    if (dashed) {
      if (vertical) return styles['divider--vertical--dashed']
      return styles['divider--horizontal--dashed']
    }
    return ''
  }

  return (
    <div
      className={cn(
        className,
        vertical ? styles['divider--vertical'] : styles['divider--horizontal'],
        checkBorderDirection()
      )}
    />
  )
}

Divider.defaultProps = {
  className: '',
  vertical: false,
  dashed: false,
}

export default Divider
