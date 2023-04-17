import { CloseQuotationIcon, OpenQuotationIcon } from 'assets/icons'
import cn from 'classnames'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import type { QuoteProps } from './interface'
import styles from './quote.module.scss'

const Quote = ({
  user,
  quote,
  userRole,
  className,
  ...restProps
}: QuoteProps) => (
  <Row
    className={cn(styles['quote'], className)}
    data-selector='quote'
    direction='column'
    justify='center'
    gap={0}
    {...restProps}
  >
    <div data-selector='quote-blur' />
    <span data-selector='title'>{user}</span>
    <span data-selector='subtitle'>{userRole}</span>

    <Row className={styles['quote__main']} gap={1}>
      <Col data-selector='open-quotation'>
        <OpenQuotationIcon />
      </Col>
      <Col data-selector='quote-content' flex='auto'>
        {quote}
      </Col>
      <Col data-selector='close-quotation' className='align-self-flex-end'>
        <CloseQuotationIcon />
      </Col>
    </Row>
  </Row>
)

export default Quote
