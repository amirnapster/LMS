import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { setVisible } from 'libs/redux/slices/auth'
import {
  ArrowRightIcon,
  EmailIcon,
  PhoneIcon,
  RasmioAltLogo,
} from 'assets/icons'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import Modal from 'components/ui/Modal'
import Container from 'components/container'
import Authentication from 'containers/authentication'
import RequestConsultantModal from 'components/requestConsultantModal'

import type { RootState } from 'libs/redux/store'

export const BlankHeader = () => {
  const { pathname, push } = useRouter()
  const back = () => {
    if (pathname === '/checkout') push('/pricing')
    else push('/')
  }
  return (
    <Container>
      <Row data-selector='blank-header' justify='center' style={{ zIndex: 1 }}>
        <Button data-selector='logo' href='/'>
          <img src={RasmioAltLogo} alt='rasmio-alt' />
        </Button>
        <Button ripple data-selector='return' onClick={back}>
          <ArrowRightIcon />
          <span>بازگشت</span>
        </Button>
      </Row>
    </Container>
  )
}

export const BlankFooter = () => (
  <Row data-selector='blank-footer' gap={1} justify='space-between' wrap>
    <Col xxs={24} sm={10} className='gap-0 d-flex justify-flex-start'>
      <PhoneIcon />
      <span>شماره تماس :</span>
      <a href='tel:+982191304041'>021-91304041</a>
      <span />
    </Col>
    <Col xxs={24} sm={9} className='gap-0 d-flex justify-flex-end'>
      <EmailIcon />
      <span>ایمیل : </span>
      <a href='mailto:salam@rasm.io'>salam@rasm.io</a>
    </Col>
    <Col span={24} className='text-center' data-selector='content'>
      <span>کلیه حقوق این وبسایت و برند رسمیو متعلق به </span>
      <a href='/company/14009396050/Rasmio/'>شرکت پیشگامان رسمی پردازش دانا</a>
      <span> است.</span>
    </Col>
  </Row>
)

export const TempBlankLayout = () => {
  const dispatch = useDispatch()
  const { visible } = useSelector((state: RootState) => state.auth)

  const closeModal = () => dispatch(setVisible({ visible: false }))

  return (
    <>
      <Modal visible={visible} onClose={closeModal}>
        <Authentication />
      </Modal>
      <RequestConsultantModal />
    </>
  )
}
