import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  CheckCircleBlack,
  InvitationModalImage,
  PlusIcon,
  RocketIcon,
} from 'assets/icons'
import Button from 'components/ui/Button'
import Modal from 'components/ui/Modal'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'

import type { RootState } from 'libs/redux/store'
import { WEB } from 'utils/statics/routes/web'
import { InvitationModalFeatures } from './helper'
import styles from './invitationModal.module.scss'

const InvitationModalComponent = () => {
  const timerId = useRef<NodeJS.Timer>()
  const { packageType } = useSelector((state: RootState) => state.auth)
  const [visible, setVisible] = useState<boolean>(false)

  const closeModal = () => setVisible(false)

  const openModalWithCondition = () => {
    const modalPortal = document.getElementById('modal-root')
    clearTimeout(timerId?.current)

    timerId.current = setTimeout(() => {
      if (!modalPortal?.hasChildNodes() && packageType === -1) setVisible(true)
      else openModalWithCondition()
    }, 30000)
  }

  useEffect(() => {
    openModalWithCondition()

    return () => {
      clearTimeout(timerId?.current)
    }
  }, [])

  return (
    <Modal
      className={styles['invitation']}
      visible={visible}
      onClose={closeModal}
    >
      <Row
        className={styles['invitation__row']}
        align='middle'
        justify='center'
        gap={1}
        wrap
      >
        <Col xxs={24} md={11} className={styles['invitation__row--imageBox']}>
          <img src={InvitationModalImage} alt='invitation-bg' />
        </Col>
        <Col xxs={24} md={11} className={styles['invitation__row--contentBox']}>
          <div data-selector='header'>
            <h2>با ارتقا اشتراک خود از امکانات نماتک لذت ببرید</h2>

            <Button onClick={closeModal} btnType='ghost' ripple>
              <PlusIcon />
            </Button>
          </div>
          <div data-selector='body'>
            <span>امکانات بیشتر را تجربه کنید:</span>
            {InvitationModalFeatures.map((item) => (
              <div key={item} data-selector='body-items'>
                <CheckCircleBlack />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div data-selector='footer'>
            <Button btnType='link' data-selector='close' onClick={closeModal}>
              بعدا یادآوری کن
            </Button>
            <Button
              btnType='primary'
              bgColor='white-blue-gradient'
              data-selector='checkout'
              href={WEB.PRICING}
            >
              <span>ارتقا اشتراک</span>
              <RocketIcon />
            </Button>
          </div>
        </Col>
      </Row>
    </Modal>
  )
}

export default InvitationModalComponent
