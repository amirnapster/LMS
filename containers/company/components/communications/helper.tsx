import { AnyAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { setVisible } from 'libs/redux/slices/auth'
import dynamic from 'next/dynamic'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import Divider from 'components/ui/Divider'
import Copy from 'components/copy'
import SvgSprite from 'assets/sprite'

import type { Communication } from 'libs/redux/services/allv3'
import type { CommunicationWaysProps } from 'containers/company/interface'
import styles from './companyCommunications.module.scss'

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  {
    ssr: false,
  }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  {
    ssr: false,
  }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  {
    ssr: false,
  }
)

const handleText = (
  text: string,
  link: string,
  dispatch: (action: AnyAction) => void
) => {
  if (text === 'وارد شوید') {
    return (
      <Button
        onClick={() => dispatch(setVisible({ visible: true, mode: 'signIn' }))}
        btnType='primary'
      >
        {text}
      </Button>
    )
  }
  if (link && text) return <a href={link}>{text}</a>
  return <span>{text || '-'}</span>
}

export const CommunicationWays = ({
  title,
  tel,
  postalCode,
  address,
  phoneNumber,
  index,
  lastItem,
  isAuth,
  fax,
}: CommunicationWaysProps) => {
  const dispatch = useDispatch()

  return (
    <Row className={styles['communication']} wrap>
      {isAuth ? (
        <Col className={styles['communication__row']} span={24}>
          <div data-selector='title'>
            {index}- {title}:
          </div>
          <Row data-selector='postal-tel' gutter={{ sm: 24 }} wrap>
            <Col className={styles['communication__row--info']} xxs={24}>
              <SvgSprite id='phone' />
              <span>تلفن:</span>
              {handleText(tel as string, `tel:${tel}`, dispatch)}
              <Copy text={tel as string} />
            </Col>
            <Col className={styles['communication__row--info']} xxs={24}>
              <SvgSprite id='postal' />
              <span>کدپستی:</span>
              <span>{postalCode}</span>
              <Copy text={postalCode as string} />
            </Col>
          </Row>
          <div
            data-selector='address'
            className={styles['communication__row--info']}
          >
            <SvgSprite id='location' />
            <span>آدرس:</span>
            <span>{address}</span>
            <Copy text={address as string} />
          </div>
          {!lastItem && (
            <Divider className={styles['communication--divider']} />
          )}
        </Col>
      ) : (
        <Col className={styles['communication__row']} span={24}>
          <Row className={styles['communication__row--wrapper']} wrap>
            <Col data-selector='auth-col' span={24}>
              <Col span={24}>آدرس شرکت:</Col>
              <Col span={24}>
                <span>{address || '-'}</span>
                <Copy text={address as string} />
              </Col>
            </Col>
            <Col data-selector='auth-col' xxs={24} sm={12} md={6}>
              <Col span={24}>کدپستی:</Col>
              <Col span={24}>
                <span>{postalCode || '-'}</span>
                <Copy text={postalCode as string} />
              </Col>
            </Col>
            <Col data-selector='auth-col' xxs={24} sm={12} md={6}>
              <Col span={24}>تلفن ثابت:</Col>
              <Col span={24}>
                {handleText(tel as string, `tel:${tel}`, dispatch)}
                <Copy text={tel as string} />
              </Col>
            </Col>
            <Col data-selector='auth-col' xxs={24} sm={12} md={6}>
              <Col span={24}>فکس:</Col>
              <Col span={24}>
                {handleText(fax as string, '', dispatch)}
                <Copy text={tel as string} />
              </Col>
            </Col>
            <Col data-selector='auth-col' xxs={24} sm={12} md={6}>
              <Col span={24}>شماره موبایل:</Col>
              <Col span={24}>
                {handleText(
                  phoneNumber as string,
                  `tel:${phoneNumber}`,
                  dispatch
                )}
                <Copy text={phoneNumber as string} />
              </Col>
            </Col>
          </Row>
        </Col>
      )}
    </Row>
  )
}

export const CommunicationSocials = ({
  socialMedias,
  webSite,
  email,
}: Communication) => {
  const dispatch = useDispatch()

  return (
    <Row className={styles['communication']} wrap>
      <Col className={styles['communication__row']} span={24}>
        <Row
          className={styles['communication__socials']}
          gutter={{ sm: 24 }}
          wrap
        >
          {!!socialMedias?.length && (
            <Col className={styles['communication__row--info']} xxs={24}>
              <SvgSprite id='social' />
              <span>شبکه‌های اجتماعی:</span>
              {socialMedias.map(({ icon, linkUrl }) => (
                <span data-selector='socials' key={linkUrl}>
                  <Button href={linkUrl as string}>
                    <SvgSprite id={`${icon}-outlined`} />
                  </Button>
                </span>
              ))}
            </Col>
          )}
          {webSite && (
            <Col className={styles['communication__row--info']} xxs={24}>
              <SvgSprite id='site' />
              <span>وبسایت:</span>
              <span data-selector='site'>
                <Button href={webSite as string}>
                  {webSite?.replace('https://', '')}
                </Button>
              </span>
            </Col>
          )}
          {email && (
            <Col className={styles['communication__row--info']} xxs={24}>
              <SvgSprite id='mail' />
              <span>ایمیل:</span>
              {handleText(email as string, `mailto:${email}`, dispatch)}

              <Copy text={email as string} />
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  )
}

export const CommunicationLocation = ({
  lat,
  lng,
}: Pick<Communication, 'lat' | 'lng'>) => {
  const position = [lat || 35.6892, lng || 51.389] as [number, number]
  return (
    <Row className={styles['communication__location']} wrap>
      <Col className={styles['communication__location--title']} xxs={24}>
        <SvgSprite id='location' />
        <span>موقعیت نمایشگاه/فروشگاه</span>
      </Col>
      <Col xxs={24}>
        <MapContainer
          className={styles['communication__location--map']}
          center={position}
          zoom={12}
        >
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={position} />
        </MapContainer>
      </Col>
    </Row>
  )
}
