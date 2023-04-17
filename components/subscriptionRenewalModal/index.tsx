import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import { CloseIcon, DangerImg } from 'assets/icons'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

import type { RootState } from 'libs/redux/store'
// import { getUserInfo } from 'old/services/dashboard/dashboardApi'
import styles from './subscriptionRenewalModal.module.scss'

dayjs.extend(jalaliday)

const SubscriptionRenewalModal = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const { packageType } = useSelector((state: RootState) => state.auth)

  const [userInfo, setUserInfo] = useState<any>(null)
  // useEffect(() => {
  //   getUserInfo().then((res) => setUserInfo(res))
  // }, [])
  const diff = dayjs(userInfo?.newPremium?.until).diff(dayjs(), 'day')

  const closeModal = () => setVisible(false)

  const handleDate = () =>
    new Date().getTime() -
    Number(localStorage.getItem('subscriptionRenewalDate'))

  const openModalWithCondition = () => {
    setTimeout(() => {
      localStorage.setItem(
        'subscriptionRenewalDate',
        String(new Date().getTime())
      )

      setVisible(true)
    }, 30000)
  }

  useEffect(() => {
    if (
      userInfo?.newPremium &&
      (packageType as number) >= 11 &&
      handleDate() > 86400000 &&
      diff <= 30
    ) {
      openModalWithCondition()
    }

    return () => {
      localStorage.removeItem('subscriptionRenewalDate')
    }
  }, [userInfo])

  return visible && userInfo?.newPremium ? (
    <Row className={styles['renewal']} direction='column'>
      <Row className='w-100' justify='space-between' align='top'>
        <span className={styles['renewal--title']}>
          {diff > 7 &&
            diff <= 30 &&
            'کمتر از یک ماه تا پایان اشتراک شما باقی مانده'}

          {diff <= 7 && `تنها ${diff} روز تا پایان اشتراک شما باقیمانده`}
        </span>
        {/* 
        <Button data-selector='close' onClick={closeModal}>
          <CloseIcon />
        </Button> */}
      </Row>

      <Row
        className={styles['renewal__content']}
        justify='space-between'
        align='middle'
      >
        {/* <img src={DangerImg} alt='danger' /> */}

        <span>
          زمان اشتراک شما در{' '}
          {dayjs(userInfo?.newPremium?.until)
            .calendar('jalali')
            .locale('fa')
            .format('YYYY/MM/DD')}{' '}
          به پایان می‌رسد. همین امروز می‌توانید با{' '}
          <span>‌کد تخفیف TMFY با</span>
          <span>20 درصد تخفیف</span> اشتراک خود را ارتقا دهید یا تمدید کنید.
        </span>
      </Row>

      <Button
        href='/pricing'
        data-selector='upgrade'
        btnType='primary'
        bgColor='white-blue-gradient'
        size='large'
      >
        تمدید اشتراک
      </Button>
    </Row>
  ) : null
}

export default SubscriptionRenewalModal
