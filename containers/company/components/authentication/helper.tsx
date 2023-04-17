import { RootState } from 'libs/redux/store'
import { ArrowBackOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
// import { setCurrentStep } from 'libs/redux/slices/companyAuth'
import { useIntl } from 'react-intl'
import React from 'react'
import Steps from 'components/ui/Steps'
import Step from 'components/ui/Step'
import Button from 'components/ui/Button'
import Verified from 'public/svg/company/verified.svg'
import Divider from 'components/ui/Divider'

import styles from './companyAuthentication.module.scss'

export const CompanyAuthSteps = () => {
  const intl = useIntl()
  // const { currentStep } = useSelector((state: RootState) => state.companyAuth)

  return (
    <div className={styles['companySteps']}>
      {/* <Steps current={currentStep}>
        <Step
          id={1}
          title={intl.formatMessage({ id: 'company.auth.accept.laws' })}
        />
        <Step
          id={2}
          title={intl.formatMessage({
            id: 'company.auth.accept.company',
          })}
        />
        <Step
          id={3}
          title={intl.formatMessage({
            id: 'company.auth.matching.ceo',
          })}
        />
      </Steps> */}
    </div>
  )
}

export const CompanyAuthProcess = () => {
  const dipatch = useDispatch()
  const intl = useIntl()
  // const { currentStep } = useSelector((state: RootState) => state.companyAuth)
  // const nextStep = () => dipatch(setCurrentStep(currentStep + 1))

  return (
    <>
      <Divider />
      <div className={styles['authProcess']}>
        <Verified />

        <p className={styles['authProcess--title']}>
          {intl.formatMessage({
            id: 'company.auth.management.steps',
          })}
        </p>
        <p className={styles['authProcess--content']}>
          {intl.formatMessage({ id: 'company.auth.edit.info' })}
        </p>

        <CompanyAuthSteps />

        <Button
          className={styles['authProcess--btn']}
          btnType='primary'
          size='large'
          // onClick={nextStep}
          ripple
        >
          <p>{intl.formatMessage({ id: 'company.auth.start.process' })}</p>
          <ArrowBackOutlined />
        </Button>
      </div>
    </>
  )
}
