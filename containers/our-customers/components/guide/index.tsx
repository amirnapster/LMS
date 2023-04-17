import { ArrowBackOutlined } from '@mui/icons-material'
import Container from 'components/container'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import { WEB } from 'utils/statics/routes/web'
import styles from './guide.module.scss'

const Guide = () => (
  <Container>
    <Row className={styles['guide']} justify='center'>
      <Col className={styles['guide__col']} xxs={24} md={15} lg={12}>
        <span data-selector='title'>
          مشتریان ما طیف وسیعی از سازمان‌های دولتی، بانک‌ها، شرکت‌­ها و
          کسب‌وکارهای بزرگ و کوچک هستند
        </span>
        <span data-selector='content'>
          مشتریان ما همواره نقشی اساسی در موفقیت و پیشرفت رسمیو دارند. ما همواره
          تلاش کرده‌ایم با بهره‌گیری از نظرات و پیشنهادات مفید، رضایت آنها را
          جلب نماییم.
        </span>

        <Button
          data-selector='try'
          btnType='primary'
          bgColor='white-blue-gradient'
          color='simple-white'
          size='large'
          href={WEB.PRICING}
        >
          <span>شما هم مشتری رسمیو شوید</span>
          <ArrowBackOutlined />
        </Button>
      </Col>
    </Row>
  </Container>
)

export default Guide
