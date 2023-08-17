import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Row from 'components/ui/Row'

import styles from './completeProfile.module.scss'
import FormProvider from 'components/hook-form/FormProvider'
import { RHFTextField } from 'components/hook-form'
import { LoadingButton } from '@mui/lab'
import {  useSetInfoMutation } from 'libs/redux/services/karnama'
import { notify } from 'utils/notification'
import { useDispatch } from 'react-redux'
import { setVisible } from 'libs/redux/slices/auth'

const CompleteProfileModal = () => {
  const dispatch = useDispatch()
  const [setInfo, { isLoading }] = useSetInfoMutation()


  const EcommerceAccountPersonalSchema = Yup.object().shape({
    fullname: Yup.string().required('نام و نام خانوادگی الزامیست.'),
    companyName: Yup.string(),
    jobTitle: Yup.string(),
  })

  const defaultValues = {
    fullname: '',
    companyName: '',
    jobTitle: '',
  }

  const methods = useForm<typeof defaultValues>({
    resolver: yupResolver(EcommerceAccountPersonalSchema),
    defaultValues,
  })

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods

  const onSubmit = async (data: typeof defaultValues) => {
    setInfo({ setInfoModel: data }).unwrap().then(() => {
      notify({ type: 'success', message: "اطلاعات شما با موفقیت ذخیره شد" })
      dispatch(setVisible({ visible: false }))
    })
  }

  return (
    <Row className={styles['profile']} direction='column' align='middle'>
      <span className={styles['profile--title']}>نام  خود را وارد کنید</span>
      <span className={styles['profile--subTitle']}>
      </span>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

        <RHFTextField name='fullname' label='نام و نام خانوادگی' />

        <LoadingButton
          color='inherit'
          size='large'
          type='submit'
          variant='contained'
          className='w-100'
          loading={isLoading}
          sx={{ marginBlockStart: '1rem' }}
        >
          ثبت و ورود
        </LoadingButton>
      </FormProvider>
      {/* <Button
        className='w-100 ms-2'
        btnType='primary'
        size='large'
        href='/dashboard/profile/'
        onClick={() => dispatch(setVisible({ visible: false }))}
      >
        تکمیل پروفایل
      </Button>

      <Button
        className='w-100 ms-half'
        btnType='ghost'
        size='large'
        onClick={() => dispatch(setVisible({ visible: false }))}
      >
        بعدا؛ ورود به نماتک
      </Button> */}
    </Row>
  )
}

export default CompleteProfileModal
