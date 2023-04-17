import { useState } from 'react'
import CopyTooltip from 'components/copy/helper'
import Button from 'components/ui/Button'
import cn from 'classnames'

import type { ActionBtnProps } from './interface'
import styles from './actionBtn.module.scss'

const ActionBtn = ({ onClick, icon, title, ...restProps }: ActionBtnProps) => {
  const [clicked, setClicked] = useState<boolean>(false)

  const handleClick = () => {
    if (!clicked) {
      setClicked(true)
      onClick?.()
      setTimeout(() => setClicked(false), 1600)
    }
  }

  return (
    <CopyTooltip title={title} placement='top'>
      <Button
        data-selector='actionBtn'
        className={cn(
          styles['actionBtn'],
          clicked ? styles['actionBtn--active'] : ''
        )}
        onClick={handleClick}
        {...restProps}
      >
        {icon}
      </Button>
    </CopyTooltip>
  )
}

export default ActionBtn
