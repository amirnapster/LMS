import { useState } from 'react'
import { useSelector } from 'react-redux'
import { numberSeparator } from 'utils/helpers/global'
import Row from 'components/ui/Row'
import Table from 'components/ui/Table'
import NotFoundSection from 'components/notFoundSection'
import Skeleton from 'components/skeleton'
import Card from 'components/card'

import type { GridCellParams } from '@mui/x-data-grid'
import type { RootState } from 'libs/redux/store'
import { columns } from './helper'
import type { CurrencyType } from './interface'
import styles from './currency.module.scss'

const Currency = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.financial?.centralBankCurrencies

  const [page, setPage] = useState<number>(3)
  const [totalCount, setTotalCount] = useState<number>(0)

  const currencyData = () => {
    if (data === null || data === undefined) {
      return []
    }
    return data?.map((item) => ({
      ...item,
      id: item.id,
      orderRegistrationNumber: item.orderRegistrationNumber,
      amount: item.amount,
      currency: item.currency,
      governmentalChar: item.governmentalChar,
      inRial: Math.trunc(Math.abs(Number(item.amount) * Number(item.rate))),
      inEuro: Math.trunc(Math.abs(Number(item.inEuro))),
    }))
  }

  const rows = currencyData()

  const handleTotalCount = (row: GridCellParams<CurrencyType>) => {
    if (row.field === '__check__') {
      if (!row.value) {
        setTotalCount((pervCount) => pervCount - row.row.inRial)
      } else {
        setTotalCount((pervCount) => pervCount + row.row.inRial)
      }
    }
  }

  return (
    <Skeleton
      className={styles['currency--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {details?.financial?.centralBankCurrencies?.length ? (
        <Card title='ارز دریافتی' className={styles['currency--card']}>
          <div className={styles['currency']}>
            <Row className={styles['currency__count']} align='middle'>
              <span>مجموع:</span>
              <div>
                {numberSeparator(
                  details?.financial?.sumOfCentralBankCurrencies
                )}
                <span data-selector='capital-subheader'>ریال</span>
              </div>
            </Row>
            <Row className={styles['currency__title']} align='top'>
              <span>*</span>
              <p>
                مقادیر ستاره‌دار از ارز دولتی استفاده کرده اند و مقدار ریالی و
                یورویی آن‌ها تقریبی است
              </p>
            </Row>
            <Table
              className={styles['currency__table']}
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
              checkboxSelection
              onCellClick={handleTotalCount}
            />
            <Row className={styles['currency__totalcount']} align='middle'>
              <span>جمع موارد انتخابی:</span>
              <div>
                {Math.abs(Number(totalCount) / 1000000).toLocaleString()}{' '}
                <span data-selector='capital-subheader'>ریال</span>
              </div>
            </Row>
          </div>
        </Card>
      ) : (
        <NotFoundSection
          className={styles['currency--notFound']}
          title='ارز دریافتی'
        />
      )}
    </Skeleton>
  )
}

export default Currency
