import { type MouseEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  VerifiedCompanyBadge,
  RoundedPlusIcon,
  CompanyGraphIcon,
  MoreIcon,
  CheckIcon,
  InfoIcon,
  LockSvg,
  VerifiedCompanyMobileIcon,
} from 'assets/icons'
import {
  usePostV3ProfileFollowNationalCodeMutation,
  usePostV3ProfileUnFollowByFollowIdMutation,
} from 'libs/redux/services/v3'
import { notify } from 'utils/notification'
import { HeaderMenu } from 'containers/person/components/personHeader/helper'
import { setVisible } from 'libs/redux/slices/followListModal'
import { setIsFollowing } from 'libs/redux/slices/person'
import HeaderTabs from '../stickyHeader'
import Image from 'next/image'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Tooltip, { LimitTooltip } from 'components/ui/Tooltip/helper'
import Button from 'components/ui/Button'
import LimitTooltipContent from 'components/limitTooltip'
import Skeleton from 'components/skeleton'
import ValidationPerson from 'old/components/Pages/person/header/validationPerson/ValidationPerson'

import type { RootState } from 'libs/redux/store'
import { WEB } from 'utils/statics/routes/web'
import styles from './header.module.scss'

const Header = () => {
  const dispatch = useDispatch()
  const { details, isAuth, isFollowing } = useSelector(
    (state: RootState) => state.person
  )
  const { packageType, accessToken } = useSelector(
    (state: RootState) => state.auth
  )
  const [followPerson] = usePostV3ProfileFollowNationalCodeMutation()
  const [unFollowPerson] = usePostV3ProfileUnFollowByFollowIdMutation()
  const personId = details?.person?.id

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
  const [opneValidate, setOpneValidate] = useState<boolean>(false)

  const openMenu = (event: MouseEvent<HTMLElement> | undefined) => {
    setAnchorEl(event?.currentTarget)
  }
  const closeMenu = () => {
    setAnchorEl(null)
  }

  const handleFollowTooltipClose = () => setOpenFollowTooltip(false)

  const handleFollowTooltipOpen = () => setOpenFollowTooltip(true)

  const handleGraphTooltipClose = () => setOpenGraphTooltip(false)

  const handleGraphTooltipOpen = () => setOpenGraphTooltip(true)

  const handleVerifyTooltipClose = () => setOpenVerifyTooltip(false)

  const handleVerifyTooltipOpen = () => setOpenVerifyTooltip(true)

  const personFollowHandler = () => {
    if (isFollowing) {
      unFollowPerson({ unFollowByFollowId: { followId: Number(personId) } })
        .unwrap()
        .then(() => {
          dispatch(setIsFollowing(false))
        })
        .catch((err) => notify({ message: err?.data?.Message, type: 'error' }))
    } else {
      followPerson({ followNationalCode: { nationalCode: Number(personId) } })
        .unwrap()
        .then(() => {
          dispatch(setVisible(true))
          dispatch(setIsFollowing(true))
        })
        .catch((err) => notify({ message: err?.data?.title, type: 'error' }))
    }
  }

  const handleClose = () => {
    setOpneValidate(false)
  }

  return (
    <Row wrap justify='space-between' className={styles['header']}>
      <ValidationPerson
        open={opneValidate}
        setCloseValidate={handleClose}
        title={details?.person?.title}
        nationalId={details?.person?.id}
      />
      <Col lg={16} xxs={24} data-selector='title-box'>
        <div data-selector='logo'>
          <Image
            src={details?.person?.pictureUrl || '/svg/search/person-1.svg'}
            width={details?.person?.pictureUrl ? 90 : 40}
            height={details?.person?.pictureUrl ? 90 : 40}
          />
        </div>
        <div data-selector='title-info' aria-hidden>
          <div data-selector='title'>
            <Skeleton
              data={details}
              width='400px'
              height='51px'
              variant='rounded'
            >
              <h2>
                {details?.person?.title}
                {isAuth && (
                  <div data-selector='verified-icon'>
                    <VerifiedCompanyMobileIcon />
                  </div>
                )}
              </h2>
            </Skeleton>
          </div>
        </div>
      </Col>
      {isAuth && (
        <Col lg={8} xxs={24} data-selector='authenticated-box'>
          <Skeleton
            data={details}
            width='210px'
            height='60px'
            variant='rounded'
          >
            <Tooltip
              placement='bottom'
              title='اشخاصی که “تیک آبی” دریافت کرده‌اند، توسط رسمیو احراز هویت شده اند و امکان مدیریت صفحه شرکت خود و ویرایش اطلاعات را خواهند داشت.'
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
      )}
      <Col xxs={24} data-selector='buttons-box'>
        <div>
          <Skeleton
            className='me-half'
            data={details}
            width='170px'
            height='40px'
            variant='rounded'
          >
            {packageType && packageType > 11 ? (
              <Button
                btnType='primary'
                bgColor={isFollowing ? 'primary-100' : 'white-blue-gradient'}
                size='medium'
                data-selector={isFollowing ? 'following-btn' : 'follow-btn'}
                onClick={personFollowHandler}
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
          </Skeleton>
          <Skeleton
            className='me-half'
            data={details}
            width='162px'
            height='40px'
            variant='rounded'
          >
            {packageType && packageType > 11 ? (
              <Button
                btnType='secondary'
                size='medium'
                data-selector='graph-btn'
                href={`${WEB.PERSON_GRAPH}/${personId}`}
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
                  data-selector='graph-lock-btn'
                  onClick={handleGraphTooltipOpen}
                  onMouseEnter={handleGraphTooltipOpen}
                >
                  <img src={LockSvg} alt='' />
                  شبکه ارتباطات
                </Button>
              </LimitTooltip>
            )}
          </Skeleton>
        </div>
        <div>
          {!isAuth && (
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
                onClick={() => setOpneValidate(true)}
              >
                این شخص شما هستید؟
              </Button>
            </Skeleton>
          )}
          <Skeleton data={details} width='40px' height='40px' variant='rounded'>
            <Button
              btnType='ghost'
              size='medium'
              data-selector={isAuth ? 'more-btn' : 'more-btn-authed'}
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
            personId={personId}
            closeMenu={closeMenu}
            anchorEl={anchorEl}
            open={open}
          />
        </div>
      </Col>
      <Col xxs={24} data-selector='tabs-box'>
        <HeaderTabs />
      </Col>
    </Row>
  )
}

export default Header
