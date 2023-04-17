import { useState } from 'react'
import { SampleCodeImage } from 'assets/icons'
import Container from 'components/container'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import Copy from 'components/copy'

import { codeSampleItems } from 'utils/statics'
import type { CodeSampleLanguages } from 'utils/statics/interface'
import styles from './codeSample.module.scss'

const CodeSample = () => {
  const [activeLang, setActiveLang] = useState<CodeSampleLanguages>('php')

  const selectLang = (lang: CodeSampleLanguages) => {
    if (lang !== activeLang) setActiveLang(lang)
  }

  return (
    <Container className={styles['codeSample__container']}>
      <Row className={styles['codeSample']} justify='space-between' wrap>
        <Col xxs={24} lg={6}>
          <div className={styles['codeSample--title']}>نمونه کدها</div>
          <div>
            {Object.keys(codeSampleItems).map((key) => {
              const lang = key as CodeSampleLanguages
              const isActive = activeLang === key
              const { code } = codeSampleItems[lang]

              return (
                <Row
                  key={key}
                  gutter={16}
                  align='middle'
                  className={styles['codeSample__items']}
                >
                  <Col
                    data-selector={isActive ? 'lang-active' : 'lang'}
                    span={isActive ? 16 : 12}
                  >
                    <Button
                      btnType='secondary'
                      color='simple-white'
                      size='large'
                      onClick={() => selectLang(lang)}
                      ripple
                    >
                      {key}
                    </Button>
                  </Col>
                  <Col
                    data-selector='copy'
                    className={!isActive ? 'd-none' : ''}
                    span={4}
                  >
                    <Copy text={code} />
                  </Col>
                </Row>
              )
            })}
          </div>
        </Col>
        <Col data-selector='image' xxs={24} lg={15} xl={14}>
          <img src={SampleCodeImage} alt='sample-code' />
        </Col>
      </Row>
    </Container>
  )
}

export default CodeSample
