import type { GridColDef } from '@mui/x-data-grid'

export const columns: GridColDef[] = [
  {
    field: 'orderRegistrationNumber',
    headerName: 'شماره ثبت سفارش',
    width: 150,
    disableColumnMenu: false,
    sortable: false,
    headerClassName: '',
    renderCell: (params) => <span data-selector='title'>{params.value}</span>,
  },
  {
    field: 'amount',
    headerName: 'مقدار',
    width: 250,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'currency-header',
    renderCell: (params) => (
      <div data-selector='currency-box'>
        <span data-selector='title'>
          {Math.round(params.value).toLocaleString()}
          {params.row.governmentalChar ? '*' : ''}
        </span>
        <div data-selector='currency-icon'>{params.row.currency}</div>
      </div>
    ),
  },
  {
    field: 'inRial',
    headerName: 'به میلیون ریال',
    width: 180,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'currency-header',
    renderCell: ({ value }) => (
      <span data-selector='title'>
        {Math.floor(Number(value) / 1000000).toLocaleString()}
      </span>
    ),
  },
  {
    field: 'inEuro',
    headerName: 'به یورو',
    width: 250,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'currency-header',
    renderCell: ({ value }) => (
      <span data-selector='title'> {Number(value).toLocaleString()}</span>
    ),
  },
]
