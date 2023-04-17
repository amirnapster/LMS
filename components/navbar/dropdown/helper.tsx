import { WEB } from 'utils/statics/routes/web'
import { useIntl } from 'react-intl'
import { KeyboardArrowLeft } from '@mui/icons-material'
import Col from 'components/ui/Col'
import Row from 'components/ui/Row'
import Button from 'components/ui/Button'

import type { NavbarDropdownContentProps } from 'utils/statics/navbarStatics/interface'
import type { NavbarDropdownSideProps } from '../interface'
import styles from './navbarDropdown.module.scss'

export const NavbarDropdownContent = ({
  content,
  isSimple,
  id,
}: NavbarDropdownContentProps) => {
  const intl = useIntl()

  const showTitle = id !== 'advanced' && id !== 'about'

  return (
    <Row direction='column' className={styles['navDropdownContent']}>
      {showTitle && (
        <span data-selector='title'>
          {intl.formatMessage({
            id: id === 'services' ? 'navbar.services' : id,
          })}
        </span>
      )}
      <Row
        className={styles['navDropdownContent--wrapper']}
        gap={isSimple ? undefined : 0}
        wrap
      >
        {content?.map(({ route, title, description, icon }) => (
          <Col key={title} span={isSimple ? 24 : 7} data-selector='item'>
            <Button
              href={route}
              className={isSimple ? 'items-center' : 'items-flex-start'}
              ripple
            >
              {icon}
              {!isSimple ? (
                <Row direction='column' align='top'>
                  <span data-selector='title'>{title}</span>
                  <span data-selector='description'>{description}</span>
                </Row>
              ) : (
                <span className='m-0'>{title}</span>
              )}
            </Button>
          </Col>
        ))}
      </Row>
    </Row>
  )
}

export const NavbarDropdownSide = ({
  image,
  title,
  subtitle,
  items,
}: NavbarDropdownSideProps) => {
  const dynamicClassName = (append?: string) => {
    const appendClassName = append ?? ''
    if (items) return styles[`navDropdownLoginSide${appendClassName}`]
    return styles[`navDropdownSide${appendClassName}`]
  }

  return (
    <div className={dynamicClassName()}>
      <div className={dynamicClassName('__header')}>
        {image}
        <span>{title}</span>
      </div>
      <div className={dynamicClassName('__content')}>
        {items ? (
          items.map(({ route, title: itemTitle, icon }) => (
            <Col
              key={itemTitle}
              span={24}
              className={styles['navDropdownLoginSide']}
            >
              <Button href={route} ripple>
                {icon}
                <span className='m-0'>{itemTitle}</span>
              </Button>
            </Col>
          ))
        ) : (
          <>
            <span>{subtitle}</span>
            <Button btnType='secondary' href={WEB.ABOUT_COMPANY_MANAGEMENT}>
              <span>کلیک کنید</span>
              <KeyboardArrowLeft className='svg-icon' />
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
