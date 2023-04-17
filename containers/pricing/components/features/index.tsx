import { useRef, useState } from 'react'
import { animated } from 'react-spring'
import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowUp,
  Close,
} from '@mui/icons-material'
import Row from 'components/ui/Row'
import Modal from 'components/ui/Modal'
import Button from 'components/ui/Button'
import Container from 'components/container'
import { FeatureHeader, FeatureBody } from './helper'

import styles from './features.module.scss'

const Features = () => {
  const collapseRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(true)
  const [visible, setVisible] = useState<boolean>(false)
  const [height, setHeight] = useState<number>(160)

  const showIconHandler = (isShow: boolean) => {
    if (isShow) return <KeyboardArrowDown />
    return <KeyboardArrowUp />
  }

  const closeModal = () => setVisible(false)

  const toggleTransition = () => {
    setShow(!show)
    const bound = collapseRef?.current?.getBoundingClientRect().height
    if (show && bound) setHeight(bound)
    else setHeight(160)
  }

  return (
    <Container>
      <Row direction='column' className={styles['featureBox']}>
        <FeatureHeader isMobile={false} />
        <animated.div
          style={{ height }}
          className={styles['featureBox__body--box']}
        >
          <div ref={collapseRef}>
            <FeatureBody isMobile={false} />
          </div>
        </animated.div>

        <Modal
          visible={visible}
          onClose={closeModal}
          backdropDisable
          className={styles['featureBox__modal']}
        >
          <Row
            className={styles['featureBox__modal--container']}
            direction='column'
          >
            <Row data-selector='modalHeader' justify='space-between'>
              <p>مقایسه امکانات اشتراک‌ها</p>
              <Button onClick={closeModal}>
                <Close />
              </Button>
            </Row>
            <Row data-selector='modalBody' direction='column'>
              <FeatureHeader isMobile />
              <FeatureBody isMobile />
            </Row>
          </Row>
        </Modal>

        <Row
          align='middle'
          justify='center'
          className={styles['featureBox__footer']}
        >
          <Button
            className={styles['featureBox__footer--buttonDesktop']}
            btnType='ghost'
            onClick={toggleTransition}
          >
            <span>مقایسه امکانات اشتراک‌ها</span>
            {showIconHandler(show)}
          </Button>
          <Button
            className={styles['featureBox__footer--buttonMobile']}
            btnType='ghost'
            onClick={() => setVisible(true)}
          >
            <span>مقایسه امکانات اشتراک‌ها</span>
            <KeyboardArrowLeft />
          </Button>
        </Row>
      </Row>
    </Container>
  )
}

export default Features
