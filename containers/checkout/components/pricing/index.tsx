import { useDispatch, useSelector } from 'react-redux'
import { MouseEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { FactorIcon, PlusIcon } from 'assets/icons'
import { validation } from 'utils/helpers/validations'
import { setVisible, setPaymentId } from 'libs/redux/slices/invoice'
import {
  useLazyApplyDiscountQuery,
  useLazyGoToIPGQuery,
} from 'libs/redux/services/pricing'
import { setIPGData } from 'libs/redux/slices/checkout'
import cn from 'classnames'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import Invoice from 'components/invoice'

import type { RootState } from 'libs/redux/store'
import type { Apply_Discount_Response } from 'libs/redux/services/pricing/interface'
import { Count, Payable } from './helper'
import styles from './pricing.module.scss'

const Pricing = () => {
  const dispatch = useDispatch()
  const { query } = useRouter()
  const [submitError, setSubmitError] = useState<boolean>(false)
  const { paymentId, amount, isLoading, ipgData } = useSelector(
    (state: RootState) => state.checkout
  )
  const [gotToIPG] = useLazyGoToIPGQuery()
  const [applyDiscount, { error, isSuccess }] = useLazyApplyDiscountQuery()

  const [discount, setDiscount] = useState<Apply_Discount_Response>()

  const { handleSubmit, register, resetField, clearErrors, watch } = useForm({
    defaultValues: { discount: '' },
  })

  useEffect(() => {
    resetField('discount')
    setDiscount(undefined)
  }, [query])

  const sendToIPG = (event?: MouseEvent<HTMLButtonElement>) => {
    const elemtn = event?.target as HTMLButtonElement

    if (!ipgData) {
      gotToIPG({ paymentId })
        .unwrap()
        .then((res) => {
          dispatch(setIPGData(res.token as string))
          elemtn.click()
        })
    }
  }

  const requestInvoice = () => {
    dispatch(setVisible(true))
    dispatch(setPaymentId(paymentId as number))
  }

  const onDiscountSubmit = (value: { discount: string }) => {
    applyDiscount({ code: value.discount, paymentId })
      .unwrap()
      .then((res) => setDiscount(res))
      .catch(() => {
        setSubmitError(true)
        setTimeout(() => setSubmitError(false), 5000)
      })
  }

  const resetDiscount = () => {
    if (discount) {
      setDiscount(undefined)
      resetField('discount')
    }
  }

  return (
    <Row className={styles['pricing']} wrap>
      <Count />
      <Invoice />
      <Col span={24}>
        <form onSubmit={handleSubmit(onDiscountSubmit)}>
          <Input
            register={register('discount', validation.REQUIRED)}
            placeholder='افزودن کد تخفیف'
            className={cn(styles['pricing--off--input'])}
            error={submitError && (error as any)?.data}
            onBlur={() => clearErrors('discount')}
            readOnly={!!discount}
            suffix={
              <Button
                onClick={resetDiscount}
                disabled={!watch('discount')}
                type='submit'
              >
                <PlusIcon
                  style={{
                    rotate: discount ? '45deg' : 'unset',
                    transition: 'rotate 0.2s ease',
                  }}
                />
              </Button>
            }
            required
          />
        </form>
        {isSuccess && (
          <span className={styles['pricing--off--success']}>
            کد تخفیف وارد شده اعمال شد
          </span>
        )}
      </Col>

      <Col span={24}>
        <Payable
          discountPrice={
            ((discount?.amountBeforeDiscount as number) -
              (discount?.amount as number)) /
            10
          }
          discount={discount?.amount}
          price={amount}
        />
      </Col>
      <Col
        span={24}
        data-selector='pricing-invoice'
        className='d-flex items-center justify-center gap-0'
      >
        <Button size='medium' btnType='ghost' onClick={requestInvoice}>
          <FactorIcon />
          <span>دریافت پیش فاکتور</span>
        </Button>
      </Col>

      <Col className={styles['pricing--submit']} span={24}>
        <Button
          onClick={sendToIPG}
          btnType='primary'
          bgColor='white-blue-gradient'
          size='large'
          form='planCount'
          type='submit'
          loading={isLoading}
          id='pay'
          ripple
        >
          پرداخت
        </Button>
        <span>
          پس از پرداخت میتوانید فاکتور رسمی سفارش خود را بصورت pdf دریافت کنید
          یا برای شما ارسال شود{' '}
        </span>
      </Col>
    </Row>
  )
}

export default Pricing
