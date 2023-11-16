import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// @mui
import { LoadingButton } from '@mui/lab'
import {
  Stack,
  Button,
  Rating,
  Dialog,
  Typography,
  DialogProps,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormHelperText,
} from '@mui/material'
// components
import FormProvider, { RHFTextField } from 'components/hook-form'
import { useCommentMutation } from 'libs/redux/services/karnama'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { useIntl } from 'react-intl'

// ----------------------------------------------------------------------

type FormValuesProps = {
  rating: number | null
  review: string
  name: string
  email: string
}

interface Props extends DialogProps {
  onClose: VoidFunction
}

// ----------------------------------------------------------------------

export default function ReviewNewForm({ onClose, ...other }: Props) {
  const [submitComment, { isLoading }] = useCommentMutation()
  const { details } = useSelector((state: RootState) => state.course)
  const intl = useIntl()

  const defaultValues = {
    rating: null,
    review: '',
  }

  const NewReviewSchema = Yup.object().shape({
    // name: Yup.string().required('Name is required'),
    rating: Yup.mixed().required('Rating is required'),
    review: Yup.string().required('Review is required'),
    // email: Yup.string()
    //   .required('Email is required')
    //   .email('That is not an email'),
  })

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewReviewSchema),
    defaultValues,
  })

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods

  const onSubmit = async (data: FormValuesProps) => {
    try {

      submitComment({ commentDto: { text: data.review, rate: +(data.rating as number), courseId: details?.id } })
      reset()
      onClose()
      console.log('DATA', data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog fullWidth maxWidth='sm' onClose={onClose} {...other}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle sx={{ typography: 'h3', pb: 3 }}>{intl.formatMessage({ id: 'your.review' })}</DialogTitle>

        <DialogContent sx={{ py: 0 }}>
          <Stack spacing={2.5}>
            <div>
              <Typography variant='subtitle2' gutterBottom>
                {intl.formatMessage({ id: 'score' })}:
              </Typography>

              <Controller
                name='rating'
                control={control}
                render={({ field }) => (
                  <Rating {...field} value={Number(field.value)} />
                )}
              />

              {!!errors.rating && (
                <FormHelperText error> {errors.rating?.message}</FormHelperText>
              )}
            </div>

            <RHFTextField multiline rows={3} name='review' label={`${intl.formatMessage({ id: 'your.review' })} *`} />
            {/* 
            <RHFTextField name='name' label='Name *' />

            <RHFTextField name='email' label='Email address *' /> */}
          </Stack>
        </DialogContent>

        <DialogActions>

          <LoadingButton
            color='inherit'
            type='submit'
            variant='contained'
            loading={isSubmitting}
          >
            {intl.formatMessage({id:'save.review'})}
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  )
}
