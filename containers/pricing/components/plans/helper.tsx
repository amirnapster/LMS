import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
import { Check } from '@mui/icons-material'
import { Box } from '@mui/material'
import { setVisible } from 'libs/redux/slices/auth'
import { setVisible as setVisibleSelectedPlan } from 'libs/redux/slices/selectedPlan'
import { setCount, setPlan } from 'libs/redux/slices/pricing'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import Slider from 'components/ui/Slider'
import Tag from 'components/ui/Tag'
import MyContext from 'utils/context'
import jalaliday from 'jalaliday'
import dayjs from 'dayjs'
import cn from 'classnames'

import type { RootState } from 'libs/redux/store'
import type { IBtnAttribute, PlanItemProps } from 'containers/pricing/interface'
import styles from './plans.module.scss'

dayjs.extend(jalaliday)

const PlanItem = ({ plan }: PlanItemProps) => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const { accessToken, packageType } = useSelector(
    (state: RootState) => state.auth
  )
  const { campaign } = useContext(MyContext)

  const {
    svg,
    title,
    description,
    price,
    pricing,
    yearly,
    users,
    step,
    btnText,
    preFactor,
    attributes,
    customers,
    link,
    isEnabled,
    isUpgrade,
    isExtend,
    validUntil,
    id,
  } = plan
  const [selectedUser, setSelectedUser] = useState<number>(id === 13 ? 50 : 1)

  const renderBtnText = () => {
    if (isUpgrade) return 'ارتقا اشتراک'
    if (isExtend) return 'تمدید اشتراک'
    return btnText
  }

  const btnAttr = (): IBtnAttribute => {
    if (isUpgrade || isExtend) {
      return {
        'data-selector': 'upgrade-btn',
        btnType: 'primary',
        bgColor: 'white-red-gradient',
        color: 'black',
      }
    }
    return {
      'data-selector': 'regular-btn',
      btnType: 'primary',
      bgColor: 'white-gold-gradient',
      color: 'black',
    }
  }

  const showOriginalPrice = () => {
    if (pricing) {
      if (title === 'organization' && selectedUser >= 50)
        return '500 میلیون تومان'
      return `${
        (title === 'organization'
          ? (pricing[selectedUser / 10 - 1].originalPrice as number)
          : (pricing[selectedUser - 1].originalPrice as number)) / 10000000
      } میلیون تومان`
    }
    return price
  }
  const showPrice = () => {
    if (pricing)
      return `${
        (title === 'organization'
          ? (pricing[selectedUser / 10 - 1]?.price as number)
          : (pricing[selectedUser - 1]?.price as number)) / 10000000
      } میلیون تومان`
    return price
  }
  const discountRate = () => {
    if (pricing) {
      const index =
        (title === 'organization' ? selectedUser / 10 : selectedUser) - 1
      const priceNumber = pricing[index]?.price as number
      const originalPriceNumber = pricing[index]?.originalPrice as number

      if (title === 'organization' && selectedUser >= 50)
        return `${(100 - priceNumber / 50000000).toFixed(0)}%`
      return `${(100 - (priceNumber * 100) / originalPriceNumber).toFixed(0)}%`
    }
    return ''
  }

  const openLoginModal = () =>
    dispatch(setVisible({ visible: true, mode: 'signIn' }))

  const checkLoginStatus = () => {
    if (accessToken && title === 'free' && !packageType) {
      return (
        <Button
          btnType='secondary'
          color='gray-300'
          size='large'
          data-selector='disabled-btn'
          disabled
        >
          اشتراک فعلی شما
        </Button>
      )
    }
    return null
    //   if (accessToken && title === 'free') return null
    //   return (
    //     <Button
    //       btnType='primary'
    //       bgColor='white-gold-gradient'
    //       color='black'
    //       size='large'
    //       data-selector='free-btn'
    //       onClick={openLoginModal}
    //       ripple
    //     >
    //       {btnText}
    //       <ArrowBackRounded />
    //     </Button>
    //   )
  }

  const requestInvoice = () => {
    if (!accessToken) {
      openLoginModal()
      return
    }
    dispatch(setVisibleSelectedPlan(true))
    dispatch(setPlan(String(id)))
    dispatch(setCount(selectedUser))
  }

  const payAction = () => {
    if (!accessToken) openLoginModal()
  }

  return (
    <Col
      xxs={24}
      md={12}
      xl={6}
      className={styles['plan__box']}
      data-selector={
        (campaign &&
          (title === 'organization' || title === 'pricing.comapny')) ||
        title === 'pricing.company'
          ? 'current-plan'
          : 'plan'
      }
    >
      {(campaign &&
        (title === 'organization' || title === 'pricing.comapny')) ||
      title === 'pricing.company' ? (
        <div
          className={cn(
            styles['plan__box--cover'],
            campaign ? styles['plan__box--campaign'] : ''
          )}
        >
          <p>
            {campaign
              ? 'تخفیف ویژه'
              : intl.formatMessage({ id: 'pricing.popular' })}
          </p>
        </div>
      ) : null}
      <div className={styles['plan__box--main']}>
        <Row data-selector='header' direction='column'>
          <Row gap={0}>
            {svg}
            <h2>{intl.formatMessage({ id: title })}</h2>
          </Row>
          <p>{description}</p>
        </Row>
        <Row direction='column'>
          <div className={styles['plan__box--body']}>
            {showOriginalPrice() !== showPrice() && (
              <>
                <span data-selector='discount'>{showOriginalPrice()}</span>
                <Tag
                  bgColor='secondary'
                  textColor='simple-white'
                  className='mr-1'
                >
                  {discountRate()}
                </Tag>
              </>
            )}
            <h2>{showPrice()}</h2>
            {yearly && <span>/{intl.formatMessage({ id: 'yearly' })}</span>}
          </div>
          <Row
            direction='column'
            align='middle'
            justify='center'
            className={cn(
              styles['plan__box--slider'],
              campaign ? styles['plan__box--slider--campaign'] : ''
            )}
          >
            {Array.isArray(users) && (
              <Box sx={{ width: 280 }}>
                <Slider
                  aria-label='rasmio slider'
                  defaultValue={id === 13 ? 50 : 1}
                  onChange={(e, value) => setSelectedUser(Number(value))}
                  step={step}
                  min={users[0]}
                  max={users[1]}
                  marks
                />
              </Box>
            )}
            {selectedUser === 50 ? (
              <p> {intl.formatMessage({ id: 'unlimited' })}</p>
            ) : (
              <p>
                {selectedUser} {intl.formatMessage({ id: 'user' })}
              </p>
            )}
          </Row>
          {validUntil && isEnabled && isExtend && (
            <Row justify='center' align='middle' data-selector='until-date'>
              <p>
                تاریخ پایان اشتراک:{' '}
                {dayjs(validUntil)
                  .calendar('jalali')
                  .locale('fa')
                  .format('YYYY/MM/DD')}
              </p>
            </Row>
          )}
          <Row
            className={styles['plan__box--buttons']}
            direction='column'
            justify='space-between'
          >
            {preFactor ? (
              <>
                <Button
                  href={
                    accessToken && isEnabled
                      ? `${link}&count=${selectedUser}`
                      : undefined
                  }
                  onClick={payAction}
                  disabled={!isEnabled}
                  size='large'
                  id={`buy-${id}`}
                  ripple
                  {...btnAttr()}
                >
                  {renderBtnText()}
                </Button>
                {isEnabled && (
                  <Button
                    btnType='secondary'
                    color='primary'
                    size='large'
                    data-selector='pre-btn'
                    onClick={requestInvoice}
                    id={`pre-${id}`}
                    ripple
                  >
                    درخواست پیش فاکتور
                  </Button>
                )}
              </>
            ) : (
              checkLoginStatus()
            )}
          </Row>
        </Row>
        <Row className={styles['plan__box--attributes']} direction='column'>
          {attributes.map((item) => (
            <Row gap={0} key={item}>
              <Check />
              <p>{item}</p>
            </Row>
          ))}
        </Row>
        {customers?.length > 0 && (
          <div className={styles['plan__box--customers']}>
            <h2>مشتریان این اشتراک</h2>
            <Row justify='space-between'>
              {customers.map(({ customerName, url }) => (
                <div data-selector='planBox-customer' key={customerName}>
                  <img src={url} alt={customerName} />
                </div>
              ))}
            </Row>
          </div>
        )}
      </div>
    </Col>
  )
}

export default PlanItem
