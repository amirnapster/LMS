import { useState } from 'react'
import { useSelector } from 'react-redux'
import Skeleton from 'components/skeleton'
import NotFoundSection from 'components/notFoundSection'
import Row from 'components/ui/Row'
import Table from 'components/ui/Table'
import Card from 'components/card'
import type { RootState } from 'libs/redux/store'

import { columns } from './helper'
import styles from './portfolio.module.scss'

const Portfolio = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.companyPeople?.companyStockShareHolders

  const [page, setPage] = useState<number>(3)

  const portfolioData = () => {
    if (data === null || data === undefined) {
      return []
    }
    return data?.map((item) => ({
      ...item,
      id: item.companyId,
      stock: item.stock,
      companyName: item.title,
      quantity: item.quantity,
      share: item.share,
      value: item.value,
    }))
  }

  const rows = portfolioData()

  return (
    <Skeleton
      className={styles['portfolio--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {details?.companyPeople?.companyStockShareHolders?.length ? (
        <Card title='پرتفوی بورسی' className={styles['portfolio--card']}>
          <div className={styles['portfolio']}>
            <Row className={styles['portfolio__title']} align='middle'>
              <span>*</span>
              <p> مجموعه‌هایی که این شرکت در آن‌ها سهام دارد.</p>
            </Row>
            <Table
              className={styles['portfolio__table']}
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
          </div>
        </Card>
      ) : (
        <NotFoundSection
          className={styles['portfolio--notFound']}
          title='پرتفوی بورسی'
        />
      )}
    </Skeleton>
  )
}

export default Portfolio
