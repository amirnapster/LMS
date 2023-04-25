// next
// @mui
import { Box } from '@mui/material'
// config
import { HEADER } from 'config-global'
import Navbar from 'components/navbar'
import Footer from 'components/footer'

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
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
        {children}
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
