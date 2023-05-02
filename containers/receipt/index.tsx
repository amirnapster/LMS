// import { useGetReceiptQuery } from 'libs/redux/services/pricing'
import { useReceiptQuery } from 'libs/redux/services/karnama'
import { useRouter } from 'next/router'
import ReceiptFailed from './components/failed'
import ReceiptSuccess from './components/success'

import styles from './receipt.module.scss'

const Receipt = () => {
  const { query } = useRouter()

  const { data: receiptData } = useReceiptQuery({ id: Number(query.id) })

  console.log(receiptData)

  return (
    <div className={styles['receipt']}>
      {true ? (
        <ReceiptSuccess receiptData={null} />
      ) : (
        <ReceiptFailed receiptData={null} />
      )}
    </div>
  )
}

export default Receipt
