import { toast } from 'react-hot-toast'
import type { ReactElement } from 'react'
 
type TypeProps = 'warn' | 'success' | 'error' | 'info' | ''
type DraggableDirection = 'x' | 'y'

 

interface Props {
  type?: TypeProps
  message?: string | ReactElement
  duration?: number
}

export const notify = ({ type = '', message = '',duration=4000 }: Props) => {
  const options = {
    duration,
    newestOnTop: false,
    rtl: true,
    pauseOnFocusLoss: false,
    draggable: true,
    hideProgressBar: true,
    pauseOnHover: true,
    className: 'notification',
    bodyClassName: '',
  }

  switch (type) {
    case 'error':
      return toast.error(message || 'عملیات ناموفق بوده است', options)
    case 'info':
      return toast(message || 'عملیاتی رخ داده است', options)
    case 'warn':
      return toast.error(
        message || 'در انجام عملیات مشکلی رخ داده است',
        options
      )
    default:
      return toast.success(
        message || 'عملیات با موفقیت انجام شده است',
        options
      )
  }
}
