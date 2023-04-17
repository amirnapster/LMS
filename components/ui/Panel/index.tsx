import { type MouseEvent, useContext } from 'react'
import { ExpandMore } from '@mui/icons-material'
import cn from 'classnames'
import CollapseContext from '../Collapse/CollapseContext'
import Row from '../Row'
import Button from '../Button'

import type { PanelProps } from './interface'
import styles from './panel.module.scss'

const Panel = ({
  header,
  icon,
  className,
  children,
  onToggle,
  ...restProps
}: PanelProps) => {
  const { accordion } = useContext(CollapseContext)

  const togglePanel = (event?: MouseEvent<HTMLButtonElement>) => {
    onToggle?.()
    const panels = document.querySelectorAll(`.${styles['panel']}`)

    panels.forEach((panel) => {
      if (panel.contains(event?.target as Node)) {
        const panelContent = panel.querySelector(
          "[data-selector='panel-content']"
        )
        if (panel.hasAttribute('data-selector')) {
          panel.removeAttribute('data-selector')
          setTimeout(
            () =>
              panelContent?.classList.remove(styles['panel__content--active']),
            250
          )
        } else {
          panelContent?.classList.add(styles['panel__content--active'])
          setTimeout(
            () => panel.setAttribute('data-selector', 'panel-active'),
            100
          )
        }
      } else if (accordion && panel.hasAttribute('data-selector')) {
        const panelContent = panel.querySelector(
          "[data-selector='panel-content']"
        )
        panel.removeAttribute('data-selector')
        setTimeout(
          () =>
            panelContent?.classList.remove(styles['panel__content--active']),
          250
        )
      }
    })
  }

  return (
    <div className={cn(styles['panel'], className)} {...restProps}>
      <Button onClick={togglePanel}>
        <Row align='middle' justify='space-between'>
          {header}
          <div className={styles['panel--icon']}>{icon || <ExpandMore />}</div>
        </Row>
      </Button>
      <div className={styles['panel__content']} data-selector='panel-content'>
        {children}
      </div>
    </div>
  )
}

export default Panel
