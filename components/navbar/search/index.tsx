import { type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
import { ArrowForwardOutlined, SearchOutlined } from '@mui/icons-material'
import { setSearchText, toggleNavbarSearch } from 'libs/redux/slices/navbar'
import { NavItemMenu } from 'components/navbar/helper'
import useDebounce from 'utils/hooks/useDebounce'
import Row from 'components/ui/Row'
import Input from 'components/ui/Input'
import Button from 'components/ui/Button'
import Dropdown from 'components/ui/Dropdown'
import cn from 'classnames'

import { advancedItem } from 'utils/statics/navbarStatics'
import type { RootState } from 'libs/redux/store'
import NavbarDropdown from '../dropdown'
import type { NavbarSearchProps } from '../interface'
import styles from './navbarSearch.module.scss'

const NavbarSearch = ({ cancelSearch }: NavbarSearchProps) => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const { isSearching, textSearch } = useSelector(
    (state: RootState) => state.navbar
  )
  const { accessToken } = useSelector((state: RootState) => state.auth)

  const debouncedSearchValue = useDebounce(
    (value) => dispatch(setSearchText(value)),
    1000
  )

  const dynamicClassName = (append: string) => {
    if (isSearching) return styles[`search--input${append}`]
    return ''
  }

  const handleAutoComplete = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    debouncedSearchValue(value)
  }

  const startSearching = () => {
    if (textSearch) {
      const inputs = document.querySelectorAll('#navbar-search')
      inputs?.forEach((input) => {
        // eslint-disable-next-line
        ;(input as HTMLInputElement).value = textSearch
      })
    }
    dispatch(toggleNavbarSearch(true))
  }

  return (
    <Row align='middle' className={styles['search']}>
      {isSearching && (
        <Button onClick={cancelSearch} className={styles['search--cancel']}>
          <ArrowForwardOutlined
            className={cn(styles['search--arrow'], dynamicClassName('--arrow'))}
          />
        </Button>
      )}
      <Input
        id='navbar-search'
        className={cn(styles['search--input'], dynamicClassName('--active'))}
        onChange={handleAutoComplete}
        onFocus={startSearching}
        placeholder={
          isSearching
            ? 'جستجوبراساس شناسه ملی و کدملی، نام شرکت و شخص و...'
            : intl.formatMessage({
                id: 'navbar.search.placeholder',
              })
        }
        suffix={
          <div
            className={cn(
              styles['search--icon'],
              isSearching ? styles['search--icon--active'] : ''
            )}
          >
            <span data-selector='desktop-icon'>
              {isSearching ? <Button ripple>جستجو</Button> : <SearchOutlined />}
            </span>
            <span data-selector='mobile-icon'>
              <SearchOutlined />
            </span>
          </div>
        }
      />
      {accessToken && (
        <Dropdown
          className={styles['mobileSearch--advanced']}
          menu={<NavItemMenu item={advancedItem} id='advanced' />}
          id='nav-advanced'
        >
          <NavbarDropdown item={advancedItem} id='advanced' />
        </Dropdown>
      )}
    </Row>
  )
}

export default NavbarSearch
