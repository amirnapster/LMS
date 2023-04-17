import { DescriptionCurveArrowIcon, DescriptionTempVideo } from 'assets/icons'
import Container from 'components/container'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import cn from 'classnames'

import type { StaticComponentsProps } from 'containers/staticPage/interface'
import { descriptionData } from 'utils/statics'
import {
  DescriptionAnswers,
  DescriptionItems,
  DescriptionQuestions,
} from './helper'
import styles from './description.module.scss'

const Description = ({ service }: StaticComponentsProps) => {
  const data = descriptionData[service]

  return (
    <Container className={styles['description__container']}>
      <div className={styles['description']}>
        <Row
          className={cn(
            styles['description__wrapper'],
            styles[`description__wrapper__${service}`]
          )}
          gutter={{ lg: 40 }}
          wrap
        >
          <Col xxs={22} xs={22} sm={16} md={18} lg={12} data-selector='video'>
            <img src={DescriptionTempVideo} alt='video-temp' />
          </Col>
          <Col xxs={22} xs={22} sm={18} md={20} lg={12} data-selector='content'>
            <section id='1st-description'>
              <div className={styles['description--title']}>{data.title}</div>
              <div
                className={cn(
                  styles['description--arrow--curve'],
                  styles[`description--arrow--${service}`]
                )}
              >
                <DescriptionCurveArrowIcon />
              </div>
              {data?.subtitle && service !== 'companies' && (
                <div data-selector={service}>{data.subtitle}</div>
              )}
              {service !== 'ads' && service !== 'advanced-search' && (
                <DescriptionItems service={service} />
              )}
              {service === 'industry' && (
                <DescriptionAnswers service={service} />
              )}
              {data?.subtitle && service === 'companies' && (
                <div data-selector={service}> {data?.subtitle} </div>
              )}
            </section>
            {service !== 'ads' &&
              service !== 'companies' &&
              service !== 'industry' && (
                <section id='2nd-description'>
                  {service === 'advanced-search' && (
                    <DescriptionItems service={service} />
                  )}
                  {service !== 'advanced-search' && (
                    <DescriptionQuestions service={service} />
                  )}
                  <DescriptionAnswers service={service} />
                </section>
              )}
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Description
