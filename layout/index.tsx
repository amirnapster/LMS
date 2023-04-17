import { useContext } from 'react'
import { useSelector } from 'react-redux'
import MyContext from 'utils/context'
import CampaignModal from 'components/campaignModal'
import useReturnToTop from 'utils/hooks/useReturnToTop'
import SimpleSearch from 'containers/simpleSearch'
import Navbar from 'components/navbar'
import Button from 'components/ui/Button'
import InvitationModalComponent from 'components/invitationModal'
import SubscriptionRenewalModal from 'components/subscriptionRenewalModal'
import cn from 'classnames'

import type { RootState } from 'libs/redux/store'
import { TempLayout } from './helper'
import type { LayoutProps } from './interface'
import styles from './layout.module.scss'

const Layout = ({ children, className }: LayoutProps) => {
  const { isSearching } = useSelector((state: RootState) => state.navbar)
  const { campaign } = useContext(MyContext)

  const { returnToTop } = useReturnToTop()

  return (
    <>
      <SubscriptionRenewalModal />

      <div className='container'>
        {/* در کمپین بعدی فاصله ها در دسکتاپ و موبایل در صفحه شرکت و ... چک شود و از فلگ هم استفده شود */}
        {campaign && (
          <div data-selector='campaign-wrapper'>
            <Button href='/pricing'>
              <div />
            </Button>
          </div>
        )}

        {/* در کمپین بعدی عکس عوض شود و با فلگ چک شود */}
        {/* <CampaignModal /> */}
        <InvitationModalComponent />
        <Navbar />
        <main className={cn(styles['main'], className)}>
          {isSearching ? <SimpleSearch /> : children}
        </main>
        <TempLayout />
      </div>

      {returnToTop}
    </>
  )
}

export default Layout
