import { useDispatch } from 'react-redux'
import { setVisible } from 'libs/redux/slices/auth'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'

import styles from './completeProfile.module.scss'

const CompleteProfileModal = () => {
  const dispatch = useDispatch()

  return (
    <Row className={styles['profile']} direction='column' align='middle'>
      <span className={styles['profile--title']}>وارد شدید</span>
      <span className={styles['profile--subTitle']}>
        اطلاعات پروفایل شما ناقص است، با استفاده از لینک زیر می‌توانید آن را
        تکمیل کنید
      </span>

      <Button
        className='w-100 ms-2'
        btnType='primary'
        size='large'
        href='/dashboard/profile/'
        onClick={() => dispatch(setVisible({ visible: false }))}
      >
        تکمیل پروفایل
      </Button>

      <Button
        className='w-100 ms-half'
        btnType='ghost'
        size='large'
        onClick={() => dispatch(setVisible({ visible: false }))}
      >
        بعدا؛ ورود به رسمیو
      </Button>
    </Row>
  )
}

export default CompleteProfileModal
