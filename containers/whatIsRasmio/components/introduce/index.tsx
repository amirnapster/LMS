import { useIntl } from 'react-intl'
import {
  IntroduceBackgroundSvg,
  LampSvg,
  OpenQuotationIcon,
} from 'assets/icons'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Container from 'components/container'

import styles from './introduce.module.scss'

const WhatIsIntroduce = () => {
  const intl = useIntl()
  return (
    <Container>
      <Row className={styles['introduce']} align='middle' justify='center' wrap>
        <img
          src={IntroduceBackgroundSvg}
          alt='introduce-bg'
          data-selector='backdrop'
        />
        <Col md={22} lg={11} xxl={10} data-selector='title'>
          <OpenQuotationIcon data-selector='quot' />
          <h2>{intl.formatMessage({ id: 'whatis.title' })}</h2>
        </Col>
        <Col md={22} lg={10} xxl={10} className={styles['introduce__card']}>
          <Row>
            <LampSvg data-selector='header-svg' viewBox='0 0 36 40' />
            <h4 data-selector='header-title'>
              {intl.formatMessage({ id: 'whatisrasmio' })}
            </h4>
          </Row>
          <p>{intl.formatMessage({ id: 'whatis.description' })}</p>
          <div data-selector='description'>
            {intl.formatMessage({ id: 'whatis.about.rasmio' })}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default WhatIsIntroduce
