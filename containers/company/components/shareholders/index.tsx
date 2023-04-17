import { useState } from 'react'
import { useSelector } from 'react-redux'
import NotFoundSection from 'components/notFoundSection'
import Skeleton from 'components/skeleton'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Table from 'components/ui/Table'
import Card from 'components/card'
import type { RootState } from 'libs/redux/store'

import styles from './shareholders.module.scss'
import { columns } from './helper'

const Shareholders = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.companyPeople?.stocks

  const [page, setPage] = useState<number>(3)

  const shareholdersData = () =>
    data?.map((item) => ({
      ...item,
      id: item.id,
      title: item.shareHolderTitle,
      quantity: item.stockShareQuantity,
      share: item.share,
      value: '-',
    }))

  const rows = shareholdersData()

  return (
    <Skeleton
      className={styles['shareholders--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {details?.companyPeople?.stocks?.length ? (
        <Row className='w-100'>
          <Col xxs={24}>
            <Card
              title={`سهامداران نماد ${data?.[0]?.stock}`}
              className={styles['shareholders--card']}
            >
              <div className={styles['shareholders']}>
                <Row className={styles['shareholders__title']} align='middle'>
                  <span>*</span>
                  <p>مجموعه‌هایی که سهام این شرکت را دارا می‌باشند.</p>
                </Row>
                <Table
                  className={styles['shareholders__table']}
                  rows={rows || []}
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
              </div>
            </Card>
          </Col>
        </Row>
      ) : (
        <NotFoundSection
          className={styles['shareholders--notFound']}
          title='سهامداران نماد خودرو'
        />
      )}
    </Skeleton>
  )
}

export default Shareholders
