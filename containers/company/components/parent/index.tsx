import { useEffect, useMemo, useState } from 'react'
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
import LimitSection from 'components/limitSection'
import NotFoundSection from 'components/notFoundSection'
import Button from 'components/ui/Button'
import Skeleton from 'components/skeleton'
import Row from 'components/ui/Row'
import Card from 'components/card'
import cn from 'classnames'

import type { RootState } from 'libs/redux/store'
import type {
  CompanyParentItemsType,
  IOpen,
  ISort,
  SortType,
} from './interface'
import { CollapsibleTable } from './helper'
import styles from './parent.module.scss'

const CompanyParent = () => {
  const { packageType } = useSelector((state: RootState) => state.auth)
  const { details } = useSelector((state: RootState) => state.company)

  const isShowLimitBox = !packageType || packageType < 0 || packageType === 11

  const data = useMemo(
    () => [
      ...(details?.companyPeople?.childCompanies || []),
      ...(details?.companyPeople?.parentCompanies || []),
    ],
    [
      details?.companyPeople?.childCompanies,
      details?.companyPeople?.parentCompanies,
    ]
  )

  const [page, setPage] = useState<number>(0)
  const [sort, setSort] = useState<ISort>({ order: '' })
  const [rowsData, setRowsData] = useState<CompanyParentItemsType>([])
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
    let newData: CompanyParentItemsType

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
      const ParentsData = [...(data ?? [])]
      setRowsData(ParentsData)
    }
  }, [data])

  const limitBoxHandler = () => {
    if (!packageType)
      return {
        title:
          'برای مشاهده شرکت‌های مادر و زیرمجموعه ، لازم است اشتراک خریداری نمایید',
        subTitle:
          'برای دسترسی به این قسمت، لازم است اشتراک خود را به شرکتی یا سازمانی ارتقا دهید. جهت مشاهده و مقایسه تمام امکانات اشتراک‌ها، روی دکمه زیر کلیک کنید.',
      }
    if (packageType && (packageType === 11 || packageType === -1))
      return {
        title:
          'برای مشاهده شرکت‌های مادر و زیرمجموعه ، اشتراک خود را ارتقا دهید',
        subTitle:
          'برای دسترسی به این قسمت، لازم است اشتراک خود را به شرکتی یا سازمانی ارتقا دهید. جهت مشاهده و مقایسه تمام امکانات اشتراک‌ها، روی دکمه زیر کلیک کنید.',
      }
    return null
  }

  return (
    <Skeleton
      className={styles['parent--skeleton']}
      data={details}
      width='100%'
      height='172px'
      variant='rounded'
    >
      {data?.length ? (
        <Card className={styles['parent']} title='شرکت‌های مادر و زیرمجموعه'>
          <Row className={styles['parent--row']} direction='column' gap={1}>
            {isShowLimitBox && (
              <LimitSection
                className={styles['parent--limit']}
                title={limitBoxHandler()?.title as string}
                subTitle={limitBoxHandler()?.subTitle}
              />
            )}
            <TableContainer
              className={cn(
                styles['table'],
                isShowLimitBox && styles['table--scroll']
              )}
              component={Paper}
            >
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
                        styles['table__headerCell--type']
                      )}
                      align='right'
                    >
                      نوع شرکت
                    </TableCell>

                    <TableCell
                      className={cn(
                        styles['table__headerCell'],
                        styles['table__headerCell--companyDelegate']
                      )}
                      align='right'
                    >
                      نماینده شرکت
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
                      آگهی مرتبط و نماینده‌های قبلی
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
                        key={rowData.companyTitle}
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
          </Row>
        </Card>
      ) : (
        <NotFoundSection
          className={styles['parent--notFound']}
          title='شرکت‌های مادر و زیرمجموعه'
        />
      )}
    </Skeleton>
  )
}

export default CompanyParent
