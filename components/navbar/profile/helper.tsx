import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { clearAuth } from 'libs/redux/slices/auth'
import { useInfoMutation, useLogoutMutation } from 'libs/redux/services/karnama'

import Button from 'components/ui/Button'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

import type { RootState } from 'libs/redux/store'
import { useEffect } from 'react'
import { Avatar } from '@mui/material'
import { emptySplitApi } from 'libs/redux/services/emptyApi'

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
        return intl.formatMessage({ id: 'premium' })
      default:
        return intl.formatMessage({ id: 'premium' })
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
      .then(() => {
        dispatch(emptySplitApi.util.resetApiState());
        dispatch(clearAuth())
        replace('/')
      })
  }

  useEffect(() => {
    if (accessToken)
      getInfo()
  }, [accessToken])

  return accessToken ? (
    <Button  ripple btnType='ghost' href='/dashboard/profile'>
      <Avatar src='' />
    </Button>
  ) : null
}
