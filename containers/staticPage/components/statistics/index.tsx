import { useIntl } from 'react-intl'
import { StaticLineIcon } from 'assets/icons'
import Container from 'components/container'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'

import { staticPageData } from 'utils/statics'
import styles from './statistics.module.scss'

const StaticPageStatistics = () => {
  const intl = useIntl()
  return (
    <Container>
      <Row className={styles['statistics__wrapper']} justify='center'>
        <Col xxs={24} lg={20} className={styles['statistics']}>
          <div className={styles['statistics--title']}>
            {intl.formatMessage({ id: 'rasmio.statistics' })}
          </div>

          <Row className='my-2' gutter={[6, 24]} wrap justify='center'>
            {Object.keys(staticPageData).map((key) => (
              <Col
                key={key}
                xxs={24}
                md={8}
                className={styles['statistics__statics']}
              >
                <div className={styles['statistics__statics--title']}>
                  {staticPageData[key]}
                </div>
                <div className={styles['statistics__statics--content']}>
                  <StaticLineIcon />
                  <span>{intl.formatMessage({ id: key })}</span>
                  <StaticLineIcon />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default StaticPageStatistics
