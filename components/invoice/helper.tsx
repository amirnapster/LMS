import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVisible } from 'libs/redux/slices/invoice'
import { useLazyGetPdfInvoiceQuery } from 'libs/redux/services/invoice'
import {
  CompanySvgIcon,
  InvoiceDoneIcon,
  InvoiceLoadingIcon,
  PersonSvgIcon,
} from 'assets/icons'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import type { RootState } from 'libs/redux/store'
import LegalInvoice from './components/legalInvoice'
import RealInvoice from './components/realInvoice'

import styles from './invoice.module.scss'

export const InvoiceFactor = () => {
  const [invoiceType, setInvoiceType] = useState<'real' | 'legal'>('legal')
  return (
    <>
      <Row justify='center' className={styles['invoice__subheader']}>
        <Col sm={7}>
          <Button
            onClick={() => setInvoiceType('real')}
            data-selector={invoiceType === 'real' ? 'selected' : ''}
          >
            <PersonSvgIcon />
            <span> شخص حقیقی</span>
          </Button>
        </Col>
        <Col sm={7}>
          <Button
            onClick={() => setInvoiceType('legal')}
            data-selector={invoiceType === 'legal' ? 'selected' : ''}
          >
            <CompanySvgIcon />
            <span> شخص حقوقی</span>
          </Button>
        </Col>
      </Row>
      {invoiceType === 'real' ? <RealInvoice /> : <LegalInvoice />}
    </>
  )
}

export const InvoiceLoading = () => (
  <Row
    direction='column'
    justify='center'
    align='middle'
    className={styles['invoice--loading']}
  >
    <InvoiceLoadingIcon />
    <h2>در حال آماده‌سازی</h2>
    <p>پیش فاکتور شما تا چند ثانیه دیگر آماده می‌شود؛ لطفا منتظر بمانید.</p>
  </Row>
)

export const InvoiceReady = () => {
  const dispatch = useDispatch()
  const { paymentId } = useSelector((state: RootState) => state.invoice)
  const [getPdfInvoice] = useLazyGetPdfInvoiceQuery()

  const downloadInvoicePDF = () => {
    getPdfInvoice(paymentId).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res?.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Rasmio Factor.pdf')
      document.body.appendChild(link)
      link.click()
      link.remove()
      dispatch(setVisible(false))
    })
  }
  return (
    <Row
      wrap
      justify='center'
      align='middle'
      className={styles['invoice--ready']}
    >
      <Button onClick={downloadInvoicePDF} btnType='ghost'>
        <InvoiceDoneIcon />
      </Button>
      <Col sm={20}>
        <p>پیش فاکتور شما آماده است و می‌توانید آن را دانلود نمایید.</p>
      </Col>
      {/* <Col sm={10}>
        <Button data-selector='jpg' disabled>
          دانلود jpg
        </Button>
      </Col> */}
      <Col sm={20}>
        <Button
          btnType='primary'
          bgColor='white-blue-gradient'
          data-selector='pdf'
          onClick={downloadInvoicePDF}
        >
          دانلود pdf
        </Button>
      </Col>
    </Row>
  )
}
