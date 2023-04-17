import { useDispatch } from 'react-redux'
import { LampSvg } from 'assets/icons'
import { ArrowBackRounded } from '@mui/icons-material'
import { setVisible } from 'libs/redux/slices/auth'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import Container from 'components/container'

import styles from './header.module.scss'

const WhatIsHeader = () => {
  const dispatch = useDispatch()

  const openLoginModal = () => dispatch(setVisible({ visible: true }))

  return (
    <Container>
      <Row className={styles['header']} justify='center' wrap>
        <Col xs={24} lg={12} xxl={10}>
          <Row gap={0}>
            <LampSvg data-selector='header-svg' viewBox='0 0 36 40' />
            <span data-selector='header-title'>رسمیو چیست؟</span>
          </Row>

          <div data-selector='header-description'>
            <div>رسمیو</div> پلتفرم ارتباط و تحلیل کسب‌وکارها
          </div>

          <Button
            btnType='primary'
            size='large'
            bgColor='white-gold-gradient'
            color='text-color-900'
            data-selector='header-try'
            onClick={openLoginModal}
          >
            <span>رایگان امتحان کنید</span>
            <ArrowBackRounded />
          </Button>
        </Col>
        <Col
          className='d-flex justify-center items-center'
          xs={24}
          lg={12}
          xxl={10}
        >
          <iframe
            data-selector='header-video'
            src='https://player.arvancloud.ir/index.html?config=https://rasmio.arvanvod.ir/2qzrmoAx63/MP3pm4Z0Xy/origin_config.json'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='about-us'
            //   webkitallowfullscreen='true'
            //   mozallowfullscreen='true'
          />
        </Col>
      </Row>
    </Container>
  )
}

export default WhatIsHeader
