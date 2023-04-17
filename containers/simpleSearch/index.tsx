import { useIntl } from 'react-intl'
import { svgCreator } from 'components/svgCreator'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import Button from 'components/ui/Button'
import cn from 'classnames'

import { advancedSearchTitle } from 'utils/statics/searchStatics'
import SearchResultContent from './helper'
import styles from './simpleSearch.module.scss'

const SimpleSearch = () => {
  const intl = useIntl()

  return (
    <Row className={styles['simpleSearch']} wrap>
      <Col xxs={24} xs={24} lg={20} data-selector='content'>
        <Col span={24} className={styles['simpleSearch__header']}>
          <Row align='middle' className={styles['simpleSearch__header--title']}>
            <h1>{intl.formatMessage({ id: 'simple.search.info' })}</h1>
            <Button
              btnType='secondary'
              size='small'
              target='_blank'
              href='https://rasm.io/blog/%d8%a8%d8%b1%d8%a7%db%8c-%d8%ac%d8%b3%d8%aa%d8%ac%d9%88-%d8%af%d8%b1-%d8%b1%d8%b3%d9%85%db%8c%d9%88-%da%86%d9%87-%da%a9%d9%86%db%8c%d9%85%d8%9f/'
            >
              {intl.formatMessage({ id: 'simple.search.guide' })}
            </Button>
          </Row>
          <Row direction='column' className={styles['simpleSearch__filter']}>
            <p>{intl.formatMessage({ id: 'home.search.advanced' })}: </p>
            <ul className='d-flex flex-wrap'>
              {advancedSearchTitle.map(({ id, title, path, link, active }) => (
                <li
                  key={id}
                  className={cn(
                    styles['simpleSearch__filter--item'],
                    !active
                      ? styles['simpleSearch__filter--item--disabled']
                      : ''
                  )}
                >
                  <Button href={link} ripple>
                    {svgCreator(active ? '#013b81' : '#5d58588f', path)}
                    <span>{intl.formatMessage({ id: title })}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </Row>
        </Col>
        <SearchResultContent />
      </Col>
      {/* Ads */}
      {/* <Col xs={24} lg={6}></Col> */}
    </Row>
  )
}

export default SimpleSearch
