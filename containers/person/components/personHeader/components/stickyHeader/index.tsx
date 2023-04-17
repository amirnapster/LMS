import { useDispatch, useSelector } from 'react-redux'
import {
  CheckIcon,
  CompanyGraphIcon,
  LockSvg,
  RoundedPlusIcon,
  VerifiedCompanyIcon,
} from 'assets/icons'
import {
  usePostV3ProfileFollowNationalCodeMutation,
  usePostV3ProfileUnFollowByFollowIdMutation,
} from 'libs/redux/services/v3'
import { setSelectedTab, setIsFollowing } from 'libs/redux/slices/person'
import { LimitTooltip } from 'components/ui/Tooltip/helper'
import { notify } from 'utils/notification'
import { setVisible } from 'libs/redux/slices/followListModal'
import Image from 'next/image'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import Button from 'components/ui/Button'
import LimitTooltipContent from 'components/limitTooltip'
import Skeleton from 'components/skeleton'

import { personHeaderTabItems } from 'utils/statics/personStatics'
import { WEB } from 'utils/statics/routes/web'
import type { RootState } from 'libs/redux/store'

import styles from './headerTabs.module.scss'

type IHeaderTabs = { sticky?: boolean }

const HeaderTabs = ({ sticky }: IHeaderTabs) => {
  const dispatch = useDispatch()
  const { isAuth, details, selectedTab, isFollowing } = useSelector(
    (state: RootState) => state.person
  )
  const { packageType, accessToken } = useSelector(
    (state: RootState) => state.auth
  )
  const [followPerson] = usePostV3ProfileFollowNationalCodeMutation()
  const [unFollowPerson] = usePostV3ProfileUnFollowByFollowIdMutation()

  const personId = details?.person?.id

  const personFollowHandler = () => {
    if (isFollowing) {
      unFollowPerson({
        unFollowByFollowId: { followId: Number(details?.person?.id) },
      })
        .unwrap()
        .then(() => {
          dispatch(setIsFollowing(false))
        })
        .catch((err) => notify({ message: err?.data?.Message, type: 'error' }))
    } else {
      followPerson({
        followNationalCode: { nationalCode: Number(details?.person?.id) },
      })
        .unwrap()
        .then(() => {
          dispatch(setVisible(true))
          dispatch(setIsFollowing(true))
        })
        .catch((err) => notify({ message: err?.data?.title, type: 'error' }))
    }
  }

  const scrollToSelectedTab = (link: string) => {
    dispatch(setSelectedTab(link))
    const element = document.getElementById(link)
    const headerOffset = 210
    const elementPosition = element?.getBoundingClientRect().top
    const offsetPosition = elementPosition! + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  return (
    <Col xxs={24}>
      {sticky ? (
        <Row className={styles['headerTabsSticky']} direction='column'>
          <Col xxs={24} className={styles['headerTabsSticky--tabs']}>
            <Col md={9} lg={5} data-selector='logo-box'>
              <div data-selector='logo'>
                <Image
                  src={
                    details?.person?.pictureUrl || '/svg/search/company-1.svg'
                  }
                  width={details?.person?.pictureUrl ? 28 : 18}
                  height={details?.person?.pictureUrl ? 28 : 18}
                />
              </div>
              <Skeleton
                data={details}
                variant='rounded'
                width='170px'
                height='30px'
              >
                <>
                  <h2>{details?.person?.title}</h2>
                  {isAuth && <VerifiedCompanyIcon />}
                </>
              </Skeleton>
            </Col>
            <Col lg={9} md={17}>
              {personHeaderTabItems.map(({ subTitle, link }) => (
                <Button
                  className={styles['headerTabsSticky--tabs--buttons']}
                  data-selector={link === selectedTab && 'actived-tab'}
                  key={link}
                  onClick={() => scrollToSelectedTab(link)}
                  disabled={!details}
                >
                  {subTitle}
                </Button>
              ))}
            </Col>
            <Col lg={10} md={1} data-selector='buttons-box'>
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
                    href={`${WEB.PERSON_GRAPH}/${personId}`}
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
                  >
                    <Button size='medium' data-selector='follow-lock-btn'>
                      <img src={LockSvg} alt='' />
                      دنبال کنید
                    </Button>
                  </LimitTooltip>
                )}
              </Skeleton>
            </Col>
          </Col>
        </Row>
      ) : (
        <Row className={styles['headerTabs']} direction='column'>
          <Col xxs={24} className={styles['headerTabs--tabs']}>
            {personHeaderTabItems.map(({ subTitle, link }) => (
              <Button
                data-selector={link === selectedTab && 'actived-tab'}
                key={link}
                onClick={() => scrollToSelectedTab(link)}
                disabled={!details}
              >
                {subTitle}
              </Button>
            ))}
          </Col>
        </Row>
      )}
    </Col>
  )
}

HeaderTabs.defaultProps = {
  sticky: false,
}

export default HeaderTabs
