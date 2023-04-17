import { type MouseEvent, useEffect, useState } from 'react'
import { ClickAwayListener } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  RoundedPlusIcon,
  CompanyGraphIcon,
  MoreIcon,
  CheckIcon,
  FinancialInfoIcon,
  LockSvg,
} from 'assets/icons'
import {
  useLazyFollowCompanyQuery,
  useLazyUnfollowCompanyQuery,
} from 'libs/redux/services/companyV1'
import { FinancialcTooltip, LimitTooltip } from 'components/ui/Tooltip/helper'
import { copyToClipBoard } from 'utils/helpers/global'
import { notify } from 'utils/notification'
import { setVisible } from 'libs/redux/slices/followListModal'
import { HeaderMenu } from '../../helper'
import HeaderTabs from '../headerTabs'
import Image from 'next/image'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import LimitTooltipContent from 'components/limitTooltip'
import Skeleton from 'components/skeleton'

import { WEB } from 'utils/statics/routes/web'
import type { RootState } from 'libs/redux/store'
import styles from './unAuthenticatedHeader.module.scss'
import { setIsFollowing } from 'libs/redux/slices/company'

const UnAuthenticatedHeader = () => {
  const dispatch = useDispatch()
  const { details, isFollowing } = useSelector(
    (state: RootState) => state.company
  )
  const { packageType, accessToken } = useSelector(
    (state: RootState) => state.auth
  )
  const [followCompany] = useLazyFollowCompanyQuery()
  const [unFollowCompany] = useLazyUnfollowCompanyQuery()

  const headerData = details?.companyInfoDetail?.aboutCompany?.companyHeader
  const summaryData = details?.summary
  const companyId = summaryData?.companySummary?.id

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement | undefined>(null)
  const open = Boolean(anchorEl)

  const [openFinancialcTooltip, setOpenFinancialcTooltip] = useState<
    boolean | undefined
  >(false)
  const [openFollowTooltip, setOpenFollowTooltip] = useState<
    boolean | undefined
  >(false)
  const [openGraphTooltip, setOpenGraphTooltip] = useState<boolean | undefined>(
    false
  )
  const openMenu = (event: MouseEvent<HTMLElement> | undefined) => {
    setAnchorEl(event?.currentTarget)
  }
  const closeMenu = () => {
    setAnchorEl(null)
  }

  const handleFinancialcTooltipClose = () => {
    setOpenFinancialcTooltip(false)
  }
  const handleFinancialcTooltipOpen = () => {
    setOpenFinancialcTooltip(true)
  }

  const handleFollowTooltipClose = () => {
    setOpenFollowTooltip(false)
  }
  const handleFollowTooltipOpen = () => {
    setOpenFollowTooltip(true)
  }

  const handleGraphTooltipClose = () => {
    setOpenGraphTooltip(false)
  }
  const handleGraphTooltipOpen = () => {
    setOpenGraphTooltip(true)
  }

  const handleCopyTitle = () => {
    copyToClipBoard(String(summaryData?.companySummary?.title))
    notify({
      message: <div>کپی شد!!</div>,
      config: { autoClose: 3000 },
    })
  }

  const companyFollowHandler = () => {
    if (isFollowing) {
      unFollowCompany({ companyId })
        .unwrap()
        .then(() => {
          dispatch(setIsFollowing(false))
        })
        .catch((err) => notify({ message: err?.data?.title, type: 'error' }))
    } else {
      followCompany({ companyId })
        .unwrap()
        .then(() => {
          dispatch(setIsFollowing(true))
          dispatch(setVisible(true))
        })
        .catch((err) => notify({ message: err?.data?.title, type: 'error' }))
    }
  }

  return (
    <Row wrap justify='space-between' className={styles['unAuthHeader']}>
      <Col xxs={24} data-selector='title-box'>
        <div data-selector='logo'>
          <Image
            src={headerData?.logo || '/svg/search/company-1.svg'}
            width={headerData?.logo ? 90 : 40}
            height={headerData?.logo ? 90 : 40}
          />
        </div>
        <div data-selector='title-info' aria-hidden>
          <ClickAwayListener onClickAway={handleFinancialcTooltipClose}>
            <div data-selector='registration'>
              <Skeleton
                data={details}
                variant='rounded'
                width='90px'
                height='25px'
              >
                <span>
                  {summaryData?.companySummary?.summary?.registrationTypeTitle}
                </span>
              </Skeleton>
              {summaryData?.companySummary?.taxCredit === false && (
                <FinancialcTooltip
                  placement='bottom'
                  title={
                    <div data-selector='financialc-tooltip'>
                      <div data-selector='financialc-info'>
                        این شرکت در فهرست "مودیان فاقد اعتبار" معاونت مالیات بر
                        ارزش افزوده قرار دارد.{' '}
                        <span>در انجام معامله با این شرکت احتیاط نمایید.</span>
                      </div>
                      <Button
                        btnType='ghost'
                        href='/blog/tax-inactive/'
                        target='_blank'
                      >
                        اطلاعات بیشتر
                      </Button>
                    </div>
                  }
                  arrow
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleFinancialcTooltipClose}
                  open={openFinancialcTooltip}
                  disableFocusListener
                  disableTouchListener
                >
                  <Row
                    data-selector='registration-info'
                    gap={0}
                    onClick={handleFinancialcTooltipOpen}
                  >
                    <FinancialInfoIcon />
                    <p>فاقد اعتبار مالیاتی</p>
                  </Row>
                </FinancialcTooltip>
              )}
            </div>
          </ClickAwayListener>

          <Skeleton
            data={details}
            variant='rounded'
            height='51px'
            width='270px'
            className='mt-half'
          >
            <h2 onDoubleClick={handleCopyTitle} onTouchStart={handleCopyTitle}>
              {summaryData?.companySummary?.title}
            </h2>
          </Skeleton>
        </div>
      </Col>

      <Col xxs={24} data-selector='buttons-box'>
        <div>
          <Skeleton
            data={details}
            width='165px'
            height='40px'
            variant='rounded'
            className='me-half'
          >
            <ClickAwayListener onClickAway={handleFollowTooltipClose}>
              {packageType && packageType > 11 ? (
                <Button
                  btnType='primary'
                  bgColor={isFollowing ? 'primary-100' : 'white-blue-gradient'}
                  size='medium'
                  data-selector={isFollowing ? 'following-btn' : 'follow-btn'}
                  onClick={companyFollowHandler}
                >
                  {isFollowing ? (
                    <>
                      <CheckIcon />
                      دنبال کرده‌اید
                    </>
                  ) : (
                    <>
                      <RoundedPlusIcon />
                      دنبال کنید
                    </>
                  )}
                </Button>
              ) : (
                <LimitTooltip
                  placement='bottom'
                  title={<LimitTooltipContent isLogin={accessToken} />}
                  arrow
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleFollowTooltipClose}
                  open={openFollowTooltip}
                  disableFocusListener
                  disableTouchListener
                >
                  <Button
                    size='medium'
                    data-selector='lock-btn'
                    onClick={handleFollowTooltipOpen}
                    onMouseEnter={handleFollowTooltipOpen}
                  >
                    <img src={LockSvg} alt='' />
                    دنبال کنید
                  </Button>
                </LimitTooltip>
              )}
            </ClickAwayListener>
          </Skeleton>
          <Skeleton
            data={details}
            variant='rounded'
            width='145px'
            height='40px'
          >
            <ClickAwayListener onClickAway={handleGraphTooltipClose}>
              {packageType && packageType > 11 ? (
                <Button
                  btnType='secondary'
                  size='medium'
                  data-selector='graph-btn'
                  href={`${WEB.COMPANY_GRAPH}/${companyId}`}
                >
                  <CompanyGraphIcon />
                  شبکه ارتباطات
                </Button>
              ) : (
                <LimitTooltip
                  placement='bottom-end'
                  title={<LimitTooltipContent isLogin={accessToken} />}
                  arrow
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleGraphTooltipClose}
                  open={openGraphTooltip}
                  disableFocusListener
                  disableTouchListener
                >
                  <Button
                    size='medium'
                    data-selector='lock-btn'
                    onClick={handleGraphTooltipOpen}
                    onMouseEnter={handleGraphTooltipOpen}
                  >
                    <img src={LockSvg} alt='' />
                    شبکه ارتباطات
                  </Button>
                </LimitTooltip>
              )}
            </ClickAwayListener>
          </Skeleton>
        </div>
        <div>
          <Skeleton
            className='me-half'
            data={details}
            variant='rounded'
            width='180px'
            height='35px'
          >
            <Button
              btnType='link'
              data-selector='manager-btn'
              href={WEB.ABOUT_COMPANY_MANAGEMENT}
            >
              مدیر این شرکت هستید؟
            </Button>
          </Skeleton>
          <Skeleton data={details} width='40px' height='40px' variant='rounded'>
            <Button
              btnType='ghost'
              size='medium'
              data-selector='more-btn'
              id='demo-positioned-button'
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={openMenu}
            >
              <MoreIcon />
            </Button>
          </Skeleton>
          <HeaderMenu
            companyId={companyId}
            closeMenu={closeMenu}
            anchorEl={anchorEl}
            open={open}
            isAuth={false}
          />
        </div>
      </Col>
      <Col xxs={24} data-selector='tabs-box'>
        <HeaderTabs />
      </Col>
    </Row>
  )
}

export default UnAuthenticatedHeader
