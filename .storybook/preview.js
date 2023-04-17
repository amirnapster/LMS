import { CssBaseline, ThemeProvider } from '@mui/material'
import oldTheme from '../Theme'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}
export default preview
export const withMuiTheme = (Story) => (
  <ThemeProvider theme={oldTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
)

export const decorators = [withMuiTheme]
