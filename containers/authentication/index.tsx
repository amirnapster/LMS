import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVisible } from 'libs/redux/slices/auth'
import { CloseIcon, RasmioLogo } from 'assets/icons'
import Row from 'components/ui/Row'
import Button from 'components/ui/Button'
import type { AuthMode } from 'libs/redux/slices/auth/interface'
import type { RootState } from 'libs/redux/store'
import SignIn from './components/signIn'
import Confirm from './components/confirm'
import ForgotPassword from './components/forgotPassword'
import Otp from './components/otp'
import NewUser from './components/newUser'
import CompleteProfile from './components/completeProfile'

import styles from './authentication.module.scss'

const Authentication = () => {
  const dispatch = useDispatch()
  const { mode } = useSelector((state: RootState) => state.auth)

  const closeModal = () => dispatch(setVisible({ visible: false }))

  const changeMode = (authMode: AuthMode) => {
    dispatch(setVisible({ visible: true, mode: authMode }))
  }

  const authMemorized = useMemo(() => {
    switch (mode) {
      case 'forgotPassword':
        return <ForgotPassword changeMode={changeMode} />
      case 'signIn':
        return <SignIn changeMode={changeMode} />
      case 'otp':
      case 'signUp':
        return <Otp changeMode={changeMode} />
      case 'completeProfile':
        return <CompleteProfile />
      case 'confirm':
        return <Confirm />
      case 'newUser':
        return <NewUser />
      default:
        return null
    }

    return null
  }, [mode])

  return (
    <Row className={styles['auth']} direction='column' align='middle'>
      <Row
        className={styles['auth__header']}
        direction='column'
        align='middle'
        justify='center'
      >
        <Button onClick={closeModal} data-selector='close'>
          <CloseIcon />
        </Button>

        <RasmioLogo />
      </Row>
      {authMemorized}
    </Row>
  )
}

export default Authentication
