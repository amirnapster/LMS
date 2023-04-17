import { KeyboardArrowUp } from '@mui/icons-material'
import { scrollHandler } from 'utils/helpers/global'
import Button from 'components/ui/Button'

import styles from './returntotop.module.scss'

const ReturnToTop = () => (
  <Button
    id='return-to-top'
    className={styles['returnToTop']}
    onClick={() => scrollHandler(0, 0)}
    ripple
  >
    <KeyboardArrowUp />
  </Button>
)

export default ReturnToTop
