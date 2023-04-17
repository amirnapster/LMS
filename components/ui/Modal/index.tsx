import { useTransition, animated } from 'react-spring'
import Portal from 'components/portal'
import cn from 'classnames'

import type { ReactNode } from 'react'
import Backdrop from './backdrop'
import styles from './modal.module.scss'

interface ModalProps {
  children: ReactNode
  visible: boolean
  className?: string
  backdropDisable?: boolean
  onClose?: () => void
}

const Modal = ({
  children,
  visible,
  onClose,
  backdropDisable,
  className,
}: ModalProps) => {
  const transition = useTransition(visible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  })

  return (
    <Portal root='modal-root' visible={visible}>
      {transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className={cn(styles['modal__container'], className)}
            >
              {children}
              <Backdrop
                backdropDisable={backdropDisable}
                closeModal={onClose}
              />
            </animated.div>
          )
      )}
    </Portal>
  )
}

Modal.defaultProps = {
  className: '',
  onClose: undefined,
  backdropDisable: false,
}

export default Modal
