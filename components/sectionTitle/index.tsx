import { HintIcon } from 'assets/icons'
import Row from 'components/ui/Row'
import Tooltip from 'components/ui/Tooltip/helper'

import styles from './sectionTitle.module.scss'

interface SectionTitleProps {
  title: string
  tooltipTitle?: string
}

const SectionTitle = ({ title, tooltipTitle }: SectionTitleProps) => (
  <Row className={styles['title']} align='middle' gap={0}>
    <span>{title}</span>
    {tooltipTitle && (
      <Tooltip placement='top' title={tooltipTitle} arrow>
        <div>
          <HintIcon />
        </div>
      </Tooltip>
    )}
  </Row>
)

SectionTitle.defaultProps = { tooltipTitle: '' }

export default SectionTitle
