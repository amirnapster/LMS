import { useMemo } from 'react'
// @mui
import { CssBaseline } from '@mui/material'
import {
  alpha,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles'
// components
import { useSettingsContext } from 'components/settings'
//
import palette from './palette'
import typography from './typography'
import shadows from './shadows'
import componentsOverride from './overrides'
import customShadows from './customShadows'
import GlobalStyles from './globalStyles'

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

function CustomTheme({ children }: Props) {
  const { themeMode, themeDirection } = useSettingsContext()

  const themeOptions: any = useMemo(
    () => ({
      direction: themeDirection,
      palette: {
        primary: {
          main: '#008d67',
        },
        secondary: {
          main: '#f7ed26',
        },
      },
      shape: {
        borderRadius: 12,
      },
      customShadows: customShadows(themeMode),
      typography,
      shadows: shadows(themeMode),
    }),
    [themeDirection, themeMode]
  )

  const theme = createTheme(themeOptions)

  theme.components = componentsOverride(theme)

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
  )
}

export default CustomTheme
