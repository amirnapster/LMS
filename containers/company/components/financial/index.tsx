import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import SectionTitle from 'components/sectionTitle'

import CapitalChanges from './components/capitalChanges'
import Portfolio from './components/portfolio'
import Contract from '../contract'
import Currency from './components/currency'

const Financial = () => (
  <div id='financial'>
    <SectionTitle title='مالی' />
    <Row>
      <Col xxs={24}>
        <CapitalChanges />
        <Portfolio />
        <Contract />
        <Currency />
      </Col>
    </Row>
  </div>
)

export default Financial
