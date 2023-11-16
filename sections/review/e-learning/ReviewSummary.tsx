// @mui

import {
  Paper,
  Stack,
  Rating,
  Button,
  RadioGroup,
  Typography,
} from '@mui/material'
// utils
import { fShortenNumber } from 'utils/helpers/formatNumber'
// components
import Iconify from 'components/iconify'
//
import { ReviewProgress } from '../components'
import { useIntl } from 'react-intl'

// ----------------------------------------------------------------------

type Props = {
  reviewsNumber: number
  ratingsNumber: number
  onOpenForm: VoidFunction
}

export default function ReviewSummary({
  reviewsNumber,
  ratingsNumber,
  onOpenForm,
}: Props) {
  const intl = useIntl()
  return (
    <Paper variant='outlined' sx={{ p: 4, pr: 3, borderRadius: 2 }}>
      <Stack spacing={3}>
        <Stack spacing={3} direction='row' alignItems='center'>
          <Typography variant='h1'> {ratingsNumber}</Typography>

          <Stack spacing={0.5}>
            <Rating value={ratingsNumber} readOnly precision={0.1} />
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              {fShortenNumber(reviewsNumber)} {intl.formatMessage({id:'reviews'})}
            </Typography>
          </Stack>
        </Stack>

        {/* <RadioGroup>
          <ReviewProgress />
        </RadioGroup> */}

        <Button
          size='large'
          fullWidth
          startIcon={<Iconify icon='carbon:edit' width={24} />}
          onClick={onOpenForm}
        >
          {intl.formatMessage({id:'your.review'})}
        </Button>
      </Stack>
    </Paper>
  )
}
