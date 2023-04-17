import { useIntl } from 'react-intl'
import Image from 'next/image'
import Link from 'next/link'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'

import { GraphButton } from 'containers/simpleSearch/helper'
import type { SearchComponentProps } from 'containers/simpleSearch/interface'
import styles from '../searchResult.module.scss'

const Persons = ({ data }: SearchComponentProps) => {
  const intl = useIntl()
  const { id, titleFa, companyCount, placeOfIssue, link } = data

  return (
    <Row className={styles['topBoxContainer__body--company']} gutter={16}>
      <Col md={6} xxs={24}>
        <Link href={String(link)} key={id}>
          <a href={String(link)} data-selector='title-box'>
            <div data-selector='title'>
              <div data-selector='person'>
                <Image src='/svg/search/person-1.svg' width={20} height={20} />
              </div>
              <p>{titleFa}</p>
            </div>
          </a>
        </Link>
      </Col>
      <Col md={6} xxs={24} data-selector='entity'>
        تعداد شرکت‌ها: <span>{companyCount}</span>
      </Col>
      <Col md={6} xxs={24} data-selector='owner'>
        محل صدور:{' '}
        <span>
          {placeOfIssue ||
            intl.formatMessage({
              id: 'unknown',
            })}
        </span>
      </Col>
      <Col data-selector='graph-btn-wrraper' md={6} xxs={24}>
        <GraphButton id={id} isTypeCompany={false} />
      </Col>
    </Row>
  )
}

export default Persons
