import { useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import Container from 'components/container'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import cn from 'classnames'

import { footerSignItems } from 'utils/statics/footerStatics'
import type { RootState } from 'libs/redux/store'
import { FooterBox, FooterInfo } from './helper'
import styles from './footer.module.scss'

const Footer = () => {
  const { isSearching } = useSelector((state: RootState) => state.navbar)
  const { asPath } = useRouter()
  const intl = useIntl()
  return asPath.indexOf('dashboard') > 0 ? null : (
    <Container>
      <footer className={cn(styles['footer'], isSearching ? 'd-none' : '')}>
        {intl.formatMessage({ id: 'lang' }) === 'fa-IR' && <FooterBox />}
        <Row data-selector='info' wrap>
          {/* <FooterInfo /> */}
          {/* <Col className={styles['footer__signs']} xxs={24} lg={12}>
            {footerSignItems.map(({ imgSource, link }) => (
              <Button
                key={imgSource}
                btnType='ghost'
                onClick={() =>
                  link && window.open(link.url, link.type, link.options)
                }
              >
                <Image src={imgSource} layout='fill' alt='source' />
              </Button>
            ))}
          </Col> */}

          <Col className={styles['footer__copyrights']} span={24}>
            {intl.formatMessage({ id: 'lang' }) === 'fa-IR' ? <>
              کلیه حقوق این وبسایت و برند نماتک، متعلق به{' '}
              <a target='_blank' href='https://namatek.com' rel='noreferrer'>
                شرکت توسعه مهارت نماتک
              </a>{' '}
              است.{' '}
              <a target='_blank' href='https://namatek.com' rel='noreferrer'>
                v1.1
              </a></>
              : <>© All rights reserved. INSTART</>
            }
          </Col>
        </Row>
      </footer>
    </Container>
  )
}

export default Footer
