import { Box, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { useIntl } from 'react-intl'
import { HEADER } from 'config-global'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import SimpleSearch from 'containers/simpleSearch'
import Authentication from 'containers/authentication'
import Modal from 'components/ui/Modal'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from 'libs/redux/store'
import { clearAuth, setVisible } from 'libs/redux/slices/auth'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MyContext from 'utils/context'
import Button from 'components/ui/Button'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import useResponsive from 'utils/hooks/useResponsive'

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const { asPath, push } = useRouter()
  const intl = useIntl()
  const isMdUp = useResponsive('up', 'md')

  const { isSearching } = useSelector((state: RootState) => state.navbar)
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const { campaign } = useContext(MyContext)

  const dispatch = useDispatch()
  const { visible } = useSelector((state: RootState) => state.auth)

  const closeModal = () => dispatch(setVisible({ visible: false }))

  const [backdropDisable, setBackdropDisable] = useState(false)

  interface Paths {
    [key: string]: number;
  }
  const paths: Paths = {
    '/courses/': 1,
    '/dashboard/mycourses/': 2,
    '/dashboard/u/profile/': 3
  };

  const [value, setValue] = useState(-1);

  useEffect(() => {
    setValue((paths[asPath] || 0) - 1);
  }, [asPath]);

  const handleBottomMenuChange = useCallback((v: number) => {
    if (v > 0 && !accessToken) {
      dispatch(setVisible({ visible: true, mode: 'otp' }))
      return;
    }
    setValue(v);
    const path = Object.entries(paths).find(([key, value]) => value === v + 1);
    if (path) {
      push(path[0]);
    }
  }, [accessToken]);

  // @ts-ignore:Unreachable code error
  window.ShowLogin = (force: boolean) => {
    dispatch(setVisible({ visible: true }))
    if (force) setBackdropDisable(true)
  }
  // @ts-ignore:Unreachable code error

  window.ClearAuth = () => {
    dispatch(clearAuth())
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      {campaign && (
        <div data-selector='campaign-wrapper'>
          <Button href='https://inre.ir/register/step1?utm_source=ProNamatek&utm_medium=Banner&utm_campaign=lastweek' target='_blank' btnType='secondary'>
            نماتک، مجری آموزشی آزمون استخدامی
          </Button>
        </div>
      )}
      <Navbar />
      <Modal
        visible={visible}
        onClose={closeModal}
        backdropDisable={backdropDisable}
      >
        <Authentication />
      </Modal>

      <Box
        component='main'
        sx={{
          flexGrow: 1
        }}
      >
        {/* <Spacing /> */}
        {/* {children} */}
        {isSearching ? <SimpleSearch /> : children}
      </Box>

      {!asPath.startsWith('/play') && <Footer />}
      {isMdUp ||


        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, boxShadow: '0px -3px 5px rgba(0,0,0,0.15)' }} >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              handleBottomMenuChange(newValue);
            }}
          >
            <BottomNavigationAction label="همه آموزش‌ها" icon={<CategoryOutlinedIcon />} />
            <BottomNavigationAction label="آموزش‌های من" icon={<SchoolOutlinedIcon />} />
            <BottomNavigationAction label="نماتک من" icon={<PersonOutlinedIcon />} />
          </BottomNavigation>
        </Paper>}
    </Box>
  )
}

// ----------------------------------------------------------------------

function Spacing() {
  return (
    <Box
      sx={{
        height: { xs: HEADER.H_MOBILE, md: HEADER.H_MAIN_DESKTOP },
      }}
    />
  )
}
