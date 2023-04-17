import {
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
} from '@mui/material'
import { KeyboardArrowDown, KeyboardArrowUp, Launch } from '@mui/icons-material'
import { entityRouteHandler, returnEntityRoute } from 'utils/helpers/global'
import Row from 'components/ui/Row'
import Tag from 'components/ui/Tag'
import Button from 'components/ui/Button'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import cn from 'classnames'

import type { PresetColorType } from 'utils/interfaces'
import type { CollapsibleTableProps } from './interface'
import styles from './parent.module.scss'

dayjs.extend(jalaliday)

export const CollapsibleTable = ({
  row,
  open,
  openItemHandler,
}: CollapsibleTableProps) => {
  const isClicked = open.id === row.personId

  const currentPerson = {
    entity: 'person',
    entityId: row.personId,
    entityTitle: row.personTitle,
  }

  const currentCompany = {
    entity: 'company',
    entityId: row.companyId,
    entityTitle: row.companyTitle,
  }

  const returnJalaliDate = (date?: string) =>
    dayjs(date).calendar('jalali').locale('fa').format('YYYY/MM/DD')

  const positionColorHandler = (
    isParent: boolean,
    date: string,
    hue?: '100' | '900'
  ): PresetColorType => {
    if (Date.parse(date) < Date.now()) {
      return `gray-${hue || 100}`
    }
    if (isParent) return `secondary-${hue || 100}`
    return `jade-${hue || 100}`
  }

  const rowData = row?.others?.length ? row.others : []

  const getColors = (isParent: boolean, endDate: string) => ({
    bgColor: positionColorHandler(isParent, endDate),

    borderColor: positionColorHandler(isParent, endDate, '900'),
    textColor: positionColorHandler(isParent, endDate, '900'),
  })

  return (
    <>
      <TableRow
        className={cn(
          styles['table__row'],
          isClicked ? styles['table__row--open'] : ''
        )}
      >
        <TableCell
          className={styles['table--cell']}
          align='right'
          component='th'
          scope='row'
        >
          <Row gap={0} align='middle'>
            <Button
              data-selector='person-image'
              onClick={() =>
                entityRouteHandler(
                  currentCompany.entity,
                  currentCompany.entityId as number,
                  currentCompany.entityTitle as string
                )
              }
            >
              <img
                src={row.pictureUrl as string}
                alt={row.personTitle as string}
              />
            </Button>

            <Row direction='column' gap={0} justify='space-between' align='top'>
              <Button
                data-selector='person-title'
                target='_blank'
                href={returnEntityRoute(
                  currentCompany.entity,
                  currentCompany.entityId as number,
                  currentCompany.entityTitle as string
                )}
              >
                <span>{row.companyTitle || '_'}</span>
              </Button>
            </Row>
          </Row>
        </TableCell>

        <TableCell className={styles['table--cell']} align='right'>
          <Tag
            className={cn(styles['table__tag'])}
            {...getColors(row.isParent as boolean, row.endDate as string)}
          >
            {row.isParent ? 'مادر' : 'زیرمجموعه'}
          </Tag>
        </TableCell>

        <TableCell className={styles['table--cell']} align='right'>
          <Button
            target='_blank'
            href={returnEntityRoute(
              'person',
              currentPerson.entityId as number,
              currentPerson.entityTitle as string
            )}
            data-selector='company-title'
          >
            <span>{row.personTitle}</span>
          </Button>
        </TableCell>

        <TableCell data-selector='date-cell' align='right'>
          <Row align='middle'>
            {row.endDate ? (
              <>
                <span data-selector='preposition'>از</span>
                <span data-selector='date'>
                  {returnJalaliDate(row.startDate)}
                </span>
                <span data-selector='preposition'>تا</span>
                <span data-selector='date'>
                  {returnJalaliDate(row.endDate)}
                </span>
              </>
            ) : (
              <>
                <span data-selector='preposition'>از</span>
                <span data-selector='date'>
                  {returnJalaliDate(row.startDate)}
                </span>
              </>
            )}
          </Row>
        </TableCell>

        <TableCell className={styles['table--cell']} align='center'>
          <Row>
            <Tooltip title='آگهی مرتبط'>
              <IconButton data-selector='news'>
                <a
                  target='_blank'
                  href={`/News/Details/${row.byNewsId}/`}
                  rel='noreferrer'
                >
                  <Launch />
                </a>
              </IconButton>
            </Tooltip>
            {row.others?.length ? (
              <IconButton
                aria-label='expand row'
                size='small'
                onClick={() => openItemHandler(row.companyId as number)}
                className={cn(
                  styles['table__arrow'],
                  isClicked ? styles['table__arrow--open'] : ''
                )}
              >
                {isClicked ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            ) : null}
          </Row>
        </TableCell>
      </TableRow>

      <TableRow className={styles['table__row--open']}>
        <TableCell className={styles['table__cell']} colSpan={6}>
          <Collapse in={isClicked && open.status} timeout='auto' unmountOnExit>
            <table className={styles['subManagers']}>
              {rowData?.map((item) => (
                <tr>
                  <td className={styles['subManagers--title']} />
                  <td className={styles['subManagers--type']} />
                  <td className={styles['subManagers--delegate']}>
                    <Button
                      target='_blank'
                      href={returnEntityRoute(
                        'person',
                        item.personId as number,
                        item.personTitle as string
                      )}
                      data-selector='company-title'
                    >
                      <span>{item.personTitle}</span>
                    </Button>
                  </td>
                  <td className={styles['subManagers--date']}>
                    {item.endDate ? (
                      <>
                        <span data-selector='preposition'>از</span>
                        <span data-selector='date'>
                          {' '}
                          {returnJalaliDate(item.startDate!)}
                        </span>
                        <span data-selector='preposition'>تا</span>
                        <span data-selector='date'>
                          {returnJalaliDate(item.endDate)}
                        </span>
                      </>
                    ) : (
                      <>
                        <span data-selector='preposition'>از</span>
                        <span data-selector='date'>
                          {' '}
                          {returnJalaliDate(item.startDate!)}
                        </span>
                      </>
                    )}
                  </td>
                  <td className={styles['subManagers--news']}>
                    <Tooltip title='آگهی مرتبط'>
                      <Button
                        target='_blank'
                        href={`/News/Details/${item.byNewsId}/`}
                        data-selector='news'
                      >
                        <Launch />
                      </Button>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
