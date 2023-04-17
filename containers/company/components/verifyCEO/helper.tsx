import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { setCurrentStep } from 'libs/redux/slices/companyAuth'
import { useDispatch, useSelector } from 'react-redux'
import { displayCurrentState } from 'libs/redux/slices/contactSupport'
import { useIntl } from 'react-intl'
import { validation } from 'utils/helpers/validations'
import { notify } from 'utils/notification'
import { omit } from 'utils/helpers/global'
import {
  useSendCodeMutation,
  useVerifyCodeMutation,
} from 'libs/redux/services/verification'
import Divider from 'components/ui/Divider'
import CodeInput from 'components/ui/CodeInput'
import Input from 'components/ui/Input'
import Button from 'components/ui/Button'
import NotApproved from 'public/svg/company/notApproved.svg'

import type { RootState } from 'libs/redux/store'
import type {
  CEOPhoneNumberFormProps,
  ConfirmPhoneNumbeProps,
  ResendCode_Payload,
} from 'containers/company/interface'
import styles from './verifyCEO.module.scss'

export const CEOPhoneNumber = ({
  onSubmit,
  isLoading,
}: CEOPhoneNumberFormProps) => {
  const intl = useIntl()
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { companyCode: '' } })

  return (
    <div className={styles['CEOForm']}>
      <Divider className='w-100' />

      <span>{intl.formatMessage({ id: 'company.auth.phone.matching' })}</span>

      <p>{intl.formatMessage({ id: 'company.auth.enter.phone' })}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={styles['CEOForm__input']}
          register={register(
            'companyCode',
            validation.CONFIRM_CEO_PHONE_NUMBER
          )}
          placeholder={intl.formatMessage({ id: 'company.auth.current.phone' })}
          error={errors.companyCode}
        />
        <Button
          type='submit'
          className={styles['CEOForm--search']}
          disabled={!watch('companyCode')}
          btnType='primary'
          loading={isLoading}
          size='large'
          ripple
        >
          {intl.formatMessage({ id: 'company.auth.send' })}
        </Button>
      </form>
    </div>
  )
}

export const CEOFormError = () => {
  const dispatch = useDispatch()
  const intl = useIntl()

  const openContact = () => dispatch(displayCurrentState({ showContact: true }))

  return (
    <div className={styles['CEOFormError']}>
      <Divider className='w-100' />
      <NotApproved />
      <p className={styles['CEOFormError--title']}>
        {intl.formatMessage({ id: 'company.auth.matching.error' })}
      </p>

      <Button btnType='ghost' className={styles['CEOFormError--editNumber']}>
        {intl.formatMessage({ id: 'company.auth.edit.mobile.number' })}
      </Button>

      <div className={styles['CEOFormError--connection']}>
        <p>{intl.formatMessage({ id: 'company.auth.problem' })}</p>
        <Button onClick={openContact}>
          {intl.formatMessage({ id: 'company.auth.contact.support' })}
        </Button>
      </div>
    </div>
  )
}

export const ConfirmPhoneNumber = ({ payload }: ConfirmPhoneNumbeProps) => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const [sendCode] = useSendCodeMutation()
  const [verificationCode, { isLoading }] = useVerifyCodeMutation()
  const { currentStep } = useSelector((state: RootState) => state.companyAuth)

  const [timer, setTimer] = useState<number>(60)

  const handleInputs = (value: string) => {
    verificationCode({ id: payload?.id, code: value })
      .unwrap()
      .then(() => dispatch(setCurrentStep(currentStep + 1)))
  }

  const resendCode = () => {
    const resendPayload = omit(payload as ResendCode_Payload, [
      'id',
      'code',
      'phoneNumber',
    ])
    sendCode(resendPayload)
      .unwrap()
      .then(() => {
        notify({
          message: 'مجددا کد تایید برای شماره موبایل وارد شده ارسال گردید.',
        })
        setTimer(60)
      })
  }

  useEffect(() => {
    let isMount = true
    const interval =
      timer && setTimeout(() => isMount && setTimer((prev) => prev - 1), 1000)

    return () => {
      isMount = false
      clearInterval(interval)
    }
  }, [timer])

  return (
    <div className={styles['confirmPhoneNumber']}>
      <Divider className='w-100' />
      <p className={styles['confirmPhoneNumber--title']}>
        {intl.formatMessage(
          { id: 'company.auth.verify.code' },
          { phoneNumber: payload?.phoneNumber }
        )}
      </p>

      <Button
        btnType='ghost'
        className={styles['confirmPhoneNumber--editNumber']}
        onClick={() => dispatch(displayCurrentState({ currentState: false }))}
      >
        {intl.formatMessage({ id: 'company.auth.edit.mobile.number' })}
      </Button>

      <div className={styles['confirmPhoneNumber__inputs']}>
        <CodeInput length={6} getValue={handleInputs} />
      </div>

      <div className={styles['confirmPhoneNumber__reSend']}>
        <p>{timer}</p>
        {!timer && (
          <Button btnType='ghost' onClick={resendCode}>
            {intl.formatMessage({ id: 'company.auth.resend' })}
          </Button>
        )}
      </div>

      <Button
        className={styles['confirmPhoneNumber--submit']}
        btnType='primary'
        loading={isLoading}
        ripple
      >
        {intl.formatMessage({ id: 'company.auth.code.submit' })}
      </Button>
    </div>
  )
}
