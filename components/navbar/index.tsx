import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import {
  ArrowForwardRounded,
  LoginOutlined,
  SearchOutlined,
} from '@mui/icons-material'
import { toggleTransition, toggleNavbarSearch } from 'libs/redux/slices/navbar'
import { NavbarAvatar } from 'components/navbar/profile/helper'
import { clearAuth, setVisible } from 'libs/redux/slices/auth'
import { useLogoutMutation } from 'libs/redux/services/karnama'
import { useIntl } from 'react-intl'
import Container from 'components/container'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import MyContext from 'utils/context'
import cn from 'classnames'
import SvgSprite from 'assets/sprite'

import type { RootState } from 'libs/redux/store'
import NavbarProfile from './profile'
import NavbarSearch from './search'
import { Logo, NavItem } from './helper'
import styles from './navbar.module.scss'

const Navbar = () => {
  const dispatch = useDispatch()
  const { campaign } = useContext(MyContext)
  const { replace, asPath } = useRouter()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const { isSearching } = useSelector((state: RootState) => state.navbar)
  const [logoutUser] = useLogoutMutation()
  const intl = useIntl()
  const toggleDrawerHandler = () => dispatch(toggleTransition(true))

  const cancelFocus = () => dispatch(toggleNavbarSearch(false))

  const cancelSearch = () => {
    cancelFocus()
    const inputs = document.querySelectorAll('#navbar-search')
    inputs?.forEach((input) => {
      // eslint-disable-next-line
      ; (input as HTMLInputElement).value = ''
    })
  }

  // @ts-ignore:Unreachable code error
  window.CancelSearch = () => cancelSearch()

  useEffect(() => {
    cancelSearch()
  }, [asPath])

  const login = () => {
    if (accessToken) {
      logoutUser()
        .unwrap()
        .then(() => {
          dispatch(clearAuth())
          replace('/')
        })
    } else {
      cancelFocus()
      dispatch(setVisible({ visible: true, mode: 'otp' }))
    }
  }

  return (
    <Row
      className={cn(
        styles['navbar'],
        isSearching ? styles['navbar--searching'] : '',
        campaign ? styles['navbar--campaign'] : ''
      )}
    >
      {/* <NavbarDrawer login={login} /> */}

      <Col span={24} data-selector='mobile'>
        {!isSearching && (
          <Col span={24} className={styles['navbar__tab--header']}>
            <Row
              align='middle'
              justify='space-between'
              className={styles['navbar__tab']}
            >
              {/* <Col className='d-flex'>
                <MenuIcon
                  onClick={toggleDrawerHandler}
                  data-selector='navbar-drawer-icon'
                />
              </Col> */}

              <Col className='d-flex' xxs={5} sm={12} md={15}>
                <Link href="/">
                  <div className={styles['navbar__tab--img']}>
                    <img src='/svg/layout/navbar-logo.svg' alt='' />
                  </div>
                </Link>
              </Col>

              <Button onClick={() => dispatch(toggleNavbarSearch(true))} className={styles['navbar--searchIcon']}>
                <SearchOutlined />
              </Button>

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
              </Button>

              <Col className='position-relative'>
                {accessToken ? (
                  <NavbarAvatar />
                ) : (
                  <Button
                    className={styles['navbarProfile__login']}
                    btnType='secondary'
                    onClick={login}
                    ripple
                  >
                    <span>{intl.formatMessage({ id: 'navbar.login' })}</span>
                    <LoginOutlined className={styles['login']} />
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
        )}

        <Col
          className={styles['navbar__searchWrapper']}
          data-selector={isSearching ? 'is-searching' : 'not-searching'}
        >
          <NavbarSearch cancelSearch={cancelSearch} />
        </Col>

      </Col>

      <Container>
        <Col span={24} data-selector='desktop'>
          <nav className='w-100 h-100 justify-space-between'>

            <Col xxs={24} md={4} lg={2} data-selector='logo'>
              {!isSearching ? (

                <Logo src='/svg/layout/navbar-logo.svg' />

              ) : (
                <Button data-selector='back' onClick={cancelSearch}>
                  <Row align='middle' justify='center'>
                    <ArrowForwardRounded className='svg-icon' />
                    <span> برگشت</span>
                  </Row>
                </Button>
              )}
            </Col>




            <Col className={styles['navbar--searchWrapper']} xxs={24} md={16}>
              <Row align='middle' className="w-100 h-100" >
                <Col
                  xxs={24}
                  md={isSearching ? 22 : 18}
                  lg={isSearching ? 16 : 10}
                  xl={isSearching ? 16 : 9}
                  className={cn(
                    styles['navbar__search'],
                    accessToken ? styles['navbar__search--login'] : ''
                  )}
                >
                  <NavbarSearch />
                </Col>
                <Col
                  data-selector='items'
                  md={isSearching ? 0 : 22}
                  lg={isSearching ? 0 : 14}
                  xl={isSearching ? 0 : 15}
                >
                  <NavItem />
                </Col>
              </Row>
            </Col>



            <Col
              flex='auto'
              className='justify-flex-end'
              data-selector='nav-profile'
            >
              <NavbarProfile>
                <NavbarAvatar />
              </NavbarProfile>
            </Col>



          </nav>
        </Col>
      </Container >
    </Row >
  )
}

export default Navbar
