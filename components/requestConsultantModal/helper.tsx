import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Close } from '@mui/icons-material'
import { validation } from 'utils/helpers/validations'
import { notify } from 'utils/notification'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Input from 'components/ui/Input'
import Select from 'components/ui/Select'
import TextArea from 'components/ui/Textarea'
import Button from 'components/ui/Button'
import cn from 'classnames'

import { requestConsultantOptions } from 'utils/statics/pricingStatics'
import type { RootState } from 'libs/redux/store'
import type { RequestConsultantData } from './interface'
import styles from './requestConsultantModal.module.scss'

const RequestConsultant = ({ className }: { className?: string }) => {
  const intl = useIntl()
  const dispatch = useDispatch()
  const { asPath } = useRouter()
  // const [requestConsultant, { isLoading }] = useRequestConsultantMutation()
  // const { visible } = useSelector((state: RootState) => state.requestConsultant)

  // const closeModal = () => dispatch(setVisible(false))

  const defaultValues: RequestConsultantData = {
    name: '',
    companyName: '',
    mobile: '',
    email: '',
    topic: '',
    desc: '',
    testCheckBox: true,
  }

  const onSubmit = (data: RequestConsultantData) => {
    const userData = {
      name: data.name,
      company: data.companyName,
      mobile: data.mobile,
      tel: '',
      email: data.email,
      desc: data.desc,
      url: asPath,
      subject: 'مشاوره',
      newsLetter: data.testCheckBox,
    }
    // requestConsultant(userData).then(() => {
    //   notify({
    //     message:
    //       'درخواست شما ثبت شد؛ کارشناسان رسمیو بزودی با شما تماس خواهند گرفت.',
    //     config: { autoClose: 3000 },
    //   })
    //   closeModal()
    // })
  }

  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors },
  } = useForm({ defaultValues })

  // useEffect(() => {
  //   reset(defaultValues)
  // }, [visible])

  return (
    <Row
      direction='column'
      className={cn(className, styles['reqConsultantModal'])}
    >
      <Row
        justify='space-between'
        align='middle'
        className={styles['reqConsultantModal__header']}
      >
        <Col sm={23}>
          <p>{intl.formatMessage({ id: 'request.consultant' })}</p>
        </Col>
        <Col sm={1}>
          {/* <Button onClick={closeModal}>
            <Close />
          </Button> */}
        </Col>
      </Row>
      <p>
        لطفا فرم زیر را پر کنید تا کارشناسان رسمیو در اولین فرصت با شما تماس
        بگیرند.
      </p>
      <form
        className={styles['form']}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Row wrap justify='space-between' gutter={16}>
          <Col md={12} xs={24} xxs={24}>
            <Controller
              name='name'
              control={control}
              rules={validation.FULL_NAME}
              render={({ field }) => (
                <Input
                  required
                  field={field}
                  label={intl.formatMessage({ id: 'contact.support.name' })}
                  autoComplete='name'
                  placeholder={intl.formatMessage({
                    id: 'contact.support.enter.name',
                  })}
                  error={errors.name}
                />
              )}
            />
          </Col>
          <Col md={12} xs={24} xxs={24}>
            <Controller
              name='companyName'
              control={control}
              render={({ field }) => (
                <Input
                  field={field}
                  label={intl.formatMessage({ id: 'company.name' })}
                  autoComplete='companyName'
                  placeholder={intl.formatMessage({
                    id: 'company.enter.name',
                  })}
                  error={errors.companyName}
                />
              )}
            />
          </Col>
          <Col md={12} xs={24} xxs={24}>
            <Controller
              name='mobile'
              control={control}
              rules={validation.CONFIRM_CEO_PHONE_NUMBER}
              render={({ field }) => (
                <Input
                  required
                  field={field}
                  label={intl.formatMessage({
                    id: 'contact.support.phone.number',
                  })}
                  autoComplete='mobile'
                  placeholder={intl.formatMessage({
                    id: 'contact.support.enter.phone.number',
                  })}
                  error={errors.mobile}
                />
              )}
            />
          </Col>
          <Col md={12} xs={24} xxs={24}>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <Input
                  field={field}
                  label={intl.formatMessage({ id: 'email' })}
                  autoComplete='email'
                  placeholder={intl.formatMessage({
                    id: 'email.placeholder',
                  })}
                  error={errors.email}
                />
              )}
            />
          </Col>
          <Col xxs={24}>
            <Controller
              name='topic'
              control={control}
              rules={validation.required('لطفا موضوع مورد نظر را انتخاب کنید')}
              render={({ field }) => (
                <Select
                  placeholder='موضوع مورد نظر خود را انتخاب کنید'
                  required
                  field={field}
                  label={intl.formatMessage({ id: 'topic' })}
                  error={errors.topic}
                >
                  {requestConsultantOptions.map(({ title, value }) => (
                    <option key={title} value={value}>
                      {title}
                    </option>
                  ))}
                </Select>
              )}
            />
          </Col>
          <Col span={24}>
            <TextArea
              label='توضیحات'
              register={register('desc')}
              placeholder={intl.formatMessage({
                id: 'topic.placeholder',
              })}
            />
          </Col>
          <Col span={24} data-selector='checkbox'>
            <label htmlFor='req-checkbox'>
              <input
                id='req-checkbox'
                type='checkbox'
                {...register('testCheckBox')}
              />
              مایل به عضویت در خبرنامه رسمیو هستم
            </label>
          </Col>
          <Row data-selector='buttons-wrapper' align='middle' justify='end'>
            {/* <Button
              btnType='ghost'
              data-selector='cancel-btn'
              ripple
              onClick={closeModal}
            >
              {intl.formatMessage({ id: 'cancel' })}
            </Button>
            <Button
              type='submit'
              data-selector='submit-btn'
              loading={isLoading}
              btnType='primary'
              ripple
            >
              {intl.formatMessage({ id: 'confirm.send.request' })}
            </Button> */}
          </Row>
        </Row>
      </form>
    </Row>
  )
}

RequestConsultant.defaultProps = {
  className: '',
}

export default RequestConsultant
