import { useSelector } from 'react-redux'
import { CompanyDefaultListImg } from 'assets/icons'
import NotFoundSection from 'components/notFoundSection'
import SectionTitle from 'components/sectionTitle'
import Ellipsis from 'components/ui/Ellipsis'
import Skeleton from 'components/skeleton'
import Button from 'components/ui/Button'
import Card from 'components/card'
import Row from 'components/ui/Row'

import type { FavoriteListDto } from 'libs/redux/services/v3'
import type { RootState } from 'libs/redux/store'
import styles from './list.module.scss'

const CompanyListComponent = () => {
  const { details } = useSelector((state: RootState) => state.company)

  const data = details?.lists as FavoriteListDto[]

  const jsonHandler = (json: string | null) => {
    try {
      if (json && json !== '') return JSON.parse(json)
    } catch {
      return null
    }
  }

  const picRenderer = (length: number) => {
    if (length < 4) return Array(4 - length).fill(0)
  }

  const isEllipsis = data?.length > 3

  return (
    <Row className={styles['list']} direction='column' align='top' id='lists'>
      <SectionTitle title='لیست‌های این شرکت' />

      <Skeleton data={details} width='100%' height='172px' variant='rounded'>
        {data?.length ? (
          <Card
            className={styles['list__card']}
            title='لیست‌هایی که این شرکت در آن‌ها وجود دارد'
            hasSource={false}
          >
            <Ellipsis
              maxLines={isEllipsis ? 10 : 'auto'}
              lineHeight={2.2}
              showMore={isEllipsis}
            >
              {data?.map((item) => (
                <Row className={styles['list__item']} align='middle'>
                  <Button
                    className={styles['list__pics']}
                    href={`/list/c/${item.id}`}
                    target='_blank'
                  >
                    {jsonHandler(item.detailsCache as string)
                      ?.TopCompaniesPictures?.slice(0, 4)
                      .map((pic: string) => (
                        <img src={pic || CompanyDefaultListImg} alt='logo' />
                      ))}

                    {picRenderer(
                      jsonHandler(item.detailsCache as string)
                        ?.TopCompaniesPictures.length
                    )?.map(() => (
                      <img
                        src={CompanyDefaultListImg}
                        data-selector='comapny-default'
                        alt='logo'
                      />
                    ))}
                  </Button>

                  <Row
                    className={styles['list__item--details']}
                    direction='column'
                    align='top'
                  >
                    <Button
                      href={`/list/c/${item.id}`}
                      target='_blank'
                      data-selector='title'
                    >
                      <span>{item?.title}</span>
                    </Button>

                    <Row className={styles['list__row']} wrap>
                      <Row>
                        <span data-selector='item-title'>تعداد شرکت‌ها:</span>
                        <span data-selector='item-content'>
                          {
                            jsonHandler(item.detailsCache as string)
                              .CompaniesCount
                          }
                          <span>شرکت</span>
                        </span>
                      </Row>

                      <Row>
                        <span data-selector='item-title'>
                          نوع اکثر شرکت‌ها:
                        </span>
                        <span data-selector='item-content'>
                          {
                            jsonHandler(item.detailsCache as string)
                              .RegistrationTypeOfMost
                          }
                        </span>
                      </Row>
                    </Row>
                  </Row>
                </Row>
              ))}
            </Ellipsis>
          </Card>
        ) : (
          <NotFoundSection
            className={styles['list--notFound']}
            title='لیست‌هایی که این شرکت در آن‌ها وجود دارد'
          />
        )}
      </Skeleton>
    </Row>
  )
}

export default CompanyListComponent
