import Header from 'containers/staticPage/components/header'
import ContactUs from 'containers/staticPage/components/contactUs'
import Guides from 'containers/staticPage/components/guides'
import Customers from 'containers/staticPage/components/customers'
import Faq from 'components/faq'
import WebService from './components/webService'
import CodeSample from './components/codeSample'
import Description from './components/description'
import StaticPageSubscriptionPlans from './components/subscriptionPlans'
import StaticPageOtherServices from './components/otherServices'
import StaticPageAds from './components/ads'
import StaticPageStatistics from './components/statistics'

import type { StaticComponentsProps } from './interface'

const StaticComponents = ({ service }: StaticComponentsProps) => (
  <>
    <Header service={service} />
    <Guides service={service} />
    <Customers service={service} />
    {service === 'ads' && <StaticPageStatistics />}
    {service === 'api' && <CodeSample />}
    {service !== 'api' && <Description service={service} />}
    {service === 'ads' && <StaticPageSubscriptionPlans />}
    {service === 'ads' && <StaticPageAds />}
    {service === 'api' && <WebService />}
    <ContactUs service={service} />
    <Faq className='px-1' service={service} />
    <StaticPageOtherServices service={service} />
  </>
)

export default StaticComponents
