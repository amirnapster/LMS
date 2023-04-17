import { useContext, useMemo } from 'react'
import { useIntl } from 'react-intl'
import { useGetPlansQuery } from 'libs/redux/services/pricing'
import Row from 'components/ui/Row'
import SelectedPlan from 'components/selectedPlan'
import Invoice from 'components/invoice'
import Col from 'components/ui/Col'
import Container from 'components/container'
import MyContext from 'utils/context'
import { plansData } from 'utils/statics/pricingStatics'
import PlanItem from './helper'

import styles from './plans.module.scss'

const Plans = () => {
  const intl = useIntl()
  const { data } = useGetPlansQuery(null)
  const { campaign } = useContext(MyContext)

  const modifiedPlanItems = useMemo(() => {
    if (data) {
      const arr = data?.map(
        ({ isEnabled, isExtend, isUpgrade, validUntil, pricing }, index) => {
          plansData[index + 1].isEnabled = isEnabled
          plansData[index + 1].isExtend = isExtend
          plansData[index + 1].isUpgrade = isUpgrade
          plansData[index + 1].validUntil = validUntil
          plansData[index + 1].pricing = pricing
          return plansData[index + 1]
        }
      )

      return [plansData[0], ...arr]
    }
    return plansData
  }, [data])

  return (
    <Container>
      <Row className={styles['plan']} wrap gutter={24}>
        <SelectedPlan />
        <Invoice />
        <Col
          className={
            campaign ? styles['plan__title--campaign'] : styles['plan__title']
          }
          span={24}
        >
          {campaign ? (
            <Row
              gap={1}
              align='middle'
              justify='center'
              data-selector='campaign'
            >
              <img src='/svg/pricing/apple.png' alt='' />
              <span>کمپین نوروز 1402</span>
              <img src='/svg/pricing/egg.png' alt='' />
            </Row>
          ) : (
            intl.formatMessage({ id: 'pricing.plan.title' })
          )}
        </Col>
        {modifiedPlanItems.map((item) => (
          <PlanItem plan={item} key={item.title} />
        ))}
      </Row>
    </Container>
  )
}

export default Plans
