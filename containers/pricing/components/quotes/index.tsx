import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Quote from 'components/ui/Quote'
import Container from 'components/container'

import styles from './quotes.module.scss'

const Quotes = () => (
  <Container className={styles['quotes__container']}>
    <Row className={styles['quotes']} direction='column' gap={3}>
      <span className={styles['quotes--title']}>
        آنچه کاربران رسمیو می‌گویند:
      </span>

      <Row className={styles['quotes__wrapper']} gutter={[12, 16]}>
        <Col xxs={22} sm={18} md={14} lg={8}>
          <Quote
            quote='رسمیو در سنجش بازار، ارتباطات و آنالیز داده‌ها کمک مناسبی به ما داشته که اگر این امکانات را روز به روز گسترش بدهد قطعاً نتیجه و کارایی بیشتری داشته و رضایت فعالان اقتصادی را بیشتر جلب میکند. تشکر از رسمیو'
            userRole='مدیر عامل پویا تجارت دنیای روز'
            user='امین ‌کریمی'
          />
        </Col>
        <Col xxs={22} sm={18} md={14} lg={8}>
          <Quote
            quote='در حسابرسی و بررسی های آن بسیار موثر است.'
            userRole='مدیر حسابرسی داخلی - بین المللی صنعت و معدن غدیر'
            user='سعید پایکاری'
          />
        </Col>
        <Col xxs={22} sm={18} md={14} lg={8}>
          <Quote
            quote='با استفاده از رسمیو مشتریان خود را شناسایی و اقدام به برقراری ارتباط با آن‌ها می‌کنیم. جستجو با فیلترهای مختلف کمک زیادی به ما در زمینه شناسایی مشتریان کرده است.'
            userRole='مدیر بازاریابی شرکت توسعه بازار خورشید'
            user='علی اصغری'
          />
        </Col>
      </Row>
    </Row>
  </Container>
)

export default Quotes
