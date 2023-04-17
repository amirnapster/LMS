import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useGetPaymentIdMutation } from 'libs/redux/services/pricing'
import { setAmount, setLoading, setPaymentId } from 'libs/redux/slices/checkout'
import Container from 'components/container'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import type { IPlans } from 'utils/interfaces'
import Plans from './components/plans'
import Pricing from './components/pricing'

import styles from './checkout.module.scss'

const Checkout = ({ plans }: IPlans) => {
  const dispatch = useDispatch()
  const { query } = useRouter()
  const [getPaymentId] = useGetPaymentIdMutation()

  useEffect(() => {
    dispatch(setLoading(true))

    getPaymentId({
      numberOfUser: query.count as string,
      planId: query.plan as string,
    })
      .unwrap()
      .then((res) => {
        dispatch(setPaymentId(res.paymentId as number))
        dispatch(setAmount(res.amount as number))
        dispatch(setLoading(false))
      })
      .catch(() => dispatch(setLoading(false)))
  }, [query?.plan, query?.count])

  return (
    <Container>
      <span className={styles['checkout--title']}>اشتراک‌ها</span>

      <Row className={styles['checkout--wrapper']} wrap>
        <Col xxs={24} lg={12}>
          <Plans plans={plans} />
        </Col>
        <Col xxs={24} lg={12}>
          <Pricing />
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout
