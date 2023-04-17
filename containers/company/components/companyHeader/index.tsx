import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import useDeviceDetect from 'utils/hooks/useDeviceDetect'
import Col from 'components/ui/Col'
import type { RootState } from 'libs/redux/store'
import AuthenticatedHeader from './components/authenticatedHeader'
import UnAuthenticatedHeader from './components/unAuthenticatedHeader'
import HeaderTabs from './components/headerTabs'

import styles from './companyHeader.module.scss'

const CompanyHeader = () => {
  const { isAuth } = useSelector((state: RootState) => state.company)
  const { isMobile } = useDeviceDetect()
  const [showTabs, setShowTabs] = useState(false)

  const scrollFunction = (scroll: number) => {
    if (scroll > 350 && !isMobile) setShowTabs(true)
    else setShowTabs(false)
  }

  const memorizedContent = useMemo(() => {
    if (isAuth) return <AuthenticatedHeader />
    return <UnAuthenticatedHeader />
  }, [isAuth])

  useEffect(() => {
    window.addEventListener('scroll', () => scrollFunction(window.scrollY))
    return () => {
      window.removeEventListener('scroll', () => scrollFunction(window.scrollY))
    }
  }, [])

  return (
    <>
      <Col span={24}>
        <div>{memorizedContent}</div>
      </Col>
      <Col
        className={showTabs ? styles['CompanyHeaderSticky'] : styles['']}
        span={24}
      >
        <div>{showTabs ? <HeaderTabs sticky /> : null}</div>
      </Col>
    </>
  )
}

export default CompanyHeader
