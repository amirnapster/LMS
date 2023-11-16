import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { clearAuth } from 'libs/redux/slices/auth'
import { ExpandMore } from '@mui/icons-material'
import { useInfoMutation, useLogoutMutation } from 'libs/redux/services/karnama'
// import {
//   ExitIcon,
//   PricingPlanFree,
//   PricingPlanPersonal,
//   PricingPlanCompany,
//   PricingPlanOrganization,
// } from 'assets/icons'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Dropdown from 'components/ui/Dropdown'
import Divider from 'components/ui/Divider'
import Button from 'components/ui/Button'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import cn from 'classnames'

import type { RootState } from 'libs/redux/store'
import { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import { profileNavItems } from 'utils/statics/navbarStatics'
import styles from './navbarProfile.module.scss'
import { useIntl } from 'react-intl'

dayjs.extend(jalaliday)

export const NavbarAvatar = () => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const { replace } = useRouter()
  const { accessToken } = useSelector(
    (state: RootState) => state.auth
  )
  const { isSearching } = useSelector((state: RootState) => state.navbar)
  const [logoutUser] = useLogoutMutation()
  const [getInfo, { data, error }] = useInfoMutation()
  useEffect(() => {
    console.log(error)
  }, [error])
  useEffect(() => {
    if (accessToken)
      getInfo()
  }, [accessToken])

  // const avatarIconByPackage = () => {
  //   switch (packageType) {
  //     case 11:
  //       return <PricingPlanPersonal viewbox='0 0 40 40' />
  //     case 12:
  //       return <PricingPlanCompany viewbox='0 0 40 40' />
  //     case 13:
  //       return <PricingPlanOrganization viewbox='0 0 40 40' />
  //     default:
  //       return <PricingPlanFree viewbox='0 0 40 40' />
  //   }
  // }
  const packageType = data?.premium?.package
  const packageTypeConverter = () => {
    switch (packageType) {
      case 0:
        return intl.formatMessage({id:'premium'})
      default:
        return intl.formatMessage({id:'premium'})
    }
  }

  const dateConverter = () =>
    (
      (new Date(data?.premium?.untilDate as string).getTime() -
        new Date().getTime()) /
      (1000 * 60 * 60 * 24)
    ).toFixed(0)

  const logout = () => {
    logoutUser()
      .unwrap()
      .then(() => {
        dispatch(clearAuth())
        replace('/')
      })
  }

  useEffect(() => {
    if (accessToken)
      getInfo()
  }, [accessToken])

  return accessToken ? (
    <Dropdown
      id='profile'
      className='h-100 d-flex items-center'
      menu={
        <div
          className={cn(
            styles['navbarProfile__avatar'],
            isSearching ? styles['navbarProfile__avatar--searching'] : ''
          )}
        >
          <Button className='h-100' ripple>
            <ExpandMore fontSize='medium' color='primary' />
            <Avatar src='' />

          </Button>
        </div>
      }
    >
      <Row direction='column' className={styles['navbarProfile__menu']}>
        <Row
          direction='column'
          align='middle'
          className={styles['navbarProfile__menu__header']}
        >
          <Col className={styles['navbarProfile__menu--avatar']}>
            <Avatar src='' sx={{ width: '64px', height: '64px' }} />

          </Col>
          <Col span={24} className={styles['navbarProfile__menu--title']}>
            {data?.fullname}
          </Col>
          <Col span={24} className={styles['navbarProfile__menu--title']}>
            {data?.username}
          </Col>
          <Col span={24} className={styles['navbarProfile__menu--remaining']}>
          {intl.formatMessage({id:'subscription'})}
            {packageType !== null && packageType !== undefined ? (
              <>
                <span data-selector='type'>{packageTypeConverter()}</span>
                <span data-selector='days'>{dateConverter()}</span>
                {intl.formatMessage({id:'days.remaining'})}
              </>
            ) :
              (
                <span data-selector='free'>{intl.formatMessage({id:'free'})}</span>
              )}
          </Col>
        </Row>

        <Row className={styles['navbarProfile__row']} direction='column'>
          {Object.keys(profileNavItems).map((key) => {
            const { hasBadge, title, icon, route } = profileNavItems[key]
            return (
              <Button
                className={styles['navbarProfile__menu--item']}
                color='black'
                href={route}
                key={key}
              >
                <Row align='middle' gap={0}>
                  <Col
                    data-selector='icon'
                    className='d-flex items-center'
                    span={18}
                  >
                    {icon}
                    <span>{intl.formatMessage({id:title})}</span>
                  </Col>

                </Row>
              </Button>
            )
          })}
        </Row>

        <Divider className={styles['navbarProfile__menu--divider']} />
        <Button
          className={styles['navbarProfile__menu--item']}
          color='text-color-300'
          onClick={logout}
        >
          <Row align='middle' gap={0}>
            <Col data-selector='icon' className='d-flex items-center' span={3}>
              {/* <ExitIcon viewBox='0 0 24 24 ' /> */}
            </Col>
            <Col data-selector='exitTitle' span={19}>
            {intl.formatMessage({id:'navbar.profile.logout'})}
            </Col>
          </Row>
        </Button>
      </Row>
    </Dropdown>
  ) : null
}
