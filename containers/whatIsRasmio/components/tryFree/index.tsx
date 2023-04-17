import { useDispatch } from 'react-redux'
import { setVisible } from 'libs/redux/slices/auth'
import { ArrowBackRounded } from '@mui/icons-material'
import { PricingFaqIcon, PhoneIcon } from 'assets/icons'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'

import Container from 'components/container'
import styles from './tryFree.module.scss'

const WhatIsTryFree = () => {
  const dispatch = useDispatch()

  const openLoginModal = () => dispatch(setVisible({ visible: true }))

  return (
    <Container>
      <Row className={styles['tryFree']} align='middle' justify='center' wrap>
        <Col md={24} lg={10} data-selector='icon' className='text-center'>
          <img src={PricingFaqIcon} alt='support man' />
        </Col>
        <Col md={24} lg={10} className='d-flex flex-column gap-2 items-center'>
          <h2 data-selector='title'>همین حالا رایگان استفاده کنید</h2>

          <p data-selector='description'>
            بسیاری از قابلیت‌های رسمیو را می‌توانید رایگان امتحان کنید.
          </p>
          <p data-selector='description'>
            همچنین اگر سوالی دارید با ما تماس بگیرید.
          </p>
          <Row align='middle'>
            <Button
              btnType='primary'
              size='large'
              bgColor='white-gold-gradient'
              color='text-color-900'
              onClick={openLoginModal}
              data-selector='free-btn'
              ripple
            >
              رایگان امتحان کنید
              <ArrowBackRounded />
            </Button>
            <Row align='middle'>
              <span>021-91304041</span>
              <PhoneIcon data-selector='phone' />
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default WhatIsTryFree
