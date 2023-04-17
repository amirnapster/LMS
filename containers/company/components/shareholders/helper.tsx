import { numberSeparator } from 'utils/helpers/global'
import Image from 'next/image'
import Button from 'components/ui/Button'
import MillionRial from 'components/millionRial'

import type { GridColDef } from '@mui/x-data-grid'

export const columns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'نام سهامدار',
    width: 450,
    disableColumnMenu: true,
    sortable: false,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => (
      <>
        <div data-selector='logo'>
          <Image src='/svg/search/company-1.svg' width={22} height={20} />
        </div>

        {params.row.companyId ? (
          <Button
            href={`/company/${params.row.companyId}/${params.row.title}/`}
            target='_blank'
            data-selector='btn'
          >
            {params.row.title}
          </Button>
        ) : (
          <span>{params.row.title}</span>
        )}
      </>
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
      <span data-selector='title'>{numberSeparator(params.row.quantity)}</span>
    ),
  },
  {
    field: 'share',
    headerName: 'درصد',
    width: 100,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => (
      <span data-selector='title'>{params.row.share}%</span>
    ),
  },
  {
    field: 'value',
    renderHeader: () => (
      <strong data-selector='capital-header'>
        ارزش
        <span data-selector='capital-subheader'>( میلیون ریال)</span>
      </strong>
    ),
    width: 140,
    sortable: true,
    disableColumnMenu: true,
    headerClassName: 'companyDetailDataGridHeader',
    renderCell: (params) => (
      <MillionRial price={params.row.quantity * params.row.closingPrice} />
    ),
  },
]
