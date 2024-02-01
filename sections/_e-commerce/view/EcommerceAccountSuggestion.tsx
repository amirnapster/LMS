// url:namatek.com/dashboard/suggest
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import FormProvider, { RHFTextField } from 'components/hook-form'
import { EcommerceAccountLayout } from '../layout'
import {
  useSuggestMutation,
} from 'libs/redux/services/karnama'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { useRouter } from 'next/router'
import { notify } from 'utils/notification'
import { useIntl } from 'react-intl'


function EcommerceAccountSuggestion() {
  const { push } = useRouter()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const [suggest, { isLoading }] = useSuggestMutation()
  const intl = useIntl()

  const schema = Yup.object().shape({
    text: Yup.string().required('متن الزامیست.'),
  })

  const defaultValues = {
    text: '',
  }

  const methods = useForm<typeof defaultValues>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const {
    handleSubmit,
setValue,
    formState: { isSubmitting },
  } = methods

  const onSubmit = async (data: typeof defaultValues) => {
    console.log(data)
    suggest({ suggestion: data }).unwrap().then(() => {
      notify({ type: 'success', message: "گزارش شما با موفقیت ذخیره شد" })
setValue('text','')
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
          گزارش خطا یا پیشنهاد
        </Typography>
        <Typography variant='body1' sx={{ mb: 3 }}>
          لطفا برای کمک در بهبود طراحی، نظرات خود را بنویسید. 
        </Typography>
        
        <Box
          rowGap={2.5}
          columnGap={2}
          display='grid'
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' }}
        >

          <RHFTextField rows={5} multiline name='text' label='متن گزارش خطا یا پیشنهاد' />

        </Box>


        <LoadingButton
          color='primary'
          size='large'
          type='submit'
          variant='contained'
          loading={isLoading}
          sx={{ marginBlockStart: '1rem' }}
        >
          {intl.formatMessage({ id: 'save' })}
        </LoadingButton>
      </FormProvider>
    </EcommerceAccountLayout >
  )
}

export default EcommerceAccountSuggestion