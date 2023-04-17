import { useDispatch, useSelector } from 'react-redux'
import { setVisible } from 'libs/redux/slices/createListModal'
import { Close } from '@mui/icons-material'
import { Controller, useForm } from 'react-hook-form'
import { validation } from 'utils/helpers/validations'
import { useCreateListMutation } from 'libs/redux/services/v3'
import { notify } from 'utils/notification'
import TextArea from 'components/ui/Textarea'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import Modal from 'components/ui/Modal'
import Row from 'components/ui/Row'
import type { RootState } from 'libs/redux/store'

import type {
  ICreateListModalInitialValue,
  ICreateListModalProps,
} from './interface'
import styles from './createListModal.module.scss'

const CreateListModal = ({ entityId, type }: ICreateListModalProps) => {
  const dispatch = useDispatch()

  const [createList] = useCreateListMutation()

  const { createListModalVisible } = useSelector(
    (state: RootState) => state.createListModal
  )

  const closeModal = () => dispatch(setVisible(false))

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { title: '', description: '', type } })

  const onSubmit = (data: ICreateListModalInitialValue) => {
    createList({
      createFavoriteListsDto: {
        dataConsistencyType: type,
        title: data.title,
        description: data.description,
        entityId,
      },
    })
      .unwrap()
      .then((res) => {
        closeModal()
        notify({ type: 'success', message: res.message as string })
      })
      .catch((err) => notify({ type: 'error', message: err?.data?.Message }))
  }

  return (
    <Modal visible={createListModalVisible} onClose={closeModal}>
      <Row className={styles['list']} direction='column'>
        <span className={styles['list--title']}>ایجاد لیست جدید</span>

        <Button onClick={closeModal} className={styles['list--close']} ripple>
          <Close />
        </Button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='title'
            control={control}
            rules={validation.required('عنوان لیست را وارد کنید')}
            render={({ field }) => (
              <Input
                className={styles['list--input']}
                required
                field={field}
                label='عنوان لیست جدید'
                placeholder='عنوان لیست را وارد کنید'
                error={errors.title}
              />
            )}
          />

          <Controller
            name='description'
            control={control}
            render={({ field }) => (
              <TextArea
                className={styles['list--input']}
                field={field}
                label='توضیحات'
                placeholder='توضیحات اختیاری...'
                error={errors.description}
              />
            )}
          />

          <Button
            className={styles['list--btn']}
            btnType='primary'
            bgColor='white-blue-gradient'
            size='large'
            type='submit'
          >
            ذخیره
          </Button>
        </form>
      </Row>
    </Modal>
  )
}

export default CreateListModal
