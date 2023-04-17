import Container from 'components/container'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'

import { staticsOtherServiceData } from 'utils/statics'
import type { StaticComponentsProps } from 'containers/staticPage/interface'
import styles from './otherServices.module.scss'

const StaticPageOtherServices = ({ service }: StaticComponentsProps) => {
  const data = staticsOtherServiceData.filter(
    (item) => item.service !== service
  )

  return (
    <Container>
      <Row
        className={styles['otherServices']}
        direction='column'
        align='middle'
      >
        <span data-selector='title'>
          دیگر سرویس‌های رسمیو که ممکن است به کار شما بیاید.
        </span>

        <Row
          justify='center'
          className={styles['otherServices__row']}
          gutter={{ xxs: 8, xs: 8, sm: 8, md: 24 }}
          wrap
        >
          {data.map(({ title, icon, link }) => (
            <Col xxs={20} xs={12} md={8} lg={6} key={title}>
              <Button href={link} data-selector='service-card'>
                {icon}
                <p>{title}</p>
              </Button>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  )
}

export default StaticPageOtherServices
