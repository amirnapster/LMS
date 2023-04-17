import { useDispatch } from 'react-redux'
import { useIntl } from 'react-intl'
import { ArrowBackRounded } from '@mui/icons-material'
import { setVisible } from 'libs/redux/slices/auth'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import Container from 'components/container'

import { usageItems } from 'utils/statics/whatIsRasmioStatics'
import styles from './usage.module.scss'

const WhatIsUsage = () => {
  const intl = useIntl()
  const dispatch = useDispatch()

  const openLoginModal = () => dispatch(setVisible({ visible: true }))

  return (
    <Container>
      <div className={styles['usage']}>
        {Object.keys(usageItems).map((item) => {
          const { icon, items, title, btn } = usageItems[item]
          return (
            <Row
              align='top'
              justify='center'
              className={styles['usage--section']}
              key={item}
              wrap
            >
              <Col md={22} lg={6}>
                {title}
                {icon}
              </Col>
              <Col xs={24} md={24} lg={14}>
                {items.map(({ cardTitle, desc }) => (
                  <div data-selector={`${item}-card`} key={cardTitle}>
                    <h2>{cardTitle}</h2>
                    {desc && <span>{desc}</span>}
                  </div>
                ))}
                {btn && (
                  <Button
                    btnType='primary'
                    bgColor='white-gold-gradient'
                    size='large'
                    color='text-color-900'
                    data-selector='free-btn'
                    ripple
                    onClick={openLoginModal}
                  >
                    {intl.formatMessage({ id: 'try.free' })}
                    <ArrowBackRounded />
                  </Button>
                )}
              </Col>
            </Row>
          )
        })}
      </div>
    </Container>
  )
}

export default WhatIsUsage
