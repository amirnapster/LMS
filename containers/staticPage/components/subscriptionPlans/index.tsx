import { useIntl } from 'react-intl'
import Container from 'components/container'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'

import {
  staticsSubscriptionPlansBody,
  staticsSubscriptionPlansHeader,
} from 'utils/statics'
import styles from './subscriptionPlans.module.scss'

const StaticPageSubscriptionPlans = () => {
  const intl = useIntl()

  return (
    <Container>
      <Row className={styles['subscriptionPlans']} justify='center' wrap>
        <Col xxs={24} lg={20} className={styles['subscriptionPlans--title']}>
          {intl.formatMessage({ id: 'static.page.ads.title' })}
        </Col>
        <Col xxs={24} lg={20} className={styles['subscriptionPlans--box']}>
          <Row align='top' justify='center'>
            {staticsSubscriptionPlansHeader.map(({ title, description }) => (
              <Col xxs={8} data-selector='header-item' key={title}>
                <h2>{title}</h2>
                {description && <span>{description}</span>}
              </Col>
            ))}
          </Row>
          {Object.keys(staticsSubscriptionPlansBody).map((item) => {
            const rows = staticsSubscriptionPlansBody[item]
            return (
              <Row
                key={item}
                align='top'
                justify='center'
                wrap
                className={styles['subscriptionPlans--box--body']}
              >
                {Object.keys(rows).map((rowsItem) => {
                  const row = rows[rowsItem]
                  return (
                    <Row data-selector='body-wrapper' key={rowsItem}>
                      {row.map(({ title, description }) => (
                        <Col xxs={8} data-selector='body-item' key={title}>
                          <h2>{title}</h2>
                          {description && <span>{description}</span>}
                        </Col>
                      ))}
                    </Row>
                  )
                })}
              </Row>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default StaticPageSubscriptionPlans
