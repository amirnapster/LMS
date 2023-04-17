import Container from 'components/container'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import { solutionFeatureItemsData } from 'utils/statics/solutionStatics'
import type { SolutionsProps } from 'containers/solutionPage/interface'
import styles from './feature.module.scss'

const SolutionFeatures = ({ service }: SolutionsProps) => {
  const data = solutionFeatureItemsData[service]

  return (
    <Container>
      <Row
        className={styles['feature']}
        style={{ color: 'red' }}
        direction='column'
        align='middle'
      >
        <span data-selector='title'>{data.title}</span>

        <Row
          justify='center'
          className={styles['feature__row']}
          gutter={{ xxs: 8, xs: 8, sm: 8, md: 24 }}
          wrap
        >
          {data.content.map(({ title, icon, link }) => (
            <Col
              className='position-relative'
              xxs={20}
              xs={12}
              md={8}
              lg={6}
              key={title}
            >
              <a
                target='_blank'
                href={link}
                data-selector='service-card'
                rel='noreferrer'
              >
                {icon}
                <p>{title}</p>
              </a>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  )
}

export default SolutionFeatures
