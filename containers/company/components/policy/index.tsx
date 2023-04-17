import { setCurrentStep } from 'libs/redux/slices/companyAuth'
import { ArrowBackOutlined } from '@mui/icons-material'
import { RootState } from 'libs/redux/store'
import { Fragment, useState } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import Divider from 'components/ui/Divider'
import Button from 'components/ui/Button'

import { PolicyItems } from 'utils/statics/companyStatics'
import styles from './policy.module.scss'

const Policy = () => {
  const dipatch = useDispatch()
  const intl = useIntl()
  const { currentStep } = useSelector((state: RootState) => state.companyAuth)
  const [agreement, setAgreement] = useState<boolean>(false)
  const toggleAgreement = () => setAgreement((prev) => !prev)
  const nextStep = () => dipatch(setCurrentStep(currentStep + 1))

  return (
    <div className={styles['policy']}>
      <Divider className='w-100' />

      <div className={styles['policy__container']}>
        {Object.keys(PolicyItems).map((key) => (
          <Fragment key={key}>
            <div className={styles['policy--title']}>{key}</div>

            <div className={styles['policy--description']}>
              {PolicyItems[key]}
            </div>
          </Fragment>
        ))}
      </div>

      <div className={styles['policy__footer']}>
        <Button
          className={styles['policy__footer--agreement']}
          onClick={toggleAgreement}
        >
          <input type='checkbox' checked={agreement} readOnly />
          <p>
            {intl.formatMessage({
              id: 'company.auth.policy.confirm',
            })}
          </p>
        </Button>
        <Button
          className={styles['policy__footer--accept']}
          disabled={!agreement}
          btnType='primary'
          size='large'
          onClick={nextStep}
          ripple
        >
          <p>
            {intl.formatMessage({
              id: 'company.auth.confirm',
            })}
          </p>
          <ArrowBackOutlined />
        </Button>
      </div>
    </div>
  )
}

export default Policy
