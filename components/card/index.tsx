import { forwardRef } from 'react'
import { EditIcon, HintIcon } from 'assets/icons'
import { ArrowBackOutlined } from '@mui/icons-material/'
import useDeviceDetect from 'utils/hooks/useDeviceDetect'
import Tooltip from 'components/ui/Tooltip/helper'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import cn from 'classnames'

import type { CardProps } from './interface'
import styles from './card.module.scss'

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { isMobile } = useDeviceDetect()

  const {
    children,
    hasSource = true,
    hasMore = false,
    hasEdit = false,
    hasNews = false,
    info = '',
    title = '',
    subtitle = '',
    className = '',
    onShow,
    count = 3,
    baseCount = 3,
    ...restProps
  } = props

  return (
    <Row
      ref={ref}
      className={cn(styles['card'], className)}
      {...restProps}
      wrap
    >
      {(title || hasSource || info) && (
        <>
          <Col flex='1' className={styles['card__header--title']}>
            {title && <span>{title}</span>}
            {subtitle && <span data-selector='subtitle'>{subtitle}</span>}
            {info && (
              <Tooltip placement='top' title={info} arrow>
                <div>
                  <HintIcon />
                </div>
              </Tooltip>
            )}
          </Col>

          {hasSource && (
            <Col data-selector='col' flex='none'>
              <Button
                className={styles['card__header--source']}
                href='/sources'
                ripple
              >
                مرجع اطلاعات؟
              </Button>
            </Col>
          )}

          {hasEdit && (
            <Col data-selector='col' flex='none'>
              <Button className={styles['card__header--edit']} ripple>
                <span>ویرایش</span>
                <EditIcon />
              </Button>
            </Col>
          )}

          {hasNews && (
            <Col data-selector='col' flex='none'>
              <Button className={styles['card__header--news']}>
                <span>نمایش آگهی مرتبط</span>
                <ArrowBackOutlined />
              </Button>
            </Col>
          )}
        </>
      )}

      <Col
        className={styles['card__content']}
        data-selector='card-content'
        span={24}
      >
        {children}
      </Col>

      {!isMobile && hasMore && (
        <Button className={styles['card--more']} ripple onClick={onShow}>
          {count && baseCount && count > baseCount
            ? 'نمایش کمتر'
            : '   نمایش بیشتر'}
        </Button>
      )}
    </Row>
  )
})

export default Card
