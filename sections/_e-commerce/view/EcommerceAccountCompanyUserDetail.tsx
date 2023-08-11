
import { LinearProgress, Typography, Paper, Select, MenuItem, Stack } from '@mui/material'
import { DataGridPro, LicenseInfo, GridColDef } from '@mui/x-data-grid-pro';
import { useRouter } from 'next/router';

import { EcommerceAccountLayout } from '../layout'
import {
  CompanySegment,
  CompanySegmentValue,
  SetUserSegmentValueApiArg,
  useAddCompanyAdminCreditMutation,
  useCompanyAdminCreditsQuery,
  useCompanySegmentsQuery,
  useCompanyUserQuery,
  useSetActivationMutation,
  useSuperPremiumCoursesQuery,
} from 'libs/redux/services/karnama'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { notify } from 'utils/notification'
import Button from 'components/ui/Button'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import Iconify from 'components/iconify/Iconify';
import { useEffect, useState } from 'react';
import { useSetUserSegmentValueMutation } from 'libs/redux/services/karnama';
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormProvider, { RHFTextField } from 'components/hook-form';

dayjs.extend(jalaliday)

function EcommerceAccountCompanyUserDetail() {
  LicenseInfo.setLicenseKey("f5993f18c3d54fd37b1df54757440af5T1JERVI6MjAwMjIsRVhQSVJZPTE2NDE3MTI0NTQwMDAsS0VZVkVSU0lPTj0x");

  const { query } = useRouter()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const [segmentValues, setSegmentValues] = useState<{ [key: number]: number }>({})
  const { data, refetch } = useCompanyUserQuery({ id: Number(query.id) })
  const { data: segments, isLoading: usersLoading } = useCompanySegmentsQuery()
  const { data: courses, isLoading: coursesLoading } = useSuperPremiumCoursesQuery()
  const { data: credits, isLoading: creditsLoading } = useCompanyAdminCreditsQuery({ id: Number(query.id) })
  const [setSegmentValuesApi, { isLoading: updatingSegmentValuesLoading }] = useSetUserSegmentValueMutation()
  const [courseId, setCoruseId] = useState<Number>(0)
  const [addCompanyAdminCredit, { isLoading: addingCompanyAdminCredit }] = useAddCompanyAdminCreditMutation()
  console.log(credits, "credits")
  const columns: GridColDef[] = [
    {
      field: "fullname", headerName: "نام", flex: 1, minWidth: 140,
      renderCell: (params: any) => params.row.user.fullname
    },
    {
      field: "username", headerName: "موبایل", flex: 1, minWidth: 110,
      renderCell: (params: any) => params.row.user.userName
    },
    {
      field: "course", headerName: "آموزش", flex: 1, minWidth: 110,
      renderCell: (params: any) => params.row.course.titleFa
    },
    {
      field: "usedCredit", headerName: "اعتبار استفاده شده", flex: 1, minWidth: 110,
      renderCell: (params: any) => `${(params.row.usedCredit / 60).toFixed()} از ${(params.row.totalCredit / 60).toFixed()}`
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
  ];


  type FormValuesProps = {
    id: number
    courseId: number
    credit: number
  }

  const defaultValues = {
    id: Number(query.id),
    courseId: 1,
    credit: 0,
  }

  const NewReviewSchema = Yup.object().shape({
    courseId: Yup.number().required('courseId is required'),
    credit: Yup.number().required('credit is required'),
  })

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewReviewSchema),
    defaultValues,
  })

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods
  const onSubmit = async (formData: FormValuesProps) => {
    try {
      console.log(formData)
      formData.courseId = courseId as number
      addCompanyAdminCredit(formData).unwrap().then(() => { reset() }).catch((res) => {
        notify({ type: 'warn', message: res?.data?.message })

      })

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!data || !segments) return
    if (data?.user?.companyUserSegments) {
      const initSegments = data.user.companyUserSegments.reduce((acc, obj) => {
        acc[Number(obj.segmentId)] = obj.segmentValueId as number;

        return acc;
      }, {} as { [key: number]: number })
      setSegmentValues(initSegments)
      console.log("initial", initSegments)
    }


  }, [data, segments])
  const AddCreditHandler = () => {
  }
  const UpdateSegmentValues = () => {
    for (const [key, value] of Object.entries(segmentValues)) {
      console.log(`[${key}] = ${value}`);
      setSegmentValuesApi({ id: Number(query.id), segmentId: Number(key), segmentValueId: value })
    }

  }
  return (
    <EcommerceAccountLayout>

      <Typography variant='h5' sx={{ mb: 3, }}>
        <Iconify
          icon={'pepicons-print:people'}
          width={24}
          marginRight={0.5} />
        {data?.user?.fullname}  ( {data && segments?.map((segment:CompanySegment) => `${segment.title}: ${
          segment?.companySegmentValues?.find(s=>s.id==segmentValues[segment.id as number])?.title} `)})
      </Typography>
      <Paper variant='outlined' elevation={12} style={{ padding: 8, }}>
        <Stack direction="row" spacing={2}>

          {data && segments?.map((segment:CompanySegment) =>
            <div key={segment.id}>
              <span>{segment.title}: </span>
              
              <Select
                // value={segmentValues[segment.id as number]}
                onChange={(event) => {
                  const { target: { value }, } = event
                  if (value && segmentValues)
                    setSegmentValues({ ...segmentValues, [Number(segment.id)]: Number(value) })
                  console.log(segmentValues)
                }}

              >
                {segment.companySegmentValues?.map((segmentValue:CompanySegmentValue) => (
                  <MenuItem key={segmentValue.id} value={segmentValue.id}>
                    {segmentValue.title}
                  </MenuItem>
                ))}
              </Select>
            </div>
          )}
          <Button btnType='primary' onClick={UpdateSegmentValues} >اعمال تغییرات</Button>
        </Stack>
      </Paper>
        <Paper variant='outlined' elevation={12} style={{ padding: 8}} sx={{my:3}}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

          <Stack direction="row" spacing={2}>
            <span style={{ width: 300 }}>اختصاص اعتبار: </span>
            <Select name="courseId"
              style={{ width: 300 }}
              onChange={(event) => {
                const { target: { value }, } = event
                if (value && segmentValues)
                  setCoruseId(Number(value))
              }}

            >
              {courses?.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.titleFa}
                </MenuItem>
              ))}
            </Select>
            <RHFTextField
              name='credit'
              type='number'
              label='مدت اعتبار (ساعت)'
            />
            <Button btnType='primary' type='submit' onClick={AddCreditHandler} style={{ width: 200 }}>اختصاص اعتبار</Button>
          </Stack>
          </FormProvider>
        </Paper>
      <Paper variant='outlined'>
        <DataGridPro

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
          loading={creditsLoading}
          pageSizeOptions={[10]}
          rowHeight={50}
          columns={columns}
          rows={credits || []}
          disableColumnFilter
          unstable_headerFilters
          slots={{
            headerFilterMenu: null,
            loadingOverlay: LinearProgress,

          }}
        />
      </Paper>

    </EcommerceAccountLayout >
  )
}

export default EcommerceAccountCompanyUserDetail
