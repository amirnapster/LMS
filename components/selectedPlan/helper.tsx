import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { PlusIcon } from 'assets/icons'
import { Payable } from 'containers/checkout/components/pricing/helper'
import {
  useGetPaymentIdMutation,
  useLazyApplyDiscountQuery,
} from 'libs/redux/services/pricing'
import { validation } from 'utils/helpers/validations'
import {
  setPlan,
  setPaymentId,
  setAmount,
  setCount,
} from 'libs/redux/slices/pricing'
import {
  setPaymentId as setInvoicePaymentId,
  setVisible as setVisibleInvoiceModal,
} from 'libs/redux/slices/invoice'
import { setVisible } from 'libs/redux/slices/selectedPlan'
import Select from 'components/ui/Select'
import Input from 'components/ui/Input'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import cn from 'classnames'

import { planItems } from 'utils/statics/checkoutStatics'
import type { RootState } from 'libs/redux/store'
import type { Apply_Discount_Response } from 'libs/redux/services/pricing/interface'
import type { IPlans } from './interface'
import styles from './selectedPlan.module.scss'

export const SelectedPlanItems = ({ plans }: IPlans) => {
  const dispatch = useDispatch()
  const [getPaymentId] = useGetPaymentIdMutation()
  const { plan, count } = useSelector((state: RootState) => state.pricing)

  const changePlanHandler = (id: number) => dispatch(setPlan(String(id)))

  useEffect(() => {
    getPaymentId({
      numberOfUser: String(count),
      planId: plan as string,
    })
      .unwrap()
      .then((res) => {
        dispatch(setPaymentId(res.paymentId as number))
        dispatch(setAmount(res.amount as number))
      })
  }, [plan, count])

  return (
    <Row
      className='w-100'
      justify='center'
      align='middle'
      gutter={[{ xxs: 0, xs: 0, sm: 16, md: 16, lg: 16, xl: 16, xxl: 16 }, 16]}
      wrap
    >
      {plans?.map(({ title, id, isEnabled }) => (
        <Col key={id} xxs={24} sm={8} className='d-flex items-center'>
          <Button
            onClick={() => changePlanHandler(id as number)}
            className={cn(
              styles['selectedPlan__plans'],
              +plan === id ? styles['selectedPlan__plans--active'] : ''
            )}
            disabled={!isEnabled}
            ripple
          >
            <Row className='w-100' wrap>
              <Col xxs={12} sm={24} data-selector='plan-icon'>
                {planItems[String(id)]}
                <span data-selector='plan-title'>{title}</span>
              </Col>
            </Row>
          </Button>
        </Col>
      ))}
    </Row>
  )
}

export const SelectedPlanPricing = ({ plans }: IPlans) => {
  const { paymentId, amount } = useSelector((state: RootState) => state.pricing)

  const [applyDiscount, { error }] = useLazyApplyDiscountQuery()

  const [discount, setDiscount] = useState<Apply_Discount_Response>()

  const {
    handleSubmit,
    register,
    resetField,
    clearErrors,
    formState: { errors },
  } = useForm({ defaultValues: { discount: '' } })

  const onDiscountSubmit = (value: { discount: string }) => {
    applyDiscount({ code: value.discount, paymentId })
      .unwrap()
      .then((res) => setDiscount(res))
  }

  const resetDiscount = () => {
    if (discount) {
      setDiscount(undefined)
      resetField('discount')
    }
  }

  return (
    <Row className={styles['selectedPlan__pricing']} wrap>
      <Count plans={plans} />
      <Col span={24}>
        <form onSubmit={handleSubmit(onDiscountSubmit)}>
          <Input
            register={register('discount', validation.REQUIRED)}
            placeholder='افزودن کد تخفیف'
            className={styles['selectedPlan__pricing--off--input']}
            error={errors.discount}
            onBlur={() => clearErrors('discount')}
            readOnly={!!discount}
            suffix={
              <Button onClick={resetDiscount} type='submit'>
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
        {error?.data?.message && (
          <span data-selector='discount-error'>{error?.data?.message}</span>
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
    </Row>
  )
}

export const Count = ({ plans }: IPlans) => {
  const dispatch = useDispatch()
  const [getPaymentId] = useGetPaymentIdMutation()
  const { count, plan } = useSelector((state: RootState) => state.pricing)

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { count } })

  const currentPlan = plans?.find((item) => item.id === Number(plan))

  useEffect(() => {
    dispatch(setCount(+watch('count')))

    getPaymentId({
      numberOfUser: String(watch('count')),
      planId: plan as string,
    })
      .unwrap()
      .then((res) => {
        dispatch(setPaymentId(res.paymentId as number))
        dispatch(setAmount(res.amount as number))
      })
  }, [watch('count')])

  const onSubmit = () => {
    getPaymentId({ planId: plan, numberOfUser: String(count) })
      .unwrap()
      .then((res) => dispatch(setInvoicePaymentId(res.paymentId as number)))

    dispatch(setVisible(false))
    dispatch(setVisibleInvoiceModal(true))
  }

  return (
    <Col className={styles['selectedPlan__count']} span={24}>
      <form id='planCount' onSubmit={handleSubmit(onSubmit)}>
        <Select
          register={register('count', validation.REQUIRED)}
          watch={watch('count')}
          label='انتخاب تعداد کاربر'
          error={errors.count}
          disabled={plan === '11'}
          required
        >
          {currentPlan?.pricing?.map(({ numberOfUser }) => (
            <option key={numberOfUser} value={numberOfUser}>
              {numberOfUser === 50 ? 'نامحدود' : numberOfUser}
            </option>
          ))}
        </Select>
      </form>
    </Col>
  )
}
