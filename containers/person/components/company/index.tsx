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
import SectionTitle from 'components/sectionTitle'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'
import Card from 'components/card'
import cn from 'classnames'

import type { RootState } from 'libs/redux/store'
import type {
  IOpen,
  ISort,
  PersonCompanyItemsType,
  SortType,
} from './interface'
import { CollapsibleTable } from './helper'
import styles from './company.module.scss'

const PersonCompany = () => {
  const { details } = useSelector((state: RootState) => state.person)

  const allData = details?.person?.relatedCompanies

  const tableData = useMemo(
    () => [
      ...(details?.person?.relatedCompanies?.directors || []),
      ...(details?.person?.relatedCompanies?.inspectorsAndOthers || []),
      ...(details?.person?.relatedCompanies?.ceOs || []),
    ],
    [
      details?.person?.relatedCompanies?.directors,
      details?.person?.relatedCompanies?.ceOs,
      details?.person?.relatedCompanies?.inspectorsAndOthers,
    ]
  )

  const [page, setPage] = useState<number>(0)
  const [sort, setSort] = useState<ISort>({ order: '' })
  const [rowsData, setRowsData] = useState<PersonCompanyItemsType>([])
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
    let newData: PersonCompanyItemsType

    if (sort.order === '') {
      newData = [...(tableData ?? [])]
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
    if (tableData) {
      const companyData = [...(tableData ?? [])]
      setRowsData(companyData)
    }
  }, [tableData])

  return (
    <Row
      className={styles['company']}
      direction='column'
      align='top'
      id='companies'
    >
      <SectionTitle title='شرکت‌ها' />

      <Card className='w-100' title='شرکت‌های مرتبط'>
        <Row className={styles['company__rowDetails']} wrap>
          <Row
            className={styles['company__details']}
            direction='column'
            align='top'
          >
            <span>تعداد کل شرکت‌ها:</span>
            <span>{allData?.companiesCount}</span>
          </Row>
          {/* <Row
            className={styles['company__details']}
            direction='column'
            align='top'
          >
            <span>شرکت‌های فعلی:</span>
            <span>2</span>
          </Row>
          <Row
            className={styles['company__details']}
            direction='column'
            align='top'
          >
            <span>شرکت‌های خارج شده:</span>
            <span>1</span>
          </Row> */}
        </Row>

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
                  شرکت
                </TableCell>

                <TableCell
                  className={cn(
                    styles['table__headerCell'],
                    styles['table__headerCell--type']
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
                  سمت های قبلی
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rowsData
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
      </Card>
    </Row>
  )
}

export default PersonCompany
