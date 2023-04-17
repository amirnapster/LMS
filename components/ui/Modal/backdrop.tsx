import cn from 'classnames'
import styles from './modal.module.scss'

interface BackdropProps {
  closeModal?: () => void
  backdropDisable?: boolean
}

const Backdrop = ({ closeModal, backdropDisable }: BackdropProps) => (
  <div
    role='button'
    aria-label=''
    tabIndex={0}
    onKeyDown={closeModal}
    onClick={closeModal}
    className={cn(
      styles['portal__mask'],
      backdropDisable ? styles['portal__mask--disable'] : ''
    )}
  />
)

Backdrop.defaultProps = {
  closeModal: undefined,
  backdropDisable: false,
}

export default Backdrop
