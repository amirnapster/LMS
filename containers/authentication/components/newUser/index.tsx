import { useDispatch } from 'react-redux'
import { setVisible } from 'libs/redux/slices/auth'
import { Player } from '@lottiefiles/react-lottie-player'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import styles from './newUser.module.scss'

const NewUserModal = () => {
  const dispatch = useDispatch()

  return (
    <Row className={styles['newUser']} direction='column' align='middle'>
      <div className={styles['newUser--lottie']}>
        <Player
          src='/lottie/authentication/success.json'
          autoplay
          keepLastFrame
        />
      </div>
      <span className={styles['newUser--title']}>ثبت نام شما انجام شد</span>
      <span className={styles['newUser--subTitle']}>
        به نماتک خوش آمدید؛ اکنون می‌توانید از امکانات نماتک استفاده نمایید.
      </span>

      <Button
        className={styles['newUser--completed']}
        btnType='primary'
        href='/dashboard/profile/'
        onClick={() => dispatch(setVisible({ visible: false }))}
        size='large'
      >
        تکمیل پروفایل
      </Button>

      <Row className='w-100 ms-half' align='middle' gap={0}>
        <Col flex={1}>
          <Button className='w-100' href='/about-us' btnType='ghost'>
            درباره نماتک
          </Button>
        </Col>
        <Col flex={1}>
          <Button
            className='w-100'
            onClick={() => dispatch(setVisible({ visible: false }))}
            btnType='secondary'
          >
            ورود به نماتک
          </Button>
        </Col>
      </Row>
    </Row>
  )
}

export default NewUserModal
