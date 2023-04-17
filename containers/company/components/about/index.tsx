import { useSelector } from 'react-redux'
import jalaliday from 'jalaliday'
import dayjs from 'dayjs'
import Ellipsis from 'components/ui/Ellipsis'
import Tag from 'components/ui/Tag'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import SectionTitle from 'components/sectionTitle'
import Card from 'components/card'
import type { CompanyActiveItemsType } from 'utils/statics/companyStatics/interface'
import type { PresetColorType } from 'utils/interfaces'
import type { RootState } from 'libs/redux/store'
import CompanyWorkSpace from '../companyWorkSpace'

import styles from './about.module.scss'

dayjs.extend(jalaliday)

const AboutCompany = () => {
  const { details } = useSelector((state: RootState) => state.company)

  const data = details?.companyInfoDetail?.aboutCompany

  const dateDifference =
    dayjs().diff(
      details?.summary?.companySummary?.summary?.registrationDate as string,
      'day'
    ) / 30

  const renderBgColor = (key: CompanyActiveItemsType) => {
    if (key === 'واردکننده') return 'bright-turquoise'
    if (key === 'تولیدکننده') return 'jade'
    if (key === 'صادرکننده') return 'secondary'
    if (key === 'خدمت‌دهنده') return 'coral'
    return 'amethyst'
  }

  const isEllipsis =
    data?.companySummary?.summary && data?.companySummary?.summary?.length > 360

  return (
    <div className={styles['about']}>
      <SectionTitle
        title='معرفی کلی'
        tooltipTitle='بخش‌های علامت‌گذاری شده با این آیکن، شامل اطلاعات تکمیل شده توسط شرکت است.'
      />

      <Card hasSource={false}>
        <Row className={styles['about__row']} wrap>
          <Col
            className={styles['about__description']}
            xxs={24}
            md={
              !data?.companyImageDefine?.picture &&
              !data?.companyImageDefine?.videoLink
                ? 24
                : 12
            }
          >
            <span className={styles['about__description--title']}>
              درباره شرکت
            </span>

            <Ellipsis
              className={styles['about__description--content']}
              maxLines={isEllipsis ? 3 : 'auto'}
              showMore={isEllipsis}
            >
              {data?.companySummary?.summary}
            </Ellipsis>
          </Col>
          {(data?.companyImageDefine?.picture ||
            data?.companyImageDefine?.videoLink) && (
            <Col className={styles['about__video']} xxs={24} md={12}>
              {data?.companyImageDefine?.videoLink ? (
                <iframe
                  src={data.companyImageDefine.videoLink}
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  title='about-us'
                />
              ) : (
                <img
                  src={data?.companyImageDefine?.picture as string}
                  alt='about-company-bg'
                />
              )}
            </Col>
          )}
          <Col className={styles['about__active']} xxs={24} md={12}>
            <div className={styles['about__active--title']}>فعال به عنوان:</div>
            <Row gap={0} wrap>
              {data?.companySummary?.activityType?.map((item) => (
                <Tag
                  key={item}
                  data-selector='tag'
                  bgColor={
                    `${renderBgColor(
                      item as CompanyActiveItemsType
                    )}-100` as PresetColorType
                  }
                  textColor={
                    renderBgColor(item as CompanyActiveItemsType) ===
                    'bright-turquoise'
                      ? 'bright-turquoise-700'
                      : renderBgColor(item as CompanyActiveItemsType)
                  }
                >
                  {item}
                </Tag>
              ))}
            </Row>
          </Col>
          <Col className='d-flex justify-flex-end gap-2' xxs={24} md={12}>
            <Row className={styles['about__details']}>
              <Col span={12} className={styles['about__column']}>
                <span>تعداد کارکنان:</span>
                <div>{data?.companySummary?.personalCount}</div>
              </Col>
              <Col span={12} className={styles['about__column']}>
                <span>سن شرکت:</span>
                <Row gap={0}>
                  {Math.trunc(dateDifference / 12) !== 0 && (
                    <div>{Math.trunc(dateDifference / 12)} سال</div>
                  )}
                  {Math.trunc(dateDifference / 12) !== 0 &&
                    Math.trunc(dateDifference % 12) !== 0 && <div> و </div>}
                  {Math.trunc(dateDifference % 12) !== 0 && (
                    <div>{Math.trunc(dateDifference % 12)} ماه</div>
                  )}
                </Row>
              </Col>
            </Row>
          </Col>
          <CompanyWorkSpace />
        </Row>
      </Card>
    </div>
  )
}

export default AboutCompany
