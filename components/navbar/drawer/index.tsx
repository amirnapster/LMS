import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { KeyboardArrowLeftOutlined, LoginOutlined } from '@mui/icons-material'
import { PlusIcon } from 'assets/icons'
import { toggleDrawer, toggleTransition } from 'libs/redux/slices/navbar'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import Drawer from 'components/ui/Drawer'
import SvgSprite from 'assets/sprite'

import type { RootState } from 'libs/redux/store'
import { Logo } from '../helper'
import { MobileNavItem } from '../mobile'
import type { NavbarDrawerProps } from '../interface'
import styles from '../navbar.module.scss'

const NavbarDrawer = ({ login }: NavbarDrawerProps) => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const { push, asPath } = useRouter()

  const { accessToken } = useSelector((state: RootState) => state.auth)

  const closeDrawer = () => {
    push('/pricing')
    dispatch(toggleTransition(false))
    dispatch(toggleDrawer(false))
  }

  useEffect(() => {
    dispatch(toggleDrawer(false))
    dispatch(toggleTransition(false))
  }, [asPath])

  return (
    <Drawer>
      <div data-type='drawer' className={styles['navbar__drawer']}>
        <Row className={styles['navbar__drawer__header']}>
          <Col span={24} className={styles['navbar__drawer__header--logo']}>
            <Logo src='/svg/navbar/drawer-logo.svg' />
            <Button
              data-selector='drawer-close'
              btnType='ghost'
              onClick={() => dispatch(toggleTransition(false))}
            >
              <PlusIcon />
            </Button>
          </Col>

          {/* <Col
            xs={24}
            className='bg-color-navbar-green d-flex justify-space-between'
          >
            <Button data-selector='navbar-rasmio' href='/what-is-rasmio'>
              <Row direction='column' align='top' className='gap-0'>
                <span data-selector='title'>نماتک چیست؟</span>
                <span data-selector='subtitle'>
                  درباره نماتک بیشتر بدانید...
                </span>
              </Row>

              <Row align='middle' className='color-subtitle'>
                <KeyboardArrowLeftOutlined />
              </Row>
            </Button>
          </Col> */}
        </Row>

        <MobileNavItem />

        <Row
          data-type='drawer-footer'
          justify='center'
          className={styles['navbar__drawer__footer']}
          wrap
        >
          <Col span={22}>
            <Button
              className={styles['navbar__drawer__login']}
              btnType='secondary'
              onClick={login}
              ripple
            >
              <span>
                {intl.formatMessage({
                  id: accessToken ? 'exit' : 'navbar.login',
                })}
              </span>
              <LoginOutlined
                className={
                  !accessToken ? styles['navbar__drawer__login--svg'] : ''
                }
              />
            </Button>
          </Col>

          {/* {accessToken && (
            <Col span={22}>
              <Button
                className={styles['navbar__drawer--upgrade']}
                btnType='primary'
                bgColor='white-gold-gradient'
                color='black'
                onClick={closeDrawer}
              >
                <span>ارتقا اشتراک</span>
                <SvgSprite id='jet' />
              </Button>
            </Col>
          )} */}
        </Row>
      </div>
    </Drawer>
  )
}

NavbarDrawer.defaultProps = {
  login: undefined,
}

export default NavbarDrawer
