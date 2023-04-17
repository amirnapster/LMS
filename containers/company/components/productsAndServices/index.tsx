import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import SectionTitle from 'components/sectionTitle'
import OfficialSites from './components/officialSites'
import ProductIRCode from './components/productIRCode'

import styles from './productsAndServices.module.scss'

const ProductsAndServices = () => (
  <div className={styles['ProductsAndServices']} id='products'>
    <SectionTitle title='محصولات و خدمات' />
    <Row>
      <Col xxs={24}>
        <ProductIRCode />
        <OfficialSites />
      </Col>
    </Row>
  </div>
)

export default ProductsAndServices
