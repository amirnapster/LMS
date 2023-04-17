import { useEffect, useState } from 'react'
import NotFoundSection from 'components/notFoundSection'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import Card from 'components/card'
import SectionTitle from 'components/sectionTitle'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

import type {
  AdsSortOrderType,
  CompanyAdsType,
} from 'containers/company/interface'
import type { CompanyNews, PersonNews } from 'libs/redux/services/v3'
import { AdvertisementContent, AdvertisementHeader } from './helper'

import styles from './advertisementCard.module.scss'

dayjs.extend(jalaliday)

interface AdvertisementCardProps {
  id: number | undefined
  news: CompanyNews[] | PersonNews[] | undefined | null
  mode: 'company' | 'person'
}

const AdvertisementCard = ({ news, id, mode }: AdvertisementCardProps) => {
  const [order, setOrder] = useState<AdsSortOrderType>('new')
  const [ads, setAds] = useState<CompanyAdsType>(null)

  useEffect(() => {
    const adsByDate: CompanyAdsType = {}
    if (news?.length) {
      news.forEach((ad) => {
        if (ad.newsLetterDate) {
          const date = dayjs(ad.newsLetterDate).calendar('jalali').year()
          Object.assign(adsByDate, {
            [date]: adsByDate[date]?.length ? [...adsByDate[date], ad] : [ad],
          })
          return
        }
        const date = dayjs(ad.newsPaperDate).calendar('jalali').year()
        Object.assign(adsByDate, {
          [date]: adsByDate[date]?.length ? [...adsByDate[date], ad] : [ad],
        })
      })

      setAds(adsByDate)
    }
  }, [news])

  return (
    <Row wrap id='news'>
      <Col span={24}>
        <SectionTitle title='آگهی‌های رسمی' />
      </Col>

      {ads ? (
        <Col xxs={24}>
          <Card
            className={styles['ad']}
            title='اخبار'
            subtitle={`(${news?.length} آگهی)`}
          >
            <Row wrap>
              <AdvertisementHeader
                setOrder={setOrder}
                companyId={id}
                mode={mode}
              />
              <Col className={styles['ad__content']} span={24}>
                <AdvertisementContent order={order} ads={ads} mode={mode} />
              </Col>
            </Row>
          </Card>
        </Col>
      ) : (
        <NotFoundSection
          className={styles['ad--notFound']}
          title='آگهی‌های روزنامه رسمی'
        />
      )}
    </Row>
  )
}

export default AdvertisementCard
