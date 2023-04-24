import { createTheme, alpha } from '@mui/material/styles'
import { faIR } from '@mui/material/locale'
import { faIR as datagridFa } from '@mui/x-data-grid'

// Create a theme instance.
const oldTheme = createTheme(
  {
    direction: 'rtl',
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
    props: {
      MuiTablePagination: {
        labelRowsPerPage: 'تعداد سطر هر 1: ',
        labelDisplayedRows: ({ from, to, count }) =>
          `${from} - ${to} از ${
            count !== 10000 ? count : `بیش‌از ${count} نتیجه`
          }`,
      },
    },
    customShadows: {
      primary: `0 8px 16px 0 ${alpha('#013b81', 0.24)}`,
      secondary: `0 8px 16px 0 ${alpha('#961b1e', 0.24)}`,
    },
  },
  faIR,
  datagridFa
)

export default oldTheme
