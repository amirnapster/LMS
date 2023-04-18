import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Alert, Collapse } from '@mui/material'
import { setUserNameAndPassword } from 'libs/redux/slices/auth'
import {
  ApiError,
  SignInApiArg,
  useSignInMutation,
} from 'libs/redux/services/karnama'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
// import Session from '../session'
import Modal from 'components/ui/Modal'
import Row from 'components/ui/Row'

import type { AuthCallBackProps } from 'containers/authentication/interface'
import { AuthForm, onLogin } from './helper'
import styles from './signIn.module.scss'

const SignIn = ({ changeMode }: AuthCallBackProps) => {
  const dispatch = useDispatch()

  const [login, { isLoading, error }] = useSignInMutation()
  const [open, setOpen] = useState(false)
  const [isSessionLimit, setIsSessionLimit] = useState(false)

  const apiError = (error as FetchBaseQueryError)?.data as ApiError

  const onSubmit = (value: SignInApiArg['userSignInForm']) => {
    login({ userSignInForm: value })
      .unwrap()
      .then((res) => {
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
      {/* <Modal visible={isSessionLimit}>
        <Session
          isOtp={false}
          onSubmit={onSubmit}
          setIsSessionLimit={setIsSessionLimit}
        />
      </Modal> */}

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
              {apiError?.message}
            </Alert>
          </Collapse>
        ) : undefined}
      </AuthForm>
    </Row>
  )
}

export default SignIn
