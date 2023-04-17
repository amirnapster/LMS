import { useIntl } from 'react-intl'
import { CompanySvgIcon, PersonSvgIcon, EyeSvgIcon } from 'assets/icons'
import { useGetLastSeenDataQuery } from 'libs/redux/services/lastSeen'
import Image from 'next/image'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'

import type { MostViewedProps } from 'containers/simpleSearch/interface'
import { GraphButton } from 'containers/simpleSearch/helper'
import styles from './topResult.module.scss'

const linkById = (entityId: number, title: string): string => {
  if (entityId > 10000000000) return `/company/${entityId}/${title}`
  return `/person/${entityId.toString(16)}/${title}`
}

export const MostViewed = ({ data, type }: MostViewedProps) => {
  const intl = useIntl()

  const isTypeCompany = type === 'companies'

  return (
    <div className={styles['mostViewed']}>
      <Row align='middle' className={styles['mostViewed__header']}>
        {isTypeCompany ? <CompanySvgIcon /> : <PersonSvgIcon />}
        <h2>{intl.formatMessage({ id: 'top.statistics.title' }, { type })}</h2>
      </Row>
      <Row direction='column' className={styles['mostViewed__table']}>
        {data?.slice(0, 5).map(({ id, pictureUrl, title }) => (
          <Row
            align='middle'
            justify='start'
            className={styles['mostViewed__table--row']}
            wrap
            key={id}
          >
            <Col xxs={24} md={10}>
              <Button
                href={linkById(id, title)}
                className={styles['mostViewed__table--btn']}
                ripple
              >
                <Row
                  align='middle'
                  gap={0}
                  className={styles['mostViewed__table--img']}
                >
                  <div
                    data-selector={isTypeCompany ? 'companyImg' : 'personImg'}
                  >
                    <Image
                      src={pictureUrl || '/svg/search/company-1.svg'}
                      layout='fill'
                    />
                  </div>
                  <p>{title}</p>
                </Row>
              </Button>
            </Col>
            <Col xxs={24} md={7} className={styles['mostViewed__table--col']}>
              {
                isTypeCompany ? (
                  <>
                    شناسه ملی: <span>{id}</span>
                  </>
                ) : null
                // <>
                //   آخرین سمت: <span>مدیر</span>
                // </>
              }
            </Col>
            <Col xxs={24} md={7} className={styles['mostViewed__table--graph']}>
              <GraphButton id={id} isTypeCompany={isTypeCompany} />
            </Col>
            {/* <Col xs={24} md={7} className={styles['mostViewed__table--col']}>
                {isTypeCompany ? (
                  <>
                    مدیرعامل فعلی: <span>خالد فخرالدینی</span>
                  </>
                ) : (
                  <>
                    محل صدور: <span>پاوه</span>
                  </>
                )}
              </Col> */}
          </Row>
        ))}
      </Row>
    </div>
  )
}

export const LastSeen = () => {
  const intl = useIntl()
  const { data } = useGetLastSeenDataQuery(null)

  const sortedData = data?.value?.slice(0, 10)

  return (
    <div className={styles['mostViewed']}>
      <div className={styles['mostViewed__header']}>
        <EyeSvgIcon />
        <h2>{intl.formatMessage({ id: 'simple.search.lastSeen' })}</h2>
      </div>
      <div className={styles['mostViewed__body']}>
        <div className={styles['mostViewed__body']}>
          <Row direction='column' className={styles['mostViewed__table']}>
            {sortedData?.map(({ entityId, id, title, picture }) => (
              <Row
                align='middle'
                justify='start'
                className={styles['mostViewed__table--row']}
                wrap
                key={id}
              >
                <Col xxs={24} md={10}>
                  <Button
                    href={linkById(Number(entityId), String(title))}
                    className={styles['mostViewed__table--btn']}
                    ripple
                  >
                    <Row
                      align='middle'
                      gap={0}
                      className={styles['mostViewed__table--img']}
                    >
                      <div
                        data-selector={
                          Number(entityId) > 10000000000
                            ? 'companyImg'
                            : 'personImg'
                        }
                      >
                        <Image
                          src={
                            picture || Number(entityId) > 10000000000
                              ? '/svg/search/company-1.svg'
                              : '/svg/search/person-1.svg'
                          }
                          layout='fill'
                        />
                      </div>
                      <p>{title}</p>
                    </Row>
                  </Button>
                </Col>
                <Col
                  xxs={24}
                  md={7}
                  className={styles['mostViewed__table--col']}
                >
                  {Number(entityId) > 10000000000 ? (
                    <>
                      شناسه ملی: <span>{entityId}</span>
                    </>
                  ) : (
                    <>
                      کد ملی: <span>{String(entityId).padStart(10, '0')}</span>
                    </>
                  )}
                </Col>
                <Col
                  xxs={24}
                  md={7}
                  className={styles['mostViewed__table--graph']}
                >
                  <GraphButton
                    id={entityId}
                    isTypeCompany={Number(entityId) > 10000000000}
                  />
                </Col>
              </Row>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}
