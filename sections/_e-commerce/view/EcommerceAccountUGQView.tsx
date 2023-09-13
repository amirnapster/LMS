import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import FormProvider, { RHFTextField } from 'components/hook-form'
import { EcommerceAccountLayout } from '../layout'
import {
  useCreateUgqMutation,
  useGetGiftQuery,
  useInfoMutation,
  useLazyGetGiftQuery,
  useSetInfoMutation,
} from 'libs/redux/services/karnama'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { useRouter } from 'next/router'
import { notify } from 'utils/notification'

function UGQView() {
  const [createUgq, { isLoading }] = useCreateUgqMutation()

  const { query, push } = useRouter()
  const { accessToken } = useSelector((state: RootState) => state.auth)

  const EcommerceAccountPersonalSchema = Yup.object().shape({
    question: Yup.string().required('متن سوال الزامیست'),
  })

  const defaultValues = {
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    timeOfVideo: 0,
    lessonId: 0
  }

  const methods = useForm<typeof defaultValues>({
    resolver: yupResolver(EcommerceAccountPersonalSchema),
    defaultValues,
  })

  const {
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
  } = methods

  const onSubmit = async (params: typeof defaultValues) => {
    params.lessonId = Number(query.id)
    params.timeOfVideo = Math.floor(Number(query.tov))
    console.log(params)
    createUgq({ createUgqModel: params }).unwrap().then((res) => {
      notify({ type: 'success', message: 'سوال شما با موفقیت ثبت شد' })
      reset()
    }).catch(() => {
      notify({ type: 'warn', message: 'خطا در ثبت سوال' })

    })
  }


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
          طراحی سوال جدید
        </Typography>
        <p>با طرح سوال از آموزش‌های نماتک، به ما در ایجاد بانک سوالات با کیفیت کمک کنید.</p>

        <Box
          rowGap={2.5}
          columnGap={2}
          display='grid'
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)' }}
        >
          <RHFTextField multiline name='question' label='متن سوال' />
          <RHFTextField multiline name='answer1' label='جواب صحیح' />
          <RHFTextField multiline name='answer2' label='جواب غلط' />
          <RHFTextField multiline name='answer3' label='جواب غلط' />
          <RHFTextField multiline name='answer4' label='جواب غلط' />

        </Box>

        <LoadingButton
          color='inherit'
          size='large'
          type='submit'
          variant='contained'
          loading={isLoading}
          sx={{ marginBlockStart: '3rem', width: '100%' }}
        >
          ثبت سوال جدید
        </LoadingButton>
      </FormProvider>
    </EcommerceAccountLayout>
  )
}

export default UGQView
