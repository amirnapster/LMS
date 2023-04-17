import { useRouter } from 'next/router'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Container from 'components/container'

import { pricingFeatureItems } from 'utils/statics/pricingStatics'
import styles from './feature.module.scss'

const Feature = () => {
  const { push } = useRouter()

  return (
    <Container className={styles['feature__container']}>
      <Row className={styles['feature']} direction='column' gap={3}>
        <span className={styles['feature--title']}>سرویس‌های رسمیو</span>

        <Row className={styles['feature__card--wrapper']} justify='center' wrap>
          {pricingFeatureItems.map(({ title, description, icon, route }) => (
            <Col
              key={title}
              className={styles['feature__card']}
              xxs={24}
              sm={11}
              lg={7}
              xl={5}
              onClick={() => push(route)}
            >
              <Row direction='column' align='middle'>
                {icon}
                <span className={styles['feature__card--title']}>{title}</span>
                <span className={styles['feature__card--description']}>
                  {description}
                </span>
              </Row>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  )
}

export default Feature
