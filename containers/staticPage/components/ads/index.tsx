import { StaticPageAdsImage } from 'assets/icons'
import Container from 'components/container'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'

import styles from './ads.module.scss'

const StaticPageAds = () => (
  <Container>
    <Row className={styles['ads']} justify='center' wrap>
      <Col xxs={24} lg={20} className={styles['ads--title']}>
        محل قرارگیری تبلیغات در سایت
      </Col>

      <Col className={styles['ads--box']} xxs={24} lg={20}>
        <img src={StaticPageAdsImage} alt='ramio ads' />
      </Col>
    </Row>
  </Container>
)

export default StaticPageAds
