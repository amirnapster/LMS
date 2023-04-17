import { ArrowBackOutlined } from '@mui/icons-material'
import Container from 'components/container'
import Button from 'components/ui/Button'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'

import { forAllItems } from 'utils/statics/OurCustomersStatics'
import styles from './forAll.module.scss'

const RasmioForAll = () => (
  <Container className={styles['forAll']}>
    <Row justify='center'>
      <Col className={styles['forAll__header']} xxs={24} md={15} lg={12}>
        <span data-selector='title'>رسمیو برای همه</span>
        <span data-selector='content'>
          رسمیو با کنار هم قرار دادن اطلاعات رسمی شرکت‌ها، اشخاص و… توانسته است
          برای طیف وسیعی از نهادها، ارگان‌ها، کسب‌وکارها و فعالان اقتصادی
          ارزش‌آفرینی کرده و رضایت آنها را فراهم آورد.
        </span>
      </Col>
    </Row>
    <Row
      className={styles['forAll__row']}
      gutter={{ xxs: 8, xs: 8, sm: 8, md: 24 }}
      justify='center'
      wrap
    >
      {forAllItems.map(({ link, title, src }) => (
        <Col xxs={22} xs={18} md={8} lg={6} key={title}>
          <Button href={link} data-selector='card'>
            <img src={src} alt={title} />
            <p>{title}</p>
            <ArrowBackOutlined />
          </Button>
        </Col>
      ))}
    </Row>
  </Container>
)

export default RasmioForAll
