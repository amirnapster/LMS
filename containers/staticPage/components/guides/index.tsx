import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useIntl } from 'react-intl'
import { ArrowSideIcon, CheckIcon, DownloadIcon } from 'assets/icons'
import { setVisible } from 'libs/redux/slices/requestConsultant'
import RequestConsultantModal from 'components/requestConsultantModal'
import Button from 'components/ui/Button'
import Container from 'components/container'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import Image from 'next/image'

import { WEB } from 'utils/statics/routes/web'
import { staticsGuidesData } from 'utils/statics'
import type { StaticComponentsProps } from 'containers/staticPage/interface'
import styles from './guides.module.scss'

const StaticPageGuides = ({ service }: StaticComponentsProps) => {
  const intl = useIntl()
  const { push } = useRouter()
  const dispatch = useDispatch()

  const { btn, description, download, features, image, note, video } =
    staticsGuidesData[service]

  const btnAction = () => {
    if (btn === 'request.consultant') dispatch(setVisible(true))
    else push('/pricing')
  }

  return (
    <Container className={styles['guides__container']}>
      <div>
        <Row className={styles['guides']} justify='space-around' wrap>
          <RequestConsultantModal />
          <Col xs={24} lg={11} xl={8} className={styles['guides__usage']}>
            <div className={styles['guides__usage--title']}>
              چگونه استفاده کنیم؟
            </div>
            <div className={styles['guides__usage--description']}>
              {description}
            </div>
            <div className={styles['guides__usage--note']}>{note}</div>
            {service === 'api' ? (
              <Button
                btnType='link'
                onClick={() => dispatch(setVisible(true))}
                className={styles['guides__usage--action']}
              >
                <span>ثبت د رخواست API</span>
                <ArrowSideIcon />
              </Button>
            ) : (
              <Button
                btnType='link'
                href={WEB.PRICING}
                className={styles['guides__usage--action']}
              >
                <span>مشاهده اشتراک‌ها</span>
                <ArrowSideIcon />
              </Button>
            )}
          </Col>

          <Col xs={24} lg={11} xl={10}>
            <div data-selector='guides-video'>
              <Image src={video} layout='fill' />
            </div>
          </Col>

          <Col
            xxs={24}
            xs={22}
            sm={21}
            md={15}
            lg={11}
            xl={8}
            className={styles['guides__img']}
          >
            {image}
          </Col>

          <Col xs={24} lg={11} xl={10} className={styles['guides__feature']}>
            <div className={styles['guides__feature--title']}>ویژگی‌ها</div>

            {features.map((feature) => (
              <Row key={feature} gap={0} data-selector='check-list'>
                <CheckIcon />
                <span>{feature}</span>
              </Row>
            ))}

            <Row data-selector='guides-action' gap={3} align='middle'>
              <Button
                btnType='primary'
                bgColor='white-blue-gradient'
                size='large'
                onClick={btnAction}
                data-selector='subscription'
                ripple
              >
                <span>{intl.formatMessage({ id: btn })}</span>
              </Button>
              <Button
                btnType='link'
                href={download.url}
                data-selector='download'
                ripple
              >
                <span>{download.text}</span>
                <DownloadIcon />
              </Button>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default StaticPageGuides
