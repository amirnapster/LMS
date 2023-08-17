// @mui
import { Stack, Typography, Card, Box } from '@mui/material'
// utils
import { fCurrency } from 'utils/helpers/formatNumber'
// types
import { ICourseProps } from 'types/course'
// components
import Iconify from 'components/iconify'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { useRouter } from 'next/router'
import { setVisible } from 'libs/redux/slices/auth'
import { durationToString } from 'utils/helpers/formatTime'
import Button from 'components/ui/Button'
import { useInfoMutation, useRequestCreditMutation } from 'libs/redux/services/karnama'
import { useEffect } from 'react'
import { notify } from 'utils/notification'
import { toast } from 'react-hot-toast'

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps
}

export default function ElearningCourseDetailsInfo({ course }: Props) {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const [requestCredit] = useRequestCreditMutation()

  const { details } = useSelector((state: RootState) => state.course)
  const [getInfo, { data }] = useInfoMutation()

  useEffect(() => {
    getInfo()
  }, [])
  const lessonCount = details?.sections?.reduce(
    (acc, section) => (section?.lessons?.length ?? 0) + acc,
    0
  )

  const handleRequestAccessToCourse = () => {
    const promise = requestCredit({ courseId: details?.id as number }).unwrap()
    toast.promise(promise,
      {
        loading: "در حال ارسال درخواست...",
        success: `درخواست فعالسازی با موفقیت ثبت شد`,
        error: (err: any) =>
          err?.data?.message ?? "خطا در درخواست اعتبار"
      })
  }
  const handleRoute = () => {
    if (!accessToken) dispatch(setVisible({ visible: true }))
    else
      push(`/play/${details?.id}/1/`)
  }

  return (
    <Card sx={{ p: 3, borderRadius: 2, boxShadow: "0px 0 22px  10px rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)" }}>
      <Stack spacing={3}>
        {/* <Stack direction='row' sx={{ typography: 'h3' }}>
          {priceSale > 0 && (
            <Box
              component='span'
              sx={{
                mr: 1,
                typography: 'h4',
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {fCurrency(priceSale)}
            </Box>
          )}
          {fCurrency(price)}
        </Stack> */}

        <Stack spacing={2}>
          <Typography>مشخصات این دوره:</Typography>
          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='ant-design:number-outlined' sx={{ mr: 1 }} />
            شناسه دوره
            <Box component='strong' sx={{ mr: 0.5, ml: 0.5 }}>
              {details?.id}
            </Box>
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='carbon:document' sx={{ mr: 1 }} />
            <Box component='strong' sx={{ mr: 0.5 }}>
              {details?.sections?.length}
            </Box>
            بخش
          </Stack>

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='carbon:document-download' sx={{ mr: 1 }} />
            <Box component='strong' sx={{ mr: 0.5 }}>
              {lessonCount}
            </Box>
            درس
          </Stack>

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='carbon:time' sx={{ mr: 1 }} />{' '}
            {durationToString(details?.totalDuration as number)}
          </Stack>

          {/* <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='carbon:data-accessor' sx={{ mr: 1 }} />
            دسترسی دایم به کل دوره
          </Stack> */}

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='carbon:devices' sx={{ mr: 1 }} />
            قابل استفاده در کامپیوتر و موبایل
          </Stack>

          {/* <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='carbon:certificate' sx={{ mr: 1 }} />
            مدرک پایان دوره
          </Stack> */}
        </Stack>

        {details?.superPremium && data?.isInCompany && data?.credits && !data.credits.find(t => t.courseId == details.id) &&
          <Button
            btnType='primary'
            size='large'
            onClick={handleRequestAccessToCourse}
          >
            درخواست فعال سازی آموزش
          </Button>
        }
        {/* <Button
          btnType='primary'
          size='large'
          onClick={handleRoute}
        >
          شروع دوره
        </Button> */}
      </Stack>
    </Card>
  )
}
