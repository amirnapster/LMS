import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVisible as setVisibleLoginModal } from 'libs/redux/slices/auth'
import { ArrowLeftIcon, LeftArrowIcon } from 'assets/icons'
import { Close } from '@mui/icons-material'
import Container from 'components/container'
import Row from 'components/ui/Row'
import Button from 'components/ui/Button'

import type { RootState } from 'libs/redux/store'
import styles from './blockByVisit.module.scss'

const BlockByVisit = () => {
  const { query, pathname } = useRouter()
  const dispatch = useDispatch()
  const { accessToken, packageType } = useSelector(
    (state: RootState) => state.auth
  )
  const { isSearching } = useSelector((state: RootState) => state.navbar)

  const visitedCompanies =
    (localStorage.getItem('VisitedCompanies') || '').split(',').length - 1

  const defaultVisible =
    (!packageType || packageType < 0) &&
    ((accessToken && visitedCompanies > 17) || !accessToken)
  const [visible, setVisible] = useState(defaultVisible)

  useEffect(() => {
    if (!packageType || packageType < 0) {
      if (accessToken && visitedCompanies > 24) closeToast()
      else if (!accessToken && visitedCompanies > 4) closeToast()
    }
  }, [])

  useEffect(() => {
    if (!packageType) {
      if (isSearching) closeToast()
      else setVisible(true)
    }
  }, [isSearching])

  useEffect(() => {
    if (!visible && !packageType && pathname.includes('/company')) {
      setVisible(true)
    }
  }, [query])

  const closeToast = () => setVisible(false)

  const openLoginModal = () => {
    dispatch(setVisibleLoginModal({ mode: 'signUp', visible: true }))
  }

  return visible ? (
    <Container className={styles['blockByVisit__container']}>
      <Row className={styles['blockByVisit']} align='middle' justify='center'>
        <Close onClick={closeToast} />
        <div className={styles['blockByVisit__text']}>
          {accessToken ? (
            <>
              {'از ظرفیت 24 مشاهده صفحه سالانه، شما تنها ظرفیت مشاهده '}
              <span className={styles['blockByVisit__text--remaining']}>
                {Math.max(24 - visitedCompanies, 0)}
              </span>
              {
                ' صفحه شرکت دیگر را دارید؛ برای مشاهده صفحات بیشتر، اشتراک بخرید.'
              }
            </>
          ) : (
            <>
              {'شما ظرفیت مشاهده '}
              <span className={styles['blockByVisit__text--remaining']}>
                {Math.max(0, 5 - visitedCompanies)}
              </span>
              {
                ' صفحه شرکت دیگر طی سال جاری را دارید؛ برای مشاهده صفحات بیشتر، رایگان در رسمیو ثبت نام کنید.'
              }
            </>
          )}
        </div>
        <Row className={styles['blockByVisit__actions']} gap={1}>
          <Button
            className='text-weight-600'
            btnType='ghost'
            target='_blank'
            href='https://rasm.io/blog/%d8%a7%d8%b4%d8%aa%d8%b1%d8%a7%da%a9%d9%87%d8%a7%db%8c-%d8%b1%d8%b3%d9%85%db%8c%d9%88/'
          >
            اطلاعات بیشتر
          </Button>
          {accessToken ? (
            <Button
              data-selector='buy'
              href='/pricing'
              btnType='primary'
              bgColor='white-blue-gradient'
              ripple
            >
              <span>خرید اشتراک</span>
              <LeftArrowIcon />
            </Button>
          ) : (
            <Button
              onClick={openLoginModal}
              data-selector='free'
              btnType='primary'
              bgColor='white-gold-gradient'
              color='black'
              ripple
            >
              <span>رایگان امتحان کنید</span>
              <ArrowLeftIcon viewBox='0 0 25 25' />
            </Button>
          )}
        </Row>
      </Row>
    </Container>
  ) : null
}
export default BlockByVisit
