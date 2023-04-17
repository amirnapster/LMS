import { useState } from 'react'
import { useSelector } from 'react-redux'
import { numberSeparator } from 'utils/helpers/global'
import NotFoundSection from 'components/notFoundSection'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import Table from 'components/ui/Table'
import Skeleton from 'components/skeleton'
import Card from 'components/card'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

import type { CompanySamtInfo } from 'libs/redux/services/allv3'
import type { RootState } from 'libs/redux/store'
import { columns } from './helper'
import styles from './productionCapacity.module.scss'

dayjs.extend(jalaliday)

const CompanyProductionCapacity = () => {
  const [page, setPage] = useState<number>(5)
  const { details } = useSelector((state: RootState) => state.company)

  const data = details?.products?.companyProductAndService?.samtInfoList

  const rowsData = (dataItem: CompanySamtInfo['samtCapacities']) => {
    if (!dataItem) return []

    return dataItem.map(
      ({
        capacity,
        samtCategoryName,
        samtProductId,
        samtProductName,
        unit,
      }) => ({
        id: samtProductId,
        title: (
          <div title={samtProductName as string} data-selector='ellipsis'>
            {samtProductName}
          </div>
        ),
        type: samtCategoryName,
        productionCapacity: numberSeparator(capacity),
        unit,
      })
    )
  }

  return (
    <Skeleton
      className={styles['production--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {data?.length ? (
        <Row className={styles['production']} direction='column' align='top'>
          <Card
            className={styles['production__card']}
            title='ظرفیت تولید'
            hasSource
          >
            {data?.map((item, index) => (
              <div
                className={styles['production__wrapper']}
                key={item.samtInfoId}
              >
                <Row gap={0}>
                  {data.length > 1 && (
                    <div data-selector='counter'>{index + 1}</div>
                  )}
                  <Row className='w-100' direction='column'>
                    <Row align='top'>
                      <span className={styles['production__title']}>
                        آدرس کارخانه:
                      </span>

                      <span className={styles['production--address']}>
                        {item.factoryAddress}
                      </span>
                    </Row>

                    <Row className={styles['production__description']} wrap>
                      <Col
                        xxs={24}
                        md={6}
                        lg={5}
                        className={styles['production__details']}
                      >
                        <span>تاریخ مجوز:</span>
                        <div>
                          {dayjs(item.licenseDate)
                            .calendar('jalali')
                            .locale('fa')
                            .format('YYYY/MM/DD')}
                        </div>
                      </Col>

                      <Col
                        xxs={24}
                        md={6}
                        lg={5}
                        className={styles['production__details']}
                      >
                        <span>تلفن:</span>
                        <div>{item.factoryTel}</div>
                      </Col>

                      <Col
                        xxs={24}
                        md={10}
                        lg={13}
                        className={styles['production__details']}
                      >
                        <span>تعداد پرسنل:</span>
                        <div>{item.personel} نفر</div>
                      </Col>
                    </Row>
                  </Row>
                </Row>

                <Table
                  sx={{
                    border: 0,
                  }}
                  rows={rowsData(item.samtCapacities)}
                  columns={columns}
                  pageSize={page}
                  rowHeight={88}
                  pagination
                  autoHeight
                  rowsPerPageOptions={[5, 10, 15, 20]}
                  hideFooterSelectedRowCount
                  disableSelectionOnClick
                  onPageSizeChange={(e: number) => setPage(e)}
                />
              </div>
            ))}
          </Card>
        </Row>
      ) : (
        <NotFoundSection
          className={styles['production--notFound']}
          title='ظرفیت تولید'
        />
      )}
    </Skeleton>
  )
}

export default CompanyProductionCapacity
