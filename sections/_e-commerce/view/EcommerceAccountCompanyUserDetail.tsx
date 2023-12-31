
import { useIntl } from 'react-intl';
import { LinearProgress, Typography, Paper, Select, MenuItem, Stack, Autocomplete, TextField, OutlinedInput, InputLabel, CircularProgress } from '@mui/material'
import { DataGridPro, LicenseInfo, GridColDef } from '@mui/x-data-grid-pro';
import { useRouter } from 'next/router';

import { EcommerceAccountLayout } from '../layout'
import {
  CompanySegment,
  CompanySegmentValue,
  Course,
  CourseDetailDto,
  SetUserSegmentValueApiArg,
  UserLessonViewMinute,
  useAddCompanyAdminCreditMutation,
  useChangeCreditMutation,
  useCompanyAdminCreditsQuery,
  useCompanySegmentsQuery,
  useCompanyUserQuery,
  useLazyGetApiCoursesByIdGraphQuery,
  useLazyGetApiCoursesByIdQuery,
  useOthersQuery,
  useSetActivationMutation,
  useSetCreditActivationMutation,
  useSuperPremiumCoursesQuery,
} from 'libs/redux/services/karnama'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { notify } from 'utils/notification'
import Button from 'components/ui/Button'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import Iconify from 'components/iconify/Iconify';
import { useEffect, useMemo, useState } from 'react';
import { useSetUserSegmentValueMutation } from 'libs/redux/services/karnama';
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormProvider, { RHFTextField } from 'components/hook-form';
import Row from 'components/ui/Row';
import Col from 'components/ui/Col';
import { ElearningCourseItem } from 'sections/_e-learning/course/item';
import Input from 'components/ui/Input';
import { toast } from 'react-hot-toast';
import ElearningCourseDetailsLessonList from 'sections/_e-learning/course/details/ElearningCourseDetailsLessonList';
import { durationToString } from 'utils/helpers/formatTime';
import { AddCompanyAdminCreditApiArg } from 'libs/redux/services/karnama';

dayjs.extend(jalaliday)

