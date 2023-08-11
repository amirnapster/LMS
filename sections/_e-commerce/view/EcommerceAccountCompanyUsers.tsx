
import { LinearProgress, Typography, Paper } from '@mui/material'
import { DataGridPro, LicenseInfo, GridColDef } from '@mui/x-data-grid-pro';

import { EcommerceAccountLayout } from '../layout'
import {
  useCompanyUsersQuery,
  useSetActivationMutation,
} from 'libs/redux/services/karnama'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { notify } from 'utils/notification'
import Button from 'components/ui/Button'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import Iconify from 'components/iconify/Iconify';

dayjs.extend(jalaliday)

function EcommerceAccountCompanyUsers() {

  LicenseInfo.setLicenseKey(
    "f5993f18c3d54fd37b1df54757440af5T1JERVI6MjAwMjIsRVhQSVJZPTE2NDE3MTI0NTQwMDAsS0VZVkVSU0lPTj0x"
  );
  const { data, isLoading: usersLoading } = useCompanyUsersQuery()
  const [setActivation, { isLoading }] = useSetActivationMutation()

  const { accessToken } = useSelector((state: RootState) => state.auth)
  const openInNewTab = (url:string) => {
    window.open(url, '_blank', );
  };

  const columns: GridColDef[] = [
    { field: "fullname", headerName: "نام", flex: 1, minWidth: 140 },
    { field: "username", headerName: "موبایل", flex: 1, minWidth: 110 },
    {
      field: "insertDate", headerName: "تاریخ", flex: 1, minWidth: 110,
      renderCell: (params: any) => {
        return dayjs(params.row.insertDate)
          .calendar('jalali')
          .locale('fa')
          .format('YYYY/MM/DD')
      }
    },
    { field: "col1", headerName: data?.[0]?.colName1 ?? "ستون 1", flex: 1, minWidth: 140 },
    { field: "col2", headerName: data?.[0]?.colName2 ?? "ستون 2", flex: 1, minWidth: 140 },
    {
      field: "action",
      width: 130,
      headerName: "فعال‌سازی",
      renderCell: (params: any) => {
        const onClick = (e: any) => {
          e.stopPropagation(); // don't select this row after clicking
          if (params.row.isActive)
            setActivation({ id: params.row.id, active: false }).unwrap().then(() => {
              notify({ type: 'success', message: 'کاربر با موفقیت غیرفعال شد' })
            })
          else
            setActivation({ id: params.row.id, active: true }).unwrap().then(() => {
              notify({ type: 'success', message: 'کاربر با موفقیت فعال شد' })
            })

        };

        return <Button btnType={params.row.isActive === false ? 'primary' : 'secondary'} onClick={onClick}>{params.row.isActive === false ? 'فعال کردن' : 'غیرفعال کردن'}</Button>;
      }
    },
  ];


  return (
    <EcommerceAccountLayout>

      <Typography variant='h5' sx={{ mb: 3, }}>
        <Iconify
          icon={'pepicons-print:people'}
          width={24}
          marginRight={0.5} />
        لیست کارکنان
      </Typography>
      <Paper variant='outlined'>
        <DataGridPro
          loading={isLoading || usersLoading}
          getRowClassName={(params: any) => `rowActive--${params.row.isActive}`}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
            sorting: {
              sortModel: [{ field: 'insertDate', sort: 'desc' }],
            },
        
          }}
          pagination
          pageSizeOptions={[10]}
          rowHeight={50}
          columns={columns}
          rows={data || []}
          onRowClick={(event)=>{openInNewTab(`/dashboard/company/users/${event.id}`)}}
          disableColumnFilter
          unstable_headerFilters
          slots={{
            headerFilterMenu: null,
            loadingOverlay: LinearProgress,

          }}
        />
      </Paper>

    </EcommerceAccountLayout>
  )
}

export default EcommerceAccountCompanyUsers
