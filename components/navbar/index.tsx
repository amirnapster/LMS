import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import LoginOutlined from '@mui/icons-material/LoginOutlined'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import { toggleTransition, toggleNavbarSearch } from 'libs/redux/slices/navbar'
import { NavbarAvatar } from 'components/navbar/profile/helper'
import { setVisible } from 'libs/redux/slices/auth'
import { useInfoMutation, useLogoutMutation } from 'libs/redux/services/karnama'
import { useIntl } from 'react-intl'
import Container from 'components/container'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import MyContext from 'utils/context'
import EcommerceAccountMenu from 'sections/_e-commerce/layout/account/EcommerceAccountMenu'
import cn from 'classnames'
import { addGoogleEvent } from 'utils/helpers/global'

import useResponsive from 'utils/hooks/useResponsive'
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
  const [getInfo, { data, error }] = useInfoMutation()
  const isMdUp = useResponsive('up', 'md')

  const [logoutUser] = useLogoutMutation()
  const intl = useIntl()
  const toggleDrawerHandler = () => dispatch(toggleTransition(true))

  const [menuOpen, setMemuOpen] = useState(false)

  const handleMenuOpen = () => {
    if (accessToken)
      setMemuOpen(true)
    else
      login()

  }

  const handleMenuClose = () => {
    setMemuOpen(false)
  }


  const cancelFocus = () => dispatch(toggleNavbarSearch(false))

  useEffect(() => {
    if (accessToken) getInfo()
  }, [accessToken])

  useEffect(() => {
    if (accessToken && (data?.isInCompany || data?.isCompanyAdmin) && asPath === '/') {
      addGoogleEvent({ event: 'userId', userId: data?.id?.toString() })
      replace('/dashboard/mycourses/')
    }
  }, [data, asPath])


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
    if (!accessToken) {
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

      {isMdUp || <EcommerceAccountMenu open={menuOpen} onClose={handleMenuClose} />}
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
              {isMdUp ||
                <Col xxs={8} style={{ paddingTop: '7px' }}>

                  <MenuIcon onClick={handleMenuOpen}
                    data-selector='navbar-drawer-icon'
                  />

                </Col>
              }
              <Col className='d-flex' style={{ justifyContent: "center" }} xxs={8}>
                <Link href='/'>
                  <div className={styles['navbar__tab--img']}>
                    <img
                      src={data?.logo || 'https://static.namatek.com/uploads/2021/03/Namatek-Logo-ani.svg'}
                      alt=''
                    />
                  </div>
                </Link>
              </Col>
              <Col className='d-flex' style={{ justifyContent: "end" }} xxs={8} >
                <Button
                  onClick={() => dispatch(toggleNavbarSearch(true))}
                  className={styles['navbar--searchIcon']}
                >
                  <SearchOutlined />
                </Button>
              </Col>
              {isMdUp && <>


                {/* {data?.isInCompany ? ( */}
                {intl.formatMessage({ id: 'lang' }) === 'fa-IR' &&
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
                {/* ) : (<Button
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
              )} */}

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
              </>}
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
            <Col
              xxs={24}
              md={10}
              lg={8}
              data-selector='logo'
              style={{ color: data?.inCompanyPrimaryColor ?? '#008d67' }}
            >
              {!isSearching ? (
                <Logo
                  src={data?.logo || '/svg/layout/navbar-logo.svg'}
                  title={data?.inCompanyTitle as string}
                />
              ) : (
                <Button data-selector='back' onClick={cancelSearch}>
                  <Row align='middle' justify='center'>
                    <ArrowForwardRounded className='svg-icon' />
                    <span> {intl.formatMessage({ id: 'back' })}</span>
                  </Row>
                </Button>
              )}
            </Col>

            <Col className={styles['navbar--searchWrapper']} xxs={24} md={10}>
              <Row align='middle' className='w-100 h-100'>
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
              <NavbarProfile data={data}>
                <NavbarAvatar />
              </NavbarProfile>
            </Col>
          </nav>
        </Col>
      </Container>
    </Row>
  )
}

export default Navbar
