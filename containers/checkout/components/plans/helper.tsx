import { useRouter } from 'next/router'
import { numberSeparator } from 'utils/helpers/global'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'
import cn from 'classnames'

import type { PlanItemProps } from 'containers/checkout/interface'
import styles from './plans.module.scss'

export const minCount: Record<string, number> = {
  '11': 1,
  '12': 1,
  '13': 10,
}

export const PlanItem = ({
  title,
  icon,
  price,
  isSelected,
  planId,
  isEnabled,
}: PlanItemProps) => {
  const { push } = useRouter()

  const selectPlan = () => {
    push({ query: { plan: planId, count: minCount[String(planId)] } })
  }

  return (
    <Button
      className={cn(
        styles['planItem'],
        isSelected ? styles['planItem--active'] : ''
      )}
      onClick={selectPlan}
      disabled={!isEnabled}
      ripple
    >
      <Row align='middle' wrap>
        <Col xxs={12} md={24} lg={12} data-selector='plan-icon'>
          {icon}
          <span data-selector='plan-title'>{title}</span>
        </Col>
        <Col xxs={12} md={24} lg={12} data-selector='plan-price'>
          <span>{numberSeparator(price / 10)}</span>
          <span>تومان</span>
        </Col>
      </Row>
    </Button>
  )
}
