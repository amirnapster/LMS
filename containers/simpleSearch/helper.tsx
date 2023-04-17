import { useSelector } from 'react-redux'
// import { GraphSearchIcon, LockSvg } from 'assets/icons'
import { WEB } from 'utils/statics/routes/web'
import cn from 'classnames'
import Col from 'components/ui/Col'
import Tooltip from 'components/ui/Tooltip'
import Button from 'components/ui/Button'
import LimitTooltip from 'components/limitTooltip'

import type { RootState } from 'libs/redux/store'
import SearchResult from './components/searchResult'
import TopResult from './components/topResult'
import type { GraphButtonProps } from './interface'
import styles from './simpleSearch.module.scss'

const SearchResultContent = () => {
  const { textSearch } = useSelector((state: RootState) => state.navbar)

  return (
    <Col span={24} className={styles['simpleSearch__body']}>
      {textSearch ? <SearchResult /> : <TopResult />}
    </Col>
  )
}

export default SearchResultContent
