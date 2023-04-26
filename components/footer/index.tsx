import { useSelector } from 'react-redux'
import Image from 'next/image'
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

  return (
    <Container>
      <footer className={cn(styles['footer'], isSearching ? 'd-none' : '')}>
        <FooterBox />
        <Row data-selector='info' wrap>
          <FooterInfo />
          <Col className={styles['footer__signs']} xxs={24} lg={12}>
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
          </Col>
          <Col className={styles['footer__copyrights']} span={24}>
            کلیه حقوق این وبسایت و برند نماتک، متعلق به{' '}
            <a target='_blank' href='https://namatek.com' rel='noreferrer'>
              شرکت توسعه مهارت نماتک
            </a>{' '}
            است.{' '}
            <a target='_blank' href='https://namatek.com' rel='noreferrer'>
              v1
            </a>{' '}
          </Col>
        </Row>
      </footer>
    </Container>
  )
}

export default Footer
