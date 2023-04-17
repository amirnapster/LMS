import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Container from 'components/container'

import { whatToDoItems } from 'utils/statics/whatIsRasmioStatics'
import styles from './whatToDo.module.scss'

const WhatToDo = () => (
  <Container className={styles['whatToDo__container']}>
    <Row className={styles['whatToDo']} direction='column'>
      <div data-selector='title'>
        از رسمیو برای انجام چه <span>کارهایی</span> می‌توانید استفاده کنید؟
      </div>
      <hr />

      <Row gap={1} justify='center' wrap data-selector='itemsBox'>
        {Object.keys(whatToDoItems).map((item) => {
          const testData = whatToDoItems[item]
          return (
            <Col
              xs={24}
              md={item === 'left' ? 23 : 11}
              lg={7}
              data-selector={item}
            >
              {testData.map(({ title, description, icon }) => (
                <Col key={title} className={styles['whatToDo__card']}>
                  <div className={styles['whatToDo__card--icon']}>{icon}</div>
                  <span className={styles['whatToDo__card--title']}>
                    {title}
                  </span>
                  <span className={styles['whatToDo__card--description']}>
                    {description}
                  </span>
                </Col>
              ))}
            </Col>
          )
        })}
      </Row>
    </Row>
  </Container>
)

export default WhatToDo
