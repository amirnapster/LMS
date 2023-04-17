import Container from 'components/container'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import { staticPageWebServiceItems } from 'utils/statics'
import styles from './webService.module.scss'

const StaticPageWebService = () => (
  <Container className={styles['webService__container']}>
    <Row className={styles['webService']} direction='column' align='middle'>
      <span className={styles['webService--title']}>وب‌سرویس‌های رسمیو</span>

      <Row
        className={styles['webService__row']}
        gutter={{ xxs: 8, xs: 8, sm: 8, md: 24 }}
        justify='center'
        wrap
      >
        {staticPageWebServiceItems.map((item) => (
          <Col
            className={styles['webService__column']}
            key={item.title}
            xxs={20}
            xs={12}
            md={8}
            lg={6}
          >
            <Row
              align='middle'
              justify='center'
              direction='column'
              data-selector='wrapper'
            >
              <img src={item?.icon} alt={item.title} />
              <span>{item.title}</span>
            </Row>
          </Col>
        ))}
      </Row>
    </Row>
  </Container>
)

export default StaticPageWebService
