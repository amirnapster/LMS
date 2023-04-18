import { useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import { useSelector } from 'react-redux'
import { validation } from 'utils/helpers/validations'
import { notify } from 'utils/notification'
import {
  useSignInByOtpMutation,
  useVerfySignInByOtpMutation,
} from 'libs/redux/services/karnama'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import TitleBox from 'components/titleBox'

import type { Token } from 'libs/redux/services/karnama'
import type { RootState } from 'libs/redux/store'
import { onLogin } from '../signIn/helper'
import styles from './confirm.module.scss'

const Confirm = () => {
  const intl = useIntl()
  const [confirmOtp, { isLoading }] = useVerfySignInByOtpMutation()
  const [login] = useSignInByOtpMutation()
  const { userName } = useSelector((state: RootState) => state.auth)
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: { otp: '' } })

  const onSubmit = (value: { otp: string }) => {
    const data = { otp: value.otp, username: userName }
    confirmOtp({
      verfySignInByOtpCommand: { userName: data.username, code: data.otp },
    })
      .unwrap()
      .then(() =>
        login({ signInByOtpCommand: { userName } })
          .unwrap()
          .then((res) => onLogin(res as Token))
      )
      .catch((err) => notify({ type: 'error', message: err.data.descripton }))
  }

  return (
    <>
      <TitleBox>{` ${intl.formatMessage({ id: 'confirm.title' })} `}</TitleBox>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles['confirm__form']}
      >
        <Input
          defaultValue={userName as string}
          readOnly
          label={intl.formatMessage({ id: 'username' })}
        />
        <Input
          register={register('otp', validation.CONFIRM_CODE)}
          error={errors.otp}
          label={intl.formatMessage({ id: 'confirm.code' })}
          placeholder={intl.formatMessage({ id: 'confirm.placeholder' })}
        />

        <Button
          btnType='primary'
          disabled={!watch('otp')}
          loading={isLoading}
          type='submit'
        >
          {intl.formatMessage({ id: 'confirm.verify' })}
        </Button>
      </form>
    </>
  )
}

export default Confirm
