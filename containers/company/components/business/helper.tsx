import { Rating } from '@mui/material'

import type { GridColDef } from '@mui/x-data-grid'

export const columns: GridColDef[] = [
  {
    field: 'hs',
    headerName: 'کد کالا',
    width: 100,
    disableColumnMenu: true,
    sortable: false,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => <span data-selector='title'>{params.value}</span>,
  },
  {
    field: 'titleFa',
    headerName: 'سرفصل‌های کد HS',
    width: 600,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => <span data-selector='title'>{params.value}</span>,
  },
  {
    field: 'rate',
    headerName: 'قدرت',
    width: 200,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: ({ value }) => (
      <Rating data-selector='stars' name='read-only' value={value} readOnly />
    ),
  },
]
