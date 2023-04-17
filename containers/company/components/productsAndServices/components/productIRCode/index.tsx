import { useState } from 'react'
import { useSelector } from 'react-redux'
import NotFoundSection from 'components/notFoundSection'
import Skeleton from 'components/skeleton'
import Modal from 'components/ui/Modal'
import Table from 'components/ui/Table'
import Card from 'components/card'

import type { GridCellParams } from '@mui/x-data-grid'
import type { RootState } from 'libs/redux/store'
import { columns, ProductIrCodeModal } from './helper'
import type { ProductType } from './interface'
import styles from './productIRCode.module.scss'

const ProductIRCode = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.products?.companyProductAndService?.productCategories

  const [page, setPage] = useState<number>(5)
  const [visible, setVisible] = useState<boolean>(false)
  const [singleProductData, setSingleProductData] = useState<ProductType>()

  const productCategoriesData = () => {
    if (data === null || data === undefined) {
      return []
    }
    return data?.map((item) => ({
      ...item,
      id: item.id,
      title: item.title,
      type: item.products?.length,
    }))
  }

  const rows = productCategoriesData()

  const closeModal = () => setVisible(false)

  const openModal = (product: ProductType) => {
    setVisible(true)
    setSingleProductData(product)
  }

  const rowClickHandler = (
    row: GridCellParams<ProductType, ProductType, ProductType>
  ) => {
    if (row.field === 'details') openModal(row.row)
  }

  return (
    <Skeleton data={details} width='100%' height='172px' variant='rounded'>
      {details?.products?.companyProductAndService?.productCategories
        ?.length ? (
        <>
          <Card
            title='محصولات بر اساس ایران‌کد'
            className={styles['product--card']}
          >
            <div className={styles['product']}>
              <Table
                sx={{
                  border: 0,
                }}
                rows={rows}
                columns={columns}
                pageSize={page}
                rowHeight={88}
                pagination
                autoHeight
                rowsPerPageOptions={[5, 10, 15, 20]}
                hideFooterSelectedRowCount
                disableSelectionOnClick
                onPageSizeChange={(e: number) => setPage(e)}
                onCellClick={(row) => rowClickHandler(row)}
              />
            </div>
          </Card>
          <Modal visible={visible} onClose={closeModal}>
            <ProductIrCodeModal data={singleProductData} onClose={closeModal} />
          </Modal>
        </>
      ) : (
        <NotFoundSection title='محصولات بر اساس ایران‌کد' />
      )}
    </Skeleton>
  )
}

export default ProductIRCode
