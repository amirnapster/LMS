import { useDispatch } from 'react-redux'
import { setVisible } from 'libs/redux/slices/requestConsultant'
import Button from 'components/ui/Button'

import styles from './faq.module.scss'

const Unnecessary = ({ dataSelector }: { dataSelector: string }) => {
  const dispatch = useDispatch()
  const openRequestModal = () => dispatch(setVisible(true))

  return (
    <div
      data-selector={dataSelector}
      className={styles['faq__side--description']}
    >
      <span>پاسخ سوال خود را نیافتید؟</span>
      <Button btnType='link' data-selector='link' onClick={openRequestModal}>
        <span>از ما بپرسید</span>
      </Button>
    </div>
  )
}

export default Unnecessary
