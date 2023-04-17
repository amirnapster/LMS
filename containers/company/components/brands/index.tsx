import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { scrollHandler } from 'utils/helpers/global'
import NotFoundSection from 'components/notFoundSection'
import Skeleton from 'components/skeleton'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Card from 'components/card'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

import type { RootState } from 'libs/redux/store'
import styles from './brands.module.scss'

dayjs.extend(jalaliday)

const CompanyBrands = () => {
  const [count, setCount] = useState<number>(4)
  const boxRef = useRef<HTMLInputElement | null>(null)

  const { details } = useSelector((state: RootState) => state.company)

  const data = details?.certificatesAndTrademarks?.trademarks

  const showMoreHandler = () => {
    if (count === 4) setCount(data?.length as number)
    else {
      setCount(4)
      scrollHandler(0, (boxRef?.current?.offsetTop as number) - 140)
    }
  }

  return (
    <Skeleton
      className={styles['brands--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {details?.certificatesAndTrademarks?.trademarks?.length ? (
        <div ref={boxRef} className={styles['brands']}>
          <Card
            className={styles['brands__card']}
            title='برندها'
            hasMore={(data?.length as number) > 4}
            baseCount={4}
            count={count}
            onShow={showMoreHandler}
            hasSource
          >
            <Row className={styles['brands__count']} align='middle'>
              <span>تعداد:</span>
              <div>{data?.length} عدد</div>
            </Row>

            <Row className={styles['brands__row']} wrap>
              {data
                ?.slice(0, count)
                .map(({ id, titleFa, pictureUrl, registrationDate }) => (
                  <Col
                    className={styles['brands__col']}
                    key={id}
                    xxs={24}
                    md={12}
                  >
                    <div className={styles['brands__logo']}>
                      <img src={pictureUrl as string} alt={titleFa as string} />
                    </div>

                    <Row
                      className={styles['brands__details']}
                      direction='column'
                      justify='space-between'
                    >
                      <span>{titleFa}</span>

                      <p>
                        {dayjs(registrationDate)
                          .calendar('jalali')
                          .locale('fa')
                          .format('YYYY/MM/DD')}
                      </p>
                    </Row>
                  </Col>
                ))}
            </Row>
          </Card>
        </div>
      ) : (
        <NotFoundSection
          className={styles['brands--notFound']}
          title='برندها'
        />
      )}
    </Skeleton>
  )
}

export default CompanyBrands
