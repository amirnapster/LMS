import { useSelector } from 'react-redux'
import SvgSprite from 'assets/sprite'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Copy from 'components/copy'
import Skeleton from 'components/skeleton'
import Card from 'components/card'
import SectionTitle from 'components/sectionTitle'
import Button from 'components/ui/Button'
import Ellipsis from 'components/ui/Ellipsis'
import type { RootState } from 'libs/redux/store'

import { baseInfoDataBuilder, communicationInfoDataBuilder } from './helper'
import styles from './biography.module.scss'

const Biography = () => {
  const { details } = useSelector((state: RootState) => state.person)
  const data = details?.person?.biography
  const communicationdata = details?.person?.biography?.communication
  const socialMedias = details?.person?.biography?.communication?.socialMedia
  const description = details?.person?.biography?.description

  const baseInfoSchema = baseInfoDataBuilder(data)
  const communicationInfoSchema =
    communicationInfoDataBuilder(communicationdata)

  const isEllipsis = description && description?.length > 350

  return (
    <Row className={styles['biography']} id='bio' wrap>
      <Col span={24}>
        <SectionTitle title='بیوگرافی' />
      </Col>
      <Col xxs={24}>
        <Skeleton data={details} width='100%' height='172px' variant='rounded'>
          <Card hasSource={false} title='اطلاعات ثبتی'>
            <Row
              className={styles['biography__row']}
              wrap
              justify='space-between'
              gutter={[16, 0]}
            >
              {baseInfoSchema.map(({ title, text, size, copyable }) => (
                <Col
                  key={title}
                  className={styles['biography__row--infoBox']}
                  xxs={24}
                  {...size}
                >
                  <p>{title}</p>
                  <div>
                    <span>{text}</span>
                    {copyable && (
                      <span data-selector='copy-icon'>
                        <Copy text={text as string} />
                      </span>
                    )}
                  </div>
                </Col>
              ))}
            </Row>
            <Row
              className={styles['biography__row']}
              wrap
              justify='space-between'
              gutter={[16, 0]}
            >
              <Col data-selector='title' xxs={24}>
                راه‌های ارتباطی
              </Col>
              {communicationInfoSchema.map(
                ({ title, text, size, copyable }) => (
                  <Col
                    key={title}
                    className={styles['biography__row--infoBox']}
                    xxs={24}
                    {...size}
                  >
                    <p>{title}</p>
                    <div>
                      <span>{text}</span>
                      {copyable && (
                        <span data-selector='copy-icon'>
                          <Copy text={text as string} />
                        </span>
                      )}
                    </div>
                  </Col>
                )
              )}
            </Row>
            {!!socialMedias?.length && (
              <Row className={styles['biography__row']} wrap>
                <Col data-selector='title' xxs={24}>
                  شبکه‌های اجتماعی
                </Col>
                <Row>
                  {socialMedias.map(({ icon, linkUrl }) => (
                    <span data-selector='socials' key={linkUrl}>
                      <Button href={linkUrl as string} target='_blank'>
                        <SvgSprite id={`${icon}-outlined`} />
                      </Button>
                    </span>
                  ))}
                </Row>
              </Row>
            )}
            {!!description?.length && (
              <Row className={styles['biography__row']} wrap>
                <Col data-selector='title' xxs={24}>
                  درباره شخص
                </Col>
                <Row data-selector='ellpsis'>
                  <Ellipsis
                    className={styles['biography__row--content']}
                    maxLines={isEllipsis ? 3 : 'auto'}
                    showMore={isEllipsis}
                  >
                    {description}
                  </Ellipsis>
                </Row>
              </Row>
            )}
          </Card>
        </Skeleton>
      </Col>
    </Row>
  )
}

export default Biography
