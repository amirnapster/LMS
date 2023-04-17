import { useState } from 'react'
import { useSelector } from 'react-redux'
import Row from 'components/ui/Row'
import Table from 'components/ui/Table'
import Col from 'components/ui/Col'
import NotFoundSection from 'components/notFoundSection'
import Skeleton from 'components/skeleton'
import Card from 'components/card'
import SectionTitle from 'components/sectionTitle'
import type { RootState } from 'libs/redux/store'

import { columns } from './helper'
import styles from './capitalChanges.module.scss'

const Business = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.trades

  const [page, setPage] = useState<number>(3)

  const importData = () => {
    if (data === null || data === undefined) {
      return []
    }
    return data?.map((item) => ({
      ...item,
      id: item.id,
      hs: item.hs,
      titleFa: item.titleFa,
      rate: item.v,
    }))
  }

  const rows = importData()

  return (
    <Row id='business' className={styles['business']} wrap>
      <Col xxs={24}>
        <SectionTitle title='بازرگانی' />
      </Col>
      <Skeleton
        className={styles['business--skeleton']}
        data={details}
        width='100%'
        height='172px'
        variant='rounded'
      >
        <Col xxs={24}>
          {details?.trades?.length ? (
            <Card title='واردات' className={styles['business__import--card']}>
              <div className={styles['business__import']}>
                <Row
                  className={styles['business__import--title']}
                  align='middle'
                >
                  <span>
                    اطلاعات زیر مرتبط با فعالیت وارداتی شرکت در سال‌های ۹۷ تا ۹۹
                    بوده و با توجه به عدم بروزرسانی اطلاعات بانک مرکزی بروزرسانی
                    نمی‌شود. به علت تخمینی بودن داده‌های زیر، توصیه می‌شود در
                    استفاده از اطلاعات دقت لازم را داشته باشید. مسئولیت استفاده
                    از این اطلاعات با استفاده‌کننده از داده است.
                  </span>
                </Row>
                <Row>
                  <Table
                    className={styles['business__import--table']}
                    rows={rows}
                    columns={columns}
                    pageSize={page}
                    rowHeight={88}
                    pagination
                    autoHeight
                    rowsPerPageOptions={[3, 6, 10, 15, 20]}
                    hideFooterSelectedRowCount
                    disableSelectionOnClick
                    onPageSizeChange={(e: number) => setPage(e)}
                  />
                </Row>
              </div>
            </Card>
          ) : (
            <NotFoundSection title='واردات' />
          )}
        </Col>
      </Skeleton>
    </Row>
  )
}

export default Business
