import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import FormProvider, { RHFTextField } from 'components/hook-form'
import { EcommerceAccountLayout } from '../layout'
import {
  Coupon,
  CreditLog,
  useCreditLogsAndCouponsQuery,
  useGetDiscountCodeMutation,
  useInfoMutation,
  useLazyGetGiftQuery,
} from 'libs/redux/services/karnama'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { useRouter } from 'next/router'
import { notify } from 'utils/notification'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import Iconify from 'components/iconify/Iconify'
import Button from 'components/ui/Button'
dayjs.extend(jalaliday);

function Row(props: { row: Coupon }) {
  const { row } = props
  const dateHandler = (expireDate: string, used: boolean) => {
    if (used)
      return (<span style={{ "color": "red" }}>استفاده شده </span>)
    if (new Date(row.expireDate as string) < new Date())
      return (<span style={{ "color": "red" }}>منقضی شده </span>)
    return dayjs(row.expireDate).calendar('jalali')
      .locale('fa')
      .format('YYYY/MM/DD')
  }
  return (
    <>
      <TableRow>
        <TableCell>{row.amount?.toLocaleString()}</TableCell>
        <TableCell>{row.code}</TableCell>
        <TableCell>{dayjs(row.insertDate).calendar('jalali')
          .locale('fa')
          .format('YYYY/MM/DD')}</TableCell>
        <TableCell>{dateHandler(row.expireDate as string, row.used as boolean)}</TableCell>
      </TableRow>
    </>
  );
}

function CreditLogRow(props: { row: CreditLog }) {
  const { row } = props
  const dateHandler = (expireDate: string, used: boolean) => {
    if (used)
      return (<span style={{ "color": "red" }}>استفاده شده </span>)
    if (new Date(row.expireDate as string) < new Date())
      return (<span style={{ "color": "red" }}>منقضی شده </span>)
    return <span style={{ "color": "green" }}>{dayjs(row.expireDate).calendar('jalali')
      .locale('fa')
      .format('YYYY/MM/DD')}</span>
  }
  return (
    <>
      <TableRow>
        <TableCell style={{ color: row.amount as number > 0 ? "green" : "red", direction: "ltr" }}>
          {row.amount?.toLocaleString()}</TableCell>
        <TableCell>{row.title}</TableCell>
        <TableCell>{dayjs(row.insertDate).calendar('jalali')
          .locale('fa')
          .format('YYYY/MM/DD')}</TableCell>
        <TableCell>{dateHandler(row.expireDate as string, row.remaining === 0)}</TableCell>
      </TableRow>
    </>
  );
}

function EcommerceAccountGiftView() {
  const [getCode, { isLoading }] = useGetDiscountCodeMutation()
  const { data: creditLogsAndCoupons, refetch } = useCreditLogsAndCouponsQuery()
  const [getInfo, { data }] = useInfoMutation()

  const { push } = useRouter()
  const { accessToken } = useSelector((state: RootState) => state.auth)

  const EcommerceAccountPersonalSchema = Yup.object().shape({
    code: Yup.string().required('ورود کد الزامیست.'),
  })

  const defaultValues = {
    code: '',
  }

  const methods = useForm<typeof defaultValues>({
    resolver: yupResolver(EcommerceAccountPersonalSchema),
    defaultValues,
  })

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods

  const onSubmit = async () => {
    getCode().unwrap().then((res) => {
      if (res) {
        notify({ type: 'success', message: 'کد تخفیف با موفقیت ساخته شد' })
        refetch()
      }
      else
        notify({ type: 'error', message: "خطا در ساخت کد تخفیف. حداقل اعتبار باید 10هزارتومان باشد" })
    })
      .catch((res) => {

        notify({ type: 'error', message: "خطا در ساخت کد تخفیف. حداقل اعتبار باید 10هزارتومان باشد" })
      })
  }


  useEffect(() => {
    if (!accessToken) {
      push('/')
      return
    }
  }, [accessToken])

  return (
    <EcommerceAccountLayout>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h5' sx={{ mb: 3 }}>
          دریافت کد تخفیف
        </Typography>
        <Typography sx={{ mb: 3 }}>با وارد کردن کد تخفیف تا سقف 200 هزار تومان تخفیف محصولات نماتک، برای خرید‌های بیشتر از یک میلیون تومان بهره‌مند شوید. لازم به ذکر است کدهای تخفیفی که می‌سازید یک هفته اعتبار دارند. برای استفاده از کدهای تخفیف 200 هزارتومانی روی دکمه "دریافت کد تخفیف" کلیک کنید.
        </Typography>
        {/* <Box
          rowGap={2.5}
          columnGap={2}
          display='grid'
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)' }}
        >
          <RHFTextField name='code' label='کد تخفیف' />

        </Box> */}

        <Button
          btnType='primary'
          size='large'
          loading={isLoading}
          onClick={onSubmit}
        >
          دریافت کد تخفیف
        </Button>
      </FormProvider>
      {!!creditLogsAndCoupons && (
        <>
          <h3 className='mb-1 mt-3'><Iconify
            icon={'material-symbols:percent'}
            width={24}
            marginRight={0.5} />
            کدهای تخفیف شما</h3>
          <TableContainer sx={{ mt: 3 }}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell>مبلغ (تومان)</TableCell>
                  <TableCell >کدتخفیف</TableCell>
                  <TableCell >تاریخ صدور</TableCell>
                  <TableCell >تاریخ اعتبار</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {creditLogsAndCoupons?.coupons?.map((item) => (
                  <Row key={item.id} row={item} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <h3 className='mb-1 mt-3'><Iconify
            icon={'uil:bill'}
            width={24}
            marginRight={0.5} />
            تراکنش‌های شما</h3>
          <TableContainer sx={{ mt: 3 }}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell>مبلغ (تومان)</TableCell>
                  <TableCell >بابت</TableCell>
                  <TableCell >تاریخ</TableCell>
                  <TableCell >تاریخ اعتبار</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {creditLogsAndCoupons?.creditLogs?.map((item) => (
                  <CreditLogRow key={item.id} row={item} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </EcommerceAccountLayout>
  )
}

export default EcommerceAccountGiftView
