import cn from 'classnames'
import Row from 'components/ui/Row'
import Button from 'components/ui/Button'

import styles from './cardCompanyImage.module.scss'

interface CardCompanyImageProps {
  className?: string
  src?: string
  title?: string
  moreInformation?: boolean
  type?: string
}

const CardCompanyImage = ({
  className,
  src,
  title,
  moreInformation,
  type,
}: CardCompanyImageProps) => (
  <Row className={cn(className, styles['card'])} direction='column' align='top'>
    {type && <div data-selector='card-badge'>{type}</div>}
    <img src={src} alt='title' data-selector='card-company-image' />
    <h4
      className={cn(
        styles['card__title'],
        moreInformation && styles['card__title--more']
      )}
    >
      {title?.substring(0, 40)}
    </h4>
    {moreInformation && <Button btnType='ghost'>اطلاعات بیشتر</Button>}
  </Row>
)

CardCompanyImage.defaultProps = {
  className: '',
  src: '',
  title: '',
  moreInformation: true,
  type: '',
}

export default CardCompanyImage
