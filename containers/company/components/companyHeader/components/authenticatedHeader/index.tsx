import { type MouseEvent, useEffect, useState } from 'react'
import { ClickAwayListener } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  VerifiedCompanyIcon,
  VerifiedCompanyBadge,
  RoundedPlusIcon,
  MessageGreenIcon,
  CompanyGraphIcon,
  MoreIcon,
  CheckIcon,
  InfoIcon,
  LockSvg,
  VerifiedCompanyMobileIcon,
} from 'assets/icons'
import {
  useLazyFollowCompanyQuery,
  useLazyUnfollowCompanyQuery,
} from 'libs/redux/services/companyV1'
import {
  setIsFollowing,
  setMessageModalVisibility,
} from 'libs/redux/slices/company'
import { copyToClipBoard } from 'utils/helpers/global'
import { notify } from 'utils/notification'
import { setVisible } from 'libs/redux/slices/followListModal'
import { HeaderMenu } from '../../helper'
import HeaderTabs from '../headerTabs'
import Image from 'next/image'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Tooltip, { LimitTooltip } from 'components/ui/Tooltip/helper'
import Button from 'components/ui/Button'
import LimitTooltipContent from 'components/limitTooltip'
import Skeleton from 'components/skeleton'

import { WEB } from 'utils/statics/routes/web'
import type { RootState } from 'libs/redux/store'
import styles from './authenticatedHeader.module.scss'

const AuthenticatedHeader = () => {
  const dispatch = useDispatch()
  const { details, activeTab, isFollowing } = useSelector(
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

  const [openFollowTooltip, setOpenFollowTooltip] = useState<
    boolean | undefined
  >(false)
  const [openGraphTooltip, setOpenGraphTooltip] = useState<boolean | undefined>(
    false
  )
  const [openVerifyTooltip, setOpenVerifyTooltip] = useState<
    boolean | undefined
  >(false)

  const openMenu = (event: MouseEvent<HTMLElement> | undefined) =>
    setAnchorEl(event?.currentTarget)

  const closeMenu = () => setAnchorEl(null)

  const openMessageModal = () => dispatch(setMessageModalVisibility(true))

  const handleFollowTooltipClose = () => setOpenFollowTooltip(false)

  const handleFollowTooltipOpen = () => setOpenFollowTooltip(true)

  const handleGraphTooltipClose = () => setOpenGraphTooltip(false)

  const handleGraphTooltipOpen = () => setOpenGraphTooltip(true)

  const handleVerifyTooltipClose = () => setOpenVerifyTooltip(false)

  const handleVerifyTooltipOpen = () => setOpenVerifyTooltip(true)

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
    <Row wrap justify='space-between' className={styles['authHeader']}>
      <Col lg={16} xxs={24} data-selector='title-box'>
        <div data-selector='logo'>
          <Image
            src={headerData?.logo || '/svg/search/company-1.svg'}
            width={headerData?.logo ? 90 : 40}
            height={headerData?.logo ? 90 : 40}
          />
        </div>
        <div data-selector='title-info' aria-hidden>
          <div data-selector='registration'>
            <Skeleton
              data={details}
              width='88px'
              height='24px'
              variant='rounded'
            >
              <span>
                {summaryData?.companySummary?.summary?.registrationTypeTitle}
              </span>
            </Skeleton>
          </div>
          <div
            data-selector='title'
            onDoubleClick={handleCopyTitle}
            onTouchStart={handleCopyTitle}
          >
            <Skeleton
              data={details}
              width='400px'
              height='51px'
              variant='rounded'
            >
              <>
                <h2>
                  {headerData?.companyBrand}
                  <div data-selector='responsive-verified-icon'>
                    <VerifiedCompanyMobileIcon />
                  </div>
                </h2>
                <p>({summaryData?.companySummary?.title})</p>
                <div data-selector='verified-icon'>
                  <VerifiedCompanyIcon />
                </div>
              </>
            </Skeleton>
          </div>
          <div data-selector='badges'>
            {headerData?.activityCategories?.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </Col>
      <Col lg={7} xxs={24} data-selector='authenticated-box'>
        <Skeleton data={details} width='210px' height='60px' variant='rounded'>
          <Tooltip
            placement='bottom'
            title='شرکت‌هایی که “تیک آبی” دریافت کرده‌اند، توسط رسمیو احراز هویت شده و امکان افزودن اطلاعات از جمله تصاویر معرفی شرکت، کارگاه، محصولات و همچنین امکان ارسال پیام و درخواست قیمت از سمت بازدیدکننده را دارند.'
            arrow
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleVerifyTooltipClose}
            open={openVerifyTooltip}
            disableFocusListener
            disableTouchListener
          >
            <Row
              data-selector='verify-info'
              gap={0}
              onClick={handleVerifyTooltipOpen}
              onMouseEnter={handleVerifyTooltipOpen}
            >
              <p>احراز هویت شده توسط رسمیو</p>
              <InfoIcon />
              <VerifiedCompanyBadge />
            </Row>
          </Tooltip>
        </Skeleton>
      </Col>
      <Col xxs={24} data-selector='buttons-box'>
        <div>
          <Skeleton
            className='me-half'
            data={details}
            width='170px'
            height='40px'
            variant='rounded'
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
                    data-selector='follow-lock-btn'
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
            width='192px'
            height='40px'
            variant='rounded'
          >
            <Button
              btnType='secondary'
              color='jade-600'
              size='medium'
              data-selector='message-btn'
              onClick={openMessageModal}
            >
              <MessageGreenIcon />
              پیام به شرکت
            </Button>
          </Skeleton>
        </div>
        <div>
          <Skeleton
            className='me-half'
            data={details}
            width='162px'
            height='40px'
            variant='rounded'
          >
            <ClickAwayListener onClickAway={handleGraphTooltipClose}>
              {packageType && packageType > 11 ? (
                <Button
                  btnType='secondary'
                  size='medium'
                  data-selector={
                    activeTab === 'about.company'
                      ? 'graph-btn'
                      : 'graph-btn-subtab'
                  }
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
                    data-selector={
                      activeTab === 'about.company'
                        ? 'graph-lock-btn'
                        : 'graph-lock-btn-subtab'
                    }
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
            isAuth
          />
        </div>
      </Col>
      <Col xxs={24} data-selector='tabs-box'>
        <HeaderTabs />
      </Col>
    </Row>
  )
}

export default AuthenticatedHeader
