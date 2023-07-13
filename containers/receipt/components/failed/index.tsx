import { useState } from 'react'
import { FailedReceiptSvg } from 'assets/icons'
// import { minCount } from 'containers/checkout/components/plans/helper'
import ContactSupport from 'components/contactSupport'
import Button from 'components/ui/Button'
import Modal from 'components/ui/Modal'
import Row from 'components/ui/Row'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'


import { Payment } from 'libs/redux/services/karnama'
import styles from '../../receipt.module.scss'
import { numberSeparator } from 'utils/helpers/global'

dayjs.extend(jalaliday)


interface IReceiptSuccessProps {
  receiptData: Payment
}
const ReceiptFailed = ({ receiptData }: IReceiptSuccessProps) => {
  const [visible, setVisible] = useState(false)

  const toggleModal = () => setVisible((prev) => !prev)

  return (
    <>
      <Modal visible={visible} onClose={toggleModal}>
        <ContactSupport />
      </Modal>
      <Row
        direction='column'
        align='middle'
        className={styles['receipt__failed']}
      >
        <FailedReceiptSvg />
        <span className={styles['receipt__failed--title']}>پرداخت ناموفق</span>
        <div className={styles['receipt__success--tracking']}>
          <span>مبلغ</span>
          <span>{`${numberSeparator(receiptData.amount)} ریال`}</span>
        </div>
        <div className={styles['receipt__success--date']}>
          <span>تاریخ:</span>
          <span>
            {dayjs(receiptData?.insertDate)
              .calendar('jalali')
              .locale('fa')
              .format('YYYY/MM/DD')}
          </span>
        </div>
        <div className={styles['receipt__success--tracking']}>
          <span>کد پیگیری:</span><br/>
          <span>{receiptData.token}</span>
        </div>
        <span className={styles['receipt__failed--description']}>
          ﭼﻨﺎﻧﭽﻪ ﻣﺒﻠﻐﯽ از ﺣﺴﺎب ﺷﻤﺎ ﮐﺴﺮ ﺷﺪه ﺑﺎﺷﺪ ﺗﺎ 72 ﺳﺎﻋﺖ آﯾﻨﺪه ﺑﺮﮔﺸﺖ داده
          ﻣﯿﺸﻮد
        </span>
        <div className='m-1'>
          <Button
            btnType='secondary'
            size='medium'
            data-selector='contact-support'
            onClick={toggleModal}
            ripple
          >
            تماس با پشتیبانی
          </Button>
          <Button
            btnType='primary'
            size='medium'
            href='/pricing'
            data-selector='try'
            // href={`/checkout/?plan=${receiptData?.parameter}&count=${
            //   minCount[receiptData?.parameter as string]
            // }`}
            ripple
          >
            پرداخت مجدد
          </Button>
        </div>

        <Button
          btnType='ghost'
          size='medium'
          href='/'
          data-selector='home'
          ripple
        >
          صفحه اصلی
        </Button>
      </Row>
    </>
  )
}

export default ReceiptFailed
