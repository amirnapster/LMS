import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import FormProvider, { RHFTextField } from 'components/hook-form'
import { EcommerceAccountLayout } from '../layout'
import {
  useInfoMutation,
  useSetInfoMutation,
} from 'libs/redux/services/karnama'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { useRouter } from 'next/router'
import { notify } from 'utils/notification'

function EcommerceAccountPersonalView() {
  const [getInfo, { data: dataInfo }] = useInfoMutation()
  const [setInfo, { isLoading }] = useSetInfoMutation()
  const { push } = useRouter()
  const { accessToken } = useSelector((state: RootState) => state.auth)

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
    setInfo({ setInfoModel: data })
    notify({ type: 'success', message: "اطلاعات شما با موفقیت ذخیره شد" })
  }

  useEffect(() => {
    if (dataInfo) {
      setValue('fullname', dataInfo?.fullname as string)
      setValue('companyName', dataInfo.companyName as string)
      setValue('jobTitle', dataInfo.jobTitle as string)
    }
  }, [dataInfo])

  useEffect(() => {
    getInfo()
  }, [])

  useEffect(() => {
    if (!accessToken) {
      push('/')
      return
    }
  }, [accessToken])

  return (
    <EcommerceAccountLayout>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h5' sx={{ mb: 3 }}>
          اطلاعات فردی
        </Typography>
        <Box
          rowGap={2.5}
          columnGap={2}
          display='grid'
          gridTemplateColumns={{ xs: 'repeat(3, 1fr)' }}
        >
          <RHFTextField name='fullname' label='نام و نام خانوادگی' />

          <RHFTextField name='companyName' label='عنوان شغلی' />

          <RHFTextField name='jobTitle' label='نام شرکت' />
        </Box>

        <LoadingButton
          color='inherit'
          size='large'
          type='submit'
          variant='contained'
          loading={isLoading}
          sx={{ marginBlockStart: '3rem' }}
        >
          اعمال تغییرات
        </LoadingButton>
      </FormProvider>
    </EcommerceAccountLayout>
  )
}

export default EcommerceAccountPersonalView
