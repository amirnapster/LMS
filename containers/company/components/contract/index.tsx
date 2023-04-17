import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import { RialIcon, SortIcon } from 'assets/icons'
import { numberSeparator } from 'utils/helpers/global'
import NotFoundSection from 'components/notFoundSection'
import Skeleton from 'components/skeleton'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'
import Card from 'components/card'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import cn from 'classnames'

import type { RootState } from 'libs/redux/store'
import type { CompanyContract } from 'libs/redux/services/allv3'
import { CollapsibleTable } from './helper'
import type { CheckedList, CompanyContractType, ISort, List } from './interface'
import styles from './contract.module.scss'

dayjs.extend(jalaliday)

const CompanyContractRow = () => {
  const { details } = useSelector((state: RootState) => state.company)
  const contractData = details?.financial?.contracts
  const [rowsData, setRowsData] = useState<CompanyContractType>([])
  const [sort, setSort] = useState<ISort>({ type: '', order: '' })
  const [page, setPage] = useState<number>(0)
  const [checkedList, setCheckedList] = useState<CheckedList>([])
  const [rowsPerPage, setRowsPerPage] = useState<number>(5)

  const sortHandler = (type: ISort['type']) => {
    setSort((prev) =>
      prev.order === 'ascend'
        ? { order: 'descend', type }
        : { order: 'ascend', type }
    )
  }

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    if (contractData) setRowsData(contractData)
  }, [contractData])

  useEffect(() => {
    if (sort.type === 'date') {
      setRowsData(
        [...rowsData].sort(
          (a, b) =>
            ((a.startDate as string) ?? '').localeCompare(
              (b.startDate as string) ?? ''
            ) * (sort.order === 'ascend' ? 1 : -1)
        )
      )
    } else if (sort.type === 'price') {
      setRowsData(
        [...rowsData].sort(
          (a, b) =>
            ((a.price ?? 0) - (b.price ?? 0)) *
            (sort.order === 'ascend' ? 1 : -1)
        )
      )
    }
  }, [sort.order, sort.type])

  const sumItemsHandler = [...checkedList].reduce(
    (sum: number, item: List) => sum + Number(item.price),
    0
  )

  const sumAllItemsHandler = [...rowsData].reduce(
    (sum: number, item: CompanyContract) => sum + (item.price as number),
    0
  )

  return (
    <Skeleton
      className={styles['contract--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {details?.financial?.contracts?.length ? (
        <Row className={styles['contract']} direction='column' align='top'>
          <Card
            className={styles['contract__card']}
            title='قراردادها'
            hasSource
          >
            <Row className={styles['contract__count']} align='middle'>
              <span>مجموع کل موارد:</span>
              <div>{numberSeparator(sumAllItemsHandler)}</div>
              <RialIcon />
            </Row>

            <div className={styles['contract--title']}>
              قراردادهای با سازمان‌های دولتی و نهادهای عمومی (نظیر شهرداری‌ها)
            </div>

            <TableContainer
              className={styles['contract__table']}
              component={Paper}
            >
              <Table aria-label='collapsible table'>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell
                      className={styles['contract__headerCell']}
                      align='right'
                    >
                      عنوان
                    </TableCell>
                    <TableCell
                      className={styles['contract__headerCell']}
                      align='right'
                    >
                      سازمان
                    </TableCell>
                    <TableCell
                      className={cn(
                        styles['contract__headerCell'],
                        sort.type === 'date' &&
                          styles['contract__headerCell--active']
                      )}
                      align='right'
                    >
                      <Button onClick={() => sortHandler('date')}>
                        <div>تاریخ انعقاد</div>
                        <SortIcon />
                      </Button>
                    </TableCell>
                    <TableCell
                      className={cn(
                        styles['contract__headerCell'],
                        sort.type === 'price' &&
                          styles['contract__headerCell--active']
                      )}
                      align='right'
                    >
                      <Button onClick={() => sortHandler('price')}>
                        <div>مبلغ</div>
                        <span>(میلیون ریال)</span>
                        <SortIcon />
                      </Button>
                    </TableCell>
                    <TableCell
                      className={styles['contract__headerCell']}
                      align='right'
                    >
                      توضیحات
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsData
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((rowData) => (
                      <CollapsibleTable
                        key={
                          (rowData.title as string) +
                          (rowData.price as number) +
                          (rowData.startDate as string)
                        }
                        setCheckedList={setCheckedList}
                        checkedList={checkedList}
                        row={rowData}
                      />
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Row className={styles['contract__countTable']} gap={0}>
              <span>جمع موارد انتخابی:</span>
              <span>{numberSeparator(sumItemsHandler)}</span>
              <RialIcon />
            </Row>

            <TablePagination
              className={styles['contract--pagination']}
              rowsPerPageOptions={[5, 10, 15]}
              component='div'
              count={rowsData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </Row>
      ) : (
        <NotFoundSection
          className={styles['contract--notFound']}
          title='قراردادها'
        />
      )}
    </Skeleton>
  )
}

export default CompanyContractRow
