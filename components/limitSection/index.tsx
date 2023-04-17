import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { LimitImg } from 'assets/icons'
import { KeyboardArrowLeftOutlined } from '@mui/icons-material/'
import { setVisible } from 'libs/redux/slices/auth'
import cn from 'classnames'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'

import type { ILimitSectionProps } from './interface'
import styles from './limitSection.module.scss'

const LimitSectionComponent = ({
  title,
  subTitle,
  className,
  isMore,
}: ILimitSectionProps) => {
  const dispatch = useDispatch()
  const { packageType } = useSelector((state: RootState) => state.auth)

  return (
    <Row
      className={cn(styles['limit'], className)}
      direction='column'
      justify='center'
      align='middle'
    >
      <img src={LimitImg} alt='limit-vector' />
      <span className={styles['limit--title']}>{title}</span>
      <span className={styles['limit--subTitle']}>{subTitle}</span>

      {packageType ? (
        <Button
          className={styles['limit--btn']}
          href='/pricing'
          target='_blank'
          btnType='primary'
          size='medium'
          bgColor='white-blue-gradient'
        >
          <span>ارتقا اشتراک</span>
          <KeyboardArrowLeftOutlined />
        </Button>
      ) : (
        <Button
          className={styles['limit--btn']}
          href='/pricing'
          target='_blank'
          btnType='primary'
          size='medium'
          bgColor='white-blue-gradient'
        >
          <span>خرید اشتراک</span>
          <KeyboardArrowLeftOutlined />
        </Button>
      )}

      {!packageType && (
        <Row className={styles['limit--action']} gap={0}>
          <span>اشتراک دارید؟</span>
          <Button
            onClick={() => dispatch(setVisible({ visible: true, mode: 'otp' }))}
          >
            وارد شوید
          </Button>
        </Row>
      )}

      {isMore && (
        <Button
          className={styles['limit--more']}
          btnType='ghost'
          color='simple-white'
          href='/about-advanced-search/'
          target='_blank'
        >
          اطلاعات بیشتر در مورد جستجوی پیشرفته
        </Button>
      )}
    </Row>
  )
}

LimitSectionComponent.defaultProps = {
  className: '',
  isMore: false,
  subTitle: '',
}

export default LimitSectionComponent
