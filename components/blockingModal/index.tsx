import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BlockingModalHeaderIcon, HomeIcon, LeftArrowIcon } from 'assets/icons'
import { setVisible } from 'libs/redux/slices/auth'
import Image from 'next/image'
import Button from 'components/ui/Button'
import Modal from 'components/ui/Modal'
import Row from 'components/ui/Row'

import type { AuthMode } from 'libs/redux/slices/auth/interface'
import type { RootState } from 'libs/redux/store'
import styles from './blockingModal.module.scss'

const BlockingModal = () => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const [visibleBlockingModal, setVisibleBlockingModal] = useState(false)

  const { packageType, accessToken } = useSelector(
    (state: RootState) => state.auth
  )

  const closeModal = () => {
    setVisibleBlockingModal(false)
    push('/')
  }

  const toggleLoginModal = (mode: AuthMode) => {
    dispatch(setVisible({ visible: true, mode }))
  }

  const visitedCompanies =
    (localStorage.getItem('VisitedCompanies') || '').split(',').length - 1

  useEffect(() => {
    if (!packageType || packageType < 0) {
      if (accessToken && visitedCompanies > 24) {
        setVisibleBlockingModal(true)
        document.body.classList.add('stop-scrolling')
      } else if (!accessToken && visitedCompanies > 4) {
        document.body.classList.add('stop-scrolling')
        setVisibleBlockingModal(true)
      }
    }

    return () => {
      document.body.classList.remove('stop-scrolling')
      setVisibleBlockingModal(false)
    }
  }, [packageType, accessToken])

  return (
    <Modal className={styles['block']} visible={visibleBlockingModal}>
      <Row className={styles['block__wrapper']} direction='column'>
        <div className={styles['block--img']}>
          <Image src={BlockingModalHeaderIcon} layout='fill' />
        </div>

        <div className={styles['block--description']}>
          {!accessToken ? (
            <span>
              ظرفیت مشاهده صفحه شرکت شما به پایان رسیده است؛ برای استفاده بیشتر،
              رایگان در رسمیو ثبت نام کنید
            </span>
          ) : (
            <span>
              ظرفیت مشاهده صفحه شرکت شما به پایان رسیده است؛ برای استفاده بیشتر،
              اشتراک خود را ارتقا دهید
            </span>
          )}
        </div>

        <Row gap={1}>
          <Button
            className={styles['block--more']}
            target='_blank'
            href='https://rasm.io/blog/%d8%a7%d8%b4%d8%aa%d8%b1%d8%a7%da%a9%d9%87%d8%a7%db%8c-%d8%b1%d8%b3%d9%85%db%8c%d9%88/'
            btnType='ghost'
            color='white'
            size='large'
            ripple
          >
            اطلاعات بیشتر
          </Button>
          <Button
            className={styles['block--signup']}
            onClick={() =>
              accessToken ? push('/pricing') : toggleLoginModal('signUp')
            }
            btnType='primary'
            bgColor='white-blue-gradient'
            size='large'
            ripple
          >
            <span>{accessToken ? 'ارتقا اشتراک' : 'ثبت نام رایگان'}</span>
            <LeftArrowIcon />
          </Button>
        </Row>

        {!accessToken && (
          <div className={styles['block--account']}>
            <span>آیا حساب کاربری دارید؟</span>
            <Button
              onClick={() => toggleLoginModal('otp')}
              btnType='link'
              size='medium'
              color='white'
            >
              وارد شوید
            </Button>
          </div>
        )}

        <Button
          className={styles['block--return']}
          onClick={closeModal}
          btnType='ghost'
          color='white'
          size='medium'
          ripple
        >
          <HomeIcon />
          <span>بازگشت به صفحه اصلی</span>
        </Button>
      </Row>
    </Modal>
  )
}

export default BlockingModal
