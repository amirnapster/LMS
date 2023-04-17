import { Close } from '@mui/icons-material'
import { ArrowLefttIcon, ArrowRightIcon } from 'assets/icons'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Modal from 'components/ui/Modal'
import Button from 'components/ui/Button'
import Divider from 'components/ui/Divider'

import type { ShowImageModalType } from './interface'
import styles from './showImageModal.module.scss'

const ShowImageModal = ({
  visible,
  closeModal,
  currentImageIndex,
  allImageCategory,
  handleChangeCurrent,
  title,
}: ShowImageModalType) => {
  const data = allImageCategory[currentImageIndex]

  return (
    <Modal visible={visible} onClose={closeModal}>
      <div className={styles['modal']}>
        <Row data-selector='header' align='middle' justify='space-between'>
          <Col xxs={1}>
            <Button onClick={closeModal} data-selector='arrow-close'>
              <ArrowRightIcon />
            </Button>
          </Col>
          <h2>{title}</h2>
          <Col xxs={1}>
            <Button onClick={closeModal} data-selector='close'>
              <Close />
            </Button>
          </Col>
        </Row>
        <Divider />
        <Row
          data-selector='body'
          align='middle'
          justify='space-between'
          gutter={16}
        >
          <Col md={2} data-selector='arrow-right-box'>
            <Button
              btnType='ghost'
              data-selector='arrow-right'
              disabled={currentImageIndex === allImageCategory.length - 1}
              onClick={() => handleChangeCurrent('increment')}
            >
              <ArrowLefttIcon />
            </Button>
          </Col>
          <Col md={10} sm={24} data-selector='body-content'>
            <h4>{data?.title}</h4>
            <p>
              {data?.desc?.substr(0, 180) || data?.description?.substr(0, 180)}
            </p>
          </Col>
          <Col md={10} sm={24}>
            <img
              data-selector='body-image'
              src={data?.imageLink || data?.picture}
              alt='title'
            />
          </Col>
          <Col md={2}>
            <Button
              btnType='ghost'
              disabled={!currentImageIndex}
              data-selector='arrow-left'
              onClick={() => handleChangeCurrent('decrement')}
            >
              <ArrowLefttIcon />
            </Button>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

export default ShowImageModal
