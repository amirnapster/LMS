import { useIntl } from 'react-intl'
import { useSelector } from 'react-redux'
import { omit } from 'utils/helpers/global'
import { LampSvg } from 'assets/icons'
import { ExpandMoreRounded } from '@mui/icons-material'
import Row from 'components/ui/Row'
import Button from 'components/ui/Button'
import Dropdown from 'components/ui/Dropdown'
import cn from 'classnames'

import { navItemsData } from 'utils/statics/navbarStatics'
import type { NavItemsType } from 'utils/statics/navbarStatics/interface'
import type { RootState } from 'libs/redux/store'
import NavbarDropdown from './dropdown'
import type { LogoProps, NavKeyItem } from './interface'
import styles from './navbar.module.scss'
import { useInfoMutation } from 'libs/redux/services/karnama'
import { useEffect } from 'react'

export const NavItem = () => {
  const intl = useIntl()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const { isSearching } = useSelector((state: RootState) => state.navbar)


  return (
    <div className={styles['navbar__items']}>
      {!isSearching && <NavbarTab />}
      {/* {!accessToken && !isSearching && (
        <div className={styles['navbar__tab--item']}>
          <Button href='/what-is-rasmio' id='nav-whatisrasmio'>
            <Row
              align='middle'
              gap={0}
              className='color-navbar'
              data-selector='whatis'
            >
              <LampSvg viewBox='0 0 36 40' data-selector='lamp' />
              {intl.formatMessage({ id: 'whatisrasmio' })}
            </Row>
          </Button>
        </div>
      )} */}
    </div>
  )
}

export const NavItemMenu = ({ item, id }: NavKeyItem) => {
  const intl = useIntl()
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const { isSearching } = useSelector((state: RootState) => state.navbar)
  return null;
  return (
    <div
      className={cn(
        styles['navbar__tab--item'],
        item?.isSimple ? 'position-relative' : '',
        isSearching ? 'color-white m-0' : 'color-black'
      )}
    >
      <Button
        color='black'
        href={!item?.content && item?.route}
        id={`nav-${id}`}
      >
        {item?.content ? (
          <Row
            align='middle'
            gap={0}
            data-selector={id}
            className={isSearching ? 'color-white' : ''}
          >
            {intl.formatMessage({
              id: accessToken && id === 'solutions' ? 'more' : id,
            })}
            <ExpandMoreRounded fontSize='small' />
          </Row>
        ) : (
          <span>{intl.formatMessage({ id })}</span>
        )}
      </Button>
    </div>
  )
}

export const NavbarTab = () => {
  const { accessToken } = useSelector((state: RootState) => state.auth)

  const checkToken = () => {
    return []
    if (!accessToken) return omit(navItemsData, ['industry'])
    return { industry: navItemsData['industry'] }
  }

  return (
    <div className={styles['navbar__tab--desktop']}>
      {Object.keys(checkToken()).map((key) => {
        const item = navItemsData[key as keyof NavItemsType]
        const { content } = item

        return (
          <div key={key} className={styles['navbar--wrapper']}>
            {content ? (
              <Dropdown
                className={styles['navbar--item']}
                menu={<NavItemMenu item={item} id={key} />}
                id={`nav-${key}`}
                fullWidth={!item.isSimple}
              >
                <NavbarDropdown item={item} id={key} />
              </Dropdown>
            ) : (
              <NavItemMenu item={item} id={key} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export const Logo = ({ className, src }: LogoProps) => {
  const { accessToken } = useSelector((state: RootState) => state.auth)
 const [getInfo, { data }] = useInfoMutation()

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <Button className={styles['logo']} href='/'>
      <img src={src} alt='لوگو نماتک' className={className} />
    </Button>
  )
}

Logo.defaultProps = {
  className: '',
}
