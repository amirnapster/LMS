import { Box } from '@mui/material'
import { HEADER } from 'config-global'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import SimpleSearch from 'containers/simpleSearch'
import Authentication from 'containers/authentication'
import Modal from 'components/ui/Modal'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from 'libs/redux/store'
import { clearAuth, setVisible } from 'libs/redux/slices/auth'
import { useState } from 'react'
import { useRouter } from 'next/router'

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const { asPath } = useRouter()
  const { isSearching } = useSelector((state: RootState) => state.navbar)

  const dispatch = useDispatch()
  const { visible } = useSelector((state: RootState) => state.auth)

  const closeModal = () => dispatch(setVisible({ visible: false }))

  const [backdropDisable, setBackdropDisable] = useState(false)

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
          flexGrow: 1,
        }}
      >
        {/* <Spacing /> */}
        {/* {children} */}
        {isSearching ? <SimpleSearch /> : children}
      </Box>

      {!asPath.startsWith('/play') && <Footer />}
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
