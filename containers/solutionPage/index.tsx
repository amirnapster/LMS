import Description from './components/description'
import Features from './components/features'
import Guide from './components/guide'
import Header from './components/header'

import type { SolutionsProps } from './interface'

const Solutions = ({ service }: SolutionsProps) => (
  <>
    <Header service={service} />
    <Guide service={service} />
    <Description service={service} />
    <Features service={service} />
  </>
)

export default Solutions
