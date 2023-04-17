import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setPlans } from 'libs/redux/slices/checkout'
import { ActivationSvg, GuranteeSvg, SupportSvg } from 'assets/icons'
import jalaliday from 'jalaliday'
import dayjs from 'dayjs'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'

import { planItems } from 'utils/statics/checkoutStatics'
import type { IPlans } from 'utils/interfaces'
import { PlanItem } from './helper'
import styles from './plans.module.scss'

dayjs.extend(jalaliday)

const Plans = ({ plans }: IPlans) => {
  const dispatch = useDispatch()
  const { query } = useRouter()

  useEffect(() => {
    if (plans) dispatch(setPlans({ plans }))
  }, [plans])

  const validUntil = plans?.find(
    (plan) => plan.id === Number(query.plan)
  )?.validUntil

  return (
    <Row className={styles['plans']} direction='column' gap={1}>
      <Row gutter={[16, 16]} wrap>
        {plans?.map(({ title, id, pricing, isEnabled }) => (
          <Col key={id} xxs={24} md={8} lg={24} className='d-flex'>
            <PlanItem
              price={pricing?.[0].originalPrice as number}
              planId={id as number}
              icon={planItems[String(id)]}
              title={title as string}
              isSelected={Number(query?.plan) === id}
              isEnabled={isEnabled as boolean}
            />
          </Col>
        ))}
      </Row>

      <Row data-selector='expiration' justify='space-between'>
        <span className={styles['plans--description']}>
          همه اشتراک‌ها به صورت سالیانه هستند
        </span>
        <Row className={styles['plans--expiration']} gap={0}>
          <span>معتبر تا</span>
          <span data-selector='expire-date'>
            {dayjs(validUntil)
              .calendar('jalali')
              .locale('fa')
              .format('YYYY/MM/DD')}
          </span>
        </Row>
      </Row>

      <Row className={styles['plans__services']} justify='space-between'>
        <Col>
          <ActivationSvg />
          <span>فعال سازی آنی</span>
        </Col>
        <Col>
          <GuranteeSvg />
          <span>ضمانت اصالت اطلاعات</span>
        </Col>
        <Col>
          <SupportSvg />
          <span>پشتیبانی اختصاصی</span>
        </Col>
      </Row>

      <div className={styles['plans--footer']}>
        رسمیو، پلتفرم ارتباط و تحلیل کسب وکارها
      </div>
    </Row>
  )
}

export default Plans
