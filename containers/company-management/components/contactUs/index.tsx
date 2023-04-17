import { useDispatch } from 'react-redux'
import { PhoneIcon } from 'assets/icons'
import { setVisible } from 'libs/redux/slices/requestConsultant'
import Container from 'components/container'
import RequestConsultantModal from 'components/requestConsultantModal'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import styles from './contactUs.module.scss'

const SolutionCompanyContactUs = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Row className={styles['contactUs']} align='middle' justify='center' wrap>
        <RequestConsultantModal />
        <Col md={24} lg={10} data-selector='icon' className='text-center'>
          <img src='/svg/staticPage/nigga.png' alt='nigga' />
        </Col>
        <Col sm={24} lg={13} className='d-flex flex-column gap-2 items-center'>
          <h2 data-selector='title'>سوالی دارید؟</h2>
          <p data-selector='description'>
            به سادگی می‌توانید از سرویس پروفایل اختصاصی شرکت استفاده کنید. با
            این حال ما همیشه اینجاییم تا پاسخگوی شما باشیم.
          </p>

          <Row gap={3} align='middle' data-selector='contactUs-action'>
            <Button
              btnType='primary'
              size='large'
              bgColor='white-blue-gradient'
              onClick={() => dispatch(setVisible(true))}
              data-selector='contactUs-request'
            >
              درخواست مشاوره
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

export default SolutionCompanyContactUs
