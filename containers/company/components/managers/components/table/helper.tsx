import { Collapse, IconButton, TableCell, TableRow } from '@mui/material'
import { KeyboardArrowDown, KeyboardArrowUp, Launch } from '@mui/icons-material'
import { entityRouteHandler, returnEntityRoute } from 'utils/helpers/global'
import Row from 'components/ui/Row'
import Tag from 'components/ui/Tag'
import Button from 'components/ui/Button'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import cn from 'classnames'

import type { PresetColorType } from 'utils/interfaces'
import type { CollapsibleTableProps } from '../../interface'
import styles from './table.module.scss'

dayjs.extend(jalaliday)

export const CollapsibleTable = ({
  row,
  open,
  openItemHandler,
}: CollapsibleTableProps) => {
  const isClicked = open.id === row.companyPersonId
  const currentPerson = {
    entity: 'person',
    entityId: row.personId,
    entityTitle: row.personTitle,
  }

  const currentCompany = {
    entity: 'company',
    entityId: row.repId,
    entityTitle: row.representingTitle,
  }
  const roles = (firstRole: string, secondRole: string, title: string) => {
    if (firstRole) {
      if (secondRole) return [firstRole, secondRole]
      return [firstRole]
    }
    return [title]
  }

  const returnJalaliDate = (date?: string) =>
    dayjs(date).calendar('jalali').locale('fa').format('YYYY/MM/DD')

  const positionColorHandler = (
    position: string,
    date: string,
    hue?: '100' | '300'
  ): PresetColorType => {
    if (Date.parse(date) < Date.now()) {
      return 'gray-100'
    }

    if (position.includes('نایب') || position.includes('نائب'))
      return `jade-${hue || 100}`
    if (position.includes('رئیس')) return `bright-turquoise-${hue || 100}`
    if (position.includes('عامل')) return 'blue-purple-red-gradient'
    if (position.includes('عضو')) return `secondary-${hue || 100}`
    if (position.includes('مدیر')) return `secondary-${hue || 100}`
    if (position.includes('اصلی')) return `secondary-${hue || 100}`
    if (position.includes('علی‌البدل')) return `jade-${hue || 100}`

    return `amethyst-${hue || 100}`
  }

  const rowData = row?.otherPositions?.length ? row.otherPositions : []

  const getColors = (item: string, endDate: string) => ({
    bgColor: positionColorHandler(item, endDate),

    borderColor:
      positionColorHandler(item, endDate) !== 'blue-purple-red-gradient'
        ? positionColorHandler(item, endDate, '300')
        : undefined,
    textColor: (positionColorHandler(item, endDate) ===
    'blue-purple-red-gradient'
      ? 'simple-white'
      : undefined) as PresetColorType,
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
                  currentPerson.entity,
                  currentPerson.entityId as number,
                  currentPerson.entityTitle as string
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
                  currentPerson.entity,
                  currentPerson.entityId as number,
                  currentPerson.entityTitle as string
                )}
              >
                <span>{row.personTitle || '_'}</span>
              </Button>
              {row.representingTitle && (
                <Row align='middle'>
                  <span data-selector='delegation'>نماینده از</span>
                  <Button
                    target='_blank'
                    href={returnEntityRoute(
                      'company',
                      currentCompany.entityId as number,
                      currentCompany.entityTitle as string
                    )}
                    data-selector='company-title'
                  >
                    <span>{row.representingTitle}</span>
                  </Button>
                </Row>
              )}
            </Row>
          </Row>
        </TableCell>

        <TableCell className={styles['table--cell']} align='right'>
          {roles(
            row.firstRole as string,
            row.secondRole as string,
            row.title as string
          ).map((role: string) =>
            role ? (
              <Tag
                key={role}
                className={cn(
                  styles['table__tag'],
                  positionColorHandler(
                    role as string,
                    row.endDate as string
                  ) === 'blue-purple-red-gradient' &&
                    styles['table__tag--gradient']
                )}
                {...getColors(role, row.endDate as string)}
              >
                {role}
              </Tag>
            ) : (
              '_'
            )
          )}
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
          <IconButton data-selector='news'>
            <a
              target='_blank'
              href={`/News/Details/${row.byNewsId}/`}
              rel='noreferrer'
            >
              <Launch />
            </a>
          </IconButton>
        </TableCell>

        {row.otherPositions?.length ? (
          <TableCell className={styles['table--cell']} align='center'>
            <IconButton
              aria-label='expand row'
              size='small'
              onClick={() => openItemHandler(row.companyPersonId as number)}
              className={cn(
                styles['table__arrow'],
                isClicked ? styles['table__arrow--open'] : ''
              )}
            >
              {isClicked ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
        ) : null}
      </TableRow>
      <TableRow className={styles['table__row--open']}>
        <TableCell className={styles['table__cell']} colSpan={6}>
          <Collapse in={isClicked && open.status} timeout='auto' unmountOnExit>
            <table className={styles['subManagers']}>
              {rowData?.map((item) => (
                <tr>
                  <td className={styles['subManagers--title']} />
                  <td className={styles['subManagers--position']}>
                    <span>{item.positionTitle}</span>
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
                    <Button
                      target='_blank'
                      href={`/News/Details/${item.byNewsId}/`}
                      data-selector='news'
                    >
                      <Launch />
                    </Button>
                  </td>
                  <td className={styles['subManagers--oldPosition']} />
                </tr>
              ))}
            </table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
