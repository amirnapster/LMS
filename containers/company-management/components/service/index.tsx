import { useDispatch } from 'react-redux'
import { SolutionCompanyServiceItemsData } from 'utils/statics/solutionStatics'
import {
  CheckIcon,
  SolutionCompanyServiceImg,
  SolutionCompanyServiceVector,
} from 'assets/icons'
import { ArrowBackOutlined } from '@mui/icons-material'
import { setVisible } from 'libs/redux/slices/companyAuth'
import Container from 'components/container'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import styles from './service.module.scss'

const SolutionCompanyService = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Row
        className={styles['services']}
        justify='space-between'
        align='middle'
        wrap
      >
        <SolutionCompanyServiceVector data-selector='vector' />

        <Col className={styles['services__img']} xxs={24} md={10}>
          <img src={SolutionCompanyServiceImg} alt='service-vector' />
        </Col>

        <Col xxs={24} md={12}>
          <span data-selector='title'>در سرویس پروفایل اختصاصی رسمیو:</span>
          <Row className={styles['services__service']} direction='column'>
            {SolutionCompanyServiceItemsData.map((item) => (
              <Row gap={0}>
                <CheckIcon viewBox='0 0 24 25' />
                <span data-selector='service'>{item}</span>
              </Row>
            ))}
          </Row>

          <Row data-selector='try'>
            <Button
              btnType='primary'
              bgColor='white-blue-gradient'
              color='simple-white'
              size='large'
              onClick={() => dispatch(setVisible(true))}
            >
              <span>همین حالا رایگان امتحان کنید</span>
              <ArrowBackOutlined />
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SolutionCompanyService
