import { useDispatch, useSelector } from 'react-redux'
import { setVisible } from 'libs/redux/slices/companyAuth'
import Modal from 'components/ui/Modal'
import CompanyAuthentication from 'containers/company/components/authentication'
import type { RootState } from 'libs/redux/store'
import Header from './components/header'
import Guide from './components/guide'
import Service from './components/service'
import Management from './components/management'
import Description from './components/description'
import ContactUs from './components/contactUs'
import Comparison from './components/comparison'

const CompanyManagementPage = () => {
  const dispatch = useDispatch()

  const { visible: visibleCompanyAuth } = useSelector(
    (state: RootState) => state.companyAuth
  )

  const closeModal = () => dispatch(setVisible(false))

  return (
    <>
      <Modal visible={visibleCompanyAuth} onClose={closeModal} backdropDisable>
        <CompanyAuthentication />
      </Modal>
      <Header />
      <Guide />
      <Service />
      <Management />
      <Description />
      <Comparison />
      <ContactUs />
    </>
  )
}

export default CompanyManagementPage
