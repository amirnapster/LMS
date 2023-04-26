import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BackIcon } from 'assets/icons'
import { validation } from 'utils/helpers/validations'
import { notify } from 'utils/notification'
import { Player } from '@lottiefiles/react-lottie-player'
import {
  useForgetPasswordMutation,
  useResetPasswordMutation,
} from 'libs/redux/services/karnama'
import Row from 'components/ui/Row'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import CodeInput from 'components/ui/CodeInput'

import type {
  AuthForgotPasswordFields,
  IConfirmNumber,
} from 'containers/authentication/interface'
import styles from './forgotPassword.module.scss'

const ConfirmNumber = ({ value, setStep, changeMode }: IConfirmNumber) => {
  const [resetPassword] = useResetPasswordMutation()
  const [forgetPassword] = useForgetPasswordMutation()

  const [changedPass, setChangedPass] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(60)

  const handleInputs = (inputsValue: string) => {
    setValue('code', inputsValue)
    setValue('userName', value)
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

  const resend = () => {
    forgetPassword({ forgotPasswordForm: { userName: value } })
      .unwrap()
      .then(() => setTimer(60))
  }

  const onSubmit = (submitValue: AuthForgotPasswordFields) => {
    resetPassword({ resetPasswordForm: submitValue })
      .unwrap()
      .then((data) => {
        notify({ message: 'رمز شما با موفقیت تغییر یافت' })
        setChangedPass(true)
      })
  }

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: '',
      userName: '',
      newPassword: '',
      newPasswordConfirmation: '',
    },
  })

  return !changedPass ? (
    <Row className={styles['confirm']} direction='column' align='middle'>
      <Button onClick={() => setStep(1)} data-selector='back'>
        <BackIcon />
      </Button>

      <span className={styles['confirm--title']}>فراموشی رمز عبور</span>

      {Number(value as string) ? (
        <span className={styles['confirm--description']}>
          لطفا کد تایید ارسال شده به شماره {value} را وارد نمایید و رمز عبور
          جدید خود را انتخاب کنید
        </span>
      ) : (
        <span className={styles['confirm--description']}>
          کد تایید ارسال شده به ایمیل {value} را وارد نمایید و رمز عبور جدید خود
          را انتخاب کنید
        </span>
      )}

      <Button
        onClick={() => setStep(1)}
        className={styles['confirm--edit']}
        size='large'
      >
        {Number(value as string) ? 'اصلاح شماره موبایل' : 'اصلاح ایمیل'}
      </Button>

      <Row
        className={styles['confirm__inputs']}
        direction='row-reverse'
        justify='space-between'
      >
        <CodeInput length={6} getValue={handleInputs} />
      </Row>

      <Row
        className={styles['confirm__reSend']}
        align='middle'
        justify='space-between'
      >
        <span>{timer}</span>
        {!timer && (
          <Button onClick={resend} size='large'>
            ارسال مجدد کد تایید
          </Button>
        )}
      </Row>

      <form className='w-100' onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={styles['confirm--password']}
          register={register('newPassword', {
            ...validation.REGISTER_PASSWORD,
            deps: ['newPasswordConfirmation'],
          })}
          placeholder='رمز عبور جدید'
          type='password'
          error={errors.newPassword}
        />
        <Input
          className={styles['confirm--password']}
          register={register(
            'newPasswordConfirmation',
            validation.matchPassword(watch('newPassword'))
          )}
          placeholder='تکرار رمز عبور جدید'
          type='password'
          error={errors.newPasswordConfirmation}
        />

        <Button
          className={styles['confirm--accept']}
          type='submit'
          btnType='primary'
          bgColor='white-blue-gradient'
          size='large'
          disabled={
            !watch('code') ||
            !watch('newPassword') ||
            !watch('newPasswordConfirmation')
          }
        >
          تایید
        </Button>
      </form>

      <Button
        className={styles['confirm--enter']}
        onClick={() => changeMode('otp')}
        btnType='ghost'
        color='primary'
        size='large'
      >
        ورود با رمز یکبار مصرف
      </Button>
    </Row>
  ) : (
    <Row className={styles['changedPass']} direction='column' align='middle'>
      <div className={styles['changedPass--lottie']}>
        <Player src='/lottie/authentication/success.json' autoplay loop />
      </div>

      <span className={styles['changedPass--description']}>
        رمز عبور شما تغییر یافت.
      </span>

      <Button
        className={styles['changedPass--enter']}
        onClick={() => changeMode('signIn')}
        btnType='primary'
        bgColor='white-blue-gradient'
        size='large'
      >
        ورود به نماتک
      </Button>
    </Row>
  )
}

export default ConfirmNumber
