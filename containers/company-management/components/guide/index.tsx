import { useDispatch } from 'react-redux'
import { ArrowBackOutlined } from '@mui/icons-material'
import { setVisible } from 'libs/redux/slices/companyAuth'
import Container from 'components/container'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import styles from './guide.module.scss'

const SolutionCompanyGuide = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Row className={styles['guide']} justify='center'>
        <Col className={styles['guide__col']} xxs={24} md={17} lg={14}>
          <span data-selector='title'>پروفایل اختصاصی شرکت چیست؟</span>
          <span data-selector='content'>
            همه شرکت‌های رسمی ثبت شده در ایران یک پروفایل اختصاصی در رسمیو دارند
            که معمولا در جستجوهای اینترنتی در جایگاه یک قرار دارد. شما می‌توانید
            با در دست گرفتن پروفایل شرکت خود، عملیات برندینگ، بازاریابی و فروش
            را هدفمندتر و وسیع‌تر انجام دهید.
          </span>

          <Button
            data-selector='try'
            btnType='primary'
            bgColor='white-blue-gradient'
            color='simple-white'
            size='large'
            onClick={() => dispatch(setVisible(true))}
          >
            <span>همین حالا رایگان امتحان کنید</span>
            <ArrowBackOutlined />
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default SolutionCompanyGuide
