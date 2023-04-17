import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { setMessageModalVisibility } from 'libs/redux/slices/company'
import {
  type MessageType,
  useCreateMessageMutation,
} from 'libs/redux/services/v3'
import { Close } from '@mui/icons-material'
import { validation } from 'utils/helpers/validations'
import { notify } from 'utils/notification'
import {
  CompanyPlaceholder,
  PhoneOutlinedIcon,
  UserOutlinedIcon,
} from 'assets/icons'
import Image from 'next/image'
import Modal from 'components/ui/Modal'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import Input from 'components/ui/Input'
import TextArea from 'components/ui/Textarea'
import Divider from 'components/ui/Divider'

import type { RootState } from 'libs/redux/store'
import type { MessageForm } from './interface'
import styles from './messageCompany.module.scss'

const MessageCompany = () => {
  const dispatch = useDispatch()
  const [sendMessage] = useCreateMessageMutation()
  const { messageModal } = useSelector((state: RootState) => state.company)
  const { details } = useSelector((state: RootState) => state.company)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { fullName: '', phoneNumber: '', text: '' },
  })

  const detailData = details?.companyInfoDetail?.aboutCompany?.companyHeader
  const data = details?.summary?.companySummary
  const name = detailData?.companyBrand || data?.title

  const closeModal = () => dispatch(setMessageModalVisibility(false))

  const onSubmit = (payload: MessageForm) => {
    const body = {
      ...payload,
      companyId: data?.id,
      messageType: 2 as MessageType,
    }
    sendMessage({ createMessageCommandDto: body })
      .unwrap()
      .then(() => {
        notify({
          message: (
            <div>
              <div>درخواست شما ثبت شد .</div>
              <div>
                مشاوران {name} در ساعات پاسخگویی با شما تماس خواهند گرفت
              </div>
            </div>
          ),
        })
        closeModal()
      })
  }

  return (
    <Modal visible={messageModal as boolean} onClose={closeModal}>
      <Row className={styles['message']} wrap>
        <Col span={24} className='position-relative text-center'>
          <span className='text-weight-700 text-5'>پیام به شرکت</span>
          <Button className={styles['message--close']} onClick={closeModal}>
            <Close />
          </Button>
        </Col>

        <Col span={24}>
          <Divider className={styles['message--divider']} />
        </Col>
        <Col className={styles['message--title']} span={24}>
          <div data-selector='logo'>
            <Image
              src={detailData?.logo || CompanyPlaceholder}
              layout='fill'
              alt='company-logo'
            />
          </div>
          {name}
        </Col>
        <Col span={24}>
          <form
            id='messageForm'
            className={styles['message__form']}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <Input
              prefix={<UserOutlinedIcon />}
              register={register('fullName', validation.FULL_NAME)}
              error={errors.fullName}
              placeholder='نام و نام خانوادگی'
            />
            <Input
              prefix={<PhoneOutlinedIcon />}
              register={register('phoneNumber', validation.INVOICE_TELEPHONE)}
              error={errors.phoneNumber}
              placeholder='شماره تماس خود را وارد کنید'
            />
            <TextArea
              register={register('text', validation.MESSAGE)}
              error={errors?.text}
              placeholder='توضیحات ...'
            />
          </form>
        </Col>
        <Col span={24}>
          <Button
            className='w-100'
            form='messageForm'
            type='submit'
            btnType='primary'
            bgColor='white-blue-gradient'
            ripple
          >
            ارسال درخواست
          </Button>
        </Col>
      </Row>
    </Modal>
  )
}

export default MessageCompany
