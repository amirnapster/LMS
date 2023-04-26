import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { validation } from 'utils/helpers/validations'
import { useSignInByOtpMutation } from 'libs/redux/services/karnama'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import Row from 'components/ui/Row'

import type {
  AuthCallBackProps,
  ValueType,
} from 'containers/authentication/interface'
import { ConfirmOtp } from './helper'
import styles from './otp.module.scss'

const Otp = ({ changeMode }: AuthCallBackProps) => {
  const [signInByOTP, { isLoading }] = useSignInByOtpMutation()
  const [step, setStep] = useState<1 | 2>(1)
  const [data, setData] = useState<string | null>(null)

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: { userName: '' } })

  const onSubmit = (value: ValueType) => {
    signInByOTP({ signInByOtpCommand: value })
      .unwrap()
      .then(() => {
        setData(value?.userName)
        setStep(2)
      })
  }

  return step === 1 ? (
    <Row className={styles['otp']} direction='column' align='middle'>
      <span className={styles['otp--title']}>ورود / ثبت نام</span>

      <span className={styles['otp--subTitle']}>
        سلام؛ به نماتک خوش آمدید.
        <br /> لطفا شماره موبایل یا ایمیل خود را وارد نمایید
      </span>

      <form onSubmit={handleSubmit(onSubmit)} className={styles['otp__form']}>
        <Input
          autoComplete='username'
          register={register('userName', validation.LOGIN_EMAIL_USERNAME)}
          error={errors.userName}
          placeholder='شماره موبایل یا ایمیل'
          data-selector='input'
        />

        <Row className={styles['otp__policy']} justify='center'>
          <span>ورود/ثبت نام، به معنای پذیرش</span>
          <Button target='_blank' href='/terms'>
            قوانین نماتک
          </Button>
          <span>می‌باشد.</span>
        </Row>

        <Button
          btnType='primary'
          bgColor='white-blue-gradient'
          size='large'
          disabled={!watch('userName')}
          type='submit'
          data-selector='submit'
          loading={isLoading}
          ripple
        >
          تایید
        </Button>

        <Button
          onClick={() => changeMode('signIn')}
          btnType='ghost'
          bgColor='white-blue-gradient'
          size='large'
          data-selector='enter'
          type='button'
        >
          ورود با رمز عبور
        </Button>
      </form>
    </Row>
  ) : (
    <ConfirmOtp
      changeMode={changeMode}
      setStep={setStep}
      data={data as string}
    />
  )
}

export default Otp
