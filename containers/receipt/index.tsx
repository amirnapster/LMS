// import { useGetReceiptQuery } from 'libs/redux/services/pricing'
import SkeletonComponent from 'components/skeleton'
import { Payment, useReceiptQuery } from 'libs/redux/services/karnama'
import { useRouter } from 'next/router'
import ReceiptFailed from './components/failed'
import ReceiptSuccess from './components/success'

import styles from './receipt.module.scss'

const Receipt = () => {
  const { query } = useRouter()

  const { data: receiptData } = useReceiptQuery({ id: Number(query.id) })

  console.log(receiptData)

  return (
    <SkeletonComponent
      data={receiptData}
      variant='rounded'
      width='100%'
      height='460px'
      className='mt-3'
    >
      {receiptData ? (
        <div className={styles['receipt']}>
          {receiptData.paid ? (
            <ReceiptSuccess receiptData={receiptData} />
          ) : (
            <ReceiptFailed receiptData={receiptData} />
          )}
        </div>) : <div>loading</div>}
    </SkeletonComponent>
  )
}

export default Receipt
