import { useDispatch, useSelector } from 'react-redux'
import { useGetPlansQuery } from 'libs/redux/services/pricing'
import { setVisible } from 'libs/redux/slices/selectedPlan'
import { Close } from '@mui/icons-material'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Modal from 'components/ui/Modal'
import Row from 'components/ui/Row'

import type { RootState } from 'libs/redux/store'
import {
  SelectedPlanItems as PlanItems,
  SelectedPlanPricing as Pricing,
} from './helper'
import styles from './selectedPlan.module.scss'

const SelectedPlan = () => {
  const dispatch = useDispatch()
  const { visible } = useSelector((state: RootState) => state.selectedPlan)
  const { data } = useGetPlansQuery(null)

  const closeHandler = () => dispatch(setVisible(false))

  return (
    <Modal visible={visible} onClose={closeHandler}>
      <Row className={styles['selectedPlan']} direction='column' align='middle'>
        <Row
          className={styles['selectedPlan__title']}
          align='middle'
          justify='space-between'
        >
          <span>درخواست پیش فاکتور</span>
          <Button onClick={closeHandler}>
            <Close />
          </Button>
        </Row>

        <Row className={styles['selectedPlan--wrapper']} gap={1} wrap>
          <div className={styles['selectedPlan--title']}>انتخاب اشتراک</div>
          <Col className='d-flex justify-center' xxs={24}>
            <PlanItems plans={data || []} />
          </Col>
          <Col xxs={24}>
            <Pricing plans={data || []} />
          </Col>
        </Row>

        <Button
          className={styles['selectedPlan__pricing--submit']}
          btnType='primary'
          bgColor='white-blue-gradient'
          size='large'
          form='planCount'
          type='submit'
          id='request-pre-invoice'
          ripple
        >
          درخواست پیش فاکتور
        </Button>
      </Row>
    </Modal>
  )
}

export default SelectedPlan
