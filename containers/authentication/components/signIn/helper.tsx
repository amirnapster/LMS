import { useIntl } from 'react-intl'
import { Controller, useForm } from 'react-hook-form'
import { store } from 'libs/redux/store'
import { setVisible, setUserAuth, setPackageType } from 'libs/redux/slices/auth'
import { notify } from 'utils/notification'
import { validation } from 'utils/helpers/validations'
import Router from 'next/router'
import Row from 'components/ui/Row'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'

import type { AuthFormProps } from 'containers/authentication/interface'
import type { V2Response } from 'libs/redux/services/auth/interface'
import styles from './signIn.module.scss'

export const onLogin = (res: V2Response) => {
  const { asPath, push } = Router
  const { token, credits } = res.data

  notify({
    message: 'ورود با موفقیت انجام شد.',
    config: { autoClose: 3000 },
  })

  store.dispatch(setUserAuth(token))

  store.dispatch(setPackageType(credits.package!))

  if ((res as V2Response).data.isNewUser)
    store.dispatch(setVisible({ visible: true, mode: 'newUser' }))
  else if ((res as V2Response).data.completedProfile === false)
    store.dispatch(setVisible({ visible: true, mode: 'completeProfile' }))
  else store.dispatch(setVisible({ visible: false }))

  if (asPath === '/') push('/dashboard')
}

export const AuthForm = ({
  onSubmit,
  mode,
  loading,
  children,
  changeMode,
}: AuthFormProps) => {
  const intl = useIntl()

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: { userName: '', password: '' },
  })

  return (
    <form
      className={styles['signIn__form']}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Controller
        name='userName'
        control={control}
        rules={validation.LOGIN_EMAIL_USERNAME}
        render={({ field }) => (
          <Input
            field={field}
            autoComplete='username'
            placeholder={intl.formatMessage({ id: 'username.placeholder' })}
            error={errors.userName}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        rules={
          mode === 'signIn'
            ? validation.LOGIN_PASSWORD
            : validation.REGISTER_PASSWORD
        }
        render={({ field }) => (
          <Input
            field={field}
            type='password'
            autoComplete='password'
            placeholder={intl.formatMessage({ id: 'password.placeholder' })}
            error={errors.password}
            data-selector='password'
          />
        )}
      />
      {children}

      <span data-selector='policy'>
        ورود/ثبت نام، به معنای پذیرش
        <Button target='_blank' href='/terms'>
          قوانین رسمیو
        </Button>
        می‌باشد.
      </span>

      <Button
        data-selector='submit'
        type='submit'
        loading={loading}
        btnType='primary'
        bgColor='white-blue-gradient'
        disabled={!(watch('password') && watch('userName'))}
        size='large'
        ripple
      >
        ورود به رسمیو
      </Button>

      <Row className={styles['signIn__action']} justify='space-between'>
        <Button
          onClick={() => changeMode('forgotPassword')}
          btnType='ghost'
          size='large'
          bgColor='primary'
        >
          فراموشی رمز عبور
        </Button>
        <Button
          onClick={() => changeMode('otp')}
          btnType='ghost'
          size='large'
          bgColor='primary'
        >
          ورود با رمز یکبار مصرف
        </Button>
      </Row>
    </form>
  )
}
