import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { EcommerceAccountLayout } from '../layout'
import {
  Order,
  useGetAllOrdersQuery,
} from 'libs/redux/services/karnama'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { useIntl } from 'react-intl'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
dayjs.extend(jalaliday);

function Row(props: { row: Order }) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell >{row.totalAmount?.toLocaleString()}</TableCell>
        <TableCell >{row.discount}</TableCell>
        <TableCell >{dayjs(row.insertDate)
          .calendar('jalali')
          .locale('fa')
          .format('YYYY/MM/DD')}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: 1, backgroundColor: "#efefef" }}>
              <Typography variant="h6" gutterBottom component="div">
                جزییات سفارش
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>نام دوره</TableCell>
                    <TableCell>مبلغ</TableCell>
                    <TableCell>تخفیف</TableCell>
                    <TableCell  >تعداد</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {row?.orderItems?.map((orderItem) => (
                    <TableRow key={orderItem.id}>
                      <TableCell component="th" scope="row">
                        {orderItem.course?.titleFa}
                      </TableCell>
                      <TableCell>{orderItem.price?.toLocaleString()}</TableCell>
                      <TableCell>{orderItem.discount?.toLocaleString()}</TableCell>
                      <TableCell>{orderItem.quantity}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}


function EcommerceAccountOrderHistory() {
  const { data } = useGetAllOrdersQuery()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const intl = useIntl()


  return (
    <EcommerceAccountLayout>
      <Typography variant='h5' sx={{ mb: 3 }}>
        تاریخچه سفارش‌ها
      </Typography>
      <TableContainer >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>شناسه سفارش</TableCell>
              <TableCell >مبلغ سفارش (تومان)</TableCell>
              <TableCell >تخفیف</TableCell>
              <TableCell >تاریخ</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item) => (
              <Row key={item.id} row={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </EcommerceAccountLayout >
  )
}

export default EcommerceAccountOrderHistory
