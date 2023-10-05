
import { LinearProgress, Typography, Paper, Badge, Chip, Stack, Autocomplete } from '@mui/material'
import { DataGridPro, LicenseInfo, GridColDef } from '@mui/x-data-grid-pro';

import { EcommerceAccountLayout } from '../layout'
import {
  useAddCompanyUserAsyncMutation,
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
import Link from 'next/link';
import { durationToString } from 'utils/helpers/formatTime';
import { useForm, Controller } from 'react-hook-form'
import FormProvider, { RHFTextField } from 'components/hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { regex } from 'utils/helpers/validations';

dayjs.extend(jalaliday)

function EcommerceAccountCompanyUsers() {

  LicenseInfo.setLicenseKey(
    "63cdcff003c86a961f1b47b5703dd5e0Tz0wLEU9MjUzNDA0ODY0MDAwMDAwLFM9cHJlbWl1bSxMTT1zdWJzY3JpcHRpb24sS1Y9Mg=="
  );
  const { data, isLoading: usersLoading } = useCompanyUsersQuery()
  const [setActivation, { isLoading }] = useSetActivationMutation()
  const [addCompanyUser, { }] = useAddCompanyUserAsyncMutation()

  const columns: GridColDef[] = [
    {
      field: "fullname", headerName: "نام", flex: 1, minWidth: 140,
      renderCell: (params: any) => {

        return <Link target='_blank' href={`/dashboard/company/users/${params.row.id}`}>{params.row.fullname ? params.row.fullname : "NoName"} {params.row.pendingCount > 0 && <Chip color="primary" label={params.row.pendingCount} />} </Link>
      }
    },
    {
      field: "usedCredit", headerName: "میزان مشاهده", flex: 1,
      renderCell: (params: any) => <span>{durationToString(params.value * 60)} ({params.row.courseCount}) </span>


    },
    {
      field: "username", headerName: "موبایل", flex: 1, minWidth: 110,
      renderCell: (params: any) => {
        return <Link target='_blank' href={`/dashboard/company/users/${params.row.id}`}>{params.value}</Link>
      }
    },
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


  type FormValuesProps = {
    name: string
    mobile: string
  }

  const defaultValues = {
    name: '',
    mobile: '',
  }

  const NewReviewSchema = Yup.object().shape({
    name: Yup.string().required('نام و نام خانوادگی اجباری است').min(5, 'نام و نام خانوادگی صحیح نیست')
      .matches(/^.+\s.+$/, "هم نام و هم نام خانوادگی را وارد کنید"),
    mobile: Yup.string()
      .required('شماره موبایل اجباری است')
      .matches(regex.phoneNumber, "شماره موبایل صحیح نیست")
  })

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewReviewSchema),
    defaultValues,
  })

  const {
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = methods
  const onSubmit = async (formData: FormValuesProps) => {
    try {
      addCompanyUser(formData).unwrap().then(() => {
        notify({ type: 'success', message: 'کاربر با موفقیت اضافه شد' })
        reset()
      }).catch((res) => {
        notify({ type: 'warn', message: res?.data?.message })

      })


    } catch (error) {
      console.error(error)
    }
  }
  return (
    <EcommerceAccountLayout>
      <h3 className='mb-1 mt-3'><Iconify
        icon={'pepicons-print:people'}
        width={24}
        marginRight={0.5} />
        افزودن کاربر جدید</h3>
      <Paper variant='outlined' elevation={12} style={{ padding: 8 }} sx={{ my: 3 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignContent={'flex-start'} flexWrap="wrap">


            <RHFTextField
              style={{ width: 300 }}
              name='mobile'
              type='number'
              label='شماره موبایل'

            />
            <RHFTextField
              style={{ width: 300 }}
              name='name'
              type='text'
              label='نام و نام خانوادگی'
            />
            <div style={{ alignSelf: 'flex-end' }}>
              <Button btnType='primary' type='submit' style={{ width: 150, marginBottom: "0.5rem" }} >ثبت</Button>
            </div>
          </Stack>
        </FormProvider>
      </Paper>
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
              paginationModel: { pageSize: 100, page: 0 },
            },
            // sorting: {
            //   sortModel: [{ field: 'pendingCount', sort: 'desc' }],
            // },

          }}
          pagination
          pageSizeOptions={[10]}
          rowHeight={50}
          columns={columns}
          rows={data || []}
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
