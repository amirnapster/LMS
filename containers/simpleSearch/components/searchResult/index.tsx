import { useIntl } from 'react-intl'
import { useSelector } from 'react-redux'
import { useGetSimpleSearchQuery } from 'libs/redux/services/simpleSearch'
import { CircularProgress } from '@mui/material'

import { searchCategoryItems } from 'utils/statics/searchStatics'
import type { RootState } from 'libs/redux/store'
import styles from './searchResult.module.scss'

const SearchResult = () => {
  const intl = useIntl()
  const { textSearch } = useSelector((state: RootState) => state.navbar)
  const { data: searchData, isLoading } = useGetSimpleSearchQuery(textSearch)

  return (
    <div>
      {
        isLoading ? (
          <div className={styles['progress']}>
            {searchCategoryItems.map((id) => (
              <div key={id} className={styles['progress__item']}>
                <CircularProgress />
                <h2>{intl.formatMessage({ id })}</h2>
              </div>
            ))}
          </div>
        ) : null
        // <SearchResultItems data={searchData as simpleSearch_Response} />
      }
    </div>
  )
}

export default SearchResult
