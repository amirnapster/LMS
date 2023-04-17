import { useIntl } from 'react-intl'
import Image from 'next/image'

import styles from '../searchResult.module.scss'

const Lists = () => {
  const intl = useIntl()

  return (
    <div className={styles['topBoxContainer__body--items']}>
      <div data-selector='title'>
        <div data-selector='company'>
          <Image src='/svg/search/list-1.svg' width={20} height={20} />
        </div>
        <p>خالد فخرالدینی</p>
      </div>
      <div data-selector='entity'>
        نوع لیست:{' '}
        {Math.floor(Math.random() * 5000) % 2 === 0 ? (
          <span data-selector='companyBadge'>
            {intl.formatMessage({
              id: 'companies',
            })}
          </span>
        ) : (
          <span data-selector='personBadge'>
            {intl.formatMessage({
              id: 'persons',
            })}
          </span>
        )}
      </div>
      <div data-selector='owner'>
        تعداد: <span>2653</span>
      </div>
    </div>
  )
}

export default Lists
