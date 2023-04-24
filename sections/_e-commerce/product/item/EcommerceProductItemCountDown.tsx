import { add } from 'date-fns'
// next
import NextLink from 'next/link'
// @mui
import { Theme, alpha, useTheme } from '@mui/material/styles'
import { Typography, Stack, SxProps, Link } from '@mui/material'
// utils
import { filterStyles } from 'utils/helpers/cssStyles'
import { fCurrency } from 'utils/helpers/formatNumber'
// routes
import { paths } from 'routes/paths'
// types
import { IProductItemProps } from 'types/product'
// theme
import { ColorSchema } from 'theme/palette'
// components
import Image from 'components/image'
import TextMaxLine from 'components/text-max-line'
//
import { ProductCountdownBlock } from '../../components'

// ----------------------------------------------------------------------

type Props = {
  product: IProductItemProps
  color?: ColorSchema
  sx?: SxProps<Theme>
}

export default function EcommerceProductItemCountDown({
  product,
  color = 'primary',
  sx,
}: Props) {
  const theme = useTheme()

  return (
    <Link
      component={NextLink}
      href={paths.eCommerce.product}
      color='inherit'
      underline='none'
    >
      <Stack
        spacing={3}
        sx={{
          p: 3,
          borderRadius: 2,
          color: `${color}.darker`,
          bgcolor: `${color}.lighter`,
          transition: theme.transitions.create('background-color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
          }),
          '&:hover': {
            color: `${color}.lighter`,
            bgcolor: `${color}.main`,
          },
          ...sx,
        }}
      >
        <Image
          src={product.coverImg}
          sx={{
            ...filterStyles(
              `drop-shadow(20px 20px 24px ${alpha(
                theme.palette.common.black,
                0.16
              )})`
            ),
          }}
        />

        <Stack spacing={1} sx={{ textAlign: 'center' }}>
          <TextMaxLine variant='subtitle2' sx={{ opacity: 0.72 }}>
            {product.name}
          </TextMaxLine>

          <Typography variant='h5'>{`From ${fCurrency(
            product.price
          )}`}</Typography>
        </Stack>

        <ProductCountdownBlock
          expired={add(new Date(), { days: 1, hours: 8 })}
        />
      </Stack>
    </Link>
  )
}
