import { useState } from 'react'
import { useSelector } from 'react-redux'
import { numberSeparator } from 'utils/helpers/global'
import NotFoundSection from 'components/notFoundSection'
import Skeleton from 'components/skeleton'
import Row from 'components/ui/Row'
import Table from 'components/ui/Table'
import Card from 'components/card'
import type { RootState } from 'libs/redux/store'
import { columns } from './helper'

import styles from './capitalChanges.module.scss'

const CapitalChanges = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.financial?.capitalChanges

  const [page, setPage] = useState<number>(3)

  const capitalChangesData = () => {
    if (data === null || data === undefined) {
      return []
    }
    return data?.map((item) => ({
      ...item,
      id: item.id,
      newspaperDate: item.newspaperDate,
      capitalTo: item.capitalTo,
    }))
  }
  const lastCapital =
    data &&
    data.length > 0 &&
    capitalChangesData().sort((a, b) =>
      (a?.id ?? 0) < (b?.id ?? 0) ? 1 : -1
    )[0].capitalTo

  const rows = capitalChangesData()

  return (
    <Skeleton data={details} width='100%' height='172px' variant='rounded'>
      {details?.financial?.capitalChanges?.length ? (
        <Card title='تغییرات سرمایه' className={styles['capitalChanges--card']}>
          <div className={styles['capitalChanges']}>
            <Row className={styles['capitalChanges__count']} align='middle'>
              <span>آخرین سرمایه ثبتی:</span>
              <div>
                {numberSeparator(lastCapital as number)}
                <span data-selector='capital-subheader'>ریال</span>
              </div>
            </Row>
            <Table
              className={styles['capitalChanges__table']}
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
        <NotFoundSection title='تغییرات سرمایه' />
      )}
    </Skeleton>
  )
}

export default CapitalChanges
