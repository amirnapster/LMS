import { SuccessReceiptSvg } from 'assets/icons'
import { Payable } from 'containers/checkout/components/pricing/helper'
import Row from 'components/ui/Row'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import Button from 'components/ui/Button'

import type { ReceiptProps } from 'containers/receipt/interface'
import styles from '../../receipt.module.scss'

dayjs.extend(jalaliday)

const ReceiptSuccess = ({ receiptData }: ReceiptProps) => (
  <Row direction='column' align='middle' className={styles['receipt__success']}>
    <SuccessReceiptSvg />
    <span>پرداخت موفق</span>
    <div className={styles['receipt__success--tracking']}>
      <span>شماره پیگیری:</span>
      <span>01478522446</span>
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

    <div className={styles['receipt__success--status']}>
      تبریک! حساب کاربری <span>{receiptData?.reason}</span> برای شما فعال شد و
      شما میتوانید از امکانات آن استفاده نمایید
    </div>

    <Payable
      price={receiptData?.amountBeforeDiscount as number}
      discountPrice={
        Number(receiptData?.amountBeforeDiscount) / 10 -
        Number(receiptData?.amount) / 10
      }
      discount={receiptData?.amount}
    />

    <span className={styles['receipt__success--description']}>
      با استفاده از لینک زیر شما می‌توانید فایل فاکتور رسمی خود را دانلود یا
      به‌صورت فیزیکی دریافت نمایید
    </span>

    <div className='mt-1'>
      <Button
        btnType='ghost'
        size='medium'
        data-selector='factor-request'
        ripple
      >
        درخواست فاکتور چاپی
      </Button>
      <Button btnType='secondary' size='medium' data-selector='download' ripple>
        دریافت فایل فاکتور
      </Button>
    </div>

    <Button
      btnType='primary'
      size='medium'
      href='/'
      className={styles['receipt__success--return']}
      ripple
    >
      بازگشت به صفحه اصلی
    </Button>
  </Row>
)

export default ReceiptSuccess
