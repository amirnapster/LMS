import { useEffect, useMemo } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import {
  setVisible,
  setCurrentStep,
  setProvince,
} from 'libs/redux/slices/invoice'
import { Close } from '@mui/icons-material'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Modal from 'components/ui/Modal'
import Button from 'components/ui/Button'

import type { RootState } from 'libs/redux/store'
import { InvoiceFactor, InvoiceLoading, InvoiceReady } from './helper'
import styles from './invoice.module.scss'

const Invoice = () => {
  const intl = useIntl()
  const dispatch = useDispatch()
  const { visible: visibleInvoice, currentStep } = useSelector(
    (state: RootState) => state.invoice
  )
  const steps = useMemo(() => {
    if (currentStep === 2) return <InvoiceLoading />
    if (currentStep === 3) return <InvoiceReady />
    return <InvoiceFactor />
  }, [currentStep])

  const closeModal = () => dispatch(setVisible(false))

  useEffect(() => {
    dispatch(setCurrentStep(1))
    dispatch(setProvince('تهران'))
  }, [visibleInvoice])

  return (
    <Modal visible={visibleInvoice} onClose={closeModal} backdropDisable>
      <Row direction='column' className={styles['invoice']}>
        <Row justify='space-between' className={styles['invoice__header']}>
          <Col sm={23}>
            <p>{intl.formatMessage({ id: 'invoice.request.prefactor' })}</p>
          </Col>
          <Col sm={1}>
            <Button onClick={closeModal}>
              <Close />
            </Button>
          </Col>
        </Row>
        {steps}
      </Row>
    </Modal>
  )
}

export default Invoice
