import { useDispatch } from 'react-redux'
import { PhoneIcon } from 'assets/icons'
import { staticPageContactUsData } from 'utils/statics'
import { setVisible } from 'libs/redux/slices/requestConsultant'
import RequestConsultantModal from 'components/requestConsultantModal'
import Button from 'components/ui/Button'
import Container from 'components/container'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import type { StaticComponentsProps } from 'containers/staticPage/interface'
import styles from './contactUs.module.scss'

const StaticPageContactUs = ({ service }: StaticComponentsProps) => {
  const dispatch = useDispatch()
  const { action, description, icon } = staticPageContactUsData[service]

  const openLoginModal = () => dispatch(setVisible(true))

  return (
    <Container>
      <Row className={styles['contactUs']} align='middle' justify='center' wrap>
        <RequestConsultantModal />
        <Col md={24} lg={10} data-selector='icon' className='text-center'>
          <img src='/svg/staticPage/nigga.png' alt='nigga' />
        </Col>
        <Col sm={24} lg={13} className='d-flex flex-column gap-2 items-center'>
          <h2 data-selector='title'>سوالی دارید؟</h2>
          <p data-selector='description'>{description}</p>

          <Row gap={3} align='middle' data-selector='contactUs-action'>
            <Button
              btnType='primary'
              size='large'
              bgColor='white-blue-gradient'
              onClick={openLoginModal}
              data-selector='contactUs-request'
            >
              درخواست مشاوره
            </Button>
            <Button
              btnType='link'
              href={action.url}
              data-selector='contactUs-subscription'
            >
              <span>{action.title}</span>
              {icon}
            </Button>
          </Row>

          <Row align='middle'>
            <span>021-91304041</span>
            <PhoneIcon data-selector='phone' />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default StaticPageContactUs
