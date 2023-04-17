import { useDispatch, useSelector } from 'react-redux'
import { Divider } from '@mui/material'
import { DoneAllOutlined } from '@mui/icons-material'
import { displayCurrentState } from 'libs/redux/slices/contactSupport'
import { setVisible } from 'libs/redux/slices/companyAuth'
import { useIntl } from 'react-intl'
// import Image from 'next/image'
import Button from 'components/ui/Button'

import type { RootState } from 'libs/redux/store'
import styles from './companyAuthFinish.module.scss'

const CompanyAutFinish = () => {
  const dispatch = useDispatch()
  const { companyTitle } = useSelector((state: RootState) => state.company)
  const intl = useIntl()

  const handleClick = () => dispatch(displayCurrentState({ showContact: true }))

  const closeModal = () => dispatch(setVisible(false))

  return (
    <div className={styles['companyAuthFinish']}>
      <Divider className='w-100' />
      <p className={styles['companyAuthFinish--title']}>
        درخواست شما برای احرازهویت مدیرعاملی <span>{companyTitle}</span> با
        موفقیت ثبت گردید. وضعیت فعال سازی سرویس پروفایل اختصاصی شرکت برای شما در
        حالت انتظار بوده و پس از بررسی اصالت هویت شما و فعال سازی این سرویس به
        شما اطلاع رسانی خواهد شد.
      </p>
      {/* <p className={styles['companyAuthFinish--content']}>
        {intl.formatMessage({ id: 'company.auth.success' })}
      </p>

      <div className={styles['companyAuthFinish--gif']}>
        <Image src='/gif/acceptGif.gif' layout='fill' />
      </div> */}

      <div className={styles['companyAuthFinish__editCompany']}>
        {/* <p>{intl.formatMessage({ id: 'company.auth.edit' })}</p> */}

        <div className={styles['companyAuthFinish__editCompany__footer']}>
          <Button onClick={closeModal}>
            <DoneAllOutlined />
            {/* <p>{intl.formatMessage({ id: 'company.auth.enter' })}</p> */}
            <p>تایید</p>
          </Button>
          <div
            className={
              styles['companyAuthFinish__editCompany__footer--connection']
            }
          >
            <p>{intl.formatMessage({ id: 'company.auth.problem' })}</p>
            <Button onClick={handleClick} btnType='ghost'>
              {intl.formatMessage({ id: 'company.auth.contact.support' })}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyAutFinish
