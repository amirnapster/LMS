import { useDispatch } from 'react-redux'
import { setVisible } from 'libs/redux/slices/requestConsultant'
import { PricingFaqIcon } from 'assets/icons'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import Container from 'components/container'
import cn from 'classnames'

import styles from './requestConsultant.module.scss'

interface Props {
  withinBox?: boolean
}

const RequestConsultant = ({ withinBox }: Props) => {
  const dispatch = useDispatch()
  const openRequestModal = () => dispatch(setVisible(true))

  return (
    <Container>
      <Row
        className={cn(
          styles['reqConsultant'],
          withinBox ? styles['reqConsultant--box'] : ''
        )}
        align='middle'
        justify='center'
        gap={withinBox ? 3 : 5}
        direction={withinBox ? 'column' : 'row'}
        wrap
      >
        {!withinBox ? (
          <>
            <Col md={24} lg={10} className='d-flex flex-column gap-2'>
              <span data-selector='title'>نیاز به اطلاعات بیشتری دارید؟</span>

              <span>
                اگر هنوز نیاز به اطلاعاتی در خصوص خرید اشتراک‌های رسمیو دارید یا
                می‌خواهید قبل از خرید از نحوه کارکرد سامانه اطلاع پیدا کنید، فرم
                زیر را پر کنید تا کارشناسان رسمیو با شما تماس بگیرند.
              </span>

              <Button
                btnType='primary'
                bgColor='white-gold-gradient'
                data-selector='action'
                color='black'
                size='large'
                onClick={openRequestModal}
                ripple
              >
                درخواست مشاوره
              </Button>
            </Col>
            <Col md={24} lg={10} data-selector='icon' className='text-center'>
              <img src={PricingFaqIcon} alt='support man' />
            </Col>
          </>
        ) : (
          <>
            <span data-selector='title'>چه کمکی از دست ما برمی‌آید؟</span>
            <span data-selector='description'>
              اگر هنوز نیاز به اطلاعاتی در خصوص خرید اشتراک‌های رسمیو دارید یا
              می‌خواهید قبل از خرید از نحوه کارکرد سامانه اطلاع پیدا کنید، در
              خدمت شما هستیم.
            </span>
            <Button
              btnType='primary'
              bgColor='white'
              data-selector='action'
              color='primary'
              size='large'
              onClick={openRequestModal}
              ripple
            >
              درخواست مشاوره
            </Button>
          </>
        )}
      </Row>
    </Container>
  )
}

RequestConsultant.defaultProps = {
  withinBox: false,
}

export default RequestConsultant
