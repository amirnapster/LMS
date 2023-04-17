import {
  CompanyPlaceholder,
  InfoIcon,
  MessageGreenIcon,
  PhoneNewIcon,
  VerifiedWhiteIcon,
  WhatsappIcon,
} from 'assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setMessageModalVisibility } from 'libs/redux/slices/company'
import Image from 'next/image'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Divider from 'components/ui/Divider'
import MessageCompany from 'components/messageCompany'
import Tooltip from 'components/ui/Tooltip/helper'
import cn from 'classnames'

import type { RootState } from 'libs/redux/store'
import styles from './callRequest.module.scss'

const CallRequest = ({
  sticky,
  hasSubTab,
}: {
  sticky?: boolean
  hasSubTab?: boolean
}) => {
  const dispatch = useDispatch()
  const { details, editMode, isAuth } = useSelector(
    (state: RootState) => state.company
  )
  const { isSearching } = useSelector((state: RootState) => state.navbar)

  const detailData = details?.companyInfoDetail?.aboutCompany?.companyHeader
  const data = details?.summary?.companySummary

  const openModal = () => dispatch(setMessageModalVisibility(true))
  if (!isAuth) return null
  return (
    <div
      className={cn(
        styles['callReq'],
        sticky ? styles['callReq__sticky'] : '',
        hasSubTab ? styles['callReq--hasSubTab'] : ''
      )}
      style={isSearching || editMode ? { display: 'none' } : {}}
    >
      <Row className={styles['callReq__row']} wrap>
        <Col xxs={4} sm={10} xl={24} className={styles['callReq__row--verify']}>
          <Tooltip
            placement='top'
            title='شرکت‌هایی که “تیک آبی” دریافت کرده‌اند، توسط رسمیو احراز هویت شده و امکان افزودن اطلاعات از جمله تصاویر معرفی شرکت، کارگاه، محصولات و همچنین امکان ارسال پیام و درخواست قیمت از سمت بازدیدکننده را دارند.'
            arrow
          >
            <Row className={styles['callReq__header']} gap={0}>
              <span>احراز هویت شده توسط رسمیو</span>
              <InfoIcon />
              <Row
                className={styles['callReq__header--badge']}
                justify='center'
                align='middle'
              >
                <VerifiedWhiteIcon />
              </Row>
            </Row>
          </Tooltip>
        </Col>
        <Col xxs={17} sm={14} xl={24} className={styles['callReq--title']}>
          <div data-selector='logo'>
            <Image
              src={detailData?.logo || CompanyPlaceholder}
              layout='fill'
              alt='company-logo'
            />
          </div>
          {detailData?.companyBrand}
        </Col>
      </Row>
      <Row
        className={styles['callReq__content']}
        gutter={{ xxs: 16, xs: 16, sm: 24, md: 24 }}
        wrap
      >
        <Col className={styles['callReq--divider--col']} xl={24}>
          <Divider className={styles['callReq--divider']} />
        </Col>
        <Col xxs={7} sm={12} md={10} xl={24} className={styles['callReq__tel']}>
          <Row gap={0}>
            {/* <PhoneNewIcon /> */}
            <Row className={styles['callReq__tel--wrapper']}>
              <div data-selector='phone'>{data?.communications?.tel}</div>
              {/* <div data-selector='available-time'>12 الی 19</div> */}
            </Row>
          </Row>
          <Row className={styles['callReq__tel--actions']}>
            <Button href={`tel:${data?.communications?.tel}`} ripple>
              <PhoneNewIcon />
            </Button>
            <Button
              href={`https://api.whatsapp.com/send?phone=+98${data?.communications?.mobile?.replace(
                '0',
                ''
              )}&text=سلام من از رسمیو پیام می‌دهم`}
              target='_blank'
              ripple
            >
              <img src={WhatsappIcon} alt='whatsapp' />
            </Button>
          </Row>
        </Col>
        <Col className={styles['callReq--divider--col']} xl={24}>
          <Divider className={styles['callReq--divider']} />
        </Col>
        <Col xxs={15} sm={10} md={7} xl={24}>
          <Button onClick={openModal} className={styles['callReq--btn']}>
            <MessageGreenIcon />
            <span>پیام به شرکت</span>
          </Button>
        </Col>
      </Row>

      {sticky && <MessageCompany />}
    </div>
  )
}

CallRequest.defaultProps = {
  sticky: false,
  hasSubTab: false,
}

export default CallRequest
