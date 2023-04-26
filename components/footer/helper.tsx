import { useRef } from 'react'
import { useIntl } from 'react-intl'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { ExpandMore } from '@mui/icons-material'
// import { ClickableIcon, FooterLogo, GoogleIcon } from 'assets/icons'
import { closePanel } from 'utils/helpers/global'
import { setVisible } from 'libs/redux/slices/auth'
import { notify } from 'utils/notification'
import { useAddToNewsletterMutation } from 'libs/redux/services/auth'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Collapse from 'components/ui/Collapse'
import Panel from 'components/ui/Panel'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import Tag from 'components/ui/Tag'
import AuthHoc from 'components/hoc/auth'

import {
  footerSocialItems,
  footerItems,
  footerInfoItems,
} from 'utils/statics/footerStatics'
import type { IFooterLinks } from 'utils/statics/footerStatics/interface'
import styles from './footer.module.scss'

const FooterLinks = () => {
  const intl = useIntl()

  return (
    <Row justify='space-between' data-selector='link' wrap>
      {Object.keys(footerItems).map((key) => (
        <Col
          key={key}
          xxs={key === 'services' ? 18 : 12}
          md={key === 'services' ? 10 : 7}
          lg={8}
          xl={key === 'services' ? 10 : 7}
          className='d-flex justify-flex-start p-1'
        >
          <ul className={styles['footer__box--links']}>
            {footerItems[key as keyof IFooterLinks].map(
              ({ text, route, target, tag }) => (
                <li key={text}>
                  {route ? (
                    <Button href={route} target={target} color='white'>
                      {intl.formatMessage({ id: text })}
                      {tag && (
                        <Tag data-selector='link-tag'>
                          {intl.formatMessage({ id: tag })}
                        </Tag>
                      )}
                    </Button>
                  ) : (
                    intl.formatMessage({ id: text })
                  )}
                </li>
              )
            )}
          </ul>
        </Col>
      ))}
    </Row>
  )
}

const FooterSocials = () => (
  <Row
    align='middle'
    className={styles['footer__box--social']}
    gutter={{ lg: 8, md: 16 }}
  >
    {footerSocialItems.map(({ label, link, icon }) => (
      <Col key={link}>
        <Button
          href={link}
          target='_blank'
          aria-label={label}
          rel='noreferrer noopener'
          btnType='primary'
          bgColor='white'
          ripple
        >
          {icon}
        </Button>
      </Col>
    ))}
  </Row>
)

// const FooterDownloadable = () => {
//   const intl = useIntl()
//   const link = {
//     href: '',
//     rel: 'noreferrer noopener',
//   }

//   return (
//     <Row className={styles['footer__box--extension']} wrap>
//       <Button
//         target='_blank'
//         btnType='secondary'
//         color='white'
//         {...link}
//         ripple
//       >
//         {/* <img src={GoogleIcon} alt='google-icon' /> */}
//         <div>{intl.formatMessage({ id: 'footer.dlExtension' })}</div>
//       </Button>
//     </Row>
//   )
// }

const FooterSubscribe = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const intl = useIntl()
  const [addToNewsletter] = useAddToNewsletterMutation()

  const subscribeNewsletter = () => {
    const email = inputRef?.current?.value
    addToNewsletter({ email })
      .unwrap()
      .then((data) => {
        if (data.isSuccess) notify({ type: 'success', message: data.message })
        else notify({ type: 'warn', message: data.message })
      })
  }
  return (
    <Row
      className={styles['footer__box--sub']}
      align='middle'
      gutter={[8, 8]}
      wrap
    >
      <Col xxs={19} md={20} lg={18}>
        <Input
          ref={inputRef}
          data-selector='sub-input'
          placeholder={intl.formatMessage({ id: 'enter.email' })}
        />
      </Col>
      <Col xxs={5} md={4} lg={6}>
        <Button
          btnType='secondary'
          color='white'
          ripple
          onClick={subscribeNewsletter}
        >
          {intl.formatMessage({ id: 'footer.subscribe' })}
        </Button>
      </Col>
    </Row>
  )
}

const FooterLogoComponent = () => (
  <Button href='/' btnType='ghost' className={styles['footer__box--logo']}>
    {/* <img src={FooterLogo} alt='footer-logo' /> */}
    test
  </Button>
)

const FooterSide = () => {
  const intl = useIntl()
  return (
    <Row wrap>
      <Col xxs={24} md={14} lg={10} xl={23} data-selector='socials'>
        {/* <Col xxs={24} md={12} data-selector='downloads'></Col>     */}

        <Col data-selector='socials-wrapper' className='mb-1' xxs={24} md={12}>
          <FooterSocials />
        </Col>
      </Col>

      <Col xxs={24} md={14} lg={10} xl={23} data-selector='notif'>
        <span>{intl.formatMessage({ id: 'footer.notify' })}</span>
        <FooterSubscribe />
      </Col>
    </Row>
  )
}

const FooterLogin = () => {
  const dispatch = useDispatch()
  const { handleSubmit, register } = useForm({ defaultValues: { email: '' } })

  const onSubmit = (value: { email?: string }) => {
    dispatch(
      setVisible({ visible: true, mode: 'signUp', userName: value.email })
    )
  }

  return (
    <Row direction='column' gap={2} className={styles['footer__login']}>
      <Col data-selector='title'>
        برای استفاده از امکانات نماتک، رایگان ثبت نام کنید
      </Col>
      <div data-selector='bg' />
      <Col className={styles['footer__login--field']}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={styles['footer__login--input']}
            register={register('email')}
            data-selector='input'
            suffix={
              <Button type='submit' btnType='primary' ripple>
                ثبت نام رایگان
              </Button>
            }
            placeholder='شماره موبایل یا ایمیل'
          />
        </form>
      </Col>
    </Row>
  )
}

export const FooterInfo = () => {
  const intl = useIntl()

  return (
    <Col className={styles['footer__info']} xs={24} lg={12}>
      <div data-selector='title'>
        {intl.formatMessage({ id: 'footer.about.rasmio.title' })}
      </div>
      <div data-selector='description'>
        {intl.formatMessage({ id: 'footer.about.rasmio' })}
      </div>

      <Collapse className={styles['footer__collapse']}>
        <Panel header={intl.formatMessage({ id: 'read.more' })}>
          {footerInfoItems.map(({ text, title, key }) => (
            <div key={key}>
              {title && <div className='mt-2 text-weight-600'>{title}</div>}
              {text.map((item) => (
                <div key={item} data-selector='description'>
                  {item}
                </div>
              ))}
            </div>
          ))}
          <Button
            onClick={() => closePanel(styles['footer__collapse'])}
            btnType='ghost'
          >
            نمایش کمتر
            <ExpandMore style={{ rotate: '180deg' }} />
          </Button>
        </Panel>
      </Collapse>
    </Col>
  )
}

export const FooterBox = () => (
  <div className={styles['footer__box']}>
    <AuthHoc shouldHaveAccess>
      <FooterLogin />
    </AuthHoc>
    <Row justify='space-between' wrap>
      <Col xs={24} xl={9}>
        <Row data-selector='side-wrapper' wrap>
          <Col span={24}>
            <FooterLogoComponent />
          </Col>
          <Col span={24} className={styles['footer__box--desktop']}>
            <FooterSide />
          </Col>
        </Row>
      </Col>
      <Col xs={24} xl={13}>
        <FooterLinks />
      </Col>
      <Col span={24} className={styles['footer__box--mobile']}>
        <FooterSide />
      </Col>
    </Row>
  </div>
)
