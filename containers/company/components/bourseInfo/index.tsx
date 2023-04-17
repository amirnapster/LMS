import { useSelector } from 'react-redux'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Copy from 'components/copy'
import Card from 'components/card'
import type { RootState } from 'libs/redux/store'

import { bourseInfoDataBuilder } from './helper'
import styles from './bourseInfo.module.scss'

const BourseInfo = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.summary?.companySummary

  const bourseInfoSchema = bourseInfoDataBuilder(data)

  return (
    <Row wrap>
      <Col xxs={24} className={styles['bourseInfo']}>
        <Card title='اطلاعات بورسی'>
          <Row
            className={styles['bourseInfo__row']}
            wrap
            justify='space-between'
            gutter={[16, 0]}
          >
            {bourseInfoSchema.map(({ title, text, size, copyable }) => (
              <Col
                key={title}
                className={styles['bourseInfo__row--infoBox']}
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
      </Col>
    </Row>
  )
}

export default BourseInfo
