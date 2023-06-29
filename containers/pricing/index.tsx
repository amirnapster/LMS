import { Box, Container, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import { _pricing01 } from '_mock'
import { CampaignPrice, useLazyPaymentQuery, usePricingQuery } from 'libs/redux/services/karnama'
import { CheckOutlined } from '@mui/icons-material'
import Row from 'components/ui/Row'
import PlanCard from 'containers/pricing/components/planCard'
import Logo from 'public/svg/layout/navbar-logo.svg'

import styles from './pricing.module.scss'
import Button from 'components/ui/Button'
import { numberSeparator } from 'utils/helpers/global'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { useRouter } from 'next/router'

import { setVisible } from 'libs/redux/slices/auth'
import Authentication from 'containers/authentication'
import Modal from 'components/ui/Modal'
import Iconify from 'components/iconify/Iconify'


const Pricing = () => {
  const { push } = useRouter()
  const { packageType } = useSelector((state: RootState) => state.auth)
  const { data } = usePricingQuery()
  const [payment] = useLazyPaymentQuery()
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const { visible } = useSelector((state: RootState) => state.auth)
  const [backdropDisable, setBackdropDisable] = useState(false)

  const closeModal = () => dispatch(setVisible({ visible: false }))


  const onSubmit = (duration: number) => {
    if (!accessToken) {
      dispatch(setVisible({ visible: true, mode: 'otp' }))
      return
    }
    payment({
      duration,
      package: packageType,
    })
      .unwrap()
      .then((res) => {
        push((res as any).url)
      })
  }

  const campaignHandler = (campaign: CampaignPrice) => {
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
    <Row className={styles['pricing']} direction='column' align='top'>

      <Row className={styles['pricing--logo']}>
        <Link href="/">
          <Logo />
        </Link>
      </Row>

      <Container className={styles['pricing--container']}>
        <span className={styles['pricing--title']}>خرید اشتراک نماتک</span>
        <span>
          با خرید اشتراک به بیش از 200 ساعت آموزش دسترسی دارید.
        </span>

        <Row direction='column' className='w-100 mt-3' gap={3}>

          {data?.map(({ amount, campaign, duration, title, badge }) => (
            <Row onClick={() => onSubmit(duration as number)} className={styles['pricing__card']} justify='space-between' align='middle'>
              {badge &&
                <Button className={styles['pricing--badge']}>
                  {badge}
                </Button>}

              <span>{title}</span>
              <Row align='middle' gap={2}>

                {campaign && <span className={styles['pricing--discount']}> {numberSeparator((amount as number) / 10000)} هزار تومان</span>}

                <Button btnType='ghost'>
                  {numberSeparator(((campaign ? campaignHandler(campaign) : amount) as number) / 10000)} هزار تومان
                </Button>
                <Iconify width={36} icon="carbon:chevron-left" sx={{ color: 'primary.main' }} />
              </Row>
            </Row>
          ))}

        </Row>

        <Row className='mt-3' direction='column' gap={1}>

          <Row>
            <Row align='middle' gap={0}>
              <CheckOutlined color='primary' />
              <span>تماشای فیلم‌، به صورت هم‌زمان از ۳ دستگاه (تلویزیون، کامپیوتر، گوشی یا تبلت)
              </span>
            </Row>
          </Row>
        </Row>

        <Divider sx={{ marginBlockStart: "1rem" }} />

      </Container >
      <Modal
        visible={visible}
        onClose={closeModal}
        backdropDisable={backdropDisable}
      >
        <Authentication />
      </Modal>
    </Row>
  )
}

export function PricingDemo() {
  const { data } = usePricingQuery()

  return (
    <Container
      sx={{
        minHeight: 1,
        pt: { xs: 13, md: 16 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant='h3' align='center' paragraph>
        Flexible plans for your
        <br /> community&apos;s size and needs
      </Typography>

      <Typography align='center' sx={{ color: 'text.secondary' }}>
        Choose your plan and make modern online conversation magic
      </Typography>

      {/* <Stack sx={{ my: { xs: 5, md: 8 } }}>
        <ToggleButtonGroup
          exclusive
          color='standard'
          value={subscription}
          onChange={handleChangeSubscription}
          sx={{
            mx: 'auto',
            border: 0,
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
            '& .MuiToggleButton-root': {
              m: 0,
              typography: 'overline',
              color: 'text.secondary',
              '&:hover': {
                bgcolor: 'transparent',
              },
              '&.Mui-selected': {
                bgcolor: 'text.primary',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                '&:hover': {
                  bgcolor: 'text.primary',
                },
              },
            },
          }}
        >
          <ToggleButton value='monthly'>MONTHLY</ToggleButton>
          <ToggleButton value='yearly'>YEARLY (save 10%)</ToggleButton>
        </ToggleButtonGroup>
      </Stack> */}

      <Box
        sx={{
          gap: 4,
          marginBlockStart: '4rem',
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            xl: 'repeat(3, 1fr)',
          },
        }}
      >
        {data?.map((plan, index) => (
          <PlanCard key={plan.duration} plan={plan} index={index} />
        ))}
      </Box>
    </Container>
  )
}


export default Pricing