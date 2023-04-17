import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { CampaignBgModal, PlusIcon } from 'assets/icons'
import Button from 'components/ui/Button'
import Modal from 'components/ui/Modal'

import type { RootState } from 'libs/redux/store'
import styles from './campaignModal.module.scss'

const CampaignModalComponent = () => {
  const timerId = useRef<NodeJS.Timer>()
  const { packageType } = useSelector((state: RootState) => state.auth)
  const [visible, setVisible] = useState<boolean>(false)

  const closeModal = () => setVisible(false)

  const handleDate = () =>
    new Date().getTime() - Number(localStorage.getItem('modalCampaignDate'))

  const openModalWithCondition = () => {
    if (packageType && packageType !== 13) {
      localStorage.setItem('modalCampaignDate', String(new Date().getTime()))
    }

    const modalPortal = document.getElementById('modal-root')
    clearTimeout(timerId?.current)

    timerId.current = setTimeout(() => {
      if (!modalPortal?.hasChildNodes()) {
        setVisible(true)
      } else openModalWithCondition()
    }, 10000)
  }

  useEffect(() => {
    if (packageType) {
      if (packageType !== 13 && handleDate() > 86400000)
        openModalWithCondition()
    } else {
      openModalWithCondition()
      localStorage.removeItem('modalCampaignDate')
    }

    return () => {
      clearTimeout(timerId?.current)
      localStorage.removeItem('modalCampaignDate')
    }
  }, [])

  return (
    <Modal
      className={styles['campaign']}
      visible={visible}
      onClose={closeModal}
    >
      <Button
        className={styles['campaign--close']}
        onClick={closeModal}
        btnType='secondary'
        color='simple-white'
        ripple
      >
        <PlusIcon />
      </Button>
      <Button
        className={styles['campaign--bg']}
        target='_blank'
        href='/pricing'
        id='campaign-modal'
      >
        <img src={CampaignBgModal} alt='campaign-bg' />
      </Button>
    </Modal>
  )
}

export default CampaignModalComponent
