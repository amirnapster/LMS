import { toast } from 'react-toastify'
import type { ReactElement } from 'react'

type ToastPosition =
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'
type TypeProps = 'warn' | 'success' | 'error' | 'info' | ''
type DraggableDirection = 'x' | 'y'

export interface OptionProps {
  autoClose?: number | false
  newestOnTop?: boolean
  rtl?: boolean
  pauseOnFocusLoss?: boolean
  draggable?: boolean
  hideProgressBar?: boolean
  pauseOnHover?: boolean
  position?: ToastPosition
  onOpen?: () => void
  onClose?: () => void
  draggableDirection?: DraggableDirection
  delay?: number
  className?: string
  bodyClassName?: string
  containerId?: string
}

interface Props {
  type?: TypeProps
  message?: string | ReactElement
  config?: OptionProps
}

export const notify = ({ type = '', message = '', config }: Props) => {
  const options = {
    autoClose: 3000,
    newestOnTop: false,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: true,
    hideProgressBar: true,
    position: toast.POSITION.BOTTOM_CENTER,
    pauseOnHover: true,
    className: 'notification',
    bodyClassName: '',
  }
  const newOptions = { ...options, ...config }

  switch (type) {
    case 'error':
      return toast.error(message || 'عملیات ناموفق بوده است', newOptions)
    case 'info':
      return toast.info(message || 'عملیاتی رخ داده است', newOptions)
    case 'warn':
      return toast.warn(
        message || 'در انجام عملیات مشکلی رخ داده است',
        newOptions
      )
    default:
      return toast.success(
        message || 'عملیات با موفقیت انجام شده است',
        newOptions
      )
  }
}
