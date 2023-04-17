import Link from 'next/link'
import Image from 'next/image'
import Ellipsis from 'components/ui/Ellipsis'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'

import type { SearchComponentProps } from 'containers/simpleSearch/interface'
import styles from '../searchResult.module.scss'

const News = ({ data }: SearchComponentProps) => {
  const { id, description, owner, link, ownerLink } = data

  return (
    <Row
      className={styles['topBoxContainer__body--items']}
      key={id}
      gutter={16}
    >
      <Col md={14} xxs={24}>
        <Link href={String(link)}>
          <a href={String(link)} className='w-75'>
            <div className='w-100' data-selector='title'>
              <div data-selector='company'>
                <Image src='/svg/search/news-1.svg' width={20} height={20} />
              </div>
              <span>
                <Ellipsis maxLines={3}>
                  {description
                    ?.replaceAll('<br />', ' ')
                    .replaceAll('<br>', '')}
                </Ellipsis>
              </span>
            </div>
          </a>
        </Link>
      </Col>
      <Col md={10} xxs={24}>
        {owner === '(نياز به تکميل)' ? (
          <div data-selector='owner'>
            نام شرکت‌: <span>-</span>
          </div>
        ) : (
          <div data-selector='owner'>
            نام شرکت‌:{' '}
            <Link href={String(ownerLink)}>
              <a href={String(ownerLink)}>
                <span>{owner}</span>
              </a>
            </Link>
          </div>
        )}
      </Col>
    </Row>
  )
}

export default News
