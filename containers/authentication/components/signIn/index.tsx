import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Alert, Collapse } from '@mui/material'
import { useLoginMutation } from 'libs/redux/services/auth'
import { setUserNameAndPassword } from 'libs/redux/slices/auth'
import Modal from 'components/ui/Modal'
import Row from 'components/ui/Row'
import type {
  AuthCallBackProps,
  AuthFields,
} from 'containers/authentication/interface'
import Session from '../session'

import { AuthForm, onLogin } from './helper'
import styles from './signIn.module.scss'

const SignIn = ({ changeMode }: AuthCallBackProps) => {
  const dispatch = useDispatch()

  const [login, { isLoading, data }] = useLoginMutation()
  const [open, setOpen] = useState(false)
  const [isSessionLimit, setIsSessionLimit] = useState(false)

  const onSubmit = (value: AuthFields) => {
    login(value)
      .unwrap()
      .then((res) => {
        if (res.statusCode === 10) {
          return
        }
        onLogin(res)
      })
      .catch((err) => {
        setOpen(true)
        if (err.status === 403) {
          setIsSessionLimit(true)
        }
      })
      .finally(() => {
        dispatch(setUserNameAndPassword(value))
      })
  }

  return (
    <Row className={styles['signIn']} direction='column' align='middle'>
      <Modal visible={isSessionLimit}>
        <Session
          isOtp={false}
          onSubmit={onSubmit}
          setIsSessionLimit={setIsSessionLimit}
        />
      </Modal>

      <span className={styles['signIn--title']}>ورود با رمز عبور</span>

      <AuthForm
        onSubmit={onSubmit}
        changeMode={changeMode}
        loading={isLoading}
        mode='signIn'
      >
        {open ? (
          <Collapse in={open}>
            <Alert className='mt-1' severity='error'>
              {data?.message}
            </Alert>
          </Collapse>
        ) : undefined}
      </AuthForm>
    </Row>
  )
}

export default SignIn
