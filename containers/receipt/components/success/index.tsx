import { SuccessReceiptSvg } from 'assets/icons'
import { Payment } from 'libs/redux/services/karnama'
// import { Payable } from 'containers/checkout/components/pricing/helper'
import Row from 'components/ui/Row'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import Button from 'components/ui/Button'

import { numberSeparator } from 'utils/helpers/global'
import styles from '../../receipt.module.scss'

dayjs.extend(jalaliday)

interface IReceiptSuccessProps {
  receiptData: Payment
}

const ReceiptSuccess = ({ receiptData }: IReceiptSuccessProps) => (
  <Row direction='column' align='middle' className={styles['receipt__success']}>
    <SuccessReceiptSvg />
    <span>پرداخت موفق</span>
    <div className={styles['receipt__success--tracking']}>
      <span>شماره پیگیری:</span>
      <span>{receiptData.rrn}</span>
    </div>
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

    <div className={styles['receipt__success--status']}>
      تبریک! حساب کاربری{' '}
      <span>{`${((receiptData?.duration as number) / 30).toFixed(
        0
      )} ماهه`}</span>{' '}
      برای شما فعال شد و شما میتوانید از امکانات آن استفاده نمایید
    </div>

    {/* <Payable
      price={receiptData?.amountBeforeDiscount as number}
      discountPrice={
        Number(receiptData?.amountBeforeDiscount) / 10 -
        Number(receiptData?.amount) / 10
      }
      discount={receiptData?.amount}
    /> */}

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
