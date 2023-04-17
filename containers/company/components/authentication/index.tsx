import { useMemo } from 'react'
import { Close } from '@mui/icons-material'
import { RootState } from 'libs/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
// import { setVisible } from 'libs/redux/slices/companyAuth'
import Button from 'components/ui/Button'
import ContactSupport from 'components/contactSupport'
import Policy from '../policy'
import { CompanyAuthProcess, CompanyAuthSteps } from './helper'
import VerifyCompany from '../verifyCompany'
import CompanyAutFinish from '../companyAuthFinish'
import VerifyCEO from '../verifyCEO'

import styles from './companyAuthentication.module.scss'

const CompanyAuthentication = () => {
  const intl = useIntl()
  const dispatch = useDispatch()
  // const { currentStep } = useSelector((state: RootState) => state.companyAuth)
  // const { showContact } = useSelector(
  //   (state: RootState) => state.contactSupport
  // )

  // const closeModal = () => dispatch(setVisible(false))

  // const steps = useMemo(() => {
  //   let children
  //   if (!currentStep) return <CompanyAuthProcess />
  //   if (currentStep === 1) children = <Policy />
  //   if (currentStep === 2) children = <VerifyCompany />
  //   if (currentStep === 3) children = <VerifyCEO />
  //   if (currentStep === 4) children = <CompanyAutFinish />

  //   return (
  //     <>
  //       <CompanyAuthSteps />
  //       {children}
  //     </>
  //   )
  // }, [currentStep])

  // return showContact ? (
  //   <ContactSupport />
  // ) : (
  //   <div className={styles['companyAuth']}>
  //     <div className={styles['companyAuth__header']}>
  //       <p>{intl.formatMessage({ id: 'company.auth.process' })}</p>
  //       <Button onClick={() => closeModal()}>
  //         <Close />
  //       </Button>
  //     </div>
  //     {steps}
  //   </div>
  // )
  return <span>test</span>
}

export default CompanyAuthentication
