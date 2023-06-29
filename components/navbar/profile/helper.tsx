import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from 'libs/redux/services/auth'
import { clearAuth } from 'libs/redux/slices/auth'
import { ExpandMore } from '@mui/icons-material'
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
import styles from './navbarProfile.module.scss'

dayjs.extend(jalaliday)

export const NavbarAvatar = () => {
  const dispatch = useDispatch()
  const { replace } = useRouter()
  const { accessToken, packageType } = useSelector(
    (state: RootState) => state.auth
  )
  const { isSearching } = useSelector((state: RootState) => state.navbar)
  const [logoutUser] = useLogoutMutation()
  const [data, setDate] = useState<any>(null)
  // useEffect(() => {
  //   getUserInfo().then((res) => setDate(res))
  // }, [])

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

  const packageTypeConverter = () => {
    switch (packageType) {
      case 11:
        return 'شخصی'
      case 12:
        return 'شرکتی'
      case 13:
        return 'سازمانی'
      default:
        return 'رایگان'
    }
  }

  const dateConverter = () =>
    (
      (new Date(data?.newPremium?.until).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
    ).toFixed(0)

  const logout = () => {
    logoutUser(null)
      .unwrap()
      .then(() => {
        dispatch(clearAuth())
        replace('/')
      })
  }

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
            {
              data?.appUserInfo?.profileImage ? (
                <img src={data?.appUserInfo?.profileImage} alt='avatar' />
              ) : <Avatar src='' />

            }
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
            {
              data?.appUserInfo?.profileImage ? (
                <img src={data?.appUserInfo?.profileImage} alt='avatar' />
              ) : <Avatar src='' sx={{ width: "64px", height: "64px" }} />

            }
          </Col>
          <Col span={24} className={styles['navbarProfile__menu--title']}>
            {data?.appUserInfo?.userNameOnSite ??
              data?.appUserInfo?.phoneNumber}
          </Col>
          <Col span={24} className={styles['navbarProfile__menu--remaining']}>
            اشتراک
            {packageType !== null &&
              packageType !== undefined &&
              packageType > 0 ? (
              <>
                <span data-selector='type'>{packageTypeConverter()}</span>
                <span data-selector='days'>{dateConverter()}</span>
                روز مانده
              </>
            ) : (
              <span data-selector='free'>رایگان</span>
            )}
          </Col>
        </Row>

        {/* <Row className={styles['navbarProfile__row']} direction='column'>
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
                    <span>{title}</span>
                  </Col>
                  {hasBadge && !!data?.newPremium?.events?.length && (
                    <Col data-selector='badge' span={3}>
                      data?.newPremium?.events?.length
                    </Col>
                  )}
                </Row>
              </Button>
            )
          })}
        </Row> */}

        {/* <Divider className={styles['navbarProfile__menu--divider']} /> */}
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
              خروج
            </Col>
          </Row>
        </Button>
      </Row>
    </Dropdown>
  ) : null
}
