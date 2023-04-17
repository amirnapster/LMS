import { useSelector } from 'react-redux'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Copy from 'components/copy'
import Skeleton from 'components/skeleton'
import Card from 'components/card'
import SectionTitle from 'components/sectionTitle'
import type { RootState } from 'libs/redux/store'

import { baseInfoDataBuilder } from './helper'
import styles from './baseInfo.module.scss'

const BaseInfo = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.summary?.companySummary

  const baseInfoSchema = baseInfoDataBuilder(data)

  return (
    <Row className={styles['baseInfo']} id='baseInfo' wrap>
      <Col span={24}>
        <SectionTitle title='اطلاعات پایه' />
      </Col>
      <Col xxs={24}>
        <Skeleton data={details} width='100%' height='172px' variant='rounded'>
          <Card hasSource={false} title='اطلاعات ثبتی'>
            <Row
              className={styles['baseInfo__row']}
              wrap
              justify='space-between'
              gutter={[16, 0]}
            >
              {baseInfoSchema.map(({ title, text, size, copyable }) => (
                <Col
                  key={title}
                  className={styles['baseInfo__row--infoBox']}
                  xxs={24}
                  {...size}
                >
                  <p>{title}</p>
                  <div>
                    <span>{text}</span>
                    {copyable && (
                      <span data-selector='copy-icon'>
                        <Copy text={text as string} />
                      </span>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </Skeleton>
      </Col>
    </Row>
  )
}

export default BaseInfo
