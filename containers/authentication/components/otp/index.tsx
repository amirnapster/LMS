import { useState } from 'react'
import { useRouter } from 'next/router'
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
import { notify } from 'utils/notification'

const Otp = ({ changeMode }: AuthCallBackProps) => {
  const [signInByOTP, { isLoading }] = useSignInByOtpMutation()
  const [step, setStep] = useState<1 | 2>(1)
  const [data, setData] = useState<string | null>(null)
  const { query } = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: { mobile: query?.mobile as string } })

  const onSubmit = (value: ValueType) => {
    if ((value?.mobile.startsWith("09") === false && value?.mobile.startsWith("01") === false) || value?.mobile.length < 11) {
      notify({ type: 'warn', message: 'شماره موبایل صحیح نیست' })
      return
    }
    signInByOTP({ signInByOtpCommand: { userName: value.mobile } })
      .unwrap()
      .then(() => {
        setData(value?.mobile)
        setStep(2)
      })
  }

  return step === 1 ? (
    <Row className={styles['otp']} direction='column' align='middle'>
      <span className={styles['otp--title']}>ورود / ثبت نام</span>

      <span className={styles['otp--subTitle']}>
        برای ورود به پنل کاربری،<br />
        شماره موبایل خود را وارد کنید
      </span>


      <form onSubmit={handleSubmit(onSubmit)} className={styles['otp__form']}>
        <Input
          autoComplete='tel'
          type='tel'
          register={register('mobile', validation.LOGIN_EMAIL_USERNAME)}
          error={errors.mobile}
          placeholder='شماره موبایل'
          data-selector='input'
          maxLength={11}
        />

        {/* <Row className={styles['otp__policy']} justify='center'>
          <span>ورود/ثبت نام، به معنای پذیرش</span>
          <Button target='_blank' href='/terms'>
            قوانین نماتک
          </Button>
          <span>می‌باشد.</span>
        </Row> */}

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
          تایید
        </Button>
        {/* 
        <Button
          onClick={() => changeMode('signIn')}
          btnType='ghost'
          bgColor='white-blue-gradient'
          size='large'
          data-selector='enter'
          type='button'
        >
          ورود با رمز عبور
        </Button> */}
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
