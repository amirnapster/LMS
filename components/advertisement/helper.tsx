import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { LinkOutlined } from '@mui/icons-material'
import { ExcelIcon, LockSvg, PrintIcon, ShareIcon } from 'assets/icons'
import { useLazyGetV3CompaniesGetExcelFileQuery } from 'libs/redux/services/allv3'
import { useLazyGetV3PersonGetExcelFileQuery } from 'libs/redux/services/v3'
import { setSocialModalVisibility } from 'libs/redux/slices/company'
import { copyToClipBoard } from 'utils/helpers/global'
import { LimitTooltip } from 'components/ui/Tooltip/helper'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import Select from 'components/ui/Select'
import Divider from 'components/ui/Divider'
import ActionBtn from 'components/actionBtn'
import LimitTooltipContent from 'components/limitTooltip'
import Copy from 'components/copy'

import SvgSprite from 'assets/sprite'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

import type {
  AdContentProps,
  AdHeaderProps,
  AdsSortOrderType,
} from 'containers/company/interface'
import type { RootState } from 'libs/redux/store'
import styles from './advertisementCard.module.scss'

dayjs.extend(jalaliday)

export const AdvertisementHeader = ({
  companyId,
  setOrder,
  mode,
}: AdHeaderProps) => {
  const [getExcel] =
    mode === 'company'
      ? useLazyGetV3CompaniesGetExcelFileQuery()
      : useLazyGetV3PersonGetExcelFileQuery()
  const { packageType, accessToken } = useSelector(
    (state: RootState) => state.auth
  )
  const getExcelFile = () => getExcel({ companyId })
  const [openPrintTooltip, setOpenPrintTooltip] = useState<boolean | undefined>(
    false
  )
  const [openExcelTooltip, setOpenExcelTooltip] = useState<boolean | undefined>(
    false
  )
  const printAds = () => {
    const encodedId = companyId?.toString(16)
    window.open(`http://old.rasm.io/News/Company/${encodedId}`)
  }

  const handleSort = (event: FormEvent<HTMLSelectElement>) =>
    setOrder(event.currentTarget.value as AdsSortOrderType)

  const handlePrintTooltipClose = () => setOpenPrintTooltip(false)

  const handlePrintTooltipOpen = () => setOpenPrintTooltip(true)

  const handleExcelTooltipClose = () => setOpenExcelTooltip(false)

  const handleExcelTooltipOpen = () => setOpenExcelTooltip(true)

  return (
    <>
      {/* <Col className={styles['ad__search']} span={24}>
        <Input
          suffix={<SearchOutlined />}
          className={styles['ad__search--input']}
          placeholder='جستجو در آگهی‌های این شرکت؛ کلمه موردنظر خود را بنویسید'
        />
      </Col> */}
      <Col xxs={24}>
        <Row
          data-selector='ad-wrapper'
          align='middle'
          justify='space-between'
          wrap
        >
          <Col className={styles['ad__sort']} flex='none'>
            <span>مرتب سازی براساس:</span>
            <Select
              onChange={handleSort}
              className={styles['ad__sort--select']}
            >
              <option value='new'>جدیدترین</option>
              <option value='old'>قدیمی‌ترین</option>
            </Select>
          </Col>
          <Col className={styles['ad__actions']} flex='none'>
            {packageType && packageType > 11 ? (
              <Button btnType='secondary' onClick={getExcelFile} size='medium'>
                خروجی اکسل
                <ExcelIcon />
              </Button>
            ) : (
              <LimitTooltip
                placement='bottom'
                title={<LimitTooltipContent isLogin={accessToken} />}
                arrow
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleExcelTooltipClose}
                open={openExcelTooltip}
                disableFocusListener
                disableTouchListener
              >
                <Button
                  size='medium'
                  data-selector='follow-lock-btn'
                  onClick={handleExcelTooltipOpen}
                  onMouseEnter={handleExcelTooltipOpen}
                >
                  <img src={LockSvg} alt='' />
                  خروجی اکسل
                </Button>
              </LimitTooltip>
            )}

            {packageType ? (
              <Button btnType='secondary' size='medium' onClick={printAds}>
                چاپ همه
                <PrintIcon />
              </Button>
            ) : (
              <LimitTooltip
                placement='bottom'
                title={<LimitTooltipContent isLogin={accessToken} />}
                arrow
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handlePrintTooltipClose}
                open={openPrintTooltip}
                disableFocusListener
                disableTouchListener
              >
                <Button
                  size='medium'
                  data-selector='follow-lock-btn'
                  onClick={handlePrintTooltipOpen}
                  onMouseEnter={handlePrintTooltipOpen}
                >
                  <img src={LockSvg} alt='' />
                  چاپ همه
                </Button>
              </LimitTooltip>
            )}
          </Col>
        </Row>
      </Col>
    </>
  )
}

