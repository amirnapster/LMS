import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import { setVisible } from 'libs/redux/slices/auth'
import { useResetPasswordMutation } from 'libs/redux/services/auth'
import { ArrowBackIosRounded } from '@mui/icons-material'
import { validation } from 'utils/helpers/validations'
import { notify } from 'utils/notification'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'

import type { AuthForgotPasswordFields } from 'containers/authentication/interface'
import styles from '../forgotPassword/forgotPassword.module.scss'

interface Props {
  username?: string
  changeMode: () => void
}

const ResetPassword = ({ username, changeMode }: Props) => {
  const intl = useIntl()
  const dispatch = useDispatch()
  const [resetPassword] = useResetPasswordMutation()

  const onSubmit = (value: AuthForgotPasswordFields) => {
    resetPassword(value)
      .unwrap()
      .then((data) => {
        notify({ message: data.msg })
        dispatch(setVisible({ mode: 'signIn', visible: true }))
      })
  }

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: '',
      userName: username,
      newPassword: '',
      newPasswordConfirmation: '',
    },
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='px-1 pt-1'
      autoComplete='new-password'
    >
      <Input
        className='pb-1'
        register={register('code', validation.CONFIRM_CODE)}
        label={intl.formatMessage({ id: 'confirm.code' })}
        placeholder={intl.formatMessage({ id: 'confirm.placeholder' })}
        error={errors.code}
      />
      <Input
        className='pb-1'
        register={register('userName', validation.LOGIN_EMAIL_USERNAME)}
        label={intl.formatMessage({ id: 'username' })}
        autoComplete='username'
        placeholder={intl.formatMessage({ id: 'username.placeholder' })}
        error={errors.userName}
        readOnly
      />
      <Input
        className='pb-1'
        register={register('newPassword', {
          ...validation.REGISTER_PASSWORD,
          deps: ['newPasswordConfirmation'],
        })}
        label={intl.formatMessage({ id: 'new.password' })}
        placeholder={intl.formatMessage({ id: 'new.password.placeholder' })}
        type='password'
        error={errors.newPassword}
      />
      <Input
        className='pb-1'
        register={register(
          'newPasswordConfirmation',
          validation.matchPassword(watch('newPassword'))
        )}
        label={intl.formatMessage({ id: 'new.password.confirm' })}
        placeholder={intl.formatMessage({
          id: 'new.password.confirm.placeholder',
        })}
        type='password'
        error={errors.newPasswordConfirmation}
      />
      <Button
        btnType='primary'
        className={styles['resetPassword--btn']}
        type='submit'
        size='medium'
        ripple
      >
        {intl.formatMessage({ id: 'new.password.submit' })}
      </Button>
      <Button
        className={styles['forgotPassword__footer']}
        btnType='ghost'
        size='medium'
        onClick={changeMode}
        ripple
      >
        <p>{intl.formatMessage({ id: 'return.previous.page' })}</p>
        <ArrowBackIosRounded />
      </Button>
    </form>
  )
}

ResetPassword.defaultProps = {
  username: '',
}

export default ResetPassword
