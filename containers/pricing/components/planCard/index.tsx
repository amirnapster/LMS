// @mui
import { Card, Stack, Button, Typography } from '@mui/material'
// types
import Label from 'components/label'
import Image from 'components/image'

import {
  Pricing,
  useLazyPaymentQuery,
  usePaymentQuery,
} from 'libs/redux/services/karnama'
import { numberSeparator } from 'utils/helpers/global'
import { useRouter } from 'next/router'

// ----------------------------------------------------------------------

type Props = {
  plan: Pricing
  index: number
}

export default function PlanCard({ plan, index }: Props) {
  const { push } = useRouter()
  const { amount, campaign, duration, package: packageType } = plan

  const [payment] = useLazyPaymentQuery()

  const starterLicense = index === 1

  const imageHandler = () => {
    switch (index) {
      case 0:
        return '/assets/icons/pricing/ic_plan_basic01.svg'

      case 1:
        return '/assets/icons/pricing/ic_plan_starter01.svg'

      case 2:
        return '/assets/icons/pricing/ic_plan_premium01.svg'

      case 3:
        return ''

      default:
        return ''
    }

    return ''
  }

  const onSubmit = () => {
    payment({
      duration,
      package: packageType,
    })
      .unwrap()
      .then((res) => {
        push((res as any).url)
      })
  }

  const campaignHandler = () => {
    if (
      campaign &&
      new Date() > new Date(campaign?.startDate as string) &&
      new Date() < new Date(campaign?.endDate as string)
    ) {
      return campaign?.amount
    }

    return 0
  }

  return (
    <Card
      sx={{
        p: 5,
        textAlign: 'center',
        boxShadow: (theme) => theme.customShadows.z8,
        ...(starterLicense && {
          py: 8,
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      {starterLicense && (
        <Label color='info' sx={{ position: 'absolute', top: 16, right: 16 }}>
          پر طرفدار
        </Label>
      )}

      <Stack spacing={5} alignItems='center'>
        <Image
          alt='avatar'
          src={imageHandler()}
          sx={{ width: 80, height: 80 }}
        />

        <Stack
          direction='column'
          alignItems='center'
          justifyContent='center'
          spacing={0.5}
        >
          <Typography
            variant={campaign ? 'h4' : 'h3'}
            component='span'
            sx={{
              textDecoration: campaign ? 'line-through' : '',
              color: campaign ? 'text.disabled' : '',
            }}
          >
            {numberSeparator((amount as number) / 10000)} تومان
          </Typography>

          {campaign && (
            <Typography variant='h3' component='span'>
              {numberSeparator((campaignHandler() as number) / 10000)} تومان
            </Typography>
          )}
        </Stack>

        <Typography variant='subtitle1' component='span'>
          {`${((duration as number) / 30).toFixed(0)} ماهه`}
        </Typography>

        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          <Typography variant='body2'>دسترسی به دوره ها</Typography>
          <Typography variant='body2'>دسترسی به دوره ها</Typography>
        </Stack>

        <Button
          onClick={onSubmit}
          size='large'
          variant='contained'
          color='primary'
          fullWidth
        >
          {/* {basicLicense && 'Current Plan'}
          {starterLicense && 'Choose Starter'}
          {premiumLicense && 'Choose Premium'} */}
          خرید اشتراک
        </Button>
      </Stack>
    </Card>
  )
}