AdvertisementHeader.defaultProps = {
  companyId: undefined,
}

export const AdvertisementContent = ({ ads, order, mode }: AdContentProps) => {
  const dispatch = useDispatch()
  const { asPath } = useRouter()
  const sortedAdsKey = Object.keys(ads ?? []).sort((a, b) => {
    if (order === 'old') return parseInt(a, 10) - parseInt(b, 10)
    return parseInt(b, 10) - parseInt(a, 10)
  })

  const printAd = (id?: number) =>
    window.open(`https://old.rasm.io/News/Print/${id}`)

  const copyLink = () => copyToClipBoard(`https://rasm.io${asPath}`)

  const openSocialModal = () => dispatch(setSocialModalVisibility(true))

  const returnJalaliDate = (date?: string) =>
    date ? dayjs(date).calendar('jalali').format('YYYY/MM/DD') : ''

  return (
    <>
      {sortedAdsKey.map((key) => {
        const data = ads?.[key]

        return (
          <Row className={styles['ad__content__row']} key={key} wrap>
            <Col data-selector='year' span={24}>
              {key}
              <div data-selector='timeline' />
            </Col>
            <Col data-selector='year-content' span={24}>
              {data?.map(
                (
                  {
                    id,
                    title,
                    newsLetterDate,
                    newsPaperDate,
                    description,
                    companyTitle,
                    companyId,
                  },
                  index
                ) => (
                  <Row
                    className={styles['ad__content__row--item']}
                    key={id}
                    wrap
                  >
                    <Col span={24}>
                      <Row align='middle' data-selector='ad-header'>
                        <SvgSprite id='newspaper-outlined' />{' '}
                        <span>روزنامه رسمی کشور</span>
                      </Row>
                    </Col>
                    <Col data-selector='link' span={24}>
                      <Button href={`/News/Details/${id}/`} target='_blank'>
                        <span>{title}</span>
                      </Button>
                    </Col>
                    <Col span={24}>
                      <Row className={styles['ad__content__row--date']} wrap>
                        {mode === 'person' && (
                          <Col xxs={24} data-selector='company-link'>
                            <Button
                              href={`/company/${companyId}/`}
                              target='_blank'
                            >
                              <img
                                src='/svg/search/company-1.svg'
                                alt={companyTitle as string}
                              />
                              <span>{companyTitle}</span>
                            </Button>
                          </Col>
                        )}
                        <Col xxs={24}>
                          تاریخ نامه ثبت:{' '}
                          {returnJalaliDate(newsLetterDate || '')}
                        </Col>
                        <Col xxs={24}>
                          تاریخ چاپ روزنامه رسمی:{' '}
                          {returnJalaliDate(newsPaperDate || '')}
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      data-selector='description'
                      span={24}
                      dangerouslySetInnerHTML={{
                        __html: description as string,
                      }}
                    />
                    <Col xxs={24}>
                      <Row
                        className={styles['ad__content__row--actions']}
                        align='middle'
                        wrap
                      >
                        <Col flex='none'>
                          {/* <Button
                            btnType='ghost'
                            color='primary'
                            data-selector='edit'
                          >
                            <span>ویرایش</span>
                            <PenOutlined viewBox='0 0 24 24' />
                          </Button> */}
                        </Col>
                        <Col data-selector='share' flex='none'>
                          <Copy text={description as string} />
                          <ActionBtn
                            onClick={openSocialModal}
                            icon={<ShareIcon viewBox='0 0 18 20' />}
                            title='اشتراک گذاری'
                          />
                          <ActionBtn
                            onClick={copyLink}
                            icon={<LinkOutlined />}
                            title='لینک'
                          />
                          <ActionBtn
                            onClick={() => printAd(id)}
                            icon={<PrintIcon viewBox='0 0 20 18' />}
                            title='چاپ'
                          />
                        </Col>
                      </Row>
                    </Col>
                    {data.length - index !== 1 && (
                      <Col span={24}>
                        <Divider
                          className={styles['ad__content__row--divider']}
                        />
                      </Col>
                    )}
                  </Row>
                )
              )}
            </Col>
          </Row>
        )
      })}
    </>
  )
}
