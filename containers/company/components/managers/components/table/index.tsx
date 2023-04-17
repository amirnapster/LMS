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
import { SortIcon } from 'assets/icons'
import Button from 'components/ui/Button'
import cn from 'classnames'
import type { RootState } from 'libs/redux/store'
import { CollapsibleTable } from './helper'

import type {
  CompanyManagerItemsType,
  CompanyManagerKeyType,
  IOpen,
  ISort,
  SortType,
} from '../../interface'
import styles from './table.module.scss'

const CompanyPersonTable = ({
  itemKey,
}: {
  itemKey: CompanyManagerKeyType
}) => {
  const { details } = useSelector((state: RootState) => state.company)
  const data = details?.companyPeople?.[itemKey]
  const [page, setPage] = useState<number>(0)
  const [sort, setSort] = useState<ISort>({ order: '' })
  const [rowsData, setRowsData] = useState<CompanyManagerItemsType>([])
  const [rowsPerPage, setRowsPerPage] = useState<number>(5)
  const [open, setOpen] = useState<IOpen>({ id: 0, status: false })

  const sortHandler = () => {
    let newOrder: SortType

    if (sort.order === 'descend') newOrder = 'ascend'
    else if (sort.order === 'ascend') newOrder = ''
    else newOrder = 'descend'

    setSort({ order: newOrder })
  }

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => setPage(newPage)

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const openItemHandler = (id: number) => {
    if (id === open.id) {
      if (open.status) setOpen(() => ({ id: 0, status: !open.status }))
      else setOpen((prev) => ({ ...prev, status: !open.status }))
    } else setOpen({ id, status: true })
  }

  useEffect(() => {
    let newData: CompanyManagerItemsType

    if (sort.order === '') {
      newData = [...(data ?? [])]
    } else {
      newData = [...rowsData].sort(
        (a, b) =>
          ((a.startDate as string) ?? '').localeCompare(
            (b.startDate as string) ?? ''
          ) * (sort.order === 'descend' ? 1 : -1)
      )
    }
    setRowsData(newData)
  }, [sort.order])

  useEffect(() => {
    if (data) {
      const managersData = [...(data ?? [])]
      setRowsData(managersData)
    }
  }, [data])

  return (
    <>
      <TableContainer className={styles['table']} component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell
                className={cn(
                  styles['table__headerCell'],
                  styles['table__headerCell--title']
                )}
                align='right'
              >
                نام
              </TableCell>
              <TableCell
                className={cn(
                  styles['table__headerCell'],
                  styles['table__headerCell--position']
                )}
                align='right'
              >
                سمت
              </TableCell>
              <TableCell
                className={cn(
                  styles['table__headerCell'],
                  sort.order && styles['table__headerCell--active'],
                  styles['table__headerCell--date']
                )}
                align='right'
              >
                <Button onClick={sortHandler}>
                  <div>تاریخ</div>
                  <SortIcon />
                </Button>
              </TableCell>

              <TableCell
                className={cn(
                  styles['table__headerCell'],
                  styles['table__headerCell--news']
                )}
                align='center'
              >
                آگهی مرتبط
              </TableCell>

              <TableCell
                className={cn(
                  styles['table__headerCell'],
                  styles['table__headerCell--oldPosition']
                )}
                align='center'
              >
                سمت‌های قبلی
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((rowData) => (
                <CollapsibleTable
                  key={rowData.companyPersonId}
                  row={rowData}
                  open={open}
                  openItemHandler={openItemHandler}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        className={styles['table--pagination']}
        rowsPerPageOptions={[5, 10, 15]}
        component='div'
        count={rowsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}

export default CompanyPersonTable
