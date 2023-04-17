import { ArrowDownIcon, OpenQuotationIcon, CurveArrowIcon } from 'assets/icons'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Container from 'components/container'

import styles from './helpYou.module.scss'

const WhatIsHelpYou = () => (
  <Container>
    <Row className={styles['help']} justify='center' wrap>
      <Col className='d-flex items-center' xs={24} lg={5} xxl={6}>
        <img
          src='/svg/whatIsRasmio/help-you.png'
          alt='help-you'
          data-selector='help-avatar-outside'
        />
      </Col>
      <Col xs={24} lg={16} xxl={14} className={styles['help__content']}>
        <Row gap={1} data-selector='help-quote'>
          <OpenQuotationIcon
            viewBox='0 0 16 11'
            className={styles['help__content--quote']}
          />
          <div className={styles['help__content--need']}>
            خیلی وقت‌ها نیاز داریم به اطلاعاتی مثل: مدیران شرکت، شماره ثبت، کد
            اقتصادی، شماره تماس یا وب‌سایت آن‌ها دسترسی داشته باشیم؛
          </div>
        </Row>

        <CurveArrowIcon data-selector='help-curve-arrow' />

        <div
          className='d-flex justify-center items-center mt-3'
          data-selector='help-avatar-inside'
        >
          <img src='/svg/whatIsRasmio/help-you.png' alt='help-you' />
        </div>

        <div className={styles['help__content--but']}>اما...</div>
        <div className={styles['help__content--find']}>
          پیدا کردن همه این اطلاعات پراکنده در سطح اینترنت کار بسیار سختی است!!
        </div>

        <ArrowDownIcon data-selector='help-arrow-down' />

        <div className={styles['help__content--so']}>بنابراین...</div>

        <div className={styles['help__content--you']}>
          اینجا رسمیو به کمک شما می‌آید...
        </div>

        <div className={styles['help__content--description']}>
          <div>
            تا با یک جستجوی ساده به حجم زیادی از اطلاعات در صفحه پروفایل آن شرکت
            دست پیدا کنید.
          </div>
          رسمیو روزانه ده‌ها هزار نتیجه جستجوی دقیق را به کاربران خود نمایش
          می‌دهد. این ساده‌ترین کاری است که رسمیو انجام می‌دهد.
        </div>
      </Col>
    </Row>
  </Container>
)

export default WhatIsHelpYou
