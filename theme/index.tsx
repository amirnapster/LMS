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

export default function ThemeProvider({ children }: Props) {
  const { themeMode, themeDirection } = useSettingsContext()

  const themeOptions: any = useMemo(
    () => ({
      direction: themeDirection,
      palette: {
        primary: {
          main: '#013b81',
        },
        secondary: {
          main: '#961b1e',
        },
      },
      shape: {
        borderRadius: 12,
      },
      customShadows: {
        primary: `0 8px 16px 0 ${alpha('#013b81', 0.24)}`,
        secondary: `0 8px 16px 0 ${alpha('#961b1e', 0.24)}`,
      },
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
