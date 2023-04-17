import Button from 'components/ui/Button'

import type { GridColDef } from '@mui/x-data-grid'
import MillionRial from 'components/millionRial'

export const columns: GridColDef[] = [
  {
    field: 'stock',
    headerName: 'نماد',
    width: 110,
    disableColumnMenu: true,
    sortable: false,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => <span data-selector='title'>{params.value}</span>,
  },
  {
    field: 'companyName',
    headerName: 'نام شرکت',
    width: 300,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => (
      <Button href={`/company/${params.id}`} data-selector='btn'>
        {params.value}
      </Button>
    ),
  },
  {
    field: 'quantity',
    headerName: 'تعداد',
    width: 150,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => (
      <span data-selector='title'>{params.value?.toLocaleString()}</span>
    ),
  },
  {
    field: 'share',
    headerName: 'درصد',
    width: 150,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => <span data-selector='title'>{params.value}%</span>,
  },
  {
    field: 'value',
    renderHeader: () => (
      <strong data-selector='capital-header'>
        ارزش
        <span data-selector='capital-subheader'>( میلیون ریال)</span>
      </strong>
    ),
    width: 180,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => <MillionRial price={params.value} />,
  },
]
