import { omit } from 'utils/helpers/global'
import { useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
import { CreateCompanySvg } from 'assets/icons'
import { navItemsData } from 'utils/statics/navbarStatics'
import Collapse from 'components/ui/Collapse'
import Panel from 'components/ui/Panel'
import Button from 'components/ui/Button'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
import cn from 'classnames'

import type { RootState } from 'libs/redux/store'
import type { NavItemsType } from 'utils/statics/navbarStatics/interface'
import { NavbarDropdownSide } from './dropdown/helper'
import type { MobileNavItemProps } from './interface'
import styles from './navbar.module.scss'

export const MobileNavItem = () => (
  <div className={styles['navbar__items--mobile']}>
    <MobileNavbarTab />
  </div>
)

export const MobileNavbarTabItem = ({
  content,
  navKey,
}: MobileNavItemProps) => {
  const intl = useIntl()

  return content?.length ? (
    <Collapse className={styles['navbar__accordion--item']}>
      <Panel
        className={cn(styles['navbar__panel'])}
        header={intl.formatMessage({ id: navKey })}
      >
        {navKey === 'services' && (
          <div className={styles['navbar__accordion--item--side']}>
            <NavbarDropdownSide
              image={<CreateCompanySvg />}
              title={intl.formatMessage({ id: 'navbar.edit.company' })}
              subtitle={intl.formatMessage({ id: 'navbar.manage.profile' })}
            />
          </div>
        )}
        <Row wrap>
          {content.map(({ title, route, icon, description }) => (
            <Col
              span={24}
              key={title}
              className={styles['navbar__accordion--item--link']}
            >
              <Button btnType='ghost' href={route}>
                <Row align={navKey === 'about' ? 'middle' : 'top'} gap={1}>
                  <div className='d-flex'>{icon}</div>
                  <Col
                    flex='none'
                    className={`d-flex flex-column text-start ${
                      navKey === 'about' ? '' : 'gap-0'
                    }`}
                  >
                    <span
                      className={styles['navbar__accordion__tree--item--title']}
                    >
                      {intl.formatMessage({ id: title })}
                    </span>
                    <span
                      className={
                        styles['navbar__accordion__tree--item--subtitle']
                      }
                    >
                      {description}
                    </span>
                  </Col>
                </Row>
              </Button>
            </Col>
          ))}
        </Row>
      </Panel>
    </Collapse>
  ) : (
    <Button
      className={styles['navbar__accordion--item--btn']}
      href={`/${navKey}`}
    >
      <span>{intl.formatMessage({ id: navKey })}</span>
    </Button>
  )
}

export const MobileNavbarTab = () => {
  const { accessToken } = useSelector((state: RootState) => state.auth)

  const checkToken = () => {
    if (!accessToken) return navItemsData
    return omit(navItemsData, ['services'])
  }

  return (
    <div className={styles['navbar__tab--mobile']}>
      {Object.keys(checkToken()).map((key) => {
        const item = navItemsData[key as keyof NavItemsType]
        const { content } = item

        return <MobileNavbarTabItem key={key} content={content} navKey={key} />
      })}
    </div>
  )
}

MobileNavbarTabItem.defaultProps = {
  content: [],
}
