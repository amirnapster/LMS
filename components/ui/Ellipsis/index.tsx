import { type ReactNode, useEffect, useState, useRef } from 'react'
import  ExpandMore  from '@mui/icons-material/ExpandMore'
import useDidMountEffect from 'utils/hooks/useDidMount'
import cn from 'classnames'
import Button from '../Button'

import styles from './ellipsis.module.scss'

// type TogglableType = { togglable: boolean; symbol?: ReactNode }

interface EllipsisProps {
  children: ReactNode
  maxLines?: number | string
  lineHeight?: number
  vertical?: boolean
  showMore?: boolean | ReactNode
  className?: string
}

const Ellipsis = ({
  children,
  maxLines,
  lineHeight,
  className,
  vertical,
  showMore,
}: EllipsisProps) => {
  const [show, setShow] = useState<boolean>(false)
  const isShowMoreBoolean = typeof showMore === 'boolean'
  const ref = useRef(null)
  // const isTogglable = (showMore as TogglableType)?.togglable

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (maxLines)
      (el as HTMLElement).style.setProperty('--maxLines', String(maxLines))
    if (lineHeight)
      (el as HTMLElement).style.setProperty('--lineHeight', String(lineHeight))
  }, [maxLines, lineHeight])

  useDidMountEffect(() => {
    const el = ref.current
    if (!el) return
    if (showMore)
      (el as HTMLElement).style.setProperty(
        '--maxLines',
        show ? 'auto' : String(maxLines)
      )
  }, [show])

  const renderDefaultText = () => {
    // if (!isTogglable) return ''
    if (show) return 'نمایش کمتر'
    return 'نمایش بیشتر'
  }

  const toggleVisibility = () => setShow((prev) => !prev)

  return (
    <div ref={ref} className={showMore ? styles['ellipsis--more'] : ''}>
      <div
        className={cn(
          className,
          styles['ellipsis'],
          vertical ? styles['ellipsis--vertical'] : ''
        )}
      >
        {children}
      </div>
      {showMore && (
        <Button onClick={toggleVisibility} data-selector='show-more'>
          {isShowMoreBoolean ? renderDefaultText() : showMore}
          <ExpandMore style={{ rotate: show ? '180deg' : 'unset' }} />
        </Button>
      )}
    </div>
  )
}

Ellipsis.defaultProps = {
  maxLines: undefined,
  lineHeight: undefined,
  className: '',
  vertical: true,
  showMore: true,
}

export default Ellipsis
