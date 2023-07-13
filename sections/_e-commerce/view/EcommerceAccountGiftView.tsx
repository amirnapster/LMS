import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import FormProvider, { RHFTextField } from 'components/hook-form'
import { EcommerceAccountLayout } from '../layout'
import {
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

function EcommerceAccountGiftView() {
  const [getGift, { isLoading }] = useLazyGetGiftQuery()
  const [getInfo, { data }] = useInfoMutation()

  const { push } = useRouter()
  const { accessToken } = useSelector((state: RootState) => state.auth)

  const EcommerceAccountPersonalSchema = Yup.object().shape({
    code: Yup.string().required('ورود کد الزامیست.'),
  })

  const defaultValues = {
    code: '',
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

  const onSubmit = async (params: typeof defaultValues) => {
    getGift({ code: params.code }).then((res) => {
      if (res.isSuccess) {
        notify({ type: 'success', message: 'کد تخفیف با موفقیت اعمال شد' })
        getInfo().then((res) => {
        // const date = (res as any).data?.premium?.untilDate
        // notify({ type: 'success', message: `اشتراک شما تا ${date} اعتبار دارد` })
        // console.log(data)

        })
      }
      else
        notify({ type: 'error', message: "کد وارد شده صحیح نیست" })
  

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
          ثبت کد تخفیف
        </Typography>

        <Box
          rowGap={2.5}
          columnGap={2}
          display='grid'
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)' }}
        >
          <RHFTextField name='code' label='کد تخفیف' />

        </Box>

        <LoadingButton
          color='inherit'
          size='large'
          type='submit'
          variant='contained'
          loading={isLoading}
          sx={{ marginBlockStart: '3rem', width: '100%' }}
        >
          ثبت کد
        </LoadingButton>
      </FormProvider>
    </EcommerceAccountLayout>
  )
}

export default EcommerceAccountGiftView
