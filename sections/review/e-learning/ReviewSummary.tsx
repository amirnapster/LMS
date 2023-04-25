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
  return <span> </span>
}
