import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { setVisible } from 'libs/redux/slices/auth'
import { AuthMode } from 'libs/redux/slices/auth/interface'
import { toggleNavbarSearch } from 'libs/redux/slices/navbar'
import { LoginOutlined } from '@mui/icons-material'
import Row from 'components/ui/Row'
import Button from 'components/ui/Button'
import SvgSprite from 'assets/sprite'

import type { RootState } from 'libs/redux/store'
import styles from './navbarProfile.module.scss'
import type { UserInfo } from 'libs/redux/services/karnama'

interface NavbarProfileProps {
  children?: JSX.Element
  data: UserInfo| undefined
}

const NavbarProfile = (  { children ,data}: NavbarProfileProps) => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const { accessToken } = useSelector((state: RootState) => state.auth)

  const showLoginModal = (mode: AuthMode) => {
    dispatch(toggleNavbarSearch(false))
    dispatch(setVisible({ visible: true, mode }))
  }

  return (
    <Row
      justify='space-between'
      align='middle'
      gap={1}
      className={styles['navbarProfile']}
    >
      <>

        {data?.isInCompany == false ?
          <Button
            className={styles['navbar__subscription']}
            btnType='primary'
            bgColor='white-gold-gradient'
            color='black'
            href='/pricing'
            id='navbar-pricing'
            ripple
          >
            <span>خرید اشتراک</span>
            <SvgSprite id='jet' />
          </Button> :
          <Button
            className={styles['navbar__subscription']}
            btnType='primary'
            bgColor='white-blue-gradient'
            color='white'
            href='/courses'
            id='navbar-courses'
            ripple
          >
            <span>همه آموزش‌ها</span>
          </Button>
        }
        {!accessToken ? (
          <Button
            className={styles['navbarProfile__login']}
            btnType='secondary'
            onClick={() => showLoginModal('otp')}
            ripple
          >
            <span>{intl.formatMessage({ id: 'navbar.login' })}</span>
            <LoginOutlined className='svg-icon' />
          </Button>
        ) : (
          children
        )}
      </>
    </Row>
  )
}

NavbarProfile.defaultProps = { children: undefined }

export default NavbarProfile
