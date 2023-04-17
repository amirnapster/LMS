// import { ArrowSideIcon } from 'assets/icons'
import { staticCustomersData } from 'utils/statics'
import cn from 'classnames'
// import Button from 'components/ui/Button'

import type { StaticComponentsProps } from 'containers/staticPage/interface'
import styles from './customers.module.scss'

const StaticPageCustomers = ({ service }: StaticComponentsProps) => {
  const customerItems = staticCustomersData[service]

  return service !== 'ads' ? (
    <div className={styles['customers']}>
      <div className={styles['customers--title']}>
        شرکت‌هایی که از این سرویس استفاده می‌کنند
      </div>
      <div
        className={cn(
          styles['customers__wrapper'],
          customerItems.length > 6 && styles['customers__wrapper--animate']
        )}
      >
        {customerItems.map(({ src, alt }) => (
          <div key={src} className={styles['customers__wrapper--logo']}>
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
      {/* <Button className={styles['customers--action']}>
        <span>همه مشتریان رسمیو</span>
        <ArrowSideIcon />
      </Button> */}
    </div>
  ) : null
}

export default StaticPageCustomers
