import { useIntl } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { GraphButton } from 'containers/simpleSearch/helper'
import { toggleNavbarSearch } from 'libs/redux/slices/navbar'
import Image from 'next/image'
import Link from 'next/link'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'

import type { RootState } from 'libs/redux/store'
import type { SearchComponentProps } from 'containers/simpleSearch/interface'
import styles from '../searchResult.module.scss'

const Companies = ({ data }: SearchComponentProps) => {
  const { packageType } = useSelector((state: RootState) => state.auth)
  const intl = useIntl()
  const dispatch = useDispatch()
  const { details } = useSelector((state: RootState) => state.company)
  const summary = details?.summary?.companySummary
  const { id, titleFa, link, ceo, entityId, pictureUrl } = data

  const isCurrent = link?.split('/').includes(String(summary?.id))

  const closeSearch = () => {
    const inputs = document.querySelectorAll('#navbar-search')
    inputs?.forEach((input) => {
      // eslint-disable-next-line
      ;(input as HTMLInputElement).value = ''
    })
    dispatch(toggleNavbarSearch(false))
  }

  return (
    <Row className={styles['topBoxContainer__body--company']} gutter={16}>
      <Col md={6} xxs={24} style={{ cursor: 'pointer' }} onClick={closeSearch}>
        <Link href={String(link)} key={id}>
          <a
            href={String(link)}
            style={{ pointerEvents: isCurrent ? 'none' : 'auto' }}
          >
            <div data-selector='title'>
              <div data-selector='company'>
                <Image
                  src={pictureUrl || '/svg/search/company-1.svg'}
                  width={35}
                  height={35}
                />
              </div>
              <span>{titleFa}</span>
            </div>
          </a>
        </Link>
      </Col>
      <Col md={6} xxs={24} data-selector='entity'>
        {packageType && (
          <>
            شناسه ملی: <span>{entityId}</span>
          </>
        )}
      </Col>
      <Col md={6} xxs={24} data-selector='owner'>
        مدیرعامل فعلی:{' '}
        <span>
          {ceo ||
            intl.formatMessage({
              id: 'unknown',
            })}
        </span>
      </Col>
      <Col data-selector='graph-btn-wrraper' md={6} xxs={24}>
        <GraphButton id={id} isTypeCompany />
      </Col>
    </Row>
  )
}

export default Companies
