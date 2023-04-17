import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import {
  PhoneIcon,
  PricingPlanCompany,
  PricingPlanOrganization,
} from 'assets/icons'
import { setVisible } from 'libs/redux/slices/requestConsultant'
import RequestConsultantModal from 'components/requestConsultantModal'
import Container from 'components/container'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import { scrollHandler } from 'utils/helpers/global'
import { CustomersItems } from 'utils/statics/OurCustomersStatics'
import styles from './customers.module.scss'

const Customers = () => {
  const dispatch = useDispatch()
  const boxRef = useRef<HTMLInputElement | null>(null)

  const [customersType, setCustomersType] = useState<
    'oragnizations' | 'companies'
  >('oragnizations')
  const [count, setCount] = useState<number>(18)

  const customerItems = CustomersItems[customersType]

  const switchTabHandler = (type: 'oragnizations' | 'companies') => {
    setCustomersType(type)
    setCount(18)
  }

  const showMoreHandler = () => {
    if (count === 18) setCount(customerItems.length)
    else {
      setCount(18)
      scrollHandler(0, boxRef?.current?.offsetTop as number)
    }
  }

  return (
    <Container className={styles['customer']}>
      <RequestConsultantModal />

      <Row justify='center' ref={boxRef}>
        <Col className={styles['customer__col']} lg={9} xxs={24}>
          <span> برخی از</span>
          <span data-selector='title'>مشتریان شناخته‌شده</span>
          <span>رسمیو به تفکیک اشتراک</span>
        </Col>
      </Row>
      <Row justify='center' className={styles['customer__subheader']}>
        <Button
          onClick={() => switchTabHandler('oragnizations')}
          data-selector={customersType === 'oragnizations' ? 'selected' : ''}
        >
          <PricingPlanOrganization viewBox='0 0 28 28' />
          <span>سازمانی</span>
        </Button>
        <Button
          onClick={() => switchTabHandler('companies')}
          data-selector={customersType === 'companies' ? 'selected' : ''}
        >
          <PricingPlanCompany viewBox='0 0 28 28' />
          <span>شرکتی</span>
        </Button>
      </Row>
      <Row
        className={styles['customer__row']}
        gutter={{ xxs: 8, xs: 8, sm: 8, md: 16, lg: 16 }}
        justify='center'
        wrap
      >
        {customerItems.slice(0, count).map((item) => (
          <Col xxs={12} xs={12} md={8} lg={8} key={item}>
            <div data-selector='card'>
              {customersType === 'oragnizations' ? (
                <div data-selecor='badge'>
                  <PricingPlanOrganization viewBox='0 0 28 28' />
                  سازمانی
                </div>
              ) : (
                <div data-selecor='badge'>
                  <PricingPlanCompany viewBox='0 0 28 28' />
                  شرکتی
                </div>
              )}
              <img src={`/image/customers/${item}.png`} alt={item} />
              <p>{item}</p>
            </div>
          </Col>
        ))}
      </Row>
      {count === 18 && (
        <Row justify='center'>
          <Col xxs={22} data-selector='show-more'>
            <Button onClick={showMoreHandler}>
              نمایش همه مشتریان
              <KeyboardArrowDown />
            </Button>
          </Col>
        </Row>
      )}
      <Row justify='center'>
        <Col xxs={22} data-selector='orange-box'>
          شما هم مشتری رسمیو شوید
          <Button
            btnType='primary'
            size='large'
            bgColor='white-blue-gradient'
            onClick={() => dispatch(setVisible(true))}
            data-selector='contactUs-request'
          >
            با ما تماس بگیرید
            <PhoneIcon data-selector='phone' />
          </Button>
        </Col>
      </Row>
      {count !== 18 && (
        <Row justify='center'>
          <Col xxs={22} data-selector='show-more'>
            <Button onClick={showMoreHandler}>
              بستن
              <KeyboardArrowUp />
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Customers
