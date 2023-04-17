import { createTheme } from '@mui/material/styles'
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
    spacing: [8, 12, 16, 24, 32, 36, 40, 48, 56, 64, 72, 80, 88],
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
  },
  faIR,
  datagridFa
)

export default oldTheme