function EcommerceAccountCompanyUserDetail() {
  LicenseInfo.setLicenseKey("63cdcff003c86a961f1b47b5703dd5e0Tz0wLEU9MjUzNDA0ODY0MDAwMDAwLFM9cHJlbWl1bSxMTT1zdWJzY3JpcHRpb24sS1Y9Mg==");

  const { query } = useRouter()
  const intl = useIntl()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const [segmentValues, setSegmentValues] = useState<{ [key: number]: number }>({})
  const { data, refetch } = useCompanyUserQuery({ id: Number(query.id) })
  const { data: segments, isLoading: usersLoading } = useCompanySegmentsQuery()
  const { data: courses, isLoading: coursesLoading } = useSuperPremiumCoursesQuery()
  const { data: userCourses, isLoading: userCoursesLoading } = useOthersQuery({ id: Number(query.id) })
  const { data: credits, isLoading: creditsLoading } = useCompanyAdminCreditsQuery({ id: Number(query.id) })
  const [changeCredit] = useChangeCreditMutation()
  const [setActivation, { isLoading }] = useSetCreditActivationMutation()
  const [setSegmentValuesApi, { isLoading: updatingSegmentValuesLoading }] = useSetUserSegmentValueMutation()
  const [courseId, setCoruseId] = useState<Number>(0)
  const [addCompanyAdminCredit, { isLoading: addingCompanyAdminCredit }] = useAddCompanyAdminCreditMutation()
  const [getCourse, { isLoading: courseLoading }] = useLazyGetApiCoursesByIdQuery()
  const [getGraph, { isLoading: graphLoading }] = useLazyGetApiCoursesByIdGraphQuery()
  const [graph, setGraph] = useState<UserLessonViewMinute[]>([])
  const [course, setCourse] = useState<CourseDetailDto | null>(null)

  const getUserGraph = (cuid: number, courseId: number) => {
    getGraph({ id: courseId, cuid }).unwrap().then((t) => {
      setGraph(t)
      console.log(t)
    })
    getCourse({ id: courseId }).unwrap().then((t) => {
      setCourse(t)
    })
  }
  const handleChangeCredit = (id: number, credit: number) => {
    const promise = changeCredit({ id, credit: credit * 60 }).unwrap()
    toast.promise(promise,
      {
        loading: "در حال تغییر...",
        success: `اعتبار دوره به ${credit} ساعت تغییر یافت`,
        error: "خطا در تغییر اعتبار",
      })
  }
  const columns: GridColDef[] = [
    // {
    //   field: "fullname", headerName: "نام", flex: 1, minWidth: 140,
    //   renderCell: (params: any) => params.row.user.fullname
    // },
    // {
    //   field: "username", headerName: "موبایل", flex: 1, minWidth: 110,
    //   renderCell: (params: any) => params.row.user.userName
    // },

    {
      field: "course", headerName: "آموزش", flex: 1, minWidth: 110,
      renderCell: (params: any) => params.row.course.titleFa
    }, {
      field: "insertDate", headerName: "تاریخ ثبت", flex: 1, minWidth: 110,
      renderCell: (params: any) => {
        return dayjs(params.row.insertDate)
          .calendar('jalali')
          .locale('fa')
          .format('YYYY/MM/DD')
      }
    }, {
      field: "expireDate", headerName: "تاریخ انقضا", flex: 1, minWidth: 110,
      renderCell: (params: any) => {
        if (params.row.expireDate)
          return <span>{dayjs(params.row.expireDate)
            .calendar('jalali')
            .locale('fa')
            .format('YYYY/MM/DD')}
            {(new Date(params.row.expireDate) < new Date() ? <span style={{color:"red"}}> منقضی شده</span> : "")}</span>
        return ''
      }
    },
    {
      field: "usedCredit", headerName: "میزان مشاهده", flex: 1, minWidth: 110,
      renderCell: (params: any) => durationToString(params.value * 60, intl.formatMessage({ id: 'hour' }), intl.formatMessage({ id: 'minute' }))
    },
    {
      field: "totalCredit", headerName: "اعتبار", flex: 1, minWidth: 110,
      renderCell: (params: any) => <Input onBlurCapture={(e: any) => handleChangeCredit(params.row.id, e.target.value)} defaultValue={params.row.totalCredit / 60} />
    },
    {
      field: "isActive", headerName: "وضعیت", flex: 1, maxWidth: 80,
      renderCell: (params: any) => {
        if (params.row.expireDate && new Date(params.row.expireDate) < new Date())
          return '❌'
        if (params.value === true)
          return '✅'
        else if (params.value === false)
          return '❌'
        return '🟦'
      }
    },
    {
      field: "action",
      width: 250,
      headerName: "فعال‌سازی",
      renderCell: (params: any) => {
        const clickHandler = (e: any, active: boolean) => {
          e.stopPropagation(); // don't select this row after clicking
          if (active)
            setActivation({ id: params.row.id, active: active }).unwrap().then(() => {
              notify({ type: 'success', message: 'اعتبار با موفقیت فعال شد' })
            })
          else
            setActivation({ id: params.row.id, active: active }).unwrap().then(() => {
              notify({ type: 'success', message: 'اعتبار  با موفقیت غیر فعال شد' })
            })

        };
        const expired = params.row.expireDate && new Date(params.row.expireDate) < new Date()
        return <><Button btnType='primary' className="ml-1" disabled={params.row.isActive === true || expired} onClick={(e: any) => clickHandler(e, true)}>فعال</Button>
          <Button btnType='secondary' disabled={params.row.isActive === false || expired} onClick={(e: any) => clickHandler(e, false)}> غیرفعال </Button>
          {graphLoading || courseLoading ?
            <CircularProgress
              sx={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                m: 'auto',
                position: 'absolute',
              }}
            /> : null}
          <Button title="نمایش گزارش استفاده"
            disabled={graphLoading || courseLoading || params.row.isActive === false}
            btnType='primary' className="mr-1" onClick={(e: any) => getUserGraph(params.row.id, params.row.courseId)}><Iconify
              icon={'cil:chart'}
              width={24} /></Button></>

      }
    },
  ];


  type FormValuesProps = {
    id: number
    courseId: number
    credit: number
    days?: number | null
  }

  const defaultValues = {
    id: Number(query.id),
    courseId: 1,
    credit: 0
  }

  const NewReviewSchema = Yup.object().shape({
    courseId: Yup.number().required('courseId is required'),
    credit: Yup.number().required('credit is required'),
  })

  const methods = useForm<AddCompanyAdminCreditApiArg>({
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
  const onSubmit = async (formData: AddCompanyAdminCreditApiArg) => {
    try {
      if (!formData.credit) {
        notify({ type: 'warn', message: 'مدت اعتبار را بر حسب ساعت وارد کنید' })
        return
      }
      if (!courseId) {
        notify({ type: 'warn', message: 'دوره را انتخاب کنید' })
        return
      }
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
  const graphMemo = useMemo(() => {
    return course?.sections?.map((section) => (
      <ElearningCourseDetailsLessonList section={section} graph={graph} canPlay={false} />
    ))
  }, [course, graph])
  const AddCreditHandler = () => {
  }
  const UpdateSegmentValues = () => {
    for (const [key, value] of Object.entries(segmentValues)) {
      console.log(`[${key}] = ${value}`);
      setSegmentValuesApi({ id: Number(query.id), segmentId: Number(key), segmentValueId: value })
    }

  }
  const autoCompleteOptions =
    courses ?
      courses.map((course) => { return { label: `${course.titleFa} (${course.id})`, id: course.id, totalDuration: course.totalDuration } }) : []

  return (
    <EcommerceAccountLayout>

      <Typography variant='h3' sx={{ mb: 3, }}>

        {data?.user?.fullname} {data?.user?.userName} ({data && segments?.map((segment: CompanySegment) => ` ${segment.title}: ${segment?.companySegmentValues?.find(s => s.id == segmentValues[segment.id as number])?.title || '-'} `)})
      </Typography>
      <h3 className='mb-1 mt-3'><Iconify
        icon={'pepicons-print:people'}
        width={24}
        marginRight={0.5} />
        گروه‌بندی سازمانی</h3>
      <Paper variant='outlined' elevation={12} style={{ padding: 8, }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignContent={'flex-start'} flexWrap="wrap">

          {data && segments?.map((segment: CompanySegment) =>
            <div key={segment.id}>

              <InputLabel id={`label-${segment.id}`}>{segment.title}</InputLabel>

              <Select
                labelId={`label-${segment.id}`}
                defaultValue={segmentValues[segment.id as number]}
                sx={{ width: 300 }}
                // value={segmentValues[segment.id as number]}
                onChange={(event) => {
                  const { target: { value }, } = event
                  if (value && segmentValues)
                    setSegmentValues({ ...segmentValues, [Number(segment.id)]: Number(value) })
                  console.log(segmentValues)
                }}

              >
                {segment.companySegmentValues?.map((segmentValue: CompanySegmentValue) => (
                  <MenuItem key={segmentValue.id} value={segmentValue.id}>
                    {segmentValue.title}
                  </MenuItem>
                ))}
              </Select>
            </div>
          )}
          <div style={{ alignSelf: 'flex-end' }}>
            <Button btnType='primary' onClick={UpdateSegmentValues} style={{ width: 150, marginBottom: "0.5rem" }} >ثبت</Button>
          </div>
        </Stack>
      </Paper>
      <h3 className='mb-1 mt-3'><Iconify
        icon={'material-symbols:credit-card-outline'}
        width={24}
        marginRight={0.5} />
        تخصیص اعتبار</h3>
      <Paper variant='outlined' elevation={12} style={{ padding: 8 }} sx={{ my: 3 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignContent={'flex-start'} flexWrap="wrap">

            <Autocomplete
              renderInput={(params) => <TextField {...params} label="نام دوره" />}

              style={{ width: 300 }}
              onChange={(event: any, value: unknown) => {
                console.log(value)
                if (value) {
                  setCoruseId(Number((value as any).id))
                  setValue('credit', Math.floor(Number((value as any).totalDuration / 3600)) + 1)
                }
              }}
              options={autoCompleteOptions}
            />

            <RHFTextField
              style={{ width: 300 }}
              name='credit'
              type='number'
              label='مدت اعتبار (ساعت)'
            />
            <RHFTextField
              style={{ width: 300 }}
              name='days'
              type='number'
              label='اعتبار تا (روز) بعد'
            />
            <div style={{ alignSelf: 'flex-end' }}>
              <Button btnType='primary' type='submit' onClick={AddCreditHandler} style={{ width: 150, marginBottom: "0.5rem" }} >ثبت</Button>
            </div>
          </Stack>
        </FormProvider>
      </Paper>

      <h3 className='mb-1 mt-3'><Iconify
        icon={'gg:list'}
        width={24}
        marginRight={0.5} />
        اعتبار تخصیص یافته</h3>
      <Paper variant='outlined'>
        {credits &&
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
            slots={{
              loadingOverlay: LinearProgress,

            }}
          />}
      </Paper>
      <h3 className='mb-1 mt-3'><Iconify
        icon={'cil:chart'}
        width={24}
        marginRight={0.5} />
        گراف مشاهده {data?.user?.fullname} از بسته {course?.titleFa}</h3>
      <Paper variant='outlined' className="p-2 mt-2" style={{ backgroundColor: 'inherit' }}>

        {graphMemo}

      </Paper>
      <h3 className='mb-1 mt-3'><Iconify
        icon={'cil:chart'}
        width={24}
        marginRight={0.5} />
        گزارش مشاهده</h3>
      <Row
        // className={styles['dashboard']}
        justify='center'
        gutter={[16, 16]}
        wrap
      >
        {userCourses?.map((course) => (
          <Col xxs={24} sm={6}>
            <ElearningCourseItem course={course} vertical />
          </Col>
        ))}
      </Row>
    </EcommerceAccountLayout >
  )
}

export default EcommerceAccountCompanyUserDetail
