import { useState } from 'react'
import {
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Checkbox,
} from '@mui/material'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import cn from 'classnames'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import MillionRial from 'components/millionRial'

import { contractItems } from 'utils/statics/companyStatics'
import type { CheckedList, CollapsibleTableProps } from './interface'
import styles from './contract.module.scss'

dayjs.extend(jalaliday)

export const CollapsibleTable = ({
  row,
  setCheckedList,
  checkedList,
}: CollapsibleTableProps) => {
  const [open, setOpen] = useState(false)

  const json = JSON.parse(row.json as string)

  const convertDataHandler = (data: string | number | boolean) => {
    if (typeof data === 'boolean') {
      if (data === true) return 'دارد'
      return 'ندارد'
    }
    return String(data)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckedList((prev: CheckedList) => [
        ...prev,
        { price: row.price, id: row.id },
      ])
    } else {
      setCheckedList((prev: CheckedList) =>
        prev.filter((item) => item.id !== row.id)
      )
    }
  }

  const findItem = checkedList.find((item) => item.id === row.id)

  return (
    <>
      <TableRow
        className={cn(
          styles['contract__row'],
          open ? styles['contract__row--open'] : ''
        )}
      >
        <TableCell
          className={styles['contract--checkboxCell']}
          align='right'
          component='th'
          scope='row'
        >
          <Checkbox checked={!!findItem} onChange={handleChange} />
        </TableCell>

        <TableCell
          className={styles['contract--titleCell']}
          align='right'
          component='th'
          scope='row'
        >
          {row.title ? row.title : '_'}
        </TableCell>
        <TableCell
          className={styles['contract--organizationCell']}
          align='right'
        >
          {row.organizations ? row.organizations : '_'}
        </TableCell>
        <TableCell
          className={styles['contract--dateCell']}
          data-selector='date-cell'
          align='right'
        >
          {row.startDate
            ? dayjs(row.startDate)
                .calendar('jalali')
                .locale('fa')
                .format('YYYY/MM/DD')
            : '_'}
        </TableCell>
        <TableCell
          className={styles['contract--priceCell']}
          data-selector='price-cell'
          align='right'
        >
          <MillionRial price={row.price as number} />
        </TableCell>
        <TableCell className={styles['contract--arrowCell']} align='right'>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
            className={cn(
              styles['contract__arrow'],
              open ? styles['contract__arrow--open'] : ''
            )}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow className={styles['contract__row--open']}>
        <TableCell style={{ paddingTop: '0', paddingBottom: '0' }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            {Object.keys(json).map((key) => (
              <Row key={key}>
                <Col className={styles['contract__row--key']} span={9}>
                  <span>{contractItems[key]}</span>
                </Col>
                <Col className={styles['contract__row--value']} span={15}>
                  <span>
                    {json[key] === null ? '_' : convertDataHandler(json[key])}
                  </span>
                </Col>
              </Row>
            ))}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
