import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { validation } from 'utils/helpers/validations'
import { numberSeparator } from 'utils/helpers/global'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import Select from 'components/ui/Select'

import type { PayableProps } from 'containers/checkout/interface'
import type { RootState } from 'libs/redux/store'
import styles from './pricing.module.scss'

export const Count = () => {
  const { query, push } = useRouter()
  const { plans, ipgData } = useSelector((state: RootState) => state.checkout)

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { count: '' } })

  useEffect(() => {
    if (watch('count')) push({ query: { ...query, count: watch('count') } })
  }, [watch('count')])

  useEffect(() => {
    if (query?.count) setValue('count', query?.count as string)
  }, [query, plans])

  const currentPlan = plans?.find((plan) => plan.id === Number(query?.plan))

  return (
    <Col className={styles['count']} span={24}>
      <form
        id='planCount'
        action={`https://sep.shaparak.ir/OnlinePG/OnlinePG?Token=${ipgData}&GetMethod=true`}
        method='post'
        onSubmit={(e) => !ipgData && e.preventDefault()}
      >
        <Select
          register={register('count', validation.REQUIRED)}
          watch={watch('count')}
          label='انتخاب تعداد کاربر'
          error={errors.count}
          disabled={query.plan === '11'}
          required
        >
          {currentPlan?.pricing?.map(({ numberOfUser }) => (
            <option key={numberOfUser} value={numberOfUser}>
              {numberOfUser === 100 ? 'نامحدود' : numberOfUser}
            </option>
          ))}
        </Select>
      </form>
    </Col>
  )
}

export const Payable = ({ discountPrice, discount, price }: PayableProps) => {
  const tax = Math.floor((discount || (price as number)) * 9) / 1000
  const totalPrice = (discount || (price as number)) / 10

  return (
    <Row direction='column' data-selector='payable' gap={0}>
      <Col span={24} className={styles['pricing--amount']}>
        <span>قیمت</span>
        <Row gap={0} className='d-inline-block'>
          <span>{numberSeparator((price as number) / 10)}</span>
          <span>تومان</span>
        </Row>
      </Col>

      {!Number.isNaN(discountPrice) && discount && discountPrice !== 0 && (
        <Col span={24} className={styles['pricing--off']}>
          <span>تخفیف</span>
          <Row gap={0}>
            <span>{numberSeparator(discountPrice)}</span>
            <span>تومان</span>
          </Row>
        </Col>
      )}

      <Col span={24} className={styles['pricing--tax']}>
        <span>مالیات بر ارزش افزوده (9٪)</span>
        <Row gap={0}>
          <span>{numberSeparator(tax)}</span>
          <span>تومان</span>
        </Row>
      </Col>

      <Col span={24} className={styles['pricing--sum']}>
        <span>مبلغ قابل پرداخت</span>
        <Row gap={0}>
          <span>{numberSeparator(totalPrice + tax)}</span>
          <span>تومان</span>
        </Row>
      </Col>
    </Row>
  )
}
