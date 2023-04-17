import { useContext } from 'react'
import { BackgroundVector, CampaignBackgroundVector } from 'assets/icons'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import Container from 'components/container'
import Faq from 'components/faq'
import MyContext from 'utils/context'
import Feature from './components/feature'
import Features from './components/features'
import Plans from './components/plans'
import Quotes from './components/quotes'
import RequestConsultant from './components/requestConsultant'

import styles from './pricing.module.scss'

const Pricing = () => {
  const { campaign } = useContext(MyContext)

  return (
    <>
      <img
        src={campaign ? CampaignBackgroundVector : BackgroundVector}
        alt='background-vector'
        className={styles['pricing__layout--backdrop']}
      />
      <Plans />
      <Features />
      <Container>
        <Button
          className={styles['pricing__discount']}
          href='/'
          target='_blank'
          ripple
        >
          <Row gap={2} justify='center' align='middle'>
            <Col flex='none' data-selector='pricing-paragraph'>
              تخفیف ویژه برای خبرنگاران و پژوهشگران
            </Col>
            <Col flex='none' data-selector='pricing-more'>
              برای اطلاعات بیشتر و دریافت تخفیف کلیک کنید
            </Col>
          </Row>
        </Button>
      </Container>
      <RequestConsultant />
      <Faq title='سوالاتی که ممکن است برای شما پیش آمده باشد!' />
      <Feature />
      <Quotes />
      <RequestConsultant withinBox />
    </>
  )
}

export default Pricing
