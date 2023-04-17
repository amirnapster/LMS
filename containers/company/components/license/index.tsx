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
import styles from './license.module.scss'

dayjs.extend(jalaliday)

const CompanyLicense = () => {
  const [count, setCount] = useState<number>(4)
  const boxRef = useRef<HTMLInputElement | null>(null)

  const { details } = useSelector((state: RootState) => state.company)

  const data = details?.certificatesAndTrademarks?.certificates

  const showMoreHandler = () => {
    if (count === 4) setCount(data?.length as number)
    else {
      setCount(4)
      scrollHandler(0, (boxRef?.current?.offsetTop as number) - 140)
    }
  }

  const dateHandler = (issueDate: string, expireDate: string) => {
    if (issueDate === expireDate) {
      return dayjs(issueDate)
        .calendar('jalali')
        .locale('fa')
        .format('YYYY/MM/DD')
    }

    return `${dayjs(issueDate)
      .calendar('jalali')
      .locale('fa')
      .format('YYYY/MM/DD')}   تا   ${dayjs(expireDate)
      .calendar('jalali')
      .locale('fa')
      .format('YYYY/MM/DD')}`
  }

  return (
    <Skeleton
      className={styles['license--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {details?.certificatesAndTrademarks?.certificates?.length ? (
        <Row
          ref={boxRef}
          className={styles['license']}
          direction='column'
          align='top'
        >
          <Card
            className={styles['license__card']}
            title='مجوزها'
            hasMore={(data?.length as number) > 4}
            baseCount={4}
            count={count}
            onShow={showMoreHandler}
            hasSource
          >
            <Row className={styles['license__count']} align='middle'>
              <span>تعداد:</span>
              <div>{data?.length} عدد</div>
            </Row>

            <Row className={styles['license__row']} gutter={{ xxs: 24 }} wrap>
              {data?.slice(0, count).map((item) => (
                <Col
                  className={styles['license__col']}
                  key={`${item.certificateTypeTitle}${item.category}${item.expireDate}`}
                  xxs={24}
                  md={12}
                >
                  <div className={styles['license__logo']}>
                    <img src={item?.certificateTypeIcon as string} alt='' />
                  </div>

                  <Row
                    className={styles['license__details']}
                    direction='column'
                    justify='space-between'
                  >
                    <span>
                      {item.certificateTypeTitle} - {item.category}
                    </span>

                    <pre>
                      {dateHandler(
                        item.issueDate as string,
                        item.expireDate as string
                      )}
                    </pre>
                  </Row>
                </Col>
              ))}
            </Row>
          </Card>
        </Row>
      ) : (
        <NotFoundSection
          className={styles['license--notFound']}
          title='مجوزها'
        />
      )}
    </Skeleton>
  )
}

export default CompanyLicense
