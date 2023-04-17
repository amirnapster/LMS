import { useDispatch } from 'react-redux'
import { ArrowBackOutlined } from '@mui/icons-material'
import {
  HomeSpecialIcon,
  SolutionHeaderVector,
  SolutionMyCompanyImg,
} from 'assets/icons'
import { setVisible } from 'libs/redux/slices/companyAuth'
import Container from 'components/container'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import styles from './header.module.scss'

const SolutionCompanyHeader = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Row className={styles['header']} justify='center' align='middle' wrap>
        <SolutionHeaderVector data-selector='vector' />

        <Col className={styles['header__content']} xxs={24} lg={10}>
          <Row data-selector='row' align='middle' gap={1}>
            <div data-selector='icon'>
              <img src={HomeSpecialIcon} alt='company-icon' />
            </div>

            <Row data-selector='subTitle' direction='column'>
              <span>سرویس پروفایل اختصاصی شرکت</span>
              <span>(معرفی شرکت خود)</span>
            </Row>
          </Row>

          <Row data-selector='title'>
            <span>سایت شرکت شما</span>
            <span>آماده است فقط لازم است کنترل آن را در دست بگیرید</span>
          </Row>

          <Row className={styles['header__content--action']} align='middle'>
            <Button
              data-selector='try'
              btnType='primary'
              bgColor='white-blue-gradient'
              color='white'
              size='large'
              onClick={() => dispatch(setVisible(true))}
            >
              <span>همین حالا رایگان امتحان کنید</span>
              <ArrowBackOutlined />
            </Button>
          </Row>
        </Col>

        <Col className={styles['header__bg']} xxs={24} lg={10}>
          <img src={SolutionMyCompanyImg} alt='bg' />
        </Col>
      </Row>
    </Container>
  )
}

export default SolutionCompanyHeader
