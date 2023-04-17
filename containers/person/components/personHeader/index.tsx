import { useEffect, useState } from 'react'
import useDeviceDetect from 'utils/hooks/useDeviceDetect'
import Col from 'components/ui/Col'
import Header from './components/header'
import HeaderTabs from './components/stickyHeader'

import styles from './header.module.scss'

const PersonHeader = () => {
  const { isMobile } = useDeviceDetect()
  const [showTabs, setShowTabs] = useState(false)

  const scrollFunction = (scroll: number) => {
    if (scroll > 300 && !isMobile) setShowTabs(true)
    else setShowTabs(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => scrollFunction(window.scrollY))
    return () => {
      window.removeEventListener('scroll', () => scrollFunction(window.scrollY))
    }
  }, [])

  return (
    <>
      <Col span={24}>
        <Header />
      </Col>
      <Col className={showTabs ? styles['headerSticky'] : styles['']} span={24}>
        <div>{showTabs ? <HeaderTabs sticky /> : null}</div>
      </Col>
    </>
  )
}

export default PersonHeader
