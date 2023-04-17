import { useSelector } from 'react-redux'
import NotFoundSection from 'components/notFoundSection'
import Skeleton from 'components/skeleton'
import Card from 'components/card'
import type { RootState } from 'libs/redux/store'

import {
  CommunicationLocation,
  CommunicationSocials,
  CommunicationWays,
} from './helper'

import styles from './companyCommunications.module.scss'

const CompanyCommunications = () => {
  const { details, isAuth } = useSelector((state: RootState) => state.company)
  const data = details?.companyInfoDetail?.communicationWays
  const summary = details?.summary?.companySummary?.communications

  const communicationsRender = () => {
    if (!isAuth || !data?.length)
      return (
        <CommunicationWays
          index={1}
          lastItem
          address={summary?.address}
          postalCode={summary?.postalCode}
          tel={summary?.tel}
          phoneNumber={summary?.mobile}
          fax={summary?.fax}
          title='دفتر مرکزی'
          isAuth={isAuth}
        />
      )

    return data?.map((item, index) => (
      <CommunicationWays
        key={item?.id}
        {...item}
        index={index + 1}
        lastItem={index + 1 === data?.length}
        isAuth
      />
    ))
  }

  return (
    <>
      <Skeleton
        className={styles['communication--skeleton']}
        data={details}
        width='100%'
        height='172px'
        variant='rounded'
      >
        <Card
          title='راه‌های ارتباطی'
          info={
            isAuth
              ? 'بخش‌های علامت‌گذاری شده با این آیکن، شامل اطلاعات تکمیل شده توسط شرکت است.'
              : undefined
          }
          hasSource={false}
          className={styles['communication--card']}
        >
          {communicationsRender()}
        </Card>
      </Skeleton>

      <Skeleton
        className={styles['communication--skeleton']}
        data={details}
        width='100%'
        height='172px'
        variant='rounded'
      >
        {summary?.socialMedias?.length || summary?.email || summary?.webSite ? (
          <Card
            title='شبکه‌های اجتماعی'
            hasSource={false}
            className={styles['communication--card']}
          >
            <CommunicationSocials {...summary} />
          </Card>
        ) : (
          <NotFoundSection
            className={styles['communication__media--notFound']}
            title='شبکه‌های اجتماعی'
          />
        )}
      </Skeleton>

      <Skeleton data={details} width='100%' height='172px' variant='rounded'>
        {summary?.lat || summary?.lng ? (
          <Card
            title='موقعیت شرکت'
            hasSource={false}
            className={styles['communication--card']}
          >
            <CommunicationLocation lat={summary?.lat} lng={summary?.lng} />
          </Card>
        ) : (
          <NotFoundSection title='موقعیت شرکت' />
        )}
      </Skeleton>
    </>
  )
}

export default CompanyCommunications
