import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
import { CreateCompanySvg } from 'assets/icons'
import cn from 'classnames'

import { navItemsData } from 'utils/statics/navbarStatics'
import type { RootState } from 'libs/redux/store'
import type {
  NavbarDropdownContentProps,
  NavbarDropdownProps,
} from 'utils/statics/navbarStatics/interface'
import { NavbarDropdownContent, NavbarDropdownSide } from './helper'
import styles from './navbarDropdown.module.scss'

const NavbarDropdown = ({ item, id }: NavbarDropdownProps) => {
  const intl = useIntl()
  const dropdownRef = useRef(null)

  const { accessToken } = useSelector((state: RootState) => state.auth)

  const showSide = () => {
    if (id === 'solutions' && accessToken) {
      return (
        <NavbarDropdownSide
          title={intl.formatMessage({ id: 'about' })}
          items={navItemsData['about'].content}
        />
      )
    }
    if (id === 'services') {
      return (
        <NavbarDropdownSide
          image={<CreateCompanySvg />}
          title={intl.formatMessage({ id: 'navbar.edit.company' })}
          subtitle={intl.formatMessage({ id: 'navbar.manage.profile' })}
        />
      )
    }

    return null
  }

  return (
    <div
      ref={dropdownRef}
      className={cn(
        styles['navDropdown'],
        item?.isSimple ? styles['navDropdown--isSimple'] : ''
      )}
    >
      {showSide()}

      <NavbarDropdownContent
        {...(item as NavbarDropdownContentProps)}
        id={id}
      />
    </div>
  )
}

export default NavbarDropdown
