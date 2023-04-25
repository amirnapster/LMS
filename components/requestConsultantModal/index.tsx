import { useDispatch, useSelector } from 'react-redux'
// import { setVisible } from 'libs/redux/slices/requestConsultant'
import Modal from 'components/ui/Modal'
import type { RootState } from 'libs/redux/store'
import RequestConsultant from './helper'

const RequestConsultantModal = () => {
  const dispatch = useDispatch()
  // const { visible } = useSelector((state: RootState) => state.requestConsultant)

  // const closeModal = () => dispatch(setVisible(false))

  return (
    // <Modal visible={visible} onClose={closeModal}>
    //   <RequestConsultant />
    // </Modal>
    <span> </span>
  )
}

export default RequestConsultantModal
