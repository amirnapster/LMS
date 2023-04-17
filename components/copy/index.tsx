import { useState } from 'react'
import { CopyIcon, CopiedIcon } from 'assets/icons'
import { copyToClipBoard } from 'utils/helpers/global'
import Button from 'components/ui/Button'
import cn from 'classnames'
import CopyTooltip from './helper'

import type { CopyProps } from './interface'
import styles from './copy.module.scss'

const Copy = ({ text, mode = 'icon' }: CopyProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const copyCode = () => {
    if (!isCopied) {
      setIsCopied(true)
      copyToClipBoard(text)
      setTimeout(() => setIsCopied(false), 1600)
    }
  }

  if (
    text === null ||
    text === 'وارد شوید' ||
    text === 'کلیک کنید' ||
    text?.length < 2
  )
    return null
  return mode === 'icon' ? (
    <CopyTooltip
      title={isCopied ? 'کپی شد' : 'کپی'}
      leaveDelay={isCopied ? 1200 : 0}
      placement='top'
    >
      <Button
        data-selector='copy'
        className={cn(styles['copy'], isCopied ? styles['copy--active'] : '')}
        onClick={copyCode}
      >
        {isCopied ? (
          <CopiedIcon viewBox='0 0 24 24' />
        ) : (
          <CopyIcon viewBox='0 0 24 25' />
        )}
      </Button>
    </CopyTooltip>
  ) : (
    <Button
      className={cn(
        styles['copy__btn'],
        isCopied ? styles['copy__btn--active'] : ''
      )}
      size='medium'
      btnType='primary'
      onClick={copyCode}
    >
      {isCopied ? 'کپی شد' : 'کپی کردن'}
      {isCopied ? <CopiedIcon /> : <CopyIcon />}
    </Button>
  )
}

export default Copy
