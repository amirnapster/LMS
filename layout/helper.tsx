import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVisible, clearAuth } from 'libs/redux/slices/auth'
import Modal from 'components/ui/Modal'
import Footer from 'components/footer'
import Authentication from 'containers/authentication'
import RequestConsultantModal from 'components/requestConsultantModal'

import type { RootState } from 'libs/redux/store'

export const TempLayout = () => {
  const dispatch = useDispatch()
  const { visible } = useSelector((state: RootState) => state.auth)
  const [backdropDisable, setBackdropDisable] = useState(false)

  const closeModal = () => dispatch(setVisible({ visible: false }))

  // @ts-ignore:Unreachable code error
  window.ShowLogin = (force) => {
    dispatch(setVisible({ visible: true }))
    if (force) setBackdropDisable(true)
  }
  // @ts-ignore:Unreachable code error
  window.ClearAuth = () => {
    dispatch(clearAuth())
  }

  return (
    <>
      <Footer />
      <Modal
        visible={visible}
        onClose={closeModal}
        backdropDisable={backdropDisable}
      >
        <Authentication />
      </Modal>
      <RequestConsultantModal />
    </>
  )
}
