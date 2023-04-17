import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Close } from '@mui/icons-material'
import { notify } from 'utils/notification'
import {
  useAddEntityToListMutation,
  useGetMyListsQuery,
  useRemoveEntitiesFromListMutation,
} from 'libs/redux/services/v3'
import { PlusIcon } from 'assets/icons'
import { setVisible } from 'libs/redux/slices/followListModal'
import { setVisible as setVisibleCreateListModal } from 'libs/redux/slices/createListModal'
import CreateListModal from 'components/createListModal'
import Button from 'components/ui/Button'
import Modal from 'components/ui/Modal'
import Row from 'components/ui/Row'
import type { RootState } from 'libs/redux/store'

import type { IFollowModalProps } from './interface'
import styles from './followListModal.module.scss'

const FollowListModal = ({ type, entityId }: IFollowModalProps) => {
  const dispatch = useDispatch()

  const { followModalVisible } = useSelector(
    (state: RootState) => state.followModal
  )

  const { data } = useGetMyListsQuery({ entityId })
  const [addeEntityToList] = useAddEntityToListMutation()
  const [removeEntityFromList] = useRemoveEntitiesFromListMutation()

  const closeModal = () => dispatch(setVisible(false))

  const inputHandleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    const { checked, value } = target

    if (checked) {
      addeEntityToList({
        addEntityToFavoriteListCommandDto: {
          dataConsistencyType: type,
          favoriteListId: Number(value),
          entityId,
        },
      })
        .unwrap()
        .catch((error) => {
          target.checked = false
          notify({ type: 'error', message: error.data.Message })
        })
    } else {
      removeEntityFromList({
        removeEntitiesFromFavoriteListCommandDto: {
          entityId: [entityId],
          favoriteListId: Number(value),
        },
      })
        .unwrap()
        .catch((error) => {
          target.checked = true
          notify({ type: 'error', message: error.data.Message })
        })
    }
  }

  const showCreateListModal = () => {
    dispatch(setVisible(false))
    dispatch(setVisibleCreateListModal(true))
  }

  return (
    <>
      <CreateListModal entityId={entityId} type={type} />
      <Modal visible={followModalVisible} onClose={closeModal}>
        <Row className={styles['follow']} direction='column' justify='start'>
          <Button
            onClick={closeModal}
            className={styles['follow--close']}
            ripple
          >
            <Close />
          </Button>

          <span className={styles['follow--title']}>
            دنبال کردن در لیست شرکت‌ها
          </span>

          <span className={styles['follow--subTitle']}>
            این شرکت را به کدام لیست‌ها اضافه می‌کنید؟
          </span>

          <Row className={styles['follow__wrapper']} direction='column'>
            {data?.favoriteLists?.map((list) => (
              <Row gap={0}>
                <input
                  disabled={list.dataConsistencyType !== type}
                  type='checkbox'
                  defaultChecked={list.existsInThis}
                  value={list.id}
                  onChange={inputHandleToggle}
                />
                <span>{list.title}</span>
              </Row>
            ))}
          </Row>

          <Row
            className={styles['follow--action']}
            justify='space-between'
            align='middle'
          >
            <Button
              btnType='secondary'
              color='primary'
              onClick={showCreateListModal}
            >
              <PlusIcon />

              <span>ایجاد لیست جدید</span>
            </Button>

            <Button
              onClick={closeModal}
              btnType='primary'
              bgColor='white-blue-gradient'
              size='large'
            >
              تایید
            </Button>
          </Row>
        </Row>
      </Modal>
    </>
  )
}

export default FollowListModal
