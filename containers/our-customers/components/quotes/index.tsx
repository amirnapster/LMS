import Row from 'components/ui/Row'
import Quotes from 'containers/pricing/components/quotes'

import styles from './quotes.module.scss'

const OurQuotes = () => (
  <Row className={styles['ourQuotes']}>
    <Quotes />
  </Row>
)

export default OurQuotes
