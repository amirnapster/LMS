import { useSelector } from 'react-redux'
// next
// @mui
import { Box } from '@mui/material'
// config
import { HEADER } from 'config-global'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import SimpleSearch from 'containers/simpleSearch'

import type { RootState } from 'libs/redux/store'

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const { isSearching } = useSelector((state: RootState) => state.navbar)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Navbar />

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
      <Footer />
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
