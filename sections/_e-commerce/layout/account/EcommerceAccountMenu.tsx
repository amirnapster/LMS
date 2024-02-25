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
  Box,
  Tabs,
  Tab,
} from '@mui/material'
import useResponsive from 'utils/hooks/useResponsive'
import { NAV } from 'config-global'
import { useDispatch, useSelector } from 'react-redux'
import { clearAuth } from 'libs/redux/slices/auth'
import _mock from '_mock'
import Iconify from 'components/iconify'
import TextMaxLine from 'components/text-max-line'
import { useInfoMutation, useLogoutMutation } from 'libs/redux/services/karnama'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import { RootState } from 'libs/redux/store'
import { TreeView } from '@mui/x-tree-view/TreeView';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { StyledTreeItem } from 'components/treeMenu'
import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants'
// ----------------------------------------------------------------------

export const companyNavigations = [
  {
    title: 'داشبورد',
    path: '/dashboard/c/d/',
    apath: `Home`,
    icon: <Iconify icon='mdi:view-dashboard' />
  },
  {
    title: 'لیست کارکنان',
    path: '/dashboard/c/users/',
    apath: `Users`,
    icon: <Iconify icon='mdi:account-group' />
  },
  {
    title: 'گروه بندی سازمان',
    path: '/dashboard/c/segment/',
    apath: `Segment`,
    icon: <Iconify icon='mdi:format-list-group' />
  },
  {
    title: 'قالب پیامک',
    path: '/dashboard/c/smstemplate/',
    apath: 'SMSTemplate',
    icon: <Iconify icon='mdi:file-document-edit' />
  }, {
    title: 'ارسال شده',
    path: '/dashboard/c/sentlist/',
    apath: 'SentSMS',
    icon: <Iconify icon='mdi:send' />
  },
  // {
  //   title: 'پیامک',
  //   path: '',
  //   apath: '',
  //   icon: <Iconify icon='mdi:message-text' />,
  //   sub: [
  //     {
  //       title: 'قالب پیامک',
  //       path: '/dashboard/c/smstemplate/',
  //       apath: 'SMSTemplate',
  //       icon: <Iconify icon='mdi:file-document-edit' />
  //     }, {
  //       title: 'ارسال شده',
  //       path: '/dashboard/c/sentlist/',
  //       apath: 'SentSMS',
  //       icon: <Iconify icon='mdi:send' />
  //     }
  //   ]
  // },
  {
    title: 'آزمون',
    path: '/dashboard/c/certificate/',
    apath: 'Exams',
    icon: <Iconify icon='bi:check-square' />,
  },
]
export function currentCompanyPage(path: string) {
  for (let i = 0; i < companyNavigations.length; i++) {
    if (!companyNavigations[i]) continue
    if (companyNavigations[i].path == path)
      return companyNavigations[i]
    if (companyNavigations[i].sub)
      for (let j = 0; j < (companyNavigations?.[i].sub?.length as number); j++)
        if (companyNavigations[i].sub?.[j].path == path)
          return companyNavigations[i]?.sub?.[j]
  }

}

const navigations = [

  {
    title: 'navbar.profile.profile',
    path: '/dashboard/profile/',
    icon: <Iconify icon='ph:user' />,
  },
  {
    title: 'navbar.profile.dashboard',
    path: '/dashboard/mycourses/',
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
    title: 'آزمون و مدرک',
    path: '/dashboard/exam/',
    icon: <Iconify icon='mdi:help-box-multiple-outline' />,
  },
  {
    title: 'گزارش ایراد در سامانه',
    path: '/dashboard/suggest/',
    icon: <Iconify icon='mdi:ladybug' />,
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
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const { push, reload, asPath, replace } = useRouter()
  const [getInfo, { data }] = useInfoMutation()
  const [logoutUser] = useLogoutMutation()
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  useEffect(() => {
    onClose()
  }, [asPath])

  useEffect(() => {
    if (accessToken)
      getInfo()
  }, [accessToken])

  const logout = () => {
    logoutUser()
      .then(() => {
        dispatch(clearAuth())
        replace('/')
      })
  }
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
    
      <Stack sx={{ my: 1, px: 2 }}>
        {data?.isCompanyAdmin &&
          <Box sx={{ width: '100%'}}>
            <Tabs value={tab} onChange={handleChange} centered >
              <Tab label="شرکت" id='1' />
              <Tab label="شخص" id='2' />
            </Tabs>
          </Box>
          }
        {data?.isCompanyAdmin && tab == 0 ?
          <> <Stack spacing={2} sx={{ p: 3, pb: 2 }}>
          <Stack
            spacing={2}
            direction='row'
            alignItems='center'
            justifyContent='center'
          >
            <Avatar src='' sx={{ width: 64, height: 64 }} />
           
          </Stack>
  
          <Stack alignItems='center' spacing={0.5}>
            <TextMaxLine variant='subtitle1' line={1}>
              {data?.inCompanyTitle}
            </TextMaxLine>
            {/* <TextMaxLine variant='subtitle1' line={1}>
              {data?.username}
            </TextMaxLine>
            {!!data?.customer?.credit && (
              <TextMaxLine variant='subtitle2' line={1}>
                اعتبار شما {data.customer.credit.toLocaleString()} تومان
              </TextMaxLine>
            )} */}
          </Stack>
        </Stack><TreeView
            onNodeSelect={(e, nodeIds) => nodeIds && nodeIds.length > 1 && (asPath == nodeIds ? reload() : push(nodeIds))}
            defaultSelected={asPath}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowLeftIcon />}
            defaultEndIcon={<div style={{ width: 20 }} />}
            sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto', my: 1 }}
          >
            {data?.isCompanyAdmin && companyNavigations.map((item) =>
              <StyledTreeItem nodeId={item.path} labelText={item.title} labelIcon={item.icon} >
                {item.sub?.map((s) =>
                  <StyledTreeItem nodeId={s.path} labelText={s.title} labelIcon={s.icon} />)
                }
              </StyledTreeItem>
            )}

          </TreeView></>
          :
          <>  <Stack spacing={2} sx={{ p: 3, pb: 2 }}>
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
          </Stack>
        </Stack>
          <TreeView
            onNodeSelect={(e, nodeIds) => nodeIds && push(nodeIds)}
            defaultSelected={asPath}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowLeftIcon />}
            defaultEndIcon={<div style={{ width: 20 }} />}
            sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto', my: 1 }}
          >
            {navigations.map((item) =>
              <StyledTreeItem nodeId={item.path} labelText={item.title} labelIcon={item.icon} />
            )}

          </TreeView></>
        }
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack sx={{ my: 1, px: 2 }}>
        <ListItemButton
          sx={{
            px: 1,
            height: 44,
            borderRadius: 1,
          }}
          onClick={logout}
        >
          <ListItemIcon>
            <Iconify icon='carbon:logout' color="#e8422c" />
          </ListItemIcon>
          <ListItemText
            primary={intl.formatMessage({ id: 'navbar.profile.logout' })}
            primaryTypographyProps={{
              typography: 'body2',
              color: "#e8422c"
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
