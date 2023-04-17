import {
  HomeSpecialIcon,
  SolutionHeaderVector,
  SolutionOurCustomersImg,
} from 'assets/icons'
import Container from 'components/container'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import styles from './header.module.scss'

const SolutionCompanyHeader = () => (
  <Container>
    <Row className={styles['header']} justify='center' align='middle' wrap>
      <SolutionHeaderVector data-selector='vector' />

      <Col className={styles['header__content']} xxs={24} lg={13}>
        <Row data-selector='row' align='middle' gap={1}>
          <div data-selector='icon'>
            <img src={HomeSpecialIcon} alt='company-icon' />
          </div>

          <Row data-selector='subTitle' direction='column'>
            <span>مشتریان رسمیو</span>
          </Row>
        </Row>

        <Row data-selector='title'>
          <span>به ارائه خدمات به</span>
          <span> بیش از 700 مشترک </span>
          <span>افتخار می‌کنیم!</span>
        </Row>
      </Col>

      <Col className={styles['header__bg']} xxs={24} lg={10}>
        <img src={SolutionOurCustomersImg} alt='bg' />
      </Col>
    </Row>
  </Container>
)

export default SolutionCompanyHeader
