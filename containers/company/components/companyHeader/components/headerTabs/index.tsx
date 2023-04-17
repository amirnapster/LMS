import { MouseEvent, useState } from 'react'
import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveTab,
  setIsFollowing,
  setMessageModalVisibility,
  setSelectedSubTab,
} from 'libs/redux/slices/company'
import {
  CheckIcon,
  CompanyGraphIcon,
  LockSvg,
  MessageGreenIcon,
  MoreIcon,
  RoundedPlusIcon,
  VerifiedCompanyIcon,
} from 'assets/icons'
import {
  useLazyFollowCompanyQuery,
  useLazyUnfollowCompanyQuery,
} from 'libs/redux/services/companyV1'
import { LimitTooltip } from 'components/ui/Tooltip/helper'
import { scrollHandler } from 'utils/helpers/global'
import { notify } from 'utils/notification'
import { WEB } from 'utils/statics/routes/web'
import { setVisible } from 'libs/redux/slices/followListModal'
import { HeaderMenu } from '../../helper'
import Image from 'next/image'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import Button from 'components/ui/Button'
import LimitTooltipContent from 'components/limitTooltip'
import Skeleton from 'components/skeleton'

import {
  companyHeaderSubTabItems,
  companyHeaderTabItems,
} from 'utils/statics/companyStatics'
import type { RootState } from 'libs/redux/store'
import type { CompanyActiveTabType } from 'libs/redux/slices/company/interface'
import styles from './headerTabs.module.scss'

type IHeaderTabs = { sticky?: boolean }

const HeaderTabs = ({ sticky }: IHeaderTabs) => {
  const intl = useIntl()
  const dispatch = useDispatch()
  const { isAuth, isFollowing, activeTab, details, selectedSubTab } =
    useSelector((state: RootState) => state.company)

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

  const openMenu = (event: MouseEvent<HTMLElement> | undefined) => {
    setAnchorEl(event?.currentTarget)
  }
  const closeMenu = () => {
    setAnchorEl(null)
  }
  const openMessageModal = () => dispatch(setMessageModalVisibility(true))

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

  const scrollToSelectedTab = (link: string) => {
    dispatch(setSelectedSubTab(link))
    const element = document.getElementById(link)
    const headerOffset = 210
    const elementPosition = element?.getBoundingClientRect().top
    const offsetPosition = elementPosition! + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  const selectActiveTabHandler = (item: CompanyActiveTabType) => {
    scrollHandler(0, 0)
    dispatch(setActiveTab(item))
  }

  return (
    <Col xxs={24}>
      {sticky ? (
        <Row className={styles['headerTabsSticky']} direction='column'>
          <Col xxs={24} className={styles['headerTabsSticky--tabs']}>
            <Col md={9} lg={5} data-selector='logo-box'>
              <div data-selector='logo'>
                <Image
                  src={headerData?.logo || '/svg/search/company-1.svg'}
                  width={headerData?.logo ? 28 : 18}
                  height={headerData?.logo ? 28 : 18}
                />
              </div>
              <Skeleton
                data={details}
                variant='rounded'
                width='170px'
                height='30px'
              >
                <>
                  <h2>
                    {headerData?.companyBrand ||
                      summaryData?.companySummary?.title}
                  </h2>
                  {headerData && <VerifiedCompanyIcon />}
                </>
              </Skeleton>
            </Col>
            <Col lg={9} md={17}>
              {companyHeaderTabItems.map((item) => (
                <Button
                  className={styles['headerTabsSticky--tabs--buttons']}
                  data-selector={item === activeTab && 'actived-tab'}
                  key={item}
                  onClick={() => selectActiveTabHandler(item)}
                  disabled={!details}
                >
                  {intl.formatMessage({ id: item })}
                </Button>
              ))}
            </Col>
            <Col lg={10} md={1} data-selector='buttons-box'>
              {!isAuth && (
                <Skeleton
                  className='me-hlaf'
                  data={details}
                  width='154px'
                  height='40px'
                  variant='rounded'
                >
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
                      placement='bottom'
                      title={<LimitTooltipContent isLogin={accessToken} />}
                      arrow
                    >
                      <Button size='medium' data-selector='follow-lock-btn'>
                        <img src={LockSvg} alt='' />
                        شبکه ارتباطات
                      </Button>
                    </LimitTooltip>
                  )}
                </Skeleton>
              )}
              <Skeleton
                data={details}
                width='130px'
                height='40px'
                variant='rounded'
              >
                {packageType && packageType > 11 ? (
                  <Button
                    btnType='primary'
                    bgColor={
                      isFollowing ? 'primary-100' : 'white-blue-gradient'
                    }
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
                  >
                    <Button size='medium' data-selector='follow-lock-btn'>
                      <img src={LockSvg} alt='' />
                      دنبال کنید
                    </Button>
                  </LimitTooltip>
                )}
              </Skeleton>

              {isAuth && (
                <Skeleton
                  data={details}
                  width='153px'
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
              )}
              <Skeleton
                data={details}
                width='40px'
                height='40px'
                variant='rounded'
              >
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
                isAuth={isAuth as boolean}
              />
            </Col>
          </Col>

          {activeTab === 'about.company' && (
            <Col xxs={24} className={styles['headerTabsSticky--subTabs']}>
              {companyHeaderSubTabItems.map(({ link, subTitle }) => (
                <Button
                  onClick={() => scrollToSelectedTab(link)}
                  data-selector={link === selectedSubTab && 'active-subTab'}
                  key={subTitle}
                  className={styles['headerTabsSticky--tabs--buttons']}
                  disabled={!details}
                >
                  {subTitle}
                </Button>
              ))}
            </Col>
          )}
        </Row>
      ) : (
        <Row className={styles['headerTabs']} direction='column'>
          <Col xxs={24} className={styles['headerTabs--tabs']}>
            {companyHeaderTabItems.map((item) => (
              <Button
                data-selector={item === activeTab && 'actived-tab'}
                key={item}
                onClick={() => dispatch(setActiveTab(item))}
                disabled={!details}
              >
                {intl.formatMessage({ id: item })}
              </Button>
            ))}
          </Col>

          {activeTab === 'about.company' && (
            <Col xxs={24} className={styles['headerTabs--subTabs']}>
              {companyHeaderSubTabItems.map(({ link, subTitle }) => (
                <Button
                  onClick={() => scrollToSelectedTab(link)}
                  data-selector={link === selectedSubTab && 'active-subTab'}
                  key={subTitle}
                  disabled={!details}
                >
                  {subTitle}
                </Button>
              ))}
            </Col>
          )}
        </Row>
      )}
    </Col>
  )
}

HeaderTabs.defaultProps = {
  sticky: false,
}

export default HeaderTabs
