import type { GridColDef } from '@mui/x-data-grid'

export const columns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'محصول',
    width: 400,
    disableColumnMenu: true,
    sortable: false,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => <span data-selector='title'>{params.value}</span>,
  },
  {
    field: 'type',
    headerName: 'دسته',
    width: 300,
    sortable: false,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => <span data-selector='title'>{params.value}</span>,
  },
  {
    field: 'productionCapacity',
    headerName: 'ظرفیت تولید',
    width: 200,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => (
      <>
        <span data-selector='title'>{params.value}</span>
        {params.row.unit && (
          <div data-selector='currency-icon'>{params.row.unit}</div>
        )}
      </>
    ),
  },
]
