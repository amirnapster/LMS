import { useSelector } from 'react-redux'
import { DirectIcon, PhoneIcon } from 'assets/icons'
import Image from 'next/image'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import NotFoundSection from 'components/notFoundSection'
import Skeleton from 'components/skeleton'
import Card from 'components/card'

import { companyWebsiteItems } from 'utils/statics/companyStatics'
import type { ICompanyWebsiteItems } from 'utils/statics/companyStatics/interface'
import type { RootState } from 'libs/redux/store'
import styles from './officialSites.module.scss'

const OfficialSites = () => {
  const { details } = useSelector((state: RootState) => state.company)

  const data = details?.products?.companyProductAndService?.trustedWebSites

  return (
    <Skeleton
      className={styles['site--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {data?.length ? (
        <Card
          className={styles['site--card']}
          hasSource={false}
          title='سایت های رسمی شرکت'
        >
          <div className={styles['site']}>
            {data?.map((item) => (
              <div className={styles['site--wrapper']} key={item.id}>
                <div className={styles['site--title']}>{item.title}</div>

                <Row>
                  <div data-selector='site-logo'>
                    <Image
                      // src={item.logo || '/image/company/company-default.png'}
                      src='/image/company/company-default.png'
                      layout='fill'
                    />
                  </div>

                  <Row className={styles['site__row']} gutter={{ xl: 32 }} wrap>
                    <Col className='d-flex' xxs={24} sm={12} lg={5} xl={6}>
                      <Row
                        className={styles['site__column']}
                        direction='column'
                        justify='space-between'
                      >
                        <span>آدرس سایت</span>
                        {item.url ? (
                          <Row align='middle' gap={0}>
                            <span>
                              {new URL(item.url)?.host?.replace('www.', '')}
                            </span>
                            <Button
                              className={styles['site__column--address']}
                              href={item.url as string}
                              ripple
                            >
                              <DirectIcon />
                            </Button>
                          </Row>
                        ) : (
                          <div>_</div>
                        )}
                      </Row>
                    </Col>

                    {companyWebsiteItems.map(({ type, title, emptyState }) => (
                      <Col
                        key={title}
                        className={styles['site__column']}
                        xxs={24}
                        sm={12}
                        lg={5}
                        xl={6}
                      >
                        <span>{title}</span>
                        {type === 'supportTel' && item['supportTel'] ? (
                          <Row align='middle' gap={0}>
                            <span>{item.supportTel}</span>
                            <Button
                              className={styles['site__column--contact']}
                              href={`tel:${item.supportTel}`}
                            >
                              {item.supportTel ? (
                                <PhoneIcon viewBox='0 0 32 32' />
                              ) : (
                                <div>_</div>
                              )}
                            </Button>
                          </Row>
                        ) : (
                          <div
                            className={styles['site__column--notRegistered']}
                          >
                            {item[type as keyof ICompanyWebsiteItems['type']] ||
                              emptyState}
                          </div>
                        )}
                      </Col>
                    ))}
                  </Row>
                </Row>
              </div>
            ))}
          </div>
        </Card>
      ) : (
        <NotFoundSection
          className={styles['site--notFound']}
          title='سایت های رسمی شرکت'
        />
      )}
    </Skeleton>
  )
}

export default OfficialSites
