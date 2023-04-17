import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import {
  type MessageType,
  useCreateMessageMutation,
} from 'libs/redux/services/allv3'
import {
  ContactMailIcon,
  PhoneOutlinedIcon,
  UserOutlinedIcon,
} from 'assets/icons'
import { notify } from 'utils/notification'
import { validation } from 'utils/helpers/validations'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Input from 'components/ui/Input'
import TextArea from 'components/ui/Textarea'
import Button from 'components/ui/Button'

import type { RootState } from 'libs/redux/store'
import type { IContactCompany } from 'containers/company/interface'
import styles from './companyContact.module.scss'

const CompanyContact = () => {
  const [sendMessage] = useCreateMessageMutation()
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.companyInfoDetail?.aboutCompany?.companyHeader
  const summary = details?.summary?.companySummary
  const name = data?.companyBrand || summary?.title

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { fullName: '', phoneNumber: '', text: '' },
  })

  const onSubmit = (payload: IContactCompany) => {
    const body = {
      ...payload,
      companyId: summary?.id,
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
      })
  }

  return (
    <Row className={styles['contact']} wrap>
      <Col span={24} className={styles['contact__side--title']}>
        ارتباط با {name}
      </Col>
      <Col span={24} className={styles['contact__side--subtitle']}>
        مشاوران {name} در ساعات پاسخگویی با شما تماس می‌گیرند.
      </Col>
      <Col className={styles['contact__side']}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className={styles['contact__form']} wrap>
            <Col span={24}>
              <Input
                register={register('fullName', validation.FULL_NAME)}
                placeholder='نام و نام خانوادگی'
                prefix={<UserOutlinedIcon />}
                error={errors?.fullName}
              />
            </Col>
            <Col span={24}>
              <Input
                register={register('phoneNumber', validation.INVOICE_TELEPHONE)}
                placeholder='شماره تماس خود را وارد کنید'
                prefix={<PhoneOutlinedIcon />}
                error={errors?.phoneNumber}
              />
            </Col>
            <Col span={24}>
              <TextArea
                register={register('text', validation.MESSAGE)}
                error={errors?.text}
                placeholder='توضیحات...'
              />
            </Col>
            <Col span={24}>
              <Button
                btnType='primary'
                bgColor='white-blue-gradient'
                size='large'
                type='submit'
              >
                ارسال درخواست
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
      <Col flex='none' className={styles['contact__mail']}>
        <img src={ContactMailIcon} alt='mail' />
      </Col>
    </Row>
  )
}

export default CompanyContact
