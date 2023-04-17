import { useGetReceiptQuery } from 'libs/redux/services/pricing'
import { useRouter } from 'next/router'
import ReceiptFailed from './components/failed'
import ReceiptSuccess from './components/success'

import styles from './receipt.module.scss'

const Receipt = () => {
  const { query } = useRouter()

  const { data: receiptData } = useGetReceiptQuery(
    { paymentId: Number(query?.id) },
    { skip: !query?.id }
  )

  return (
    <div className={styles['receipt']}>
      {receiptData?.paid ? (
        <ReceiptSuccess receiptData={receiptData} />
      ) : (
        <ReceiptFailed receiptData={receiptData} />
      )}
    </div>
  )
}

export default Receipt
