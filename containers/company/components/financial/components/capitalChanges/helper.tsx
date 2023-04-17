import Button from 'components/ui/Button'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import MillionRialComponent from 'components/millionRial'

import { WEB } from 'utils/statics/routes/web'
import type { GridColDef } from '@mui/x-data-grid'

dayjs.extend(jalaliday)

export const columns: GridColDef[] = [
  {
    field: 'newspaperDate',
    headerName: 'تاریخ',
    width: 200,
    disableColumnMenu: true,
    sortable: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => (
      <span data-selector='date'>
        {dayjs(params.value)
          .calendar('jalali')
          .locale('fa')
          .format('YYYY/MM/DD')}
      </span>
    ),
  },
  {
    field: 'capitalTo',
    renderHeader: () => (
      <strong data-selector='capital-header'>
        سرمایه
        <span data-selector='capital-subheader'>( میلیون ریال)</span>
      </strong>
    ),
    width: 200,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => (
      <span data-selector='capital'>
        <MillionRialComponent price={params.value} />
      </span>
    ),
  },
  {
    field: 'id',
    headerName: 'براساس آگهی',
    width: 200,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => (
      <>
        <span data-selector='news-id'>{params.value}</span>
        <Button
          btnType='link'
          href={`${WEB.NEWS}${params.value}`}
          data-selector='news-link'
        >
          آگهی مرتبط
        </Button>
      </>
    ),
  },
]
