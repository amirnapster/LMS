import { NotFound } from 'assets/icons'
import cn from 'classnames'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'

import type { NotFoundSectionProps } from './interface'
import styles from './notFoundSection.module.scss'

const NotFoundSection = ({ title, className }: NotFoundSectionProps) => (
  <Row className={cn(styles['notFound'], className)} direction='column'>
    <span className={styles['notFound--title']}>{title}</span>
    <Row direction='column' align='middle'>
      <img src={NotFound} alt='not-found' />
      <Row
        className={styles['notFound__action']}
        align='middle'
        justify='center'
        gap={0}
        wrap
      >
        <span>اطلاعات رسمی برای این بخش وجود ندارد!</span>
        <Button href='/sources' target='_blank' btnType='link' color='primary'>
          اطلاعات بیشتر
        </Button>
      </Row>
    </Row>
  </Row>
)

NotFoundSection.defaultProps = {
  className: '',
}

export default NotFoundSection
