import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BackIcon } from 'assets/icons'
import { validation } from 'utils/helpers/validations'
import { useForgetPasswordMutation } from 'libs/redux/services/karnama'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import Row from 'components/ui/Row'
import type {
  AuthCallBackProps,
  ValueType,
} from 'containers/authentication/interface'
import ConfirmNumber from './helper'

import styles from './forgotPassword.module.scss'

const ForgotPassword = ({ changeMode }: AuthCallBackProps) => {
  const [data, setData] = useState<string | null>(null)
  const [registerError, setRegisterError] = useState<boolean>(false)
  const [forgetPassword, { isLoading, error }] = useForgetPasswordMutation()
  const [step, setStep] = useState<1 | 2>(1)

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setError,
  } = useForm({ defaultValues: { mobile: '' } })

  const onSubmit = (value: ValueType) => {
    setData(value?.mobile)
    forgetPassword({ forgotPasswordForm: { userName: value.mobile } })
      .unwrap()
      .then(() => setStep(2))
      .catch((err) => {
        if (err.status === 400) {
          setError('mobile', {})
          setRegisterError(true)
        }
      })
  }

  useEffect(() => {
    if (!watch('mobile')) {
      setRegisterError(false)
    }
  }, [watch('mobile')])

  return step === 1 ? (
    <Row className={styles['forgot']} direction='column' align='middle'>
      <Button onClick={() => changeMode('signIn')} data-selector='back'>
        <BackIcon />
      </Button>

      <span className={styles['forgot--title']}>فراموشی رمز عبور</span>

      <span className={styles['forgot--description']}>
        لطفا شماره موبایل یا ایمیل خود را وارد نمایید
      </span>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles['forgot__form']}
      >
        <Input
          type='tel'
          autoComplete='username'
          register={register('mobile', validation.LOGIN_EMAIL_USERNAME)}
          error={errors.mobile}
          placeholder='شماره موبایل یا ایمیل'
          data-selector='input'
        />

        {registerError && (
          <Row
            className={styles['forgot__notRegistered']}
            justify='space-between'
            align='middle'
          >
            <span>شماره موبایل/ایمیل در نماتک ثبت نشده.</span>
            <Button onClick={() => changeMode('signIn')}>
              ثبت نام با این شماره/ایمیل
            </Button>
          </Row>
        )}

        <Button
          btnType='primary'
          bgColor='white-blue-gradient'
          size='large'
          disabled={!watch('mobile')}
          type='submit'
          data-selector='submit'
          loading={isLoading}
          ripple
        >
          دریافت کد تایید
        </Button>

        <Button
          onClick={() => changeMode('otp')}
          btnType='ghost'
          bgColor='white-blue-gradient'
          size='large'
          data-selector='enter'
          type='button'
        >
          ورود با رمز یکبار مصرف
        </Button>
      </form>
    </Row>
  ) : (
    <ConfirmNumber
      changeMode={changeMode}
      setStep={setStep}
      value={data as string}
    />
  )
}

export default ForgotPassword
