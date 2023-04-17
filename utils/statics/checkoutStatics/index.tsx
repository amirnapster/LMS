import {
  PricingPlanPersonal,
  PricingPlanCompany,
  PricingPlanOrganization,
} from 'assets/icons'

import type { PlanItemsType } from './interface'

export const planItems: PlanItemsType = {
  '11': <PricingPlanPersonal />,
  '12': <PricingPlanCompany />,
  '13': <PricingPlanOrganization />,
}
