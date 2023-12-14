import NextLink from 'next/link'
import { alpha } from '@mui/material/styles'
import {
  Link,
  Stack,
  Drawer,
  Avatar,
  Divider,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material'
import useResponsive from 'utils/hooks/useResponsive'
import useActiveLink from 'utils/hooks/useActiveLink'
import { NAV } from 'config-global'
import { paths } from 'routes/paths'
import { useDispatch } from 'react-redux'
import { clearAuth } from 'libs/redux/slices/auth'
import _mock from '_mock'
import Iconify from 'components/iconify'
import TextMaxLine from 'components/text-max-line'
import { useInfoMutation } from 'libs/redux/services/karnama'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

// ----------------------------------------------------------------------

const navigations = [

  {
    title: 'navbar.profile.profile',
    path: '/dashboard/profile/',
    icon: <Iconify icon='ph:user' />,
  },
  {
    title: 'navbar.profile.dashboard',
    path: '/dashboard/',
    icon: <Iconify icon='mdi:human-male-board-poll' />,
  },
  {
    title: 'navbar.profile.gift',
    path: '/dashboard/gift/',
    icon: <Iconify icon='mdi:gift-outline' />,
  },
  {
    title: 'تاریخچه سفارش‌ها',
    path: '/dashboard/orderhistory/',
    icon: <Iconify icon='mdi:history' />,
  },
  {
    title: 'لیست کارکنان',
    path: '/dashboard/company/users/',
    icon: <Iconify icon='pepicons-print:people' />,
    forCompanyAdmin: true
  },
]

// ----------------------------------------------------------------------

type Props = {
  open: boolean
  onClose: VoidFunction
}

export default function EcommerceAccountMenu({ open, onClose }: Props) {
  const intl = useIntl()
  const isMdUp = useResponsive('up', 'md')
  const dispatch = useDispatch()
  const [getInfo, { data }] = useInfoMutation()

  useEffect(() => {
    getInfo()
  }, [])

  const renderContent = (
    <Stack
      sx={{
        flexShrink: 0,
        borderRadius: 2,
        width: 1,
        ...(isMdUp && {
          width: NAV.W_DRAWER,
          border: (theme) =>
            `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        }),
      }}
    >
      <Stack spacing={2} sx={{ p: 3, pb: 2 }}>
        <Stack
          spacing={2}
          direction='row'
          alignItems='center'
          justifyContent='center'
        >
          <Avatar src='' sx={{ width: 64, height: 64 }} />
          {/* <Stack
            direction='row'
            alignItems='center'
            sx={{
              typography: 'caption',
              cursor: 'pointer',
              '&:hover': { opacity: 0.72 },
            }}
          >
            <Iconify icon='carbon:edit' sx={{ mr: 1 }} />
            تغییر عکس
          </Stack> */}
        </Stack>

        <Stack alignItems='center' spacing={0.5}>
          <TextMaxLine variant='subtitle1' line={1}>
            {data?.fullname}
          </TextMaxLine>
          <TextMaxLine variant='subtitle1' line={1}>
            {data?.username}
          </TextMaxLine>
          {!!data?.customer?.credit && (
               <TextMaxLine variant='subtitle2' line={1}>
               اعتبار شما {data.customer.credit.toLocaleString()} تومان
             </TextMaxLine>
          )}
          {/* <TextMaxLine
            variant='body2'
            line={1}
            sx={{ color: 'text.secondary' }}
          >
            nannie_abernathy70@yahoo.com
          </TextMaxLine> */}
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack sx={{ my: 1, px: 2 }}>
        {navigations.map((item) => {
          return (!item.forCompanyAdmin || data?.isCompanyAdmin) &&
            <MenuItem key={item.title} item={item} />
        }
        )}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack sx={{ my: 1, px: 2 }}>
        <ListItemButton
          sx={{
            px: 1,
            height: 44,
            borderRadius: 1,
          }}
          onClick={() => dispatch(clearAuth())}
        >
          <ListItemIcon>
            <Iconify icon='carbon:logout' />
          </ListItemIcon>
          <ListItemText
            primary={intl.formatMessage({id:'navbar.profile.logout'})}
            primaryTypographyProps={{
              typography: 'body2',
            }}
          />
        </ListItemButton>
      </Stack>
    </Stack>
  )

  return (
    <>
      {isMdUp ? (
        renderContent
      ) : (
        <Drawer
          open={open}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              width: NAV.W_DRAWER,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  )
}

// ----------------------------------------------------------------------

type MenuItemProps = {
  item: {
    title: string
    path: string
    icon: React.ReactNode
  }
}

function MenuItem({ item }: MenuItemProps) {
  const { asPath } = useRouter()
  const intl = useIntl()
  return (
    <Link
      component={NextLink}
      key={item.title}
      href={item.path}
      color={asPath === item.path ? 'primary' : 'inherit'}
      underline='none'
    >
      <ListItemButton
        sx={{
          px: 1,
          height: 44,
          borderRadius: 1,
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          primary={intl.formatMessage({ id: item.title }) == item.title ? item.title : intl.formatMessage({ id: item.title })}
          primaryTypographyProps={{
            typography: 'body2',
            ...(asPath === item.path && {
              typography: 'subtitle2',
            }),
          }}
        />
      </ListItemButton>
    </Link>
  )
}
