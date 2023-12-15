import { useRef } from 'react'
import { useIntl } from 'react-intl'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import  ExpandMore  from '@mui/icons-material/ExpandMore'
import { closePanel } from 'utils/helpers/global'
import { setVisible } from 'libs/redux/slices/auth'
import { notify } from 'utils/notification'
import { useAddToNewsletterMutation } from 'libs/redux/services/auth'
import { useSuggestMutation } from 'libs/redux/services/karnama'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Collapse from 'components/ui/Collapse'
import Panel from 'components/ui/Panel'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import Tag from 'components/ui/Tag'
import AuthHoc from 'components/hoc/auth'
import Logo from 'components/logo/Logo'
import LogoImg from 'public/svg/footer/Namatek-Logo-white.svg'

import {
  footerSocialItems,
  footerItems,
  footerInfoItems,
  footerSignItems,
} from 'utils/statics/footerStatics'
import type { IFooterLinks } from 'utils/statics/footerStatics/interface'
import styles from './footer.module.scss'


const FooterLinks = () => {
  const intl = useIntl()

  return (
    <Row className='h-100' align='middle' justify='center' data-selector='link' wrap>
      {Object.keys(footerItems).map((key) => (
        <Col
          key={key}
          xxs={key === 'services' ? 18 : 12}
          md={key === 'services' ? 10 : 7}
          lg={8}
          xl={key === 'services' ? 10 : 7}
          className='d-flex justify-center'
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
  </Button>
)

const FooterSide = () => {
  const intl = useIntl()
  return (
    <Row justify='center' wrap>
      <Col className='w-100 justify-center' xxs={24} md={14} lg={10} xl={23} data-selector='socials'>
        {/* <Col xxs={24} md={12} data-selector='downloads'></Col>     */}

        <div style={{ width: "110px" }}>
          <LogoImg />
        </div>

        <span className={styles['footer--des']}>رسانه مهارتی نماتک به شما کمک می‌کند تا به راحتی مهارت‌های کاربردی در حوزه صنعت را بیاموزید و گامی موثر در پیشرفت صنعت کشور بردارید.
        </span>

        {/* <Col xxs={24} md={14} lg={10} xl={23} data-selector='notif'>
          <span>{intl.formatMessage({ id: 'footer.notify' })}</span>
          <FooterSubscribe />
        </Col> */}
      </Col>
    </Row>
  )
}

const FooterLogin = () => {
  const { handleSubmit, register,setValue } = useForm({ defaultValues: { text: '' } })
  const [suggest, { isLoading }] = useSuggestMutation()

  const onSubmit = (value: { text?: string }) => {
    suggest({ suggestion: { text: value.text as string } }).then
      (() => {
        notify({ type: 'success', message: 'با تشکر. پیشنهاد شما ثبت شد' })
        setValue('text','')
      })
  }

  return (
    <Row direction='column' gap={2} className={styles['footer__login']}>
      <Col data-selector='title'>
        آموزش مورد نظر یا پیشنهاد شما برای پرونماتک چیست؟
      </Col>
      <div data-selector='bg' />
      <Col className={styles['footer__login--field']}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={styles['footer__login--input']}
            register={register('text')}
            data-selector='input'
            suffix={
              <Button type='submit' btnType='primary' ripple>
                ثبت پیشنهاد
              </Button>
            }
            placeholder='عنوان دوره'
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
    <FooterLogin />


    <Row justify='space-between' wrap>
      <Col xxs={24} md={12} xl={8} className={styles['footer__box--desktop']}>
        <FooterSide />
      </Col>

      <Col xxs={24} md={12} xl={8}>
        <FooterLinks />
      </Col>

      <Col style={{ display: "flex", justifyContent: "center" }} xxs={24} md={12} xl={8}>
        {footerSignItems.map(({ imgSource, link }) => (
          <Button
            key={imgSource}
            btnType='ghost'
            onClick={() =>
              link && window.open(link.url, link.type, link.options)
            }
          >
            {/* <Image src={imgSource} layout='fill' alt='source' /> */}

            <img src={imgSource} alt="" />
          </Button>
        ))}
      </Col>
      {/* <Col span={24} className={styles['footer__box--mobile']}>
        <FooterSide />
      </Col> */}
    </Row>
  </div>
)
